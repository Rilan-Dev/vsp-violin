import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { LibraryPreview } from "@/components/site/library-preview";
import { PracticeRoom } from "@/components/site/practice-room";
import { Guru } from "@/components/site/guru";
import { Honours } from "@/components/site/honours";
import { Testimonials } from "@/components/site/testimonials";
import { Enrol } from "@/components/site/enrol";
import { Stage } from "@/components/site/stage";
import { LearnViolin } from "@/components/site/learn-violin";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import {
  getCategoriesWithCounts,
  getLessons,
  getLibraryStats,
  getMegaMenu,
} from "@/lib/data";

export default async function Home() {
  // Single round-trip: categories (with live counts), lessons, stats, mega-menu.
  // All counts derive from the lesson collection — the client's category requirement.
  const [lessons, categories, stats, megaMenu] = await Promise.all([
    getLessons(),
    getCategoriesWithCounts(),
    getLibraryStats(),
    getMegaMenu(),
  ]);

  return (
    <>
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

        <main style={{ flex: 1, paddingTop: 0 }}>
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

          <Reveal as="div" threshold={0.08}>
            <Guru />
          </Reveal>

          <Reveal as="div" threshold={0.06}>
            <Honours />
          </Reveal>

          <Reveal as="div" threshold={0.08}>
            <Stage />
          </Reveal>

          <Reveal as="div" threshold={0.06}>
            <LearnViolin />
          </Reveal>

          <Reveal as="div" threshold={0.1}>
            <Testimonials />
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
