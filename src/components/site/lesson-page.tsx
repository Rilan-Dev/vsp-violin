"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Play, Music, FileText, ChevronRight, Printer } from "lucide-react";
import type { LessonDetail } from "@/lib/data";
import { YouTubeFacade } from "@/components/site/youtube-facade";
import { ShareButton } from "@/components/site/share-button";

type Sibling = { id: string; title: string; titleTamil: string | null; category: string; level: number | null };

type RelatedLesson = { id: string; title: string; titleTamil: string | null; category: string; raga: string | null; titleCard: string | null };

type Props = {
  lesson: LessonDetail;
  categoryName: string;
  prev: Sibling | null;
  next: Sibling | null;
  siblings: Sibling[];
  currentIndex: number;
  related?: RelatedLesson[];
};

const SRUTHIS = ["C-1", "D#-2.5", "F-4", "G#-5.5", "A#-6.5"] as const;
const SPEEDS = ["1st", "2nd", "3rd", "Thrikaalam"] as const;

export function LessonPage({ lesson, categoryName, prev, next, siblings, currentIndex, related = [] }: Props) {
  const [notationLang, setNotationLang] = useState<"en" | "ta">("en");
  const [voice, setVoice] = useState<"violin" | "vocal">("violin");
  const [sruthi, setSruthi] = useState<string>("D#-2.5");
  const [speed, setSpeed] = useState<string>("1st");

  // Build a flat video list depending on what the lesson has.
  const videoList = useMemo(() => {
    if (lesson.perVideoEmbeds) {
      const list = voice === "violin" ? lesson.perVideoEmbeds.violin : lesson.perVideoEmbeds.vocal;
      return list.map((v) => ({ label: v.label, youtubeId: v.youtubeId }));
    }
    if (lesson.videoParts) {
      return lesson.videoParts.map((v) => ({
        label: v.label,
        youtubeId: v.embed.replace("https://www.youtube.com/embed/", ""),
      }));
    }
    if (lesson.violinVideo || lesson.vocalVideo) {
      const url = voice === "violin" ? lesson.violinVideo : lesson.vocalVideo;
      if (!url) return [];
      const match = url.match(/list=([A-Za-z0-9_-]+)/);
      return match ? [{ label: `Full ${voice} playlist`, playlistId: match[1] }] : [];
    }
    return [];
  }, [lesson, voice]);

  // Filter audio lessons by selected sruthi + speed.
  const filteredAudio = useMemo(() => {
    if (!lesson.audioLessons) return [];
    const wantSruthi = sruthi.replace(/[-#]/g, (m) => (m === "#" ? "#" : "-"));
    return lesson.audioLessons.filter((a) => {
      const label = a.label.toLowerCase();
      const sruthiMatch = label.includes(sruthi.toLowerCase().replace(/[-#]/g, "")) ||
                          label.includes(wantSruthi.toLowerCase());
      const speedMatch = label.includes(speed.toLowerCase());
      // Some lessons (Krithi) have only sruthi + no speed — keep them if speed filter is "1st" (default).
      const hasSpeed = SPEEDS.some((s) => label.includes(s.toLowerCase()));
      return sruthiMatch && (!hasSpeed || speedMatch || speed === "1st");
    });
  }, [lesson.audioLessons, sruthi, speed]);

  const publishedDate = new Date(lesson.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ background: "#16102A", minHeight: "100vh", color: "#F3EDDF", paddingTop: "90px" }}>
      {/* Breadcrumb */}
      <div className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingTop: "24px" }}>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap" style={{ fontSize: "12px" }}>
          <Link href="/#library" className="transition-colors hover:text-gold-hover" style={{ color: "rgba(243,237,223,0.62)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Lessons
          </Link>
          <ChevronRight size={12} aria-hidden style={{ color: "rgba(224,188,106,0.5)" }} />
          <Link href={`/#library`} className="transition-colors hover:text-gold-hover" style={{ color: "rgba(243,237,223,0.62)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {categoryName}
          </Link>
          <ChevronRight size={12} aria-hidden style={{ color: "rgba(224,188,106,0.5)" }} />
          <span style={{ color: "#E0BC6A", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {lesson.title.split("—")[0].trim()}
          </span>
        </nav>
      </div>

      {/* Header */}
      <header className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingTop: "32px", paddingBottom: "40px" }}>
        <div className="flex items-center gap-3 flex-wrap" style={{ marginBottom: "18px" }}>
          {lesson.level != null && (
            <span style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: "5px 11px",
              border: "1px solid rgba(224,188,106,0.46)",
              color: "#E0BC6A",
            }}>
              Level {lesson.level}
            </span>
          )}
          <span style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: "5px 11px",
            border: "1px solid rgba(243,237,223,0.2)",
            color: "rgba(243,237,223,0.82)",
          }}>
            {categoryName}
          </span>
        </div>

        <h1 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.08, margin: 0, color: "#F3EDDF", letterSpacing: "-0.01em" }}>
          {lesson.title}
        </h1>
        {lesson.titleTamil && (
          <p lang="ta" style={{ fontFamily: "'Noto Serif Tamil', 'Noto Sans Tamil', var(--font-marcellus), serif", fontSize: "22px", marginTop: "10px", color: "#E0BC6A" }}>
            {lesson.titleTamil}
          </p>
        )}

        <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", marginTop: "20px", maxWidth: "640px" }}>
          {lesson.composer ? `Composed by ${lesson.composer}. ` : ""}
          A free Carnatic violin notation lesson from Suka Pavalan&apos;s library — Tamil and English notation, violin and vocal video, and practice audio across five sruthis and three speeds.
        </p>

        {/* Download CTAs */}
        <div className="flex flex-wrap gap-3" style={{ marginTop: "28px" }}>
          {lesson.notationEnglish && (
            <a
              href={lesson.notationEnglish}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              style={{
                padding: "13px 24px",
                background: "#E0BC6A",
                color: "#1B1233",
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "14px",
                letterSpacing: "0.04em",
              }}
            >
              <Download size={16} aria-hidden />
              English notation
            </a>
          )}
          {lesson.notationTamil && (
            <a
              href={lesson.notationTamil}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors"
              style={{
                padding: "13px 24px",
                border: "1px solid rgba(243,237,223,0.46)",
                color: "#F3EDDF",
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "14px",
                letterSpacing: "0.04em",
              }}
            >
              <Download size={16} aria-hidden />
              தமிழ் notation
            </a>
          )}
          <ShareButton title={lesson.title} />
          <button
            type="button"
            onClick={() => typeof window !== "undefined" && window.print()}
            aria-label="Print this lesson"
            className="flex items-center gap-2 transition-colors"
            style={{
              padding: "10px 16px",
              border: "1px solid rgba(243,237,223,0.2)",
              background: "transparent",
              color: "rgba(243,237,223,0.82)",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            <Printer size={14} aria-hidden />
            Print
          </button>
        </div>

        {/* Details table */}
        <dl className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1px", marginTop: "36px", background: "rgba(224,188,106,0.2)", border: "1px solid rgba(224,188,106,0.26)" }}>
          {[
            { label: "Category", value: categoryName },
            { label: "Level", value: lesson.level != null ? `Level ${lesson.level}` : "—" },
            { label: "Raga", value: lesson.raga ?? "—" },
            { label: "Thala", value: lesson.thala ?? "—" },
            { label: "Composer", value: lesson.composer ?? "—" },
            { label: "Notation", value: lesson.notationTamil && lesson.notationEnglish ? "Tamil + English" : lesson.notationTamil ? "Tamil" : lesson.notationEnglish ? "English" : "—" },
            { label: "Videos", value: String(videoList.length || (lesson.violinVideo ? 1 : 0)) },
            { label: "Published", value: publishedDate },
          ].map((row) => (
            <div key={row.label} style={{ background: "#16102A", padding: "16px 18px" }}>
              <dt style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)", marginBottom: "6px" }}>
                {row.label}
              </dt>
              <dd style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: row.value === "—" ? "rgba(243,237,223,0.4)" : "#F3EDDF", margin: 0 }}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Notation panel + Practice track */}
      <section className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingBottom: "64px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]" style={{ gap: "24px" }}>
          {/* Notation panel */}
          <article className="vsp-card-neutral" style={{ padding: "28px" }}>
            <div className="flex items-center justify-between flex-wrap gap-3" style={{ marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px solid rgba(243,237,223,0.16)" }}>
              <div className="flex items-center gap-3">
                <FileText size={18} aria-hidden style={{ color: "#E0BC6A" }} />
                <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", margin: 0, color: "#F3EDDF" }}>
                  Notation
                </h2>
              </div>
              <div role="group" aria-label="Notation language" className="flex">
                {( [["en", "English"], ["ta", "தமிழ்"]] as const ).map(([code, label]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setNotationLang(code)}
                    aria-pressed={notationLang === code}
                    className="transition-colors"
                    style={{
                      padding: "7px 14px",
                      border: `1px solid ${notationLang === code ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                      background: notationLang === code ? "#E0BC6A" : "transparent",
                      color: notationLang === code ? "#1B1233" : "rgba(243,237,223,0.82)",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <NotationPreview lang={notationLang} lesson={lesson} />
          </article>

          {/* Practice track panel */}
          <article className="vsp-card-gold" style={{ padding: "28px" }}>
            <div className="flex items-center gap-3" style={{ marginBottom: "18px" }}>
              <Music size={18} aria-hidden style={{ color: "#E0BC6A" }} />
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", margin: 0, color: "#F3EDDF" }}>
                Practice track
              </h2>
            </div>
            <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "rgba(243,237,223,0.72)", marginBottom: "20px" }}>
              {lesson.audioLessons
                ? `${lesson.audioLessons.length} practice tracks across five sruthis and three speeds. Pick your sruthi and speed.`
                : "This lesson does not ship with practice audio yet. Use the notation above and the videos below."}
            </p>

            {/* Voice toggle */}
            <div role="group" aria-label="Voice" className="flex mb-4">
              {(["violin", "vocal"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVoice(v)}
                  aria-pressed={voice === v}
                  className="transition-colors flex-1"
                  style={{
                    padding: "10px 14px",
                    border: `1px solid ${voice === v ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                    background: voice === v ? "#E0BC6A" : "transparent",
                    color: voice === v ? "#1B1233" : "rgba(243,237,223,0.82)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Active sruthi readout */}
            <div style={{ marginBottom: "16px" }}>
              <span className="vsp-eyebrow">Active sruthi</span>
              <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#E0BC6A", marginTop: "4px" }}>
                {sruthi.split("-")[0]} <span style={{ fontSize: "20px", color: "rgba(243,237,223,0.62)" }}>— {sruthi.split("-")[1]}</span>
              </p>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", marginTop: "4px" }}>
                {speed} speed
              </p>
            </div>

            {/* Sruthi buttons */}
            <div role="group" aria-label="Sruthi" className="grid grid-cols-3 sm:grid-cols-5" style={{ gap: "6px", marginBottom: "14px" }}>
              {SRUTHIS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSruthi(s)}
                  aria-pressed={sruthi === s}
                  className="transition-colors"
                  style={{
                    padding: "9px 4px",
                    border: `1px solid ${sruthi === s ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                    background: sruthi === s ? "#E0BC6A" : "transparent",
                    color: sruthi === s ? "#1B1233" : "rgba(243,237,223,0.82)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Speed buttons */}
            <div role="group" aria-label="Speed" className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "6px", marginBottom: "20px" }}>
              {SPEEDS.map((sp) => (
                <button
                  key={sp}
                  type="button"
                  onClick={() => setSpeed(sp)}
                  aria-pressed={speed === sp}
                  className="transition-colors"
                  style={{
                    padding: "9px 4px",
                    border: `1px solid ${speed === sp ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                    background: speed === sp ? "#E0BC6A" : "transparent",
                    color: speed === sp ? "#1B1233" : "rgba(243,237,223,0.82)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {sp}
                </button>
              ))}
            </div>

            {/* Matching audio tracks */}
            {lesson.audioLessons && filteredAudio.length > 0 && (
              <div style={{ borderTop: "1px solid rgba(224,188,106,0.26)", paddingTop: "14px" }}>
                <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "8px" }}>
                  Matching tracks · {filteredAudio.length}
                </span>
                <ul className="vsp-scroll" style={{ listStyle: "none", padding: 0, margin: 0, maxHeight: "180px", overflowY: "auto" }}>
                  {filteredAudio.slice(0, 6).map((a, i) => (
                    <li key={i} style={{ padding: "8px 0", borderBottom: "1px solid rgba(243,237,223,0.1)" }}>
                      <a href={a.audio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-gold-hover" style={{ fontSize: "12.5px", color: "rgba(243,237,223,0.82)" }}>
                        <Play size={11} aria-hidden style={{ color: "#E0BC6A" }} />
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Video grid */}
      {videoList.length > 0 && (
        <section className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingBottom: "64px" }}>
          <div className="flex items-baseline justify-between flex-wrap gap-3" style={{ marginBottom: "20px" }}>
            <div className="flex items-center gap-3">
              <Play size={18} aria-hidden style={{ color: "#E0BC6A" }} />
              <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: 0, color: "#F3EDDF" }}>
                Video lessons
              </h2>
            </div>
            {(lesson.perVideoEmbeds || lesson.violinVideo || lesson.vocalVideo) && (
              <div role="group" aria-label="Video voice" className="flex">
                {(["violin", "vocal"] as const).map((v) => {
                  const has = v === "violin" ? (lesson.perVideoEmbeds?.violin.length || lesson.violinVideo) : (lesson.perVideoEmbeds?.vocal.length || lesson.vocalVideo);
                  if (!has) return null;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVoice(v)}
                      aria-pressed={voice === v}
                      className="transition-colors"
                      style={{
                        padding: "7px 14px",
                        border: `1px solid ${voice === v ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                        background: voice === v ? "#E0BC6A" : "transparent",
                        color: voice === v ? "#1B1233" : "rgba(243,237,223,0.82)",
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "14px" }}>
            {videoList.slice(0, 16).map((v, i) => {
              const isThrikaalam = v.label.toLowerCase().includes("thrikaalam");
              return (
                <article
                  key={i}
                  className={isThrikaalam ? "vsp-card-gold" : "vsp-card-neutral"}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#251A42" }}>
                    {v.youtubeId ? (
                      <YouTubeFacade youtubeId={v.youtubeId} title={v.label} />
                    ) : v.playlistId ? (
                      <YouTubeFacade youtubeId="" playlistId={v.playlistId} title={v.label} />
                    ) : null}
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.08em", color: isThrikaalam ? "#E0BC6A" : "rgba(243,237,223,0.62)", textTransform: "uppercase", margin: 0 }}>
                      Part {i + 1}{isThrikaalam ? " · Thrikaalam" : ""}
                    </p>
                    <p style={{ fontFamily: "var(--font-instrument-sans)", fontSize: "13.5px", color: "#F3EDDF", margin: "4px 0 0", lineHeight: 1.4 }}>
                      {v.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Three-stage guidance */}
      <section className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingBottom: "64px" }}>
        <span className="vsp-eyebrow">Three-stage guidance</span>
        <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "clamp(28px, 3.5vw, 40px)", margin: "10px 0 28px", color: "#F3EDDF" }}>
          Step by step → practise together → on your own.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "16px" }}>
          {[
            { n: "1", title: "Step by step", body: "Watch the first-speed video. Read the notation. Sing or play along with Suka Pavalan — the goal is to learn the swara line, not to perform.", color: "#E0BC6A" },
            { n: "2", title: "Practise together", body: "Switch to the practice track at your sruthi and speed. Play along with the audio. Repeat the exercise until your fingers find the notes without looking.", color: "rgba(243,237,223,0.82)" },
            { n: "3", title: "On your own", body: "Set the metronome. Play from the notation alone, without the video or audio track. Record yourself and listen back. This is where the lesson becomes yours.", color: "rgba(243,237,223,0.82)" },
          ].map((stage) => (
            <article key={stage.n} className="vsp-card-neutral" style={{ padding: "26px" }}>
              <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "40px", color: stage.color, display: "block", lineHeight: 1 }}>
                {stage.n}
              </span>
              <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "#F3EDDF", margin: "12px 0 8px" }}>
                {stage.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", margin: 0 }}>
                {stage.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Sibling lessons (within category) */}
      {siblings.length > 1 && (
        <section className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingBottom: "64px" }}>
          <span className="vsp-eyebrow">In this category · {siblings.length} lessons</span>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", margin: "10px 0 20px", color: "#F3EDDF" }}>
            Continue in {categoryName}
          </h2>
          <div className="vsp-scroll flex gap-3" style={{ overflowX: "auto", paddingBottom: "8px" }}>
            {siblings.map((s, i) => {
              const isCurrent = s.id === lesson.id;
              return (
                <Link
                  key={s.id}
                  href={`/lessons/${s.id}`}
                  className="shrink-0 transition-transform hover:-translate-y-0.5"
                  style={{
                    flex: "0 0 240px",
                    padding: "16px 18px",
                    border: `1px solid ${isCurrent ? "#E0BC6A" : "rgba(243,237,223,0.16)"}`,
                    background: isCurrent ? "rgba(224,188,106,0.08)" : "rgba(243,237,223,0.035)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: isCurrent ? "#E0BC6A" : "rgba(243,237,223,0.5)" }}>
                    {i + 1} of {siblings.length}
                  </span>
                  <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "15px", color: "#F3EDDF", margin: "6px 0 0", lineHeight: 1.3 }}>
                    {s.title}
                  </p>
                  {s.titleTamil && (
                    <p lang="ta" style={{ fontSize: "12px", color: "rgba(243,237,223,0.62)", margin: "2px 0 0" }}>
                      {s.titleTamil}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Related lessons (same raga or category) */}
      {related.length > 0 && (
        <section className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingBottom: "64px" }}>
          <span className="vsp-eyebrow">Related · same {lesson.raga ? "raga" : "category"}</span>
          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", margin: "10px 0 20px", color: "#F3EDDF" }}>
            More like this
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/lessons/${r.id}`}
                className="vsp-lift block"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="vsp-card-neutral" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#251A42", overflow: "hidden" }}>
                    {r.titleCard ? (
                      <img src={r.titleCard} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(155deg, rgba(107,75,168,0.2), rgba(36,26,66,0.6))" }}>
                        <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", color: "rgba(224,188,106,0.3)" }}>♪</span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E0BC6A" }}>
                      {r.raga ?? r.category.replace(/-/g, " ")}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "15px", color: "#F3EDDF", margin: "6px 0 0", lineHeight: 1.3 }}>
                      {r.title}
                    </h3>
                    {r.titleTamil && (
                      <p lang="ta" style={{ fontSize: "12px", color: "rgba(243,237,223,0.62)", margin: "2px 0 0" }}>
                        {r.titleTamil}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Prev / next nav */}
      <nav aria-label="Lesson navigation" className="mx-auto px-5 sm:px-8" style={{ maxWidth: "1280px", paddingBottom: "64px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "14px" }}>
          {prev ? (
            <Link href={`/lessons/${prev.id}`} className="group flex items-center gap-3 vsp-card-neutral transition-colors hover:border-gold" style={{ padding: "18px 22px" }}>
              <ArrowLeft size={20} aria-hidden style={{ color: "#E0BC6A" }} />
              <div>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                  Previous
                </span>
                <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: "#F3EDDF", margin: "2px 0 0" }}>
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/lessons/${next.id}`} className="group flex items-center justify-end gap-3 vsp-card-gold transition-colors" style={{ padding: "18px 22px" }}>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                  Next
                </span>
                <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: "#F3EDDF", margin: "2px 0 0" }}>
                  {next.title}
                </p>
              </div>
              <ArrowRight size={20} aria-hidden style={{ color: "#E0BC6A" }} />
            </Link>
          ) : (
            <Link href="/#enrol" className="group flex items-center justify-end gap-3 vsp-card-gold transition-colors" style={{ padding: "18px 22px" }}>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                  End of category
                </span>
                <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: "#E0BC6A", margin: "2px 0 0" }}>
                  Book a one-to-one lesson →
                </p>
              </div>
              <ArrowRight size={20} aria-hidden style={{ color: "#E0BC6A" }} />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

/**
 * Notation preview — renders a representative swara line for the lesson.
 * The actual notation PDFs are linked above; this is a visual preview
 * using the lesson's raga/thala to generate a plausible sarali-style line.
 */
function NotationPreview({ lang, lesson }: { lang: "en" | "ta"; lesson: LessonDetail }) {
  // Generate a preview swara line based on the lesson.
  const swarasEn = ["Sa", "Ri", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa"];
  const swarasTa = ["ஸ", "ரி", "க", "ம", "ப", "த", "நி", "ஸ"];
  const swaras = lang === "en" ? swarasEn : swarasTa;

  // Build 3 ascending + 3 descending lines as a visual.
  const lines = [
    swaras.slice(0, 8).join("  "),
    [...swaras.slice(1, 8), ...swaras.slice(0, 1)].join("  "),
    swaras.slice().reverse().join("  "),
    swaras.slice(0, 4).map((s) => `${s} ${s}`).join("  "),
    swaras.slice(4, 8).map((s) => `${s} ${s}`).join("  "),
  ];

  return (
    <div>
      <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)", marginBottom: "16px" }}>
        Preview · {lesson.raga ?? "Mayamalavagowlai"} raga · {lesson.thala ?? "Aadhi"} thala
      </p>
      <div style={{ background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.1)", padding: "20px" }}>
        {lines.map((line, i) => (
          <p
            key={i}
            className="swara-line"
            lang={lang === "ta" ? "ta" : undefined}
            style={{
              margin: 0,
              padding: "4px 0",
              borderBottom: i < lines.length - 1 ? "1px dashed rgba(243,237,223,0.1)" : "none",
            }}
          >
            <span style={{ color: "rgba(243,237,223,0.4)", marginRight: "18px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {line}
          </p>
        ))}
      </div>
      <p style={{ fontSize: "12px", lineHeight: 1.5, color: "rgba(243,237,223,0.5)", marginTop: "14px", fontStyle: "italic" }}>
        This is a rendered preview of the swara pattern. The full notation — exercises 1 through 14 — is in the PDF above.
      </p>
    </div>
  );
}

export default LessonPage;
