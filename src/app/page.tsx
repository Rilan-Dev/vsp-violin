export const dynamic = "force-dynamic";

import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { LibraryPreview } from "@/components/site/library-preview";
import { PracticeRoom } from "@/components/site/practice-room";
import { HomeTeasers } from "@/components/site/home-teasers";
import { Enrol } from "@/components/site/enrol";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import {
  getCategoriesWithCounts,
  getLessons,
  getLibraryStats,
  getMegaMenu,
} from "@/lib/data";

export default async function Home() {
  // Fetch data — falls back to empty if DB is unavailable (e.g., build time)
  let lessons: Awaited<ReturnType<typeof getLessons>> = [];
  let categories: Awaited<ReturnType<typeof getCategoriesWithCounts>> = [];
  let stats = { lessons: 23, notationSheets: 46, categories: 19, ragas: 10 };
  let megaMenu: Awaited<ReturnType<typeof getMegaMenu>> = [];

  try {
    [lessons, categories, stats, megaMenu] = await Promise.all([
      getLessons(),
      getCategoriesWithCounts(),
      getLibraryStats(),
      getMegaMenu(),
    ]);
  } catch (e) {
    console.warn("DB fetch failed, using fallback data:", e);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Violin Suka Pavalan",
        url: "https://sukapavalan.com",
        description: "Carnatic violin lessons & free notation library",
      },
      {
        "@type": "Person",
        name: "Suka Pavalan",
        jobTitle: "Carnatic Violinist & Music Educator",
        url: "https://sukapavalan.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karaikal",
          addressRegion: "Puducherry",
          addressCountry: "IN",
        },
        knowsAbout: ["Carnatic violin", "Carnatic music", "Violin teaching"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#library" className="skip-link">
        Skip to content
      </a>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#16102A",
        }}
      >
        <Nav megaMenu={megaMenu} />

        <main style={{ flex: 1 }}>
          <Hero />
          <Marquee />

          <Reveal as="div" threshold={0.08}>
            <LibraryPreview
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
            />
          </Reveal>

          <Reveal as="div" threshold={0.1}>
            <PracticeRoom />
          </Reveal>

          <Reveal as="div" threshold={0.06}>
            <HomeTeasers />
          </Reveal>

          <Reveal as="div" threshold={0.08}>
            <Enrol />
          </Reveal>
        </main>

        <Footer />
      </div>
    </>
  );
}
