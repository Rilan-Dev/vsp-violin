import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { isAuthorized } from "@/lib/studio-auth";
import { restUpdate, restDelete, restGetLessons } from "@/lib/supabase-data";

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

  const update: Record<string, unknown> = {};
  if (parsed.data.name !== undefined) update.name = parsed.data.name;
  if (parsed.data.group !== undefined) update.group = parsed.data.group;
  if (parsed.data.order !== undefined) update.order = parsed.data.order;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 422 });
  }

  let updated;
  try {
    updated = await db.category.update({ where: { slug: id }, data: update });
  } catch (prismaErr) {
    console.warn("[studio/categories/:id] Prisma update failed, falling back to REST:", prismaErr);
    try {
      updated = await restUpdate<Record<string, unknown>>("Category", "slug", id, update);
    } catch (restErr) {
      console.error("[studio/categories/:id] REST update ALSO failed:", restErr);
      return NextResponse.json(
        { error: "Your changes could not be saved just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
  return NextResponse.json({ ok: true, category: updated });
}

/** DELETE /api/studio/categories/[id] — delete a category.
 * Blocked if the category still holds lessons (returns 409). */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  // Refuse to orphan lessons. Same reasoning as the create route's duplicate
  // check: a read inside a write handler needs the write handler's fallback,
  // or it throws first and the guarded delete below never runs.
  let lessonCount: number | null = null;
  try {
    lessonCount = await db.lesson.count({ where: { category: id } });
  } catch {
    try {
      lessonCount = (await restGetLessons(id)).length;
    } catch (restErr) {
      console.warn("[studio/categories/:id] lesson count unavailable:", restErr);
    }
  }
  if (lessonCount === null) {
    // Deleting blind could strand lessons in a category that no longer exists.
    return NextResponse.json(
      { error: "Could not check whether this category still holds lessons. Please try again in a moment." },
      { status: 503 }
    );
  }
  if (lessonCount > 0) {
    return NextResponse.json(
      { error: `Cannot delete: ${lessonCount} lesson(s) still in this category. Move them first.` },
      { status: 409 }
    );
  }

  try {
    await db.category.delete({ where: { slug: id } });
  } catch (prismaErr) {
    console.warn("[studio/categories/:id] Prisma delete failed, falling back to REST:", prismaErr);
    try {
      await restDelete("Category", "slug", id);
    } catch (restErr) {
      console.error("[studio/categories/:id] REST delete ALSO failed:", restErr);
      return NextResponse.json(
        { error: "The category could not be deleted just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
  return NextResponse.json({ ok: true });
}
