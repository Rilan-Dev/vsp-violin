import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { db } = await import("@/lib/db");
    const lessons = await db.lesson.findMany({
      where: { status: "published" },
      orderBy: { date: "desc" },
      take: 50,
      select: { id: true, title: true, titleTamil: true, category: true, raga: true, thala: true, date: true },
    });

    const base = SITE_URL;
    const items = lessons.map((l) => {
      const url = `${base}/lessons/${l.id}`;
      const description = [l.titleTamil ? `Tamil: ${l.titleTamil}` : null, l.category ? `Category: ${l.category.replace(/-/g, " ")}` : null, l.raga ? `Raga: ${l.raga}` : null].filter(Boolean).join(" · ");
      return `    <item>\n      <title><![CDATA[${l.title}]]></title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <description><![CDATA[${description}]]></description>\n      <pubDate>${new Date(l.date).toUTCString()}</pubDate>\n    </item>`;
    }).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Violin Suka Pavalan</title><link>${base}/library</link><description>Free Carnatic violin notation lessons</description><language>en</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n${items}\n  </channel></rss>`;
    return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "s-maxage=3600, stale-while-revalidate" } });
  } catch {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Violin Suka Pavalan</title><link>${SITE_URL}/library</link><description>Loading...</description></channel></rss>`;
    return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
  }
}
