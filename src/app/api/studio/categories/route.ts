import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7) === STUDIO_TOKEN;
  const cookie = req.headers.get("cookie") ?? "";
  return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}

/** GET /api/studio/categories — list all categories with lesson counts. */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const categories = await db.category.findMany({ orderBy: [{ group: "asc" }, { order: "asc" }] });
  const lessons = await db.lesson.findMany({ select: { category: true, status: true } });
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

import { z } from "zod";

const CreateSchema = z.object({
  slug: z.string().min(1).max(80).regex(/^[a-z0-9-]+$/, "Slug must be lowercase, hyphens only"),
  name: z.string().min(1).max(80),
  group: z.enum(["basics", "advanced", "devotional", "light", "media"]),
  order: z.number().int().min(0).max(100),
});

/** POST /api/studio/categories — create a new category. */
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
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
