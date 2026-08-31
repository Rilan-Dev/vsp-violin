import type { MetadataRoute } from "next";
import { db } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sukapavalan.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/library`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic lesson pages
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
}
