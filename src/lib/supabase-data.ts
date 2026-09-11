/**
 * Supabase REST API fallback for the data layer.
 *
 * Why this exists:
 * - Local dev: Prisma + SQLite works fine.
 * - Production (Vercel): Prisma + Supabase Postgres sometimes fails to
 *   establish a connection from a serverless function (cold start, pool
 *   exhaustion, schema cache mismatch). When that happens, the homepage
 *   would show "No lessons in this category yet" even though the Supabase
 *   DB has 23 lessons.
 * - The Supabase PostgREST API (the JSON REST API at
 *   `/rest/v1/<table>`) is a separate transport that doesn't depend on
 *   a long-lived Prisma connection — it's just an HTTP request. It works
 *   reliably with the service-role key.
 *
 * This module exports typed fetchers that mirror the shape of the
 * Prisma-based functions in `data.ts`. The public-facing pages use a
 * wrapper that tries Prisma first and falls back to these fetchers if
 * Prisma throws.
 *
 * Table-name note:
 * The Supabase tables were created with quoted identifiers (`"Lesson"`,
 * `"Category"`), so PostgREST exposes them at `/Lesson` and `/Category`
 * (case-sensitive). Always use the capitalized names here.
 */

import type { CategoryGroup } from "@/lib/data";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Prefer the service role key (bypasses RLS); fall back to anon for any
// edge case where the service key isn't available.
const API_KEY = SERVICE_ROLE_KEY || ANON_KEY;

function restUrl(table: string) {
  return `${SUPABASE_URL}/rest/v1/${table}`;
}

