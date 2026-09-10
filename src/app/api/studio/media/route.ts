import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7) === STUDIO_TOKEN;
  const cookie = req.headers.get("cookie") ?? "";
  return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}

/** GET /api/studio/media — list all media items */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const category = req.nextUrl.searchParams.get("category");
  const media = await db.media.findMany({
    where: category ? { category } : {},
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ media });
}

const CreateSchema = z.object({
  url: z.string().url(),
  altText: z.string().min(1).max(200),
  category: z.enum(["portrait", "title-card", "gallery", "honours", "misc"]),
});

/** POST /api/studio/media — add a media item (URL-based, no file upload) */
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const parsed = CreateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid", issues: parsed.error.flatten() }, { status: 422 });
  const media = await db.media.create({ data: parsed.data });
  return NextResponse.json({ ok: true, media }, { status: 201 });
}

/** DELETE /api/studio/media/[id] — delete a media item */
