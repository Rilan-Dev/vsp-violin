"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "@/components/site/use-reveal";

/* ------------------------------------------------------------------ *
 * Library Preview
 *
 * The retention driver / marketing funnel of the homepage. Renders a
 * header, a 4-cell stat row, category filter chips, and a responsive
 * grid of up to 8 lesson cards. Filter state is local (`useState`),
 * so the whole section is a client component that receives already-
 * fetched lessons + categories + stats as props from the server parent.
 *
 * Design tokens: `.vsp-card-neutral`, `.vsp-card-gold`, `.vsp-eyebrow`,
 * `.vsp-hairline-gold`. Hover behaviour for cards + chips is defined
 * in `globals.css` (`.lib-card`, `.lib-chip`) so it wins over the
 * `.vsp-card-neutral` border without `!important` on every utility.
 * ------------------------------------------------------------------ */

/* ---- Types ------------------------------------------------------ */

export type LessonAssetInfo = {
  hasEnglishNotation?: boolean;
  hasTamilNotation?: boolean;
  hasAudio?: boolean;
  hasVideo?: boolean;
};

export type LibraryLesson = {
  id: string;
  title: string;
  titleTamil: string | null;
  category: string;
  level: number | null;
  raga: string | null;
  thala: string | null;
  date: string;
  titleCard: string | null;
  /**
   * Optional per-lesson asset availability. If omitted, all four
   * badges (EN / TA / ♪ / ▶) render as present — a graceful fallback
   * so the component works with the minimal `LessonSummary` shape
   * returned by `getLessons()`. The server parent can supply this
   * from `getLessonById()` or a bulk asset query when wiring the page.
   */
  assets?: LessonAssetInfo;
};

export type LibraryCategory = {
  slug: string;
  name: string;
  group: string;
  order: number;
  count: number;
};

export type LibraryStats = {
  lessons: number;
  notationSheets: number;
  categories: number;
  ragas: number;
};

export type LibraryPreviewProps = {
  lessons: LibraryLesson[];
  categories: LibraryCategory[];
  stats: LibraryStats;
};

/* ---- Constants -------------------------------------------------- */

const MAX_CARDS = 8;

const LEVEL_LABELS: Record<number, string> = {
  1: "Level I",
  2: "Level II",
  3: "Level III",
  4: "Level IV",
  5: "Level V",
  6: "Level VI",
  7: "Level VII",
};

const STAT_CELLS: ReadonlyArray<{ key: keyof LibraryStats; label: string }> = [
  { key: "lessons", label: "Lessons" },
  { key: "notationSheets", label: "Notation sheets" },
  { key: "categories", label: "Categories" },
  { key: "ragas", label: "Ragas" },
];

const ASSET_BADGES: ReadonlyArray<{
  key: keyof LessonAssetInfo;
  label: string;
  title: string;
}> = [
  { key: "hasEnglishNotation", label: "EN", title: "English notation PDF" },
  { key: "hasTamilNotation", label: "TA", title: "Tamil notation PDF" },
  { key: "hasAudio", label: "♪", title: "Practice audio tracks" },
  { key: "hasVideo", label: "▶", title: "Violin / vocal video" },
];

const ALL_SLUG = "all";

/* ---- Helpers ---------------------------------------------------- */

function levelLabel(level: number | null): string | null {
  if (level == null) return null;
  return LEVEL_LABELS[level] ?? `Level ${level}`;
}

function categoryName(slug: string, categories: LibraryCategory[]): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

/* ---- Component -------------------------------------------------- */

