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

const UpdateSchema = z.object({
  name: z.string().min(1).max(80).optional(),
  group: z.enum(["basics", "advanced", "devotional", "light", "media"]).optional(),
  order: z.number().int().min(0).max(100).optional(),
});

/** PATCH /api/studio/categories/[id] — rename / regroup / reorder a category. */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
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

  const update: Record<string, unknown> = {};
  if (parsed.data.name !== undefined) update.name = parsed.data.name;
  if (parsed.data.group !== undefined) update.group = parsed.data.group;
  if (parsed.data.order !== undefined) update.order = parsed.data.order;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 422 });
  }

  const updated = await db.category.update({ where: { slug: id }, data: update });
  return NextResponse.json({ ok: true, category: updated });
}

/** DELETE /api/studio/categories/[id] — delete a category.
 * Blocked if the category still holds lessons (returns 409). */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  const lessonCount = await db.lesson.count({ where: { category: id } });
  if (lessonCount > 0) {
    return NextResponse.json(
      { error: `Cannot delete: ${lessonCount} lesson(s) still in this category. Move them first.` },
      { status: 409 }
    );
  }

  await db.category.delete({ where: { slug: id } });
  return NextResponse.json({ ok: true });
}
