import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { restGetAllLessonsForStudio } from "@/lib/supabase-data";
import { isAuthorized } from "@/lib/studio-auth";

/**
 * GET /api/studio/lessons — list ALL lessons (including drafts) for the studio dashboard.
 * Returns lessons ordered by category + level + date.
 * Falls back to the Supabase REST API if Prisma can't connect (the
 * common production failure mode — Vercel serverless function can't
 * reach Supabase Postgres via Prisma's connection pool).
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const lessons = await db.lesson.findMany({
      orderBy: [{ category: "asc" }, { level: "asc" }, { date: "desc" }],
    });
    return NextResponse.json({ lessons });
  } catch (e) {
    console.warn("[studio/lessons] Prisma failed, falling back to Supabase REST:", e);
    try {
      const lessons = await restGetAllLessonsForStudio();
      return NextResponse.json({ lessons });
    } catch (restErr) {
      console.error("[studio/lessons] Supabase REST also failed:", restErr);
      return NextResponse.json({ lessons: [] }, { status: 200 });
    }
  }
}

const CreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  titleTamil: z.string().max(200).optional().nullable(),
  category: z.string().min(1, "Category is required"),
  level: z.number().int().min(1).max(10).optional().nullable(),
  raga: z.string().max(80).optional().nullable(),
  thala: z.string().max(80).optional().nullable(),
  composer: z.string().max(120).optional().nullable(),
  date: z.string().optional(),
  notationTamil: z.string().url().optional().nullable(),
  notationEnglish: z.string().url().optional().nullable(),
  violinVideo: z.string().url().optional().nullable(),
  vocalVideo: z.string().url().optional().nullable(),
  titleCard: z.string().url().optional().nullable(),
  sourceUrl: z.string().url().optional().nullable(),
  status: z.enum(["draft", "published"]).default("draft"),
});

/** POST /api/studio/lessons — create a new lesson. */
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
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const d = parsed.data;
  // Generate a slug from the title
  const slugBase = d.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const id = `${slugBase}-${Date.now().toString(36)}`;

  const lesson = await db.lesson.create({
    data: {
      id,
      title: d.title,
      titleTamil: d.titleTamil || null,
      category: d.category,
      level: d.level ?? null,
      raga: d.raga || null,
      thala: d.thala || null,
      composer: d.composer || null,
      date: d.date ?? new Date().toISOString().split("T")[0],
      notationTamil: d.notationTamil || null,
      notationEnglish: d.notationEnglish || null,
      violinVideo: d.violinVideo || null,
      vocalVideo: d.vocalVideo || null,
      titleCard: d.titleCard || null,
      sourceUrl: d.sourceUrl || null,
      status: d.status,
    },
  });

  return NextResponse.json({ ok: true, lesson }, { status: 201 });
}
