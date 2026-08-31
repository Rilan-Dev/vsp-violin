import { NextRequest, NextResponse } from "next/server";
import { getLessons } from "@/lib/data";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const lessons = await getLessons(category ?? undefined);
  return NextResponse.json({ lessons });
}
