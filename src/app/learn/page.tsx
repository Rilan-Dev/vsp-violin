import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Music2, BookOpen } from "lucide-react";
import { getSiteContent } from "@/lib/data";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Learn the Violin — the instrument, the strings, the technique",
  description:
    "A free introduction to the violin: its history, the four strings (G, D, A, E), string materials (gut, steel, synthetic), and finger placement. The starting point for Suka Pavalan's Carnatic violin lessons.",
  alternates: { canonical: "/learn" },
    openGraph: {
    title: "Learn the Violin — Violin Suka Pavalan",
    description: "The instrument, the strings, the technique. A free introduction.",
    type: "article",
  },
};

const STRING_WATERMARK: Record<string, string> = {
  "G String (G3)": "G",
  "A String (A4)": "A",
  "D String (D4)": "D",
  "E String (E5)": "E",
};

const MATERIAL_SWATCH: Record<string, string> = {
  "Gut Strings": "#A87344",
  "Steel Strings": "#B8B8C0",
  "Synthetic Strings": "#C9AE6A",
};

export default function LearnPage() {
  const c = getSiteContent();
  const lv = c.learnTheViolin;

  return (
    <PageShell>
    <div style={{ color: "#F3EDDF", paddingTop: "90px" }}>
      <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1100px", paddingTop: "40px", paddingBottom: "80px" }}>
        {/* Header */}
        <span className="vsp-eyebrow">Learn the Violin · the instrument</span>
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
          Learn the <span style={{ color: "#E0BC6A" }}>language</span> of the violin.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "680px", marginBottom: "48px" }}>
          {lv.intro}
        </p>

        {/* History */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3 mb-5">
            <BookOpen size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">A short history</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: "0 0 20px", color: "#F3EDDF" }}>
            From 16th-century Cremona to Karaikal.
          </h2>
          <div className="flex flex-col gap-4" style={{ maxWidth: "680px" }}>
            {lv.violinHistory.map((p, i) => (
              <p key={i} style={{ fontSize: "16px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", textWrap: "pretty" }}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Pull quote */}
        <figure style={{ margin: "0 auto 64px", maxWidth: "860px", textAlign: "center" }}>
          <div aria-hidden="true" style={{ color: "#E0BC6A", fontSize: "18px", marginBottom: "18px" }}>✦</div>
          <blockquote
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.6vw, 28px)",
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

        {/* Violin strings */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3 mb-3">
            <Music2 size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">{lv.strings.heading}</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: "0 0 8px", color: "#F3EDDF" }}>
            Four strings. Four voices.
          </h2>
          <p style={{ fontSize: "14.5px", color: "rgba(243,237,223,0.72)", margin: "0 0 24px" }}>
            {lv.strings.intro}
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {lv.strings.items.map((s) => (
              <article key={s.name} className="vsp-card-neutral" style={{ padding: "24px", position: "relative", overflow: "hidden", minHeight: "160px" }}>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-16px",
                    right: "-8px",
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "96px",
                    lineHeight: 1,
                    color: "rgba(243,237,223,0.04)",
                    pointerEvents: "none",
                  }}
                >
                  {STRING_WATERMARK[s.name] ?? ""}
                </span>
                <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "#E0BC6A", margin: 0, position: "relative" }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", marginTop: "10px", position: "relative" }}>
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Materials + Fingering */}
        <section style={{ marginBottom: "64px" }}>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {/* Materials */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Music2 size={16} aria-hidden style={{ color: "#E0BC6A" }} />
                <span className="vsp-eyebrow">{lv.materials.heading}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", marginBottom: "20px" }}>
                {lv.materials.intro}
              </p>
              <div className="flex flex-col gap-3">
                {lv.materials.items.map((m) => (
                  <article key={m.name} className="vsp-card-neutral" style={{ padding: "16px 18px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 28px",
                        height: "28px",
                        marginTop: "2px",
                        background: MATERIAL_SWATCH[m.name] ?? "#E0BC6A",
                        border: "1px solid rgba(243,237,223,0.2)",
                      }}
                    />
                    <div>
                      <h4 style={{ fontFamily: "var(--font-instrument-sans)", fontWeight: 600, fontSize: "15px", color: "#F3EDDF", margin: 0 }}>
                        {m.name}
                      </h4>
                      <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "rgba(243,237,223,0.72)", marginTop: "4px" }}>
                        {m.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(243,237,223,0.62)", marginTop: "14px", fontStyle: "italic" }}>
                {lv.materials.closing}
              </p>
            </div>

            {/* Fingering */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Music2 size={16} aria-hidden style={{ color: "#E0BC6A" }} />
                <span className="vsp-eyebrow">{lv.fingering.heading}</span>
              </div>
              <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", marginBottom: "20px" }}>
                {lv.fingering.intro}
              </p>
              <ol className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {lv.fingering.items.map((f) => (
                  <li key={f.code} className="flex items-start gap-4">
                    <span
                      style={{
                        flex: "0 0 56px",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(224,188,106,0.46)",
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "14px",
                        color: "#E0BC6A",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {f.code.split(" – ")[0]}
                    </span>
                    <div style={{ paddingTop: "6px" }}>
                      <p style={{ fontFamily: "var(--font-instrument-sans)", fontWeight: 500, fontSize: "14px", color: "#F3EDDF" }}>
                        {f.code}
                      </p>
                      <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "rgba(243,237,223,0.72)", marginTop: "3px" }}>
                        {f.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingTop: "32px", borderTop: "1px solid rgba(224,188,106,0.2)" }}>
          <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", marginBottom: "12px" }}>
            Ready to learn Carnatic violin?
          </p>
          <p style={{ fontSize: "15px", color: "rgba(243,237,223,0.72)", marginBottom: "24px", maxWidth: "480px", margin: "0 auto 24px" }}>
            Start with the free notation library — 22 lessons from basic swaras to advanced krithis.
          </p>
          <Link
            href="/library"
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
            Browse the library
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
    </PageShell>
  );
}
