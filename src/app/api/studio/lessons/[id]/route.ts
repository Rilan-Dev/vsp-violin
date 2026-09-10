import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

async function isAuthorized(req: NextRequest): Promise<boolean> {
  // Check Supabase auth cookie
  const sbToken = req.cookies.get("sb-access-token")?.value;
  if (sbToken) {
    try {
      const { supabaseServer } = await import("@/lib/supabase");
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

const UpdateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  titleTamil: z.string().max(200).optional().nullable(),
  raga: z.string().max(80).optional().nullable(),
  thala: z.string().max(80).optional().nullable(),
  composer: z.string().max(120).optional().nullable(),
  level: z.number().int().min(1).max(10).optional().nullable(),
  status: z.enum(["draft", "published"]).optional(),
});

/** PATCH /api/studio/lessons/[id] — update a lesson field. */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = UpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid update", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Build the update object — convert empty strings to null for nullable fields.
  const update: Record<string, unknown> = {};
  const data = parsed.data;
  if (data.title !== undefined) update.title = data.title;
  if (data.titleTamil !== undefined) update.titleTamil = data.titleTamil || null;
  if (data.raga !== undefined) update.raga = data.raga || null;
  if (data.thala !== undefined) update.thala = data.thala || null;
  if (data.composer !== undefined) update.composer = data.composer || null;
  if (data.level !== undefined) update.level = data.level ?? null;
  if (data.status !== undefined) update.status = data.status;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 422 });
  }

  const updated = await db.lesson.update({ where: { id }, data: update });
  return NextResponse.json({ ok: true, lesson: updated });
}

/** DELETE /api/studio/lessons/[id] — delete a lesson. */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  await db.lesson.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
