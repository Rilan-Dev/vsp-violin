import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, Music2, GraduationCap, MapPin } from "lucide-react";
import { getSiteContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Guru — Suka Pavalan, Carnatic violinist since 1990",
  description:
    "A 37-year Carnatic violinist and teacher from Karaikal, Puducherry. Learn the lineage, the qualifications, the tours, and the mission of Suka Pavalan — violinist, music educator, and guru.",
  openGraph: {
    title: "The Guru — Violin Suka Pavalan",
    description: "37 years on stage. A lineage kept in the hands.",
    type: "profile",
  },
};

const LINEAGE = [
  { name: "Thiruvarur Shri S. Santhanam", detail: "Violin & Vocal — from age 6" },
  { name: "Nellai Shri E. Shanmuganathan", detail: "Violin & Vocal" },
  { name: "Mayavaram Shri S. Sivaswamy Iyer", detail: "Violin & Vocal" },
  { name: "Shri V. L. Sudharsan", detail: "Advanced violin" },
  { name: "Shri Kumaresh (Ganesh Kumaresh)", detail: "Advanced violin" },
  { name: "Porayar Shri Adisayam Arumairaj", detail: "Western music" },
  { name: "Shri S. Subramaniyan", detail: "Harmonium — Father" },
];

export default function AboutPage() {
  const c = getSiteContent();
  const about = c.about;

  return (
    <div style={{ background: "#16102A", minHeight: "100vh", color: "#F3EDDF", paddingTop: "80px" }}>
      <div className="mx-auto" style={{ maxWidth: "1100px", padding: "40px 32px 80px" }}>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]" style={{ alignItems: "start", marginBottom: "64px" }}>
          <div>
            <span className="vsp-eyebrow">The Guru · since 1990</span>
            <h1
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.08,
                margin: "14px 0 16px",
                color: "#F3EDDF",
                letterSpacing: "-0.01em",
              }}
            >
              A lineage kept in the <span style={{ color: "#E0BC6A" }}>hands</span>.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.62)",
                marginBottom: "24px",
              }}
            >
              {about.role}
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "560px" }}>
              A passionate violinist with a deep love for bringing music to life. With 37 years of experience,
              I specialize in classical and film music, performing as a soloist and collaborating with ensembles.
              My journey with the violin has taken me to notable performances, competitions, and achievements.
              Connecting with students across the globe and imparting knowledge of violin makes me complete as a guru.
            </p>
          </div>

          {/* Portrait */}
          <div style={{ position: "relative" }}>
            <div
              className="vsp-arch"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                height: "460px",
                margin: "0 auto",
                overflow: "hidden",
                border: "1px solid rgba(224,188,106,0.34)",
              }}
            >
              <Image
                src="/assets/portraits/portrait-playing.jpeg"
                alt="Suka Pavalan performing on violin"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                sizes="380px"
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(transparent 60%, rgba(22,16,42,0.7))",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
                <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", color: "#E0BC6A", margin: 0, letterSpacing: "0.04em" }}>
                  SUKA PAVALAN
                </p>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.72)", margin: "4px 0 0" }}>
                  {c.brand.credentials}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio paragraphs */}
        <section style={{ marginBottom: "64px" }}>
          <span className="vsp-eyebrow">The journey</span>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "32px", margin: "10px 0 24px", color: "#F3EDDF" }}>
            Five decades with the violin.
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: "680px" }}>
            {about.body.map((p, i) => (
              <p key={i} style={{ fontSize: "16px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", textWrap: "pretty" }}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Lineage */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3 mb-5">
            <Music2 size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Lineage · seven gurus</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: "0 0 24px", color: "#F3EDDF" }}>
            The teachers who shaped this music.
          </h2>
          <ol className="flex flex-col" style={{ listStyle: "none", padding: 0, margin: 0, gap: "0" }}>
            {LINEAGE.map((teacher, i) => (
              <li
                key={teacher.name}
                className="flex items-start gap-4"
                style={{
                  padding: "16px 0",
                  borderBottom: i < LINEAGE.length - 1 ? "1px solid rgba(243,237,223,0.08)" : "none",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "0 0 28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(224,188,106,0.34)",
                    color: "#E0BC6A",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "11px",
                  }}
                >
                  ✦
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "17px", color: "#F3EDDF", margin: 0 }}>
                    {teacher.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", margin: "4px 0 0" }}>
                    {teacher.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Qualifications */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Qualifications</span>
          </div>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(1, minmax(0,1fr)) md:grid-cols-2" }}>
            {about.education.map((q, i) => (
              <article key={i} className="vsp-card-neutral" style={{ padding: "20px 22px" }}>
                <h3 style={{ fontFamily: "var(--font-instrument-sans)", fontWeight: 600, fontSize: "15px", color: "#F3EDDF", margin: 0 }}>
                  {q.title}
                </h3>
                <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(243,237,223,0.62)", margin: "6px 0 0" }}>
                  {q.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Performance record */}
        <section style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3 mb-5">
            <Award size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Radio · Stage · Aradhana</span>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(1, minmax(0,1fr)) md:grid-cols-3" }}>
            <article className="vsp-card-neutral" style={{ padding: "22px" }}>
              <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", color: "#E0BC6A", margin: 0 }}>
                All India Radio
              </h3>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", margin: "4px 0 12px" }}>
                {about.performance.radio.since}
              </p>
              <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", margin: 0 }}>
                {about.performance.radio.body}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {about.performance.radio.stations.map((s) => (
                  <span key={s} style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.1em", padding: "4px 9px", border: "1px solid rgba(224,188,106,0.34)", color: "#E0BC6A" }}>
                    {s}
                  </span>
                ))}
              </div>
            </article>
            <article className="vsp-card-neutral" style={{ padding: "22px" }}>
              <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", color: "#E0BC6A", margin: 0 }}>
                {about.performance.stage[0].since}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", margin: "12px 0 0" }}>
                {about.performance.stage[0].body}
              </p>
            </article>
            <article className="vsp-card-gold" style={{ padding: "22px" }}>
              <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", color: "#E0BC6A", margin: 0 }}>
                Thyagaraja Aradhana
              </h3>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(243,237,223,0.72)", margin: "4px 0 12px" }}>
                {about.performance.stage[1].since}
              </p>
              <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", margin: 0 }}>
                {about.performance.stage[1].body}
              </p>
            </article>
          </div>
        </section>

        {/* Mission + Vision */}
        <section style={{ marginBottom: "64px" }}>
          <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(1, minmax(0,1fr)) md:grid-cols-2" }}>
            <div>
              <span className="vsp-eyebrow">Mission</span>
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", margin: "10px 0 16px", color: "#F3EDDF" }}>
                What this music is for.
              </h2>
              <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.home.mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span aria-hidden="true" style={{ color: "#E0BC6A", fontSize: "14px", lineHeight: 1.6, flexShrink: 0 }}>✦</span>
                    <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", margin: 0 }}>{m}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="vsp-eyebrow">Vision</span>
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", margin: "10px 0 16px", color: "#F3EDDF" }}>
                Where this music goes.
              </h2>
              <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.home.vision.map((v, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span aria-hidden="true" style={{ color: "#E0BC6A", fontSize: "14px", lineHeight: 1.6, flexShrink: 0 }}>✦</span>
                    <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", margin: 0 }}>{v}</p>
                  </li>
                ))}
              </ul>
            </div>
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
              {about.tours.country}
            </h3>
            <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.82)", margin: "0 0 16px", maxWidth: "640px" }}>
              {about.tours.body}
            </p>
            <div className="flex gap-3 flex-wrap">
              {about.tours.years.map((y) => (
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
            Begin learning from the lineage.
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
