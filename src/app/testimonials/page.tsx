import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { getSiteContent } from "@/lib/data";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Testimonials — students and peers on Suka Pavalan",
  description:
    "Diaspora parents, adult self-learners, and fellow musicians — in their own words. Four testimonials from across the world on Suka Pavalan's teaching and artistry.",
  alternates: { canonical: "/testimonials" },
    openGraph: {
    title: "Testimonials — Violin Suka Pavalan",
    description: "Students and peers, in their own words.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  const c = getSiteContent();
  const testimonials = c.home.testimonials;

  return (
    <PageShell>
    <div style={{ color: "#F3EDDF", paddingTop: "80px" }}>
      <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1100px", paddingTop: "40px", paddingBottom: "80px" }}>
        {/* Header */}
        <span className="vsp-eyebrow">Testimonials · from students and peers</span>
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
          See what all the <span style={{ color: "#E0BC6A" }}>talk</span> is about.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "680px", marginBottom: "56px" }}>
          Diaspora parents, adult self-learners, and fellow musicians — in their own words. These are unedited endorsements from students across the United States, India, and beyond.
        </p>

        {/* Testimonials grid — alternating layout */}
        <div className="flex flex-col gap-8" style={{ marginBottom: "64px" }}>
          {testimonials.map((t, i) => {
            const isTamil = /[\u0B80-\u0BFF]/.test(t.author) || /[\u0B80-\u0BFF]/.test(t.title);
            const isGold = i === 1; // middle testimonial highlighted
            return (
              <article
                key={i}
                className={isGold ? "vsp-card-gold" : "vsp-card-neutral"}
                style={{
                  padding: "36px 40px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "20px",
                }}
              >
                {/* Quote icon + title */}
                <div className="flex items-start gap-4">
                  <Quote size={28} aria-hidden style={{ color: "#E0BC6A", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "8px" }}>
                      Testimonial {String(i + 1).padStart(2, "0")} of {String(testimonials.length).padStart(2, "0")}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-marcellus), serif",
                        fontSize: "24px",
                        color: "#F3EDDF",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                      lang={isTamil ? "ta" : undefined}
                    >
                      {t.title}
                    </h2>
                  </div>
                </div>

                {/* Quote body */}
                <blockquote
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "rgba(243,237,223,0.88)",
                    margin: 0,
                    paddingLeft: "44px",
                    borderLeft: "2px solid rgba(224,188,106,0.34)",
                    textWrap: "pretty",
                  }}
                  lang={isTamil ? "ta" : undefined}
                >
                  {t.quote}
                </blockquote>

                {/* Attribution */}
                <div style={{ paddingLeft: "44px", borderTop: "1px solid rgba(243,237,223,0.12)", paddingTop: "16px" }}>
                  <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "#E0BC6A", margin: 0 }} lang={isTamil ? "ta" : undefined}>
                    {t.author}
                  </p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", margin: "4px 0 0" }} lang={isTamil ? "ta" : undefined}>
                    {t.place}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingTop: "32px", borderTop: "1px solid rgba(224,188,106,0.2)" }}>
          <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", marginBottom: "20px" }}>
            Join the students who found their guru.
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
    </PageShell>
  );
}
