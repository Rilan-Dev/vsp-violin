import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { restGetCategories, restGetLessons } from "@/lib/supabase-data";
import { isAuthorized } from "@/lib/studio-auth";

/**
 * GET /api/studio/categories — list all categories with lesson counts.
 * Falls back to the Supabase REST API if Prisma can't connect.
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let categories: Array<{ slug: string; name: string; group: string; order: number }> = [];
  let lessons: Array<{ category: string; status: string }> = [];
  try {
    categories = await db.category.findMany({ orderBy: [{ group: "asc" }, { order: "asc" }] });
    lessons = await db.lesson.findMany({ select: { category: true, status: true } });
  } catch (e) {
    console.warn("[studio/categories] Prisma failed, falling back to Supabase REST:", e);
    try {
      const [restCats, restLessons] = await Promise.all([
        restGetCategories(),
        restGetLessons(),
      ]);
      categories = restCats.map((c) => ({
        slug: c.slug,
        name: c.name,
        group: c.group,
        order: c.order,
      }));
      lessons = restLessons.map((l) => ({ category: l.category, status: l.status }));
    } catch (restErr) {
      console.error("[studio/categories] Supabase REST also failed:", restErr);
    }
  }
  const countMap = new Map<string, { total: number; published: number }>();
  for (const l of lessons) {
    const entry = countMap.get(l.category) ?? { total: 0, published: 0 };
    entry.total++;
    if (l.status === "published") entry.published++;
    countMap.set(l.category, entry);
  }
  const result = categories.map((c) => ({
    ...c,
    lessonCount: countMap.get(c.slug)?.total ?? 0,
    publishedCount: countMap.get(c.slug)?.published ?? 0,
  }));
  return NextResponse.json({ categories: result });
}

const CreateSchema = z.object({
  slug: z.string().min(1).max(80).regex(/^[a-z0-9-]+$/, "Slug must be lowercase, hyphens only"),
  name: z.string().min(1).max(80),
  group: z.enum(["basics", "advanced", "devotional", "light", "media"]),
  order: z.number().int().min(0).max(100),
});

/** POST /api/studio/categories — create a new category. */
export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = CreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid category", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }
  // Check for existing slug
  const existing = await db.category.findUnique({ where: { slug: parsed.data.slug } });
  if (existing) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }
  const category = await db.category.create({ data: parsed.data });
  return NextResponse.json({ ok: true, category }, { status: 201 });
}
