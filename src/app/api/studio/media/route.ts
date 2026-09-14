import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { restGetMedia, restInsert } from "@/lib/supabase-data";
import { isAuthorized } from "@/lib/studio-auth";

/**
 * GET /api/studio/media — list all media items.
 * Falls back to the Supabase REST API if Prisma can't connect.
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const category = req.nextUrl.searchParams.get("category");
  let media: Array<{ id: string; url: string; altText: string; category: string; createdAt?: string }> = [];
  try {
    media = await db.media.findMany({
      where: category ? { category } : {},
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.warn("[studio/media] Prisma failed, falling back to Supabase REST:", e);
    try {
      const allMedia = await restGetMedia();
      media = category ? allMedia.filter((m) => m.category === category) : allMedia;
    } catch (restErr) {
      console.error("[studio/media] Supabase REST also failed:", restErr);
      media = [];
    }
  }
  return NextResponse.json({ media });
}

const CreateSchema = z.object({
  url: z.string().url(),
  altText: z.string().min(1).max(200),
  category: z.enum(["portrait", "title-card", "gallery", "honours", "misc"]),
});

/** POST /api/studio/media — add a media item (URL-based, no file upload) */
export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const parsed = CreateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid", issues: parsed.error.flatten() }, { status: 422 });
  let media;
  try {
    media = await db.media.create({ data: parsed.data });
  } catch (prismaErr) {
    console.warn("[studio/media] Prisma create failed, falling back to REST:", prismaErr);
    try {
      media = await restInsert<Record<string, unknown>>("Media", {
        id: `med-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        ...parsed.data,
        createdAt: new Date().toISOString(),
      });
    } catch (restErr) {
      console.error("[studio/media] REST create ALSO failed:", restErr);
      return NextResponse.json(
        { error: "The photo could not be saved just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
  return NextResponse.json({ ok: true, media }, { status: 201 });
}

/** DELETE /api/studio/media/[id] — delete a media item */
