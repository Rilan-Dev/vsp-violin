import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Resolved per request, not at build time.
 *
 * robots.txt was a static route, so SITE_URL was baked in during `vercel
 * build` — where NEXT_PUBLIC_SITE_URL and Vercel's own URL variables are not
 * present, leaving the localhost fallback. Production was live for weeks
 * telling Google "Sitemap: http://localhost:3000/sitemap.xml", so the sitemap
 * was never discoverable. sitemap.xml itself is dynamic and was unaffected,
 * which is why the two disagreed.
 */
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api/studio"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
