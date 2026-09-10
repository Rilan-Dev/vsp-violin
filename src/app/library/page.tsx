export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { getLessons, getCategoriesWithCounts, getLibraryStats } from "@/lib/data";
import { LibraryPage } from "@/components/site/library-page";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Library — 22 free Carnatic violin notation lessons",
  description:
    "Every Carnatic violin lesson Suka Pavalan teaches, given away free. Tamil and English notation PDFs, violin and vocal video, and practice tracks in five sruthis. Browse by category, raga, or difficulty.",
  alternates: { canonical: "/library" },
    openGraph: {
    title: "The Library — Violin Suka Pavalan",
    description: "22 free Carnatic violin notation lessons. Free forever.",
    type: "website",
  },
};

export default async function LibraryRoute({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; raga?: string }>;
}) {
  const params = await searchParams;
  let lessons: Awaited<ReturnType<typeof getLessons>> = [];
  let categories: Awaited<ReturnType<typeof getCategoriesWithCounts>> = [];
  let stats = { lessons: 23, notationSheets: 46, categories: 19, ragas: 10 };

  try {
    [lessons, categories, stats] = await Promise.all([
      getLessons(),
      getCategoriesWithCounts(),
      getLibraryStats(),
    ]);
  } catch {
    // DB unavailable
  }

  return (
    <PageShell>
      <LibraryPage
        lessons={lessons.map((l) => ({
          ...l,
          assets: {
            hasEnglishNotation: Boolean(l.raga || l.titleTamil),
            hasTamilNotation: Boolean(l.titleTamil),
            hasAudio: true,
            hasVideo: true,
          },
        }))}
        categories={categories}
        stats={stats}
        initialCategory={params.category ?? "all"}
        initialRaga={params.raga ?? "all"}
      />
    </PageShell>
  );
}
