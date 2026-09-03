import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Music2 } from "lucide-react";
import { getSiteContent } from "@/lib/data";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Learn the Violin — a Carnatic violin introduction",
  description:
    "A free introduction to the Carnatic violin: the four strings, finger placement, and how to begin. The starting point for Suka Pavalan's free notation library.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Learn the Violin — Violin Suka Pavalan",
    description: "A free introduction to the Carnatic violin.",
    type: "article",
  },
};

const STRING_WATERMARK: Record<string, string> = {
  "G String (G3)": "G",
  "A String (A4)": "A",
  "D String (D4)": "D",
  "E String (E5)": "E",
};

export default function LearnPage() {
  const c = getSiteContent();
  const lv = c.learnTheViolin;

  return (
    <PageShell>
    <div style={{ color: "#F3EDDF", paddingTop: "90px" }}>
      <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1100px", paddingTop: "40px", paddingBottom: "80px" }}>
        {/* Header */}
        <span className="vsp-eyebrow">Learn the Violin</span>
        <h1
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: 1.08,
            margin: "14px 0 20px",
            color: "#F3EDDF",
            letterSpacing: "-0.01em",
          }}
        >
          Learn the <span style={{ color: "#E0BC6A" }}>language</span> of the violin.
        </h1>

        {/* Short intro — kept brief, not overwhelming */}
        <p style={{ fontSize: "16px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "680px", marginBottom: "48px" }}>
          The violin is a timeless instrument known for its rich, expressive sound. Mastering it requires
          dedication, precision, and passion. Whether played solo or in an ensemble, it remains a symbol of
          elegance and artistic excellence. Here is what you need to know to begin your Carnatic violin journey.
        </p>

        {/* Pull quote — kept */}
        <figure style={{ margin: "0 auto 48px", maxWidth: "860px", textAlign: "center" }}>
          <div aria-hidden="true" style={{ color: "#E0BC6A", fontSize: "18px", marginBottom: "18px" }}>✦</div>
          <blockquote
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.4vw, 24px)",
              lineHeight: 1.4,
              color: "rgba(243,237,223,0.92)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            &ldquo;{lv.pullQuote.text}&rdquo;
          </blockquote>
          <figcaption
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(243,237,223,0.62)",
              marginTop: "18px",
            }}
          >
            — {lv.pullQuote.author}
          </figcaption>
          <div aria-hidden="true" style={{ color: "#E0BC6A", fontSize: "18px", marginTop: "18px" }}>✦</div>
        </figure>

        {/* Violin strings — kept (essential for beginners) */}
        <section style={{ marginBottom: "48px" }}>
          <div className="flex items-center gap-3 mb-3">
            <Music2 size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">{lv.strings.heading}</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", margin: "0 0 8px", color: "#F3EDDF" }}>
            Four strings. Four voices.
          </h2>
          <p style={{ fontSize: "14.5px", color: "rgba(243,237,223,0.72)", margin: "0 0 20px" }}>
            {lv.strings.intro}
          </p>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {lv.strings.items.map((s) => (
              <article key={s.name} className="vsp-card-neutral" style={{ padding: "18px", position: "relative", overflow: "hidden" }}>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "-4px",
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "64px",
                    lineHeight: 1,
                    color: "rgba(243,237,223,0.04)",
                    pointerEvents: "none",
                  }}
                >
                  {STRING_WATERMARK[s.name] ?? ""}
                </span>
                <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "#E0BC6A", margin: 0, position: "relative" }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(243,237,223,0.72)", marginTop: "8px", position: "relative" }}>
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Finger placement — kept (essential for beginners) */}
        <section style={{ marginBottom: "48px" }}>
          <div className="flex items-center gap-3 mb-3">
            <Music2 size={16} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">{lv.fingering.heading}</span>
          </div>
          <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", marginBottom: "16px" }}>
            {lv.fingering.intro}
          </p>
          <ol className="flex flex-col gap-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {lv.fingering.items.map((f) => (
              <li key={f.code} className="flex items-start gap-3">
                <span
                  style={{
                    flex: "0 0 48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(224,188,106,0.46)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "13px",
                    color: "#E0BC6A",
                    letterSpacing: "0.04em",
                  }}
                >
                  {f.code.split(" – ")[0]}
                </span>
                <div style={{ paddingTop: "4px" }}>
                  <p style={{ fontFamily: "var(--font-instrument-sans)", fontWeight: 500, fontSize: "13.5px", color: "#F3EDDF", margin: 0 }}>
                    {f.code}
                  </p>
                  <p style={{ fontSize: "13px", lineHeight: 1.5, color: "rgba(243,237,223,0.72)", marginTop: "2px", margin: 0 }}>
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingTop: "32px", borderTop: "1px solid rgba(224,188,106,0.2)" }}>
          <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "#F3EDDF", marginBottom: "12px" }}>
            Ready to learn Carnatic violin?
          </p>
          <p style={{ fontSize: "14px", color: "rgba(243,237,223,0.72)", marginBottom: "20px", maxWidth: "420px", margin: "0 auto 20px" }}>
            Start with the free notation library — 22 lessons from basic swaras to advanced krithis.
          </p>
          <Link
            href="/library"
            className="vsp-cta-gold inline-flex items-center gap-2"
            style={{
              padding: "12px 24px",
              background: "#E0BC6A",
              color: "#1B1233",
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "14px",
              letterSpacing: "0.04em",
            }}
          >
            Browse the library
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
    </PageShell>
  );
}
