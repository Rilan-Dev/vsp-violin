/**
 * Seed Supabase tables via the REST API (PostgREST):
 *   - SiteContent (key/value)
 *   - Media (gallery images)
 *   - Enquiry (sample enquiries so the Studio dashboard has data)
 *
 * Why REST instead of Prisma:
 * - Prisma's connection to Supabase Postgres from a serverless function
 *   is flaky (cold start, pool exhaustion, schema cache mismatch).
 * - The PostgREST API uses HTTP requests + the service-role key — no
 *   long-lived connection. Reliable for one-shot seeding.
 *
 * Tables are exposed at /rest/v1/<Table> (case-sensitive, capitalized).
 *
 * Usage: `bun run scripts/seed-supabase.ts`
 */

import siteContentData from "../src/lib/site-content.json";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

function headers() {
  return {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    // Tell PostgREST to return the inserted rows
    Prefer: "return=representation,resolution=merge-duplicates",
  };
}

async function restUpsert(table: string, rows: Record<string, unknown>[]) {
  // PostgREST POST with `Prefer: resolution=merge-duplicates` does upsert
  // based on the primary key.
  const url = `${SUPABASE_URL}/rest/v1/${table}`;
  const res = await fetch(url, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(rows),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`POST ${table} ${res.status}: ${text}`);
  }
  return res.json().catch(() => []);
}

/* --------------------------- Flattener --------------------------- */

function flatten(obj: unknown, prefix = ""): [string, string][] {
  const out: [string, string][] = [];
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      out.push(...flatten(v, prefix ? `${prefix}.${k}` : k));
    }
  } else {
    out.push([prefix, JSON.stringify(obj)]);
  }
  return out;
}

/* --------------------------- Seeders --------------------------- */

async function seedContent() {
  const leaves = flatten(siteContentData);
  console.log(`[seed-supabase] SiteContent: ${leaves.length} keys to upsert`);
  // PostgREST has a payload size limit; chunk into batches of 50.
  const BATCH = 50;
  let total = 0;
  for (let i = 0; i < leaves.length; i += BATCH) {
    const batch = leaves.slice(i, i + BATCH);
    const rows = batch.map(([key, value]) => ({ key, value }));
    try {
      await restUpsert("SiteContent", rows);
      total += rows.length;
      console.log(`  ✓ batch ${i / BATCH + 1}: ${rows.length} rows (total: ${total})`);
    } catch (e) {
      console.error(`  ✗ batch ${i / BATCH + 1}:`, (e as Error).message);
    }
  }
  console.log(`[seed-supabase] SiteContent: ${total}/${leaves.length} keys seeded`);
}

async function seedMedia() {
  // Gallery images from site-content.json → gallery.images[]
  const images = (siteContentData as { gallery?: { images?: string[] } }).gallery?.images ?? [];
  console.log(`[seed-supabase] Media: ${images.length} gallery images to upsert`);
  const rows = images.map((url, i) => ({
    id: `gallery-${i + 1}`,
    url,
    altText: `Gallery image ${i + 1}`,
    category: "gallery",
  }));
  try {
    await restUpsert("Media", rows);
    console.log(`[seed-supabase] Media: ${rows.length} images seeded`);
  } catch (e) {
    console.error(`[seed-supabase] Media error:`, (e as Error).message);
  }
}

async function seedEnquiries() {
  // Sample enquiries so the Studio dashboard has data to show.
  const now = new Date();
  const daysAgo = (n: number) => new Date(now.getTime() - n * 24 * 60 * 60 * 1000).toISOString();

  // Generate cuid-like IDs (the Enquiry table's `id` is a non-null string
  // with no Postgres default, so we have to provide one).
  const cuid = (i: number) => `seed-eq-${i + 1}-${now.getTime().toString(36)}`;

  const samples = [
    {
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      phone: "98765 43210",
      city: "Chennai",
      intent: "lesson",
      instrument: "Violin",
      level: "Beginner",
      whoFor: "Myself",
      message: "I'd like to start Carnatic violin lessons for my 9-year-old son. Could you share your schedule and fees?",
      status: "new",
      createdAt: daysAgo(2),
      updatedAt: daysAgo(2),
    },
    {
      name: "Lakshmi Venkat",
      email: "lakshmi.v@example.com",
      phone: "91234 56789",
      city: "Bengaluru",
      intent: "lesson",
      instrument: "Violin",
      level: "Intermediate",
      whoFor: "My daughter (12)",
      message: "Saw your free notation library — your Carnatic Basic Lesson I is amazing. We'd like to book a free trial.",
      status: "new",
      createdAt: daysAgo(4),
      updatedAt: daysAgo(4),
    },
    {
      name: "Dr. Ravindran",
      email: "ravindran.iyer@example.com",
      phone: null,
      city: "Coimbatore",
      intent: "booking",
      instrument: null,
      level: null,
      whoFor: null,
      message: "Looking for a Carnatic violinist for our daughter's wedding reception on Dec 14 in Coimbatore. Are you available?",
      status: "replied",
      createdAt: daysAgo(9),
      updatedAt: daysAgo(7),
    },
    {
      name: "Saavi Arts Academy",
      email: "saavi.arts@example.com",
      phone: "99887 76655",
      city: "Madurai",
      intent: "collaboration",
      instrument: null,
      level: null,
      whoFor: null,
      message: "We run a music school in Madurai and would love to host a workshop with you. Open to dates in Jan-Feb 2026.",
      status: "new",
      createdAt: daysAgo(12),
      updatedAt: daysAgo(12),
    },
    {
      name: "Priya Senthil",
      email: "priya.s@example.com",
      phone: "90000 11111",
      city: "Karaikal",
      intent: "lesson",
      instrument: "Violin",
      level: "Advanced",
      whoFor: "Myself",
      message: "I've completed Level III — Sarali Varisai and want to move to Janta Varisai. Can I book a one-to-one session?",
      status: "archived",
      createdAt: daysAgo(35),
      updatedAt: daysAgo(28),
    },
  ].map((s, i) => ({ id: cuid(i), ...s }));

  console.log(`[seed-supabase] Enquiry: ${samples.length} sample enquiries to upsert`);
  try {
    await restUpsert("Enquiry", samples);
    console.log(`[seed-supabase] Enquiry: ${samples.length} enquiries seeded`);
  } catch (e) {
    console.error(`[seed-supabase] Enquiry error:`, (e as Error).message);
  }
}

async function main() {
  console.log(`[seed-supabase] Target: ${SUPABASE_URL}`);
  await seedContent();
  await seedMedia();
  await seedEnquiries();
  console.log("[seed-supabase] Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
