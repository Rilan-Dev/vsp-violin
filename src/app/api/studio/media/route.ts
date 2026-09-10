import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { supabaseServer } from "@/lib/supabase";
import { restGetMedia } from "@/lib/supabase-data";

async function isAuthorized(req: NextRequest): Promise<boolean> {
  // Check Supabase auth cookie
  const sbToken = req.cookies.get("sb-access-token")?.value;
  if (sbToken) {
    try {
      const { data, error } = await supabaseServer.auth.getUser(sbToken);
      if (!error && data.user) return true;
    } catch {}
  }
  // Fall back to static token (dev backwards-compat)
  const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ") && auth.slice(7) === STUDIO_TOKEN) return true;
  const cookie = req.headers.get("cookie") ?? "";
  return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}

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
  const media = await db.media.create({ data: parsed.data });
  return NextResponse.json({ ok: true, media }, { status: 201 });
}

/** DELETE /api/studio/media/[id] — delete a media item */
