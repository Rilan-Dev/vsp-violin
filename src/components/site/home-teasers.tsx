import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSiteContent } from "@/lib/data";

/**
 * Condensed teaser sections for the homepage.
 *
 * The homepage keeps: Hero, Marquee, Library Preview, Practice Room,
 * these teasers, and Enrol. The full Guru/Honours/Stage/Learn/Testimonials
 * content lives on their dedicated pages — these teasers are short
 * previews with a "Read more →" link.
 */
export function HomeTeasers() {
  const c = getSiteContent();
  const about = c.about;
  const achievements = c.achievements;

  const teasers = [
    {
      href: "/about",
      eyebrow: "The Guru · since 1990",
      title: "A lineage kept in the hands.",
      body: about.body[0].slice(0, 180) + "…",
      cta: "Read the full story",
    },
    {
      href: "/honours",
      eyebrow: "Honours · 12 titles",
      title: "A journey adorned with prestigious titles.",
      body: achievements.honorificsIntro.slice(0, 180) + "…",
      cta: "View all honours",
    },
    {
      href: "/stage",
      eyebrow: "Stage · 5,000+ performances",
      title: "Five thousand performances. One instrument.",
      body: about.performance.body.slice(0, 180) + "…",
      cta: "See the record",
    },
    {
      href: "/learn",
      eyebrow: "Learn the Violin",
      title: "Learn the language of the violin.",
      body: c.learnTheViolin.intro.slice(0, 180) + "…",
      cta: "Start learning",
    },
    {
      href: "/testimonials",
      eyebrow: "Testimonials",
      title: "See what all the talk is about.",
      body: c.home.testimonials[0].quote.slice(0, 160) + "…",
      cta: "Read all testimonials",
    },
  ];

  return (
    <section
      id="teasers"
      aria-label="Explore further"
      style={{
        padding: "80px 0",
        background: "#16102A",
        borderTop: "1px solid rgba(224,188,106,0.18)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1440px", padding: "0 32px" }}>
        <div style={{ marginBottom: "48px", maxWidth: "640px" }}>
          <span className="vsp-eyebrow">Explore further · five pages</span>
          <h2
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.1,
              margin: "12px 0 16px",
              color: "#F3EDDF",
              letterSpacing: "-0.005em",
            }}
          >
            The full story, one page at a time.
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(243,237,223,0.72)" }}>
            Each section below opens a dedicated page — the guru&apos;s lineage, the honours,
            the stage record, the instrument, and the students&apos; words.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teasers.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className={`vsp-lift block ${i === 0 ? "vsp-card-gold" : "vsp-card-neutral"}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                minHeight: "220px",
              }}
            >
              <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "12px" }}>
                {t.eyebrow}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "22px",
                  lineHeight: 1.25,
                  color: "#F3EDDF",
                  margin: "0 0 12px",
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.6,
                  color: "rgba(243,237,223,0.72)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {t.body}
              </p>
              <span
                className="vsp-gold-text flex items-center gap-1.5"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "15px",
                  marginTop: "20px",
                  color: "#E0BC6A",
                }}
              >
                {t.cta}
                <ArrowRight size={15} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeTeasers;
