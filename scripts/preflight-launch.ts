/**
 * Launch preflight — verifies a live origin is ready to be the real site.
 *
 * Run it against the Vercel origin before the DNS cutover, and against
 * sukapavalan.com immediately after. It checks the things that quietly break
 * a migration and are invisible until traffic is already lost:
 *
 *   1. Every redirect rule in next.config.ts resolves to a real page.
 *      The rules exist to catch inbound links from Google and YouTube
 *      descriptions; one pointing at a 404 loses that visitor silently.
 *   2. The canonical URL, og:url, sitemap and robots all name THIS origin.
 *      If they name a different host, search engines are told the real page
 *      lives somewhere else and these pages get dropped as duplicates.
 *   3. Key pages return 200.
 *
 * Usage:
 *   bun run scripts/preflight-launch.ts https://vsp-violin.vercel.app
 *   bun run scripts/preflight-launch.ts https://www.sukapavalan.com
 *
 * Exits non-zero if anything fails, so it can gate a deploy.
 */

import { readFileSync } from "node:fs";

const origin = (process.argv[2] ?? "").replace(/\/+$/, "");
if (!origin) {
  console.error("Usage: bun run scripts/preflight-launch.ts <origin>");
  process.exit(2);
}

type Result = { ok: boolean; label: string; detail?: string };
const results: Result[] = [];
const pass = (label: string, detail?: string) => results.push({ ok: true, label, detail });
const fail = (label: string, detail?: string) => results.push({ ok: false, label, detail });

async function head(url: string) {
  try {
    return await fetch(url, { redirect: "manual", headers: { "user-agent": "vsp-preflight" } });
  } catch (e) {
    return null;
  }
}

/** Follow redirect chains so a rule pointing at another redirect still counts. */
async function resolves(url: string, hops = 5): Promise<{ status: number; final: string }> {
  let current = url;
  for (let i = 0; i < hops; i++) {
    const res = await head(current);
    if (!res) return { status: 0, final: current };
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) return { status: res.status, final: current };
      current = loc.startsWith("http") ? loc : `${origin}${loc}`;
      continue;
    }
    return { status: res.status, final: current };
  }
  return { status: 599, final: current };
}

async function checkRedirects() {
  const config = readFileSync("next.config.ts", "utf8");
  const rules = [...config.matchAll(/\{\s*source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"/g)]
    .map((m) => ({ source: m[1], destination: m[2] }));

  if (rules.length === 0) return fail("redirect rules", "none parsed from next.config.ts");

  let broken = 0;
  for (const r of rules) {
    const { status, final } = await resolves(`${origin}${r.source}`);
    if (status !== 200) {
      broken++;
      fail(`redirect ${r.source}`, `ended at ${status} (${final})`);
    }
  }
  if (broken === 0) pass(`all ${rules.length} redirects resolve to a live page`);
}

async function checkCanonical() {
  const res = await fetch(origin, { headers: { "user-agent": "vsp-preflight" } });
  const html = await res.text();

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];

  const host = new URL(origin).host;
  for (const [name, value] of [["canonical", canonical], ["og:url", ogUrl]] as const) {
    if (!value) fail(name, "not present on the homepage");
    else if (new URL(value).host !== host)
      fail(name, `points at ${new URL(value).host}, not ${host} — set NEXT_PUBLIC_SITE_URL`);
    else pass(`${name} names this origin`);
  }
}

async function checkRobotsAndSitemap() {
  const host = new URL(origin).host;

  const robots = await fetch(`${origin}/robots.txt`).then((r) => r.text()).catch(() => "");
  const sitemapLine = robots.match(/Sitemap:\s*(\S+)/i)?.[1];
  if (!sitemapLine) fail("robots.txt", "no Sitemap line");
  else if (new URL(sitemapLine).host !== host)
    fail("robots.txt sitemap", `names ${new URL(sitemapLine).host}, not ${host}`);
  else pass("robots.txt sitemap names this origin");

  if (!/Disallow:\s*\/studio/.test(robots)) fail("robots.txt", "/studio is not disallowed");
  else pass("/studio is disallowed from crawling");

  const sitemap = await fetch(`${origin}/sitemap.xml`).then((r) => r.text()).catch(() => "");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) fail("sitemap.xml", "no <loc> entries");
  else {
    const wrong = locs.filter((l) => new URL(l).host !== host);
    if (wrong.length) fail("sitemap.xml", `${wrong.length}/${locs.length} entries name another host, e.g. ${wrong[0]}`);
    else pass(`sitemap.xml: all ${locs.length} entries name this origin`);
  }
}

async function checkKeyPages() {
  const pages = ["/", "/about", "/library", "/honours", "/stage", "/learn", "/testimonials", "/feed.xml"];
  const bad: string[] = [];
  for (const p of pages) {
    const { status } = await resolves(`${origin}${p}`);
    if (status !== 200) bad.push(`${p} -> ${status}`);
  }
  if (bad.length) fail("key pages", bad.join(", "));
  else pass(`all ${pages.length} key pages return 200`);
}

async function main() {
  console.log(`\nPreflight against ${origin}\n${"─".repeat(60)}`);
  await checkCanonical();
  await checkRobotsAndSitemap();
  await checkKeyPages();
  await checkRedirects();

  console.log();
  for (const r of results) {
    console.log(`  ${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.detail ? `\n          ${r.detail}` : ""}`);
  }
  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - failed} passed, ${failed} failed\n`);
  process.exit(failed ? 1 : 0);
}

main();