function restHeaders() {
  return {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function restGet<T>(table: string, query: string): Promise<T[]> {
  const url = `${restUrl(table)}?${query}`;
  const res = await fetch(url, {
    headers: restHeaders(),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Supabase REST ${table} ${res.status}: ${await res.text().catch(() => "")}`);
  }
  return (await res.json()) as T[];
}

/* ----------------------------- Types ----------------------------- */

export type RestLessonSummary = {
  id: string;
  title: string;
  titleTamil: string | null;
  category: string;
  level: number | null;
  raga: string | null;
  thala: string | null;
  composer: string | null;
  date: string;
  titleCard: string | null;
  status: string;
};

export type RestCategory = {
  slug: string;
  name: string;
  group: string;
  order: number;
};

/* ----------------------------- Fetchers ----------------------------- */

const LESSON_SELECT = "id,title,titleTamil,category,level,raga,thala,composer,date,titleCard,status";

export async function restGetLessons(categorySlug?: string): Promise<RestLessonSummary[]> {
  const filter = categorySlug
    ? `status=eq.published&category=eq.${encodeURIComponent(categorySlug)}`
    : `status=eq.published`;
  // Sort: level ASC then date DESC (PostgREST order syntax)
  const order = `&order=level.asc,date.desc`;
  return restGet<RestLessonSummary>("Lesson", `select=${LESSON_SELECT}&${filter}${order}`);
}

export async function restGetAllLessonsForStudio(): Promise<RestLessonSummary[]> {
  return restGet<RestLessonSummary>(
    "Lesson",
    `select=${LESSON_SELECT}&order=category.asc,level.asc,date.desc`
  );
}

export async function restGetCategories(): Promise<RestCategory[]> {
  return restGet<RestCategory>(
    "Category",
    "select=slug,name,group,order&order=group.asc,order.asc"
  );
}

export async function restGetCategoriesWithCounts() {
  const [categories, lessons] = await Promise.all([
    restGetCategories(),
    restGet<RestLessonSummary>("Lesson", "select=category&status=eq.published"),
  ]);
  const countMap = new Map<string, number>();
  for (const l of lessons) {
    countMap.set(l.category, (countMap.get(l.category) ?? 0) + 1);
  }
  return categories.map((c) => ({
    slug: c.slug,
    name: c.name,
    group: c.group as CategoryGroup,
    order: c.order,
    count: countMap.get(c.slug) ?? 0,
  }));
}

export async function restGetLibraryStats() {
  const [allLessons, categories, lessonsWithRaga] = await Promise.all([
    restGet<{ id: string; raga: string | null; notationTamil: string | null }>(
      "Lesson",
      "select=id,raga,notationTamil&status=eq.published"
    ),
    restGetCategories(),
    restGet<{ raga: string }>("Lesson", "select=raga&status=eq.published&raga=not.is.null"),
  ]);
  const ragaSet = new Set<string>();
  for (const l of lessonsWithRaga) {
    if (l.raga) ragaSet.add(l.raga);
  }
  // Must mirror the Prisma branch in data.ts exactly: a lesson counts as a
  // notation lesson when it has Tamil notation. This previously tested
  // `raga || titleTamil` — unrelated fields — so the REST fallback reported
  // a different library size than Prisma for the same data.
  const lessonsWithNotation = allLessons.filter((l) => Boolean(l.notationTamil));
  return {
    lessons: allLessons.length,
    notationLessons: lessonsWithNotation.length,
    notationSheets: lessonsWithNotation.length * 2,
    categories: categories.length,
    ragas: ragaSet.size,
  };
}

export async function restGetLessonById(id: string) {
  const rows = await restGet<RestLessonSummary & {
    notationTamil: string | null;
    notationEnglish: string | null;
    violinVideo: string | null;
    vocalVideo: string | null;
    sourceUrl: string | null;
    perVideoEmbeds: string | null;
    audioLessons: string | null;
    videoParts: string | null;
  }>(
    "Lesson",
    `select=*&id=eq.${encodeURIComponent(id)}`
  );
  return rows[0] ?? null;
}

/**
 * Health check — true if the Supabase REST API is reachable with the
 * configured key. Useful for diagnostics.
 */
export async function restHealthCheck(): Promise<boolean> {
  try {
    await restGet("Category", "select=slug&limit=1");
    return true;
  } catch {
    return false;
  }
}

/* ----------------------------- Studio-only fetchers ----------------------------- */

export type RestEnquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  city: string | null;
  intent: string;
  instrument: string | null;
  level: string | null;
  whoFor: string | null;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type RestMedia = {
  id: string;
  url: string;
  altText: string;
  category: string;
  createdAt?: string;
};

export type RestSiteContent = {
  key: string;
  value: string;
  updatedAt?: string;
};

/**
 * Fetch all enquiries from Supabase REST. Used as a fallback when
 * Prisma can't connect from the Vercel serverless function.
 */
export async function restGetEnquiries(): Promise<RestEnquiry[]> {
  // Order by createdAt desc — PostgREST order syntax
  return restGet<RestEnquiry>(
    "Enquiry",
    "select=id,name,email,phone,city,intent,instrument,level,whoFor,message,status,createdAt,updatedAt&order=createdAt.desc"
  );
}

/**
 * Fetch all media items from Supabase REST.
 */
export async function restGetMedia(): Promise<RestMedia[]> {
  return restGet<RestMedia>(
    "Media",
    "select=id,url,altText,category,createdAt&order=createdAt.desc"
  );
}

/**
 * Fetch all SiteContent key/value rows from Supabase REST.
 */
export async function restGetSiteContent(): Promise<RestSiteContent[]> {
  return restGet<RestSiteContent>(
    "SiteContent",
    "select=key,value,updatedAt&order=key.asc"
  );
}

/* ----------------------------- Writes ----------------------------- */

/**
 * POST a row via PostgREST. Used as the write fallback when Prisma can't
 * reach Supabase Postgres — the same failure mode the read fallbacks above
 * exist for. Returns the created row.
 */
async function restPost<T>(table: string, row: Record<string, unknown>): Promise<T> {
  const res = await fetch(restUrl(table), {
    method: "POST",
    headers: { ...restHeaders(), Prefer: "return=representation" },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(
      `Supabase REST POST ${table} ${res.status}: ${await res.text().catch(() => "")}`
    );
  }
  const rows = (await res.json()) as T[];
  return rows[0];
}

/**
 * Create an Enquiry over the REST API.
 *
 * The enquiry form is the site's only conversion path, so it must not depend
 * on Prisma succeeding. `id`, `createdAt` and `updatedAt` have no DB-side
 * defaults in the Postgres schema (Prisma generates them client-side), so we
 * supply them explicitly here.
 */
export async function restCreateEnquiry(
  data: Omit<RestEnquiry, "id" | "createdAt" | "updatedAt">
): Promise<RestEnquiry> {
  const now = new Date().toISOString();
  return restPost<RestEnquiry>("Enquiry", {
    id: `enq-${now.replace(/\D/g, "").slice(0, 14)}-${Math.random().toString(36).slice(2, 10)}`,
    ...data,
    createdAt: now,
    updatedAt: now,
  });
}
