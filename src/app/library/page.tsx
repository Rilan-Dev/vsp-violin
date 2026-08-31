import type { Metadata } from "next";
import { getLessons, getCategoriesWithCounts, getLibraryStats } from "@/lib/data";
import { LibraryPage } from "@/components/site/library-page";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Library — 22 free Carnatic violin notation lessons",
  description:
    "Every Carnatic violin lesson Suka Pavalan teaches, given away free. Tamil and English notation PDFs, violin and vocal video, and practice tracks in five sruthis. Browse by category, raga, or difficulty.",
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
  const [lessons, categories, stats, params] = await Promise.all([
    getLessons(),
    getCategoriesWithCounts(),
    getLibraryStats(),
    searchParams,
  ]);

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
