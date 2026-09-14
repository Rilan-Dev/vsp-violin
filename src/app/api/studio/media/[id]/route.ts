import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAuthorized } from "@/lib/studio-auth";
import { restDelete } from "@/lib/supabase-data";

/** DELETE /api/studio/media/[id] */
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    await db.media.delete({ where: { id } });
  } catch (prismaErr) {
    console.warn("[studio/media/:id] Prisma delete failed, falling back to REST:", prismaErr);
    try {
      await restDelete("Media", "id", id);
    } catch (restErr) {
      console.error("[studio/media/:id] REST delete ALSO failed:", restErr);
      return NextResponse.json(
        { error: "The photo could not be deleted just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
  return NextResponse.json({ ok: true });
}
