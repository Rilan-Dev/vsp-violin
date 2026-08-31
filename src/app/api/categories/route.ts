import { NextRequest, NextResponse } from "next/server";
import { getCategoriesWithCounts, getLibraryStats } from "@/lib/data";

export async function GET(_req: NextRequest) {
  const [categories, stats] = await Promise.all([
    getCategoriesWithCounts(),
    getLibraryStats(),
  ]);
  return NextResponse.json({ categories, stats });
}
