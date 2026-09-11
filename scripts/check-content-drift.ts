/**
 * Report where the SiteContent database disagrees with site-content.json.
 *
 * `getDynamicContent()` merges the DB rows OVER the JSON baseline, DB winning
 * per key. That is deliberate — it is how the Studio lets the owner edit copy
 * without a deploy — but it has a sharp edge: **editing the JSON changes
 * nothing for any key that already exists in the database.**
 *
 * That has now caught us three times. The brand rename, the phone number's
 * missing +91, and the "over 30 years" figure were all corrected in the JSON,
 * shipped, and still rendered the old value on the live site because a DB row
 * silently overrode each one. None of it showed up in code review, a build, or
 * a typecheck, because nothing about it is wrong in the code.
 *
 * Run this whenever copy changes in the JSON, and before a launch:
 *
 *   bun run scripts/check-content-drift.ts          # local DB
 *   bun run scripts/check-content-drift.ts --rest   # production Supabase
 *
 * Exits non-zero when the two disagree, so it can gate a release. A drift is
 * not automatically a bug — the owner may have edited that text in the Studio
 * on purpose, and their edit should win. It only tells you the JSON is not
 * what visitors see, so you can decide which one is right.
 */

import { db } from "../src/lib/db";
import siteContent from "../src/lib/site-content.json";

const FORCE_REST = process.argv.includes("--rest");
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

/** Flatten the nested JSON into the dot-paths the SiteContent table keys on. */
function* flatten(value: unknown, path = ""): Generator<[string, unknown]> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const [k, v] of Object.entries(value)) {
      yield* flatten(v, path ? `${path}.${k}` : k);
    }
  } else {
    yield [path, value];
  }
}

async function rows(): Promise<{ key: string; value: string }[]> {
  if (!FORCE_REST) {
    try {
      return await db.siteContent.findMany({ select: { key: true, value: true } });
    } catch {
      console.warn("Prisma unavailable — falling back to the Supabase REST API.");
    }
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/SiteContent?select=key,value`, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`REST read failed: ${res.status}`);
  return res.json();
}

async function main() {
  const stored = new Map((await rows()).map((r) => [r.key, r.value]));
  const drift: { key: string; json: unknown; live: unknown }[] = [];

  for (const [key, jsonValue] of flatten(siteContent)) {
    if (!stored.has(key)) continue; // no row: the JSON baseline is what renders
    let live: unknown;
    try {
      live = JSON.parse(stored.get(key)!);
    } catch {
      live = stored.get(key);
    }
    if (JSON.stringify(live) !== JSON.stringify(jsonValue)) {
      drift.push({ key, json: jsonValue, live });
    }
  }

  const target = FORCE_REST ? "production Supabase" : "the local database";
  if (drift.length === 0) {
    console.log(`\nNo drift: ${target} matches site-content.json.\n`);
    return;
  }

  console.log(`\n${drift.length} key(s) where ${target} overrides site-content.json:\n`);
  for (const d of drift) {
    console.log(`  ${d.key}`);
    console.log(`    site-content.json : ${JSON.stringify(d.json)?.slice(0, 100)}`);
    console.log(`    what renders      : ${JSON.stringify(d.live)?.slice(0, 100)}\n`);
  }
  console.log("Decide which is right. To make the JSON win, update the row —");
  console.log("the Studio's My Website tab, or a targeted PATCH on SiteContent.\n");
  process.exit(1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(2);
  })
  .finally(() => db.$disconnect().catch(() => {}));
