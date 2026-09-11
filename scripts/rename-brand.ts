/**
 * Prefix "Suka Pavalan" with "Violin" throughout the SiteContent table.
 *
 * Why this exists as a script rather than a one-off edit:
 * `getDynamicContent()` merges the SiteContent DB rows OVER the static
 * `site-content.json` baseline, DB winning per key. So renaming the name in
 * the JSON alone changes nothing on a site whose rows are already populated —
 * the old value keeps overriding the new one. Both stores have to be updated,
 * and production and local are separate databases.
 *
 * The match is whitespace-tolerant and refuses to double-prefix, so running it
 * twice is harmless. Domain names and email addresses ("sukapavalan.com",
 * "sukapavalan@gmail.com") contain no space and never match.
 *
 * Usage:
 *   bun run scripts/rename-brand.ts                   # report only, local
 *   bun run scripts/rename-brand.ts --apply           # update local
 *   bun run scripts/rename-brand.ts --rest            # report only, Supabase
 *   bun run scripts/rename-brand.ts --rest --apply    # update Supabase
 *
 * Targets whichever database DATABASE_URL points at, and falls back to the
 * Supabase REST API when Prisma cannot connect — the same dual transport the
 * rest of the app uses.
 */

import { db } from "../src/lib/db";

const APPLY = process.argv.includes("--apply");
// Bun auto-loads .env, so DATABASE_URL is almost always set and Prisma will
// happily hit the LOCAL SQLite file even when you meant production. --rest
// forces the Supabase transport so the target is explicit, never inferred.
const FORCE_REST = process.argv.includes("--rest");

const TITLE = /(?<!Violin\s)Suka(\s+)Pavalan/g;
const UPPER = /(?<!VIOLIN\s)SUKA(\s+)PAVALAN/g;

function rename(value: string): string {
  return value
    .replace(TITLE, (_m, gap: string) => `Violin Suka${gap}Pavalan`)
    .replace(UPPER, (_m, gap: string) => `VIOLIN SUKA${gap}PAVALAN`);
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

async function restRows(): Promise<{ key: string; value: string }[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/SiteContent?select=key,value`, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`REST read failed: ${res.status}`);
  return res.json();
}

async function restWrite(key: string, value: string): Promise<void> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/SiteContent?key=eq.${encodeURIComponent(key)}`,
    {
      method: "PATCH",
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    }
  );
  if (!res.ok) throw new Error(`REST write failed for ${key}: ${res.status}`);
}

async function main() {
  let rows: { key: string; value: string }[];
  let viaRest = false;

  try {
    if (FORCE_REST) throw new Error("--rest requested");
    rows = await db.siteContent.findMany({ select: { key: true, value: true } });
  } catch {
    console.warn(FORCE_REST ? "Targeting Supabase over REST (--rest)." : "Prisma unavailable — using the Supabase REST API instead.");
    rows = await restRows();
    viaRest = true;
  }

  const changes = rows
    .map((r) => ({ key: r.key, from: r.value, to: rename(r.value) }))
    .filter((c) => c.from !== c.to);

  console.log(`${rows.length} content rows scanned, ${changes.length} need the prefix.\n`);
  for (const c of changes) {
    console.log(`  ${c.key}`);
    console.log(`    - ${c.from.slice(0, 90)}`);
    console.log(`    + ${c.to.slice(0, 90)}`);
  }

  if (!APPLY) {
    console.log("\nNothing written. Re-run with --apply to perform the update.");
    return;
  }

  for (const c of changes) {
    if (viaRest) await restWrite(c.key, c.to);
    else await db.siteContent.update({ where: { key: c.key }, data: { value: c.to } });
  }
  console.log(`\nUpdated ${changes.length} rows.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect().catch(() => {}));
