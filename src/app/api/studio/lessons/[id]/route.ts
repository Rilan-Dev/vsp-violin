import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { isAuthorized } from "@/lib/studio-auth";

/**
 * Every field a lesson can be created with must also be editable.
 *
 * This schema accepted 7 fields while POST /api/studio/lessons accepted 15,
 * so category, date, both notation PDFs, both videos, the title card and the
 * source URL could be set once at creation and then never corrected — a typo
 * in a notation link meant deleting the lesson and retyping it.
 *
 * A URL field accepts either a real URL or an empty string, which clears it.
 */
const urlOrEmpty = z
  .string()
  .max(600)
  .refine((v) => v === "" || /^https?:\/\//.test(v), {
    message: "Enter a full web address starting with http:// or https://, or leave it empty",
  })
  .optional()
  .nullable();

const UpdateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  titleTamil: z.string().max(200).optional().nullable(),
  category: z.string().min(1).max(80).optional(),
  level: z.number().int().min(1).max(10).optional().nullable(),
  raga: z.string().max(80).optional().nullable(),
  thala: z.string().max(80).optional().nullable(),
  composer: z.string().max(120).optional().nullable(),
  date: z.string().max(40).optional(),
  notationTamil: urlOrEmpty,
  notationEnglish: urlOrEmpty,
  violinVideo: urlOrEmpty,
  vocalVideo: urlOrEmpty,
  titleCard: urlOrEmpty,
  sourceUrl: urlOrEmpty,
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

  // Build the update object — convert empty strings to null for nullable
  // fields, so clearing a field in the form actually clears it in the DB.
  const update: Record<string, unknown> = {};
  const data = parsed.data;

  // Required fields: only written when a non-empty value is supplied.
  if (data.title !== undefined) update.title = data.title;
  if (data.category !== undefined) update.category = data.category;
  if (data.date !== undefined) update.date = data.date;
  if (data.status !== undefined) update.status = data.status;
  if (data.level !== undefined) update.level = data.level ?? null;

  // Optional text/URL fields: "" means "clear this".
  for (const key of [
    "titleTamil",
    "raga",
    "thala",
    "composer",
    "notationTamil",
    "notationEnglish",
    "violinVideo",
    "vocalVideo",
    "titleCard",
    "sourceUrl",
  ] as const) {
    if (data[key] !== undefined) update[key] = data[key] || null;
  }

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
