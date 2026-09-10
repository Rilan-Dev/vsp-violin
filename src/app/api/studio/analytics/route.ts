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
 * GET /api/studio/analytics — enquiry analytics for the Studio dashboard.
 * Falls back to the Supabase REST API if Prisma can't connect.
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch enquiries — try Prisma first, fall back to Supabase REST.
  // Each enquiry's createdAt is a Date (Prisma) or ISO string (REST); we
  // normalize to a Date below.
  type EnquiryLite = { id: string; intent: string; status: string; createdAt: Date; message: string };
  let enquiries: EnquiryLite[] = [];
  try {
    const rows = await db.enquiry.findMany({
      orderBy: { createdAt: "asc" },
      select: { id: true, intent: true, status: true, createdAt: true, message: true },
    });
    enquiries = rows as EnquiryLite[];
  } catch (e) {
    console.warn("[studio/analytics] Prisma failed, falling back to Supabase REST:", e);
    try {
      const restRows = await restGetEnquiries();
      enquiries = restRows.map((r) => ({
        id: r.id,
        intent: r.intent,
        status: r.status,
        createdAt: new Date(r.createdAt),
        message: r.message,
      }));
    } catch (restErr) {
      console.error("[studio/analytics] Supabase REST also failed:", restErr);
      enquiries = [];
    }
  }

  // Enquiries over the last 12 weeks (weekly buckets)
  const now = new Date();
  const weekly: { week: string; count: number; label: string }[] = [];
  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - i * 7 - now.getDay()); // align to Sunday
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 7);
    const count = enquiries.filter((e) => {
      const d = new Date(e.createdAt);
      return d >= weekStart && d < weekEnd;
    }).length;
    weekly.push({
      week: weekStart.toISOString().split("T")[0],
      count,
      label: weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    });
  }

  // Intent breakdown
  const intentBreakdown = [
    { intent: "lesson", label: "One-to-one Lessons", count: enquiries.filter((e) => e.intent === "lesson").length, color: "#E0BC6A" },
    { intent: "booking", label: "Performance Booking", count: enquiries.filter((e) => e.intent === "booking").length, color: "#C9AEF5" },
    { intent: "collaboration", label: "Collaboration", count: enquiries.filter((e) => e.intent === "collaboration").length, color: "#78DCAA" },
  ];

  // Status breakdown
  const statusBreakdown = {
    new: enquiries.filter((e) => e.status === "new").length,
    replied: enquiries.filter((e) => e.status === "replied").length,
    archived: enquiries.filter((e) => e.status === "archived").length,
  };

  // Response rate (replied / total - archived)
  const actionable = enquiries.filter((e) => e.status !== "archived").length;
  const responseRate = actionable > 0 ? Math.round((statusBreakdown.replied / actionable) * 100) : 0;

  // Source breakdown (lesson-page vs other)
  const fromLessonPage = enquiries.filter((e) => e.intent === "lesson" || e.message.toLowerCase().includes("lesson")).length;

  // Recent activity (last 5) — sort by createdAt desc
  const recent = enquiries
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)
    .map((e) => ({
      id: e.id,
      intent: e.intent,
      status: e.status,
      createdAt: new Date(e.createdAt).toISOString(),
    }));

  return NextResponse.json({
    total: enquiries.length,
    weekly,
    intentBreakdown,
    statusBreakdown,
    responseRate,
    fromLessonPage,
    fromOther: enquiries.length - fromLessonPage,
    recent,
  });
}
