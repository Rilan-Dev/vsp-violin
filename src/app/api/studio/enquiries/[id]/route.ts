import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { isAuthorized } from "@/lib/studio-auth";

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

  const updated = await db.enquiry.update({
    where: { id },
    data: { status: parsed.data.status },
  });
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
  await db.enquiry.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
