import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getLessonById, getPrevNextLessons, getCategoriesWithCounts, getRelatedLessons, getMegaMenu } from "@/lib/data";
import { LessonPage } from "@/components/site/lesson-page";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

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
    alternates: { canonical: `/lessons/${lesson.id}` },
    keywords: [lesson.title, lesson.category.replace(/-/g, " "), ...(lesson.raga ? [lesson.raga] : []), ...(lesson.thala ? [lesson.thala] : []), "Carnatic violin lesson", "free notation", "Suka Pavalan"],
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
  let lesson;
  try {
    lesson = await getLessonById(slug);
  } catch {
    notFound();
  }
  if (!lesson) notFound();

  let categoryName = lesson.category;
  let prev = null, next = null, siblings: Awaited<ReturnType<typeof getPrevNextLessons>>["siblings"] = [], currentIndex = -1;
  let related: Awaited<ReturnType<typeof getRelatedLessons>> = [];
  let megaMenu: Awaited<ReturnType<typeof getMegaMenu>> = [];

  try {
    const categories = await getCategoriesWithCounts();
    categoryName = categories.find((c) => c.slug === lesson.category)?.name ?? lesson.category;
    const nav = await getPrevNextLessons(slug, lesson.category);
    prev = nav.prev; next = nav.next; siblings = nav.siblings; currentIndex = nav.currentIndex;
    related = await getRelatedLessons(slug, lesson.raga, lesson.category);
    megaMenu = await getMegaMenu();
  } catch {
    // DB partially unavailable — page will work without nav/enhanced data
  }

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
    url: `${SITE_URL}/lessons/${lesson.id}`,
    isAccessibleForFree: true,
    publisher: {
      "@type": "Person",
      name: "Suka Pavalan",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav megaMenu={megaMenu} />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#16102A" }}>
        <main style={{ flex: 1 }}>
          <LessonPage
            lesson={lesson}
            categoryName={categoryName}
            prev={prev}
            next={next}
            siblings={siblings}
            currentIndex={currentIndex}
            related={related}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
