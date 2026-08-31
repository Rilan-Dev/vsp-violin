import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/** GET /feed.xml — RSS 2.0 feed of published lessons.
 * Lets diaspora parents subscribe to new lessons via RSS readers. */
export async function GET() {
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
    return `    <item>
      <title><![CDATA[${l.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${new Date(l.date).toUTCString()}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Violin Suka Pavalan — Free Carnatic Violin Lessons</title>
    <link>${base}/library</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>22 free Carnatic violin notation lessons — Tamil and English notation, violin and vocal video, practice tracks in five sruthis.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
