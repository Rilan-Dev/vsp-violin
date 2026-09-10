import type { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sukapavalan.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/library`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/honours`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/stage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/learn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  try {
    const { db } = await import("@/lib/db");
    const lessons = await db.lesson.findMany({
      where: { status: "published" },
      select: { id: true, date: true },
    });

    const lessonPages: MetadataRoute.Sitemap = lessons.map((l) => ({
      url: `${baseUrl}/lessons/${l.id}`,
      lastModified: new Date(l.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    return [...staticPages, ...lessonPages];
  } catch {
    return staticPages;
  }
}
