import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAuthorized } from "@/lib/studio-auth";

/** DELETE /api/studio/media/[id] */
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await db.media.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
