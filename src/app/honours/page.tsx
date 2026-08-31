import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import { getSiteContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Honours — 12 titles conferred on Suka Pavalan",
  description:
    "A journey adorned with prestigious titles — Violin Ratna, Vallalar, Violin Chakravarthy, and nine more honorifics awarded over a 37-year career. Each title is a testament to excellence and lasting impact.",
  openGraph: {
    title: "Honours — Violin Suka Pavalan",
    description: "12 honorific titles + 3 prestigious accolades across 37 years.",
    type: "website",
  },
};

export default function HonoursPage() {
  const c = getSiteContent();
  const honours = c.achievements;

  // Split honorifics into dated (with year) and undated
  const dated = honours.honorifics.filter((h) => h.year).sort((a, b) => (b.year! - a.year!));
  const undated = honours.honorifics.filter((h) => !h.year);

  return (
    <div style={{ background: "#16102A", minHeight: "100vh", color: "#F3EDDF", paddingTop: "80px" }}>
      <div className="mx-auto" style={{ maxWidth: "1200px", padding: "40px 32px 80px" }}>
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors hover:text-gold-hover"
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(243,237,223,0.62)",
            marginBottom: "32px",
          }}
        >
          <ArrowLeft size={14} aria-hidden />
          Back to homepage
        </Link>

        {/* Header */}
        <span className="vsp-eyebrow">Honours · conferred titles</span>
        <h1
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(36px, 5vw, 54px)",
            lineHeight: 1.08,
            margin: "14px 0 20px",
            color: "#F3EDDF",
            letterSpacing: "-0.01em",
          }}
        >
          A journey adorned with <span style={{ color: "#E0BC6A" }}>prestigious titles</span>.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "680px", marginBottom: "48px" }}>
          {honours.honorificsIntro}
        </p>

        {/* Dated honorifics — timeline */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3 mb-6">
            <Award size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Dated titles · {dated.length}</span>
          </div>
          <div className="flex flex-col" style={{ gap: "0" }}>
            {dated.map((h, i) => (
              <article
                key={h.title}
                className={i === 0 ? "vsp-card-gold" : "vsp-card-neutral"}
                style={{
                  padding: "24px 28px",
                  display: "grid",
                  gridTemplateColumns: "100px 1fr auto",
                  gap: "24px",
                  alignItems: "center",
                  marginBottom: i < dated.length - 1 ? "12px" : 0,
                }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "36px", color: "#E0BC6A", margin: 0, lineHeight: 1 }}>
                    {h.year}
                  </p>
                </div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", margin: 0 }}>
                    {h.title}
                  </h2>
                  <p style={{ fontSize: "14px", color: "rgba(243,237,223,0.72)", margin: "4px 0 0", fontStyle: "italic" }}>
                    {h.meaning}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", margin: 0 }}>
                    Awarded by
                  </p>
                  <p style={{ fontFamily: "var(--font-instrument-sans)", fontSize: "13.5px", color: "#F3EDDF", margin: "4px 0 0", maxWidth: "220px" }}>
                    {h.awardedBy ?? "—"}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Undated honorifics */}
        {undated.length > 0 && (
          <section style={{ marginBottom: "64px" }}>
            <span className="vsp-eyebrow">Additional titles · {undated.length}</span>
            <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: "10px 0 24px", color: "#F3EDDF" }}>
              Conferred over a lifetime of music.
            </h2>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {undated.map((h) => (
                <article key={h.title} className="vsp-card-neutral" style={{ padding: "20px 22px" }}>
                  <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "19px", color: "#E0BC6A", margin: 0 }}>
                    {h.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "rgba(243,237,223,0.72)", margin: "6px 0 0", fontStyle: "italic" }}>
                    {h.meaning}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Accolades */}
        <section style={{ marginBottom: "64px" }}>
          <span className="vsp-eyebrow">{honours.accoladesHeading}</span>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: "10px 0 24px", color: "#F3EDDF" }}>
            Beyond the titles.
          </h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(1, minmax(0,1fr))" }}>
            {honours.accolades.map((a, i) => (
              <article key={i} className="vsp-card-neutral" style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "#F3EDDF", margin: 0, lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", margin: "12px 0 0" }}>
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingTop: "32px", borderTop: "1px solid rgba(224,188,106,0.2)" }}>
          <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", marginBottom: "20px" }}>
            Learn from a recognised lineage.
          </p>
          <Link
            href="/#enrol"
            className="vsp-cta-gold inline-flex items-center gap-2"
            style={{
              padding: "14px 28px",
              background: "#E0BC6A",
              color: "#1B1233",
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "15px",
              letterSpacing: "0.04em",
            }}
          >
            Book a free trial
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