export function LibraryPreview({
  lessons,
  categories,
  stats,
}: LibraryPreviewProps) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold: 0.12 });
  const [activeSlug, setActiveSlug] = useState<string>(ALL_SLUG);

  const visibleCategories = categories
    .filter((c) => c.count > 0)
    .slice()
    .sort((a, b) => b.count - a.count); // sort by count (most lessons first)

  // On the homepage, only show the top 6 categories + "All" + "View all" link
  // The full category list lives on the /library page
  const MAX_CHIPS = 6;
  const homepageCategories = visibleCategories.slice(0, MAX_CHIPS);
  const showViewAllLink = visibleCategories.length > MAX_CHIPS;

  const filtered =
    activeSlug === ALL_SLUG
      ? lessons
      : lessons.filter((l) => l.category === activeSlug);

  const shown = filtered.slice(0, MAX_CARDS);

  const totalCount = stats.lessons || lessons.length;
  const allLabel = `All ${totalCount}`;

  return (
    <section
      id="library"
      ref={ref}
      className={`reveal py-14 md:py-20 px-5 md:px-8 ${visible ? "is-visible" : ""}`}
      style={{ maxWidth: 1440, margin: "0 auto" }}
    >
      {/* ---- Header ------------------------------------------------- */}
      <header style={{ marginBottom: 40 }}>
        <span
          className="vsp-eyebrow"
          style={{ display: "block", marginBottom: 18 }}
        >
          The Library · free forever
        </span>
        <h2
          className="font-display"
          style={{
            margin: 0,
            fontSize: "clamp(30px, 4.2vw, 48px)",
            lineHeight: 1.06,
            letterSpacing: "0.005em",
            color: "#F3EDDF",
            maxWidth: "22ch",
          }}
        >
          {totalCount} notation lessons. One lineage.
        </h2>
        <p
          style={{
            margin: "20px 0 0",
            fontSize: 16,
            lineHeight: 1.65,
            color: "rgba(243, 237, 223, 0.72)",
            maxWidth: "62ch",
          }}
        >
          Every Carnatic violin lesson Suka Pavalan teaches, given away free —
          Tamil and English notation PDFs, violin and vocal video, and practice
          tracks in five sruthis. The library is the funnel; one-to-one
          teaching is the craft.
        </p>
      </header>

      {/* ---- Stat row ---------------------------------------------- */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          borderTop: "1px solid rgba(224, 188, 106, 0.26)",
          borderBottom: "1px solid rgba(224, 188, 106, 0.26)",
        }}
      >
        {STAT_CELLS.map((cell, i) => (
          <div
            key={cell.key}
            style={{
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              borderRight:
                i < STAT_CELLS.length - 1
                  ? "1px solid rgba(224, 188, 106, 0.22)"
                  : undefined,
            }}
          >
            <span
              className="font-display"
              style={{ fontSize: 30, lineHeight: 1, color: "#E0BC6A" }}
            >
              {stats[cell.key]}
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: "9.5px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(243, 237, 223, 0.62)",
              }}
            >
              {cell.label}
            </span>
          </div>
        ))}
      </div>

      {/* ---- Filter chips ------------------------------------------ */}
      <div style={{ marginTop: 34, marginBottom: 26 }}>
        <div className="flex flex-wrap items-center" style={{ gap: 7 }}>
          <span
            className="font-mono"
            style={{
              fontSize: "9.5px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(243, 237, 223, 0.6)",
              paddingRight: 6,
            }}
          >
            Category
          </span>
          <Chip
            label={allLabel}
            active={activeSlug === ALL_SLUG}
            onClick={() => setActiveSlug(ALL_SLUG)}
          />
          {homepageCategories.map((cat) => (
            <Chip
              key={cat.slug}
              label={`${cat.name} ${cat.count}`}
              active={activeSlug === cat.slug}
              onClick={() => setActiveSlug(cat.slug)}
            />
          ))}
          {showViewAllLink && (
            <a
              href="/library"
              className="transition-colors hover:text-gold-hover"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#E0BC6A",
                padding: "7px 13px",
                border: "1px solid rgba(224,188,106,0.34)",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              +{visibleCategories.length - MAX_CHIPS} more
            </a>
          )}
        </div>
      </div>

      {/* ---- Cards grid -------------------------------------------- */}
      {shown.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 16 }}
        >
          {shown.map((lesson, idx) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              categoryName={categoryName(lesson.category, categories)}
              gold={idx === 0}
            />
          ))}
        </div>
      ) : (
        <div
          className="font-mono"
          style={{
            padding: "48px 0",
            textAlign: "center",
            color: "rgba(243, 237, 223, 0.5)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            border: "1px dashed rgba(243, 237, 223, 0.18)",
          }}
        >
          No lessons in this category yet.
        </div>
      )}

      {/* ---- Bottom CTA -------------------------------------------- */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a
          href="/library"
          className="font-display"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 19,
            letterSpacing: "0.02em",
            color: "#E0BC6A",
            borderBottom: "1px solid rgba(224, 188, 106, 0.34)",
            paddingBottom: 6,
            transition: "color 200ms ease, border-color 200ms ease",
          }}
        >
          Browse all {totalCount} lessons
          <span aria-hidden style={{ transform: "translateY(-1px)" }}>
            →
          </span>
        </a>
      </div>
    </section>
  );
}

