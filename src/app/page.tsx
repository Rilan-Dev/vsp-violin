export const dynamic = "force-dynamic";

import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { LibraryPreview } from "@/components/site/library-preview";
// import { PracticeRoom } from "@/components/site/practice-room"; // re-enable with the section below
import { HomeTeasers } from "@/components/site/home-teasers";
import { Enrol } from "@/components/site/enrol";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { SITE_URL } from "@/lib/seo";
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
  // Last-resort values for when BOTH Prisma and the Supabase REST fallback are
  // unreachable. These drift from reality (they claimed 46 notation sheets
  // against an actual 32), so keep them conservative: zeros render as an
  // honest empty state rather than confidently wrong numbers.
  let stats = {
    lessons: 0,
    notationLessons: 0,
    notationSheets: 0,
    categories: 0,
    ragas: 0,
  };
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
        url: SITE_URL,
        description: "Carnatic violin lessons & free notation library",
      },
      {
        "@type": "Person",
        name: "Violin Suka Pavalan",
        jobTitle: "Carnatic Violinist & Music Educator",
        url: SITE_URL,
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

          {/* The Practice Room ("One dial. Fifteen tracks.") is hidden for now.
              It is being redesigned to carry podcast and discussion content,
              so it is commented out rather than deleted — the component and
              its audio logic stay in src/components/site/practice-room.tsx
              ready to be re-enabled by restoring this block.
          <Reveal as="div" threshold={0.1}>
            <PracticeRoom />
          </Reveal>
          */}

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
