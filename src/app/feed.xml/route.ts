import { NextResponse } from "next/server";

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

    const base = "https://sukapavalan.com";
    const items = lessons.map((l) => {
      const url = `${base}/lessons/${l.id}`;
      const description = [
        l.titleTamil ? `Tamil: ${l.titleTamil}` : null,
        l.category ? `Category: ${l.category.replace(/-/g, " ")}` : null,
        l.raga ? `Raga: ${l.raga}` : null,
        l.thala ? `Thala: ${l.thala}` : null,
      ].filter(Boolean).join(" · ");
      return `    <item>\n      <title><![CDATA[${l.title}]]></title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <description><![CDATA[${description}]]></description>\n      <pubDate>${new Date(l.date).toUTCString()}</pubDate>\n    </item>`;
    }).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>Violin Suka Pavalan — Free Carnatic Violin Lessons</title>\n    <link>${base}/library</link>\n    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />\n    <description>22 free Carnatic violin notation lessons.</description>\n    <language>en</language>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n${items}\n  </channel>\n</rss>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch {
    // If DB is not available (e.g. during build), return empty feed
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Violin Suka Pavalan</title><link>https://sukapavalan.com/library</link><description>Loading...</description></channel></rss>`;
    return new NextResponse(xml, {
      headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
  }
}
