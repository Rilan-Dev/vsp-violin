import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7) === STUDIO_TOKEN;
  const cookie = req.headers.get("cookie") ?? "";
  return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}

/** GET /api/studio/analytics — enquiry analytics for the Studio dashboard. */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: "asc" },
    select: { id: true, intent: true, status: true, createdAt: true, message: true },
  });

  // Enquiries over the last 12 weeks (weekly buckets)
  const now = new Date();
  const twelveWeeksAgo = new Date(now);
  twelveWeeksAgo.setDate(now.getDate() - 84); // 12 weeks

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

  // Recent activity (last 5)
  const recent = enquiries.slice(-5).reverse().map((e) => ({
    id: e.id,
    intent: e.intent,
    status: e.status,
    createdAt: e.createdAt.toISOString(),
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
