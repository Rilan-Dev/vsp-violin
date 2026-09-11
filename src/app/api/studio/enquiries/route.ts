import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { restGetEnquiries } from "@/lib/supabase-data";
import { isAuthorized } from "@/lib/studio-auth";

/**
 * GET /api/studio/enquiries — list all enquiries, newest first.
 * Falls back to the Supabase REST API if Prisma can't connect.
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let enquiries: Array<{
    id: string;
    name: string;
    email: string;
    phone: string | null;
    city: string | null;
    intent: string;
    instrument: string | null;
    level: string | null;
    whoFor: string | null;
    message: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }> = [];
  try {
    enquiries = await db.enquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 200,
    });
  } catch (e) {
    console.warn("[studio/enquiries] Prisma failed, falling back to Supabase REST:", e);
    try {
      enquiries = await restGetEnquiries();
    } catch (restErr) {
      console.error("[studio/enquiries] Supabase REST also failed:", restErr);
      enquiries = [];
    }
  }
  const counts = {
    total: enquiries.length,
    new: enquiries.filter((e) => e.status === "new").length,
    replied: enquiries.filter((e) => e.status === "replied").length,
    archived: enquiries.filter((e) => e.status === "archived").length,
  };
  return NextResponse.json({ enquiries, counts });
}
