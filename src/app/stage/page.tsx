import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Radio, Music, MapPin, Calendar } from "lucide-react";
import { getSiteContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stage — 5,000+ performances by Suka Pavalan",
  description:
    "Five thousand live performances. All India Radio since 1992. Thyagaraja Aradhana every year. USA tours 2013-19. The public record of a 37-year Carnatic violin career.",
  openGraph: {
    title: "Stage — Violin Suka Pavalan",
    description: "5,000+ performances. AIR since 1992. USA tours.",
    type: "website",
  },
};

export default function StagePage() {
  const c = getSiteContent();
  const perf = c.about.performance;

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
        <span className="vsp-eyebrow">Stage · the public record</span>
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
          Five <span style={{ color: "#E0BC6A" }}>thousand</span> performances. One instrument.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "680px", marginBottom: "48px" }}>
          {perf.body}
        </p>

        {/* Performance record cards */}
        <section style={{ marginBottom: "64px" }}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {/* AIR */}
            <article className="vsp-card-neutral" style={{ padding: "26px" }}>
              <div className="flex items-center gap-3 mb-3">
                <Radio size={20} aria-hidden style={{ color: "#E0BC6A" }} />
                <span className="vsp-eyebrow">Radio</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "26px", color: "#E0BC6A", margin: 0 }}>
                All India Radio
              </h2>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", margin: "4px 0 14px" }}>
                {perf.radio.since}
              </p>
              <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", marginBottom: "16px" }}>
                {perf.radio.body}
              </p>
              <div className="flex flex-wrap gap-2" style={{ marginTop: "8px" }}>
                {perf.radio.stations.map((s) => (
                  <span key={s} style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.1em", padding: "5px 10px", border: "1px solid rgba(224,188,106,0.34)", color: "#E0BC6A", whiteSpace: "nowrap" }}>
                    {s}
                  </span>
                ))}
              </div>
            </article>

            {/* Stage — 5000+ */}
            <article className="vsp-card-neutral" style={{ padding: "26px" }}>
              <div className="flex items-center gap-3 mb-3">
                <Music size={20} aria-hidden style={{ color: "#E0BC6A" }} />
                <span className="vsp-eyebrow">Stage</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "26px", color: "#E0BC6A", margin: 0 }}>
                {perf.stage[0].since}
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.62, color: "rgba(243,237,223,0.82)", margin: "14px 0 0" }}>
                {perf.stage[0].body}
              </p>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)", marginTop: "auto", paddingTop: "18px" }}>
                Solo · ensemble · televised
              </p>
            </article>

            {/* Thyagaraja Aradhana */}
            <article className="vsp-card-gold" style={{ padding: "26px" }}>
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={20} aria-hidden style={{ color: "#E0BC6A" }} />
                <span className="vsp-eyebrow">Annual homage</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "26px", color: "#E0BC6A", margin: 0 }}>
                Thyagaraja Aradhana
              </h2>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(243,237,223,0.72)", margin: "4px 0 14px" }}>
                {perf.stage[1].since}
              </p>
              <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)" }}>
                {perf.stage[1].body}
              </p>
            </article>
          </div>

          {/* Closing line */}
          <p style={{ fontStyle: "italic", fontSize: "15px", lineHeight: 1.6, color: "rgba(243,237,223,0.62)", textAlign: "center", maxWidth: "760px", margin: "36px auto 0" }}>
            {perf.closing}
          </p>
        </section>

        {/* Gallery of Glory */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-baseline justify-between mb-5 flex-wrap gap-3">
            <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", color: "#F3EDDF", margin: 0 }}>
              Gallery of Glory
            </h2>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
              archive · 15 images · file needed
            </span>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {/* Lead portrait */}
            <figure style={{ position: "relative", height: "240px", border: "1px solid rgba(224,188,106,0.34)", gridColumn: "span 2", gridRow: "span 2" }}>
              <Image
                src="/assets/portraits/portrait-seated.jpeg"
                alt="Suka Pavalan seated with violin, stage portrait"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "linear-gradient(transparent, rgba(22,16,42,0.9))", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#E0BC6A" }}>
                Seated · stage portrait
              </figcaption>
            </figure>
            {/* Placeholder cards */}
            {["Award ceremony · 2024", "Thyagaraja Aradhana", "USA tour · 2017", "AIR broadcast", "Fusion collaboration", "TV performance"].map((label) => (
              <figure key={label} style={{ height: "116px", background: "linear-gradient(155deg, rgba(107,75,168,0.18), rgba(36,26,66,0.6))", border: "1px solid rgba(243,237,223,0.16)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                  {label}
                </span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(224,188,106,0.5)" }}>
                  file needed
                </span>
              </figure>
            ))}
          </div>
        </section>

        {/* USA Tours */}
        <section style={{ marginBottom: "64px" }}>
          <div
            style={{
              padding: "28px 32px",
              border: "1px solid rgba(224,188,106,0.34)",
              background: "linear-gradient(155deg, rgba(224,188,106,0.06), rgba(107,75,168,0.1))",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={16} aria-hidden style={{ color: "#E0BC6A" }} />
              <span className="vsp-eyebrow">Abroad tours</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", margin: "0 0 10px" }}>
              {c.about.tours.country}
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", margin: "0 0 16px", maxWidth: "640px" }}>
              {c.about.tours.body}
            </p>
            <div className="flex gap-3 flex-wrap">
              {c.about.tours.years.map((y) => (
                <span key={y} style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px", letterSpacing: "0.08em", padding: "8px 16px", border: "1px solid rgba(224,188,106,0.46)", color: "#E0BC6A" }}>
                  {y}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingTop: "32px", borderTop: "1px solid rgba(224,188,106,0.2)" }}>
          <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", marginBottom: "20px" }}>
            Book a performance.
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
            Enquire about booking
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
