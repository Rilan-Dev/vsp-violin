import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { isAuthorized } from "@/lib/studio-auth";
import { restUpdate, restDelete } from "@/lib/supabase-data";

const UpdateSchema = z.object({
  status: z.enum(["new", "replied", "archived"]),
});

/** PATCH /api/studio/enquiries/[id] — update enquiry status. */
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
      { error: "Invalid status", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  let updated;
  try {
    updated = await db.enquiry.update({ where: { id }, data: { status: parsed.data.status } });
  } catch (prismaErr) {
    console.warn("[studio/enquiries/:id] Prisma update failed, falling back to REST:", prismaErr);
    try {
      updated = await restUpdate<Record<string, unknown>>("Enquiry", "id", id, {
        status: parsed.data.status,
        updatedAt: new Date().toISOString(),
      });
    } catch (restErr) {
      console.error("[studio/enquiries/:id] REST update ALSO failed:", restErr);
      return NextResponse.json(
        { error: "That could not be saved just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
  return NextResponse.json({ ok: true, enquiry: updated });
}

/** DELETE /api/studio/enquiries/[id] — permanently delete an enquiry. */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  try {
    await db.enquiry.delete({ where: { id } });
  } catch (prismaErr) {
    console.warn("[studio/enquiries/:id] Prisma delete failed, falling back to REST:", prismaErr);
    try {
      await restDelete("Enquiry", "id", id);
    } catch (restErr) {
      console.error("[studio/enquiries/:id] REST delete ALSO failed:", restErr);
      return NextResponse.json(
        { error: "The enquiry could not be deleted just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
  return NextResponse.json({ ok: true });
}
