/**
 * Dynamic site content — server-side.
 *
 * Reads the SiteContent key/value table from the DB, then merges those
 * DB-stored values into the static `site-content.json` baseline.
 * The DB wins per key (so the Studio admin's edits take effect on the
 * public site). Falls back to JSON-only if the DB is unreachable.
 *
 * Values are stored in the DB as JSON strings (so the type round-trips
 * correctly: a string stays a string, an array stays an array, etc.).
 *
 * Usage in a server component:
 *   const content = await getDynamicContent();
 *   const hero = content.home.heroLines; // string[] — admin-editable
 *
 * Usage of individual keys (avoids loading the whole object):
 *   const eyebrow = await getDynamicContentValue("home.heroLines");
 */

import siteContentJson from "@/lib/site-content.json";
import { db } from "@/lib/db";
import type { SiteContent } from "@/lib/site-content-only";

/**
 * Walk a nested object by dot-path ("home.heroLines") and set the leaf.
 */
function setByPath(obj: unknown, path: string, value: unknown): void {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i];
    if (cur[k] == null || typeof cur[k] !== "object") {
      cur[k] = {};
    }
    cur = cur[k];
  }
  cur[parts[parts.length - 1]] = value;
}

/**
 * Read all SiteContent rows from the DB.
 * Falls back to an empty map on DB error (caller keeps JSON baseline).
 */
async function fetchContentMap(): Promise<Map<string, unknown>> {
  const map = new Map<string, unknown>();
  try {
    const rows = await db.siteContent.findMany();
    for (const r of rows) {
      try {
        map.set(r.key, JSON.parse(r.value));
      } catch {
        // If the value isn't valid JSON, store it as a plain string
        map.set(r.key, r.value);
      }
    }
  } catch (e) {
    console.warn("[dynamic-content] DB fetch failed, using JSON-only:", e);
  }
  return map;
}

/**
 * Returns the full site content with DB-stored edits applied on top of
 * the static JSON baseline. Async — only callable from server components.
 */
export async function getDynamicContent(): Promise<SiteContent> {
  const map = await fetchContentMap();
  if (map.size === 0) return siteContentJson as SiteContent;

  // Deep-clone the JSON baseline so we don't mutate the imported module.
  const merged = JSON.parse(JSON.stringify(siteContentJson)) as Record<string, unknown>;
  for (const [key, value] of map) {
    setByPath(merged, key, value);
  }
  return merged as unknown as SiteContent;
}

/**
 * Returns the value of a single content key, or `fallback` if the key
 * isn't in the DB / DB is unreachable. Faster than `getDynamicContent`
 * if you only need one field.
 */
export async function getDynamicContentValue<T = unknown>(
  key: string,
  fallback?: T
): Promise<T | undefined> {
  try {
    const row = await db.siteContent.findUnique({ where: { key } });
    if (!row) return fallback;
    try {
      return JSON.parse(row.value) as T;
    } catch {
      return row.value as unknown as T;
    }
  } catch {
    return fallback;
  }
}

/**
 * Helper for client components: returns the merged content from the
 * `/api/content` endpoint. Falls back to the static JSON on error.
 */
export async function fetchDynamicContentClient(): Promise<SiteContent> {
  try {
    const res = await fetch("/api/content");
    if (!res.ok) throw new Error(`status ${res.status}`);
    return (await res.json()) as SiteContent;
  } catch {
    // Static fallback (same JSON the server imports)
    return siteContentJson as SiteContent;
  }
}
