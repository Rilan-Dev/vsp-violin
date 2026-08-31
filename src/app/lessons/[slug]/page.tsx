import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { getLessonById, getPrevNextLessons, getCategoriesWithCounts, getRelatedLessons } from "@/lib/data";
import { LessonPage } from "@/components/site/lesson-page";

export const dynamicParams = true;

export async function generateStaticParams() {
  const lessons = await db.lesson.findMany({
    where: { status: "published" },
    select: { id: true },
  });
  return lessons.map((l) => ({ slug: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await getLessonById(slug);
  if (!lesson) return { title: "Lesson not found" };
  const title = `${lesson.title} — Violin Suka Pavalan`;
  const description = lesson.raga
    ? `${lesson.title}${lesson.titleTamil ? ` (${lesson.titleTamil})` : ""} — ${lesson.raga}${lesson.thala ? ` · ${lesson.thala}` : ""}. Free Carnatic violin notation lesson.`
    : `${lesson.title}. Free Carnatic violin notation lesson.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      ...(lesson.titleCard ? { images: [{ url: lesson.titleCard, width: 1200, height: 630, alt: lesson.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(lesson.titleCard ? { images: [lesson.titleCard] } : {}),
    },
  };
}

export default async function LessonRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = await getLessonById(slug);
  if (!lesson) notFound();

  const categories = await getCategoriesWithCounts();
  const categoryName = categories.find((c) => c.slug === lesson.category)?.name ?? lesson.category;
  const { prev, next, siblings, currentIndex } = await getPrevNextLessons(slug, lesson.category);
  const related = await getRelatedLessons(slug, lesson.raga, lesson.category);

  // JSON-LD structured data — MusicRecording schema for rich search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: lesson.title,
    ...(lesson.titleTamil ? { alternateName: lesson.titleTamil } : {}),
    byArtist: {
      "@type": "MusicGroup",
      name: "Violin Suka Pavalan",
    },
    inAlbum: {
      "@type": "MusicAlbum",
      name: "Carnatic Violin Lessons — Free Notation Library",
    },
    ...(lesson.raga ? { about: { "@type": "Thing", name: `Raga ${lesson.raga}` } } : {}),
    ...(lesson.thala ? { tempo: lesson.thala } : {}),
    ...(lesson.composer ? { composer: { "@type": "Person", name: lesson.composer } } : {}),
    ...(lesson.titleCard ? { thumbnailUrl: lesson.titleCard } : {}),
    url: `https://sukapavalan.com/lessons/${lesson.id}`,
    isAccessibleForFree: true,
    publisher: {
      "@type": "Person",
      name: "Suka Pavalan",
      url: "https://sukapavalan.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LessonPage
        lesson={lesson}
        categoryName={categoryName}
        prev={prev}
        next={next}
        siblings={siblings}
        currentIndex={currentIndex}
        related={related}
      />
    </>
  );
}
