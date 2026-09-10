import { NextResponse } from "next/server";
import { getDynamicContent } from "@/lib/dynamic-content";

/**
 * GET /api/content — returns the merged site content (DB-stored edits
 * applied on top of the static JSON baseline). Public, unauthenticated
 * read so client components can fetch dynamic content.
 *
 * Response: the full site-content object (same shape as
 * `src/lib/site-content.json`).
 */
export async function GET() {
  try {
    const content = await getDynamicContent();
    return NextResponse.json(content, {
      headers: {
        // Cache for 60s on the client, revalidate in the background.
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (e) {
    console.error("/api/content error:", e);
    return NextResponse.json(
      { error: "Failed to load content" },
      { status: 500 }
    );
  }
}
