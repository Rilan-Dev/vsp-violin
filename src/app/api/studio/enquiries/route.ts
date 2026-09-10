import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { supabaseServer } from "@/lib/supabase";
import { restGetEnquiries } from "@/lib/supabase-data";

async function isAuthorized(req: NextRequest): Promise<boolean> {
  // Check Supabase auth cookie
  const sbToken = req.cookies.get("sb-access-token")?.value;
  if (sbToken) {
    try {
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