/* ---- Chip ------------------------------------------------------- */

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="lib-chip font-mono"
      style={{
        padding: "9px 16px",
        border: active
          ? "1px solid rgba(224, 188, 106, 0.6)"
          : "1px solid rgba(243, 237, 223, 0.5)",
        background: active ? "rgba(224, 188, 106, 0.08)" : "transparent",
        color: active ? "#E0BC6A" : "rgba(243, 237, 223, 0.72)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        borderRadius: 0,
      }}
    >
      {label}
    </button>
  );
}

/* ---- Lesson card ------------------------------------------------ */

function LessonCard({
  lesson,
  categoryName,
  gold,
}: {
  lesson: LibraryLesson;
  categoryName: string;
  gold: boolean;
}) {
  const level = levelLabel(lesson.level);
  const meta = [categoryName, level].filter(Boolean).join(" · ");
  const ragaThala = [lesson.raga, lesson.thala].filter(Boolean).join(" · ");

  // Resolve assets with graceful defaults (all present if omitted).
  const assets: Required<LessonAssetInfo> = {
    hasEnglishNotation: lesson.assets?.hasEnglishNotation ?? true,
    hasTamilNotation: lesson.assets?.hasTamilNotation ?? true,
    hasAudio: lesson.assets?.hasAudio ?? true,
    hasVideo: lesson.assets?.hasVideo ?? true,
  };

  return (
    <Link
      href={`/lessons/${lesson.id}`}
      className="block h-full"
      style={{ textDecoration: "none", color: "inherit", height: "100%" }}
    >
    <article
      className={`lib-card ${gold ? "lib-card-gold vsp-card-gold" : "vsp-card-neutral"}`}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Title card image / placeholder (16:9) */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          background: "#251A42",
          overflow: "hidden",
        }}
      >
        {lesson.titleCard ? (
          <img
            src={lesson.titleCard}
            alt=""
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              background:
                "linear-gradient(155deg, #2A1D4E 0%, #251A42 60%, #1A1234 100%)",
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: 19,
                lineHeight: 1.22,
                textAlign: "center",
                color: "rgba(243, 237, 223, 0.78)",
                maxWidth: "18ch",
              }}
            >
              {lesson.title}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 9,
          padding: "18px 20px 20px",
          flex: 1,
        }}
      >
        {/* Category · Level */}
        {meta && (
          <div
            className="font-mono"
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#E0BC6A",
            }}
          >
            {meta}
          </div>
        )}

        {/* Title */}
        <h3
          className="font-display"
          style={{
            margin: 0,
            fontSize: 21,
            lineHeight: 1.2,
            color: "#F3EDDF",
          }}
        >
          {lesson.title}
        </h3>

        {/* Tamil title */}
        {lesson.titleTamil && (
          <div
            style={{
              fontSize: 13,
              lineHeight: 1.4,
              color: "rgba(243, 237, 223, 0.62)",
            }}
          >
            {lesson.titleTamil}
          </div>
        )}

        {/* Raga · Thala */}
        {ragaThala && (
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "rgba(243, 237, 223, 0.62)",
              marginTop: 2,
            }}
          >
            {ragaThala}
          </div>
        )}

        {/* Asset badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: "auto",
            paddingTop: 10,
          }}
        >
          {ASSET_BADGES.map((badge) => {
            const present = assets[badge.key];
            return (
              <span
                key={badge.key}
                title={badge.title}
                aria-label={badge.title}
                aria-hidden={false}
                className="font-mono"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 26,
                  height: 22,
                  padding: "0 7px",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  border: present
                    ? "1px solid rgba(224, 188, 106, 0.4)"
                    : "1px solid rgba(243, 237, 223, 0.18)",
                  background: present
                    ? "rgba(224, 188, 106, 0.1)"
                    : "transparent",
                  color: present ? "#E0BC6A" : "rgba(243, 237, 223, 0.3)",
                }}
              >
                {badge.label}
              </span>
            );
          })}
        </div>
      </div>
    </article>
    </Link>
  );
}

export default LibraryPreview;
