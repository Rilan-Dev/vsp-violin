/**
 * Seed the SiteContent table with all flattened content from
 * `src/lib/site-content.json`.
 *
 * Why:
 * - The Studio admin already has a Content tab that edits the
 *   `SiteContent` key/value table.
 * - The public site currently reads from the hardcoded JSON file and
 *   ignores the DB edits, so admin changes have no effect.
 * - This script flattens the JSON into dot-notation key/value rows
 *   (e.g. `home.heroLines` → '["Soulful Strings,","Timeless Melodies."]')
 *   so a future `getDynamicContent()` function can read them from the DB
 *   and override the static JSON per key.
 *
 * Strategy:
 * - For each leaf in the nested JSON, store the value as a JSON string
 *   (preserves type on read: `JSON.parse(value)` reconstructs the
 *   original type — string / array / object).
 * - Upsert by `key` (so re-running the seed updates without duplicating).
 *
 * Run via: `bun run scripts/seed-content.ts`
 */

import siteContentData from "../src/lib/site-content.json";
import { db } from "../src/lib/db";

type Leaf = [key: string, value: string];

function flatten(obj: unknown, prefix = ""): Leaf[] {
  const out: Leaf[] = [];
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      out.push(...flatten(v, prefix ? `${prefix}.${k}` : k));
    }
  } else {
    out.push([prefix, JSON.stringify(obj)]);
  }
  return out;
}

async function seedLocal() {
  const leaves = flatten(siteContentData);
  console.log(`[seed-content] Local DB: ${leaves.length} content keys to upsert`);
  let count = 0;
  for (const [key, value] of leaves) {
    try {
      await db.siteContent.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      });
      count++;
    } catch (e) {
      console.error(`  ✗ ${key}:`, (e as Error).message);
    }
  }
  console.log(`[seed-content] Local DB: ${count}/${leaves.length} keys seeded`);
}

async function main() {
  await seedLocal();
  await db.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
