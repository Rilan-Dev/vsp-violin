"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X, ArrowLeft } from "lucide-react";
import { useReveal } from "@/components/site/use-reveal";
import type { CategoryWithCount } from "@/lib/data";

type LibraryLesson = {
  id: string;
  title: string;
  titleTamil: string | null;
  category: string;
  level: number | null;
  raga: string | null;
  thala: string | null;
  composer: string | null;
  date: string;
  titleCard: string | null;
  assets?: { hasEnglishNotation: boolean; hasTamilNotation: boolean; hasAudio: boolean; hasVideo: boolean };
};

type Props = {
  lessons: LibraryLesson[];
  categories: CategoryWithCount[];
  stats: { lessons: number; notationSheets: number; categories: number; ragas: number };
  initialCategory?: string;
  initialRaga?: string;
};

const CATEGORY_GROUP_LABELS: Record<string, string> = {
  basics: "Carnatic — Basics",
  advanced: "Carnatic — Advanced",
  devotional: "Devotional",
  light: "Light Music & Media",
  media: "Light Music & Media",
};

const CATEGORY_GROUP_ORDER = ["basics", "advanced", "devotional", "light", "media"];

export function LibraryPage({ lessons, categories, stats, initialCategory = "all", initialRaga = "all" }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeRaga, setActiveRaga] = useState<string>(initialRaga);
  const [search, setSearch] = useState("");
  const { ref, visible } = useReveal<HTMLElement>({ threshold: 0.05 });
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut: press "/" to focus the search input (like GitHub/YouTube).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Build raga index from lessons.
  const ragaIndex = useMemo(() => {
    const map = new Map<string, number>();
    for (const l of lessons) {
      if (l.raga) {
        map.set(l.raga, (map.get(l.raga) ?? 0) + 1);
      }
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [lessons]);

  // Filter lessons by category, raga, and search query.
  const filtered = useMemo(() => {
    return lessons.filter((l) => {
      if (activeCategory !== "all" && l.category !== activeCategory) return false;
      if (activeRaga !== "all" && l.raga !== activeRaga) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = [l.title, l.titleTamil ?? "", l.raga ?? "", l.thala ?? "", l.composer ?? "", l.category].join(" ").toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [lessons, activeCategory, activeRaga, search]);

  // Group filtered lessons by category group for display.
  const grouped = useMemo(() => {
    const groups: Record<string, LibraryLesson[]> = {};
    for (const l of filtered) {
      const cat = categories.find((c) => c.slug === l.category);
      const group = cat?.group ?? "advanced";
      if (!groups[group]) groups[group] = [];
      groups[group].push(l);
    }
    return groups;
  }, [filtered, categories]);

  const hasFilters = activeCategory !== "all" || activeRaga !== "all" || search.trim() !== "";

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveRaga("all");
    setSearch("");
  };

  return (
    <div style={{ background: "#16102A", minHeight: "100vh", color: "#F3EDDF", paddingTop: "80px" }}>
      <div className="mx-auto" style={{ maxWidth: "1440px", padding: "40px 32px 0" }}>
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
            marginBottom: "24px",
          }}
        >
          <ArrowLeft size={14} aria-hidden />
          Back to homepage
        </Link>

        {/* Header */}
        <span className="vsp-eyebrow">The Library · free forever</span>
        <h1
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(36px, 5vw, 58px)",
            lineHeight: 1.06,
            margin: "12px 0 20px",
            color: "#F3EDDF",
            letterSpacing: "-0.01em",
          }}
        >
          {stats.lessons} notation lessons.{" "}
          <span style={{ color: "#E0BC6A" }}>One lineage.</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.68, color: "rgba(243,237,223,0.82)", maxWidth: "640px", marginBottom: "36px" }}>
          Every Carnatic violin lesson Suka Pavalan teaches, given away free — Tamil and English notation PDFs,
          violin and vocal video, and practice tracks in five sruthis. The library is the funnel; one-to-one teaching is the craft.
        </p>

        {/* Stat block */}
        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: "repeat(2, minmax(0,1fr)) md:repeat(4, minmax(0,1fr))",
            background: "rgba(224,188,106,0.2)",
            border: "1px solid rgba(224,188,106,0.26)",
            marginBottom: "40px",
          }}
        >
          {[
            { label: "Lessons", value: stats.lessons },
            { label: "Notation sheets", value: stats.notationSheets },
            { label: "Categories", value: stats.categories },
            { label: "Ragas", value: stats.ragas },
          ].map((s) => (
            <div key={s.label} style={{ background: "#16102A", padding: "20px 22px" }}>
              <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "32px", color: "#E0BC6A", margin: 0, lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)", margin: "6px 0 0" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Search + filters */}
        <div style={{ marginBottom: "32px" }}>
          {/* Search */}
          <div className="flex items-center gap-3 mb-2" style={{ position: "relative" }}>
            <Search size={18} aria-hidden style={{ color: "#E0BC6A", position: "absolute", left: "14px" }} />
            <input
              ref={searchInputRef}
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Escape") { setSearch(""); (e.target as HTMLInputElement).blur(); } }}
              placeholder="Search by title, raga, thala, or composer…"
              aria-label="Search lessons"
              style={{
                width: "100%",
                maxWidth: "560px",
                padding: "13px 16px 13px 44px",
                background: "rgba(243,237,223,0.035)",
                border: "1px solid rgba(243,237,223,0.2)",
                color: "#F3EDDF",
                fontFamily: "var(--font-instrument-sans)",
                fontSize: "14.5px",
                borderRadius: 0,
                outline: "none",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                style={{
                  position: "absolute",
                  left: "calc(44px + 530px)",
                  background: "transparent",
                  border: "none",
                  color: "rgba(243,237,223,0.5)",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
          {/* Keyboard hint */}
          <p style={{ fontSize: "11.5px", color: "rgba(243,237,223,0.4)", margin: "0 0 20px", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.04em" }}>
            Press{" "}
            <kbd style={{ padding: "2px 7px", border: "1px solid rgba(224,188,106,0.34)", color: "#E0BC6A", fontSize: "11px", borderRadius: 0 }}>/</kbd>
            {" "}to focus search · <kbd style={{ padding: "2px 7px", border: "1px solid rgba(243,237,223,0.2)", color: "rgba(243,237,223,0.62)", fontSize: "11px", borderRadius: 0 }}>Esc</kbd>
            {" "}to clear
          </p>

          {/* Category chips */}
          <div style={{ marginBottom: "14px" }}>
            <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "10px" }}>Category</span>
            <div className="flex flex-wrap items-center" style={{ gap: "7px" }}>
              <Chip active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
                All {lessons.length}
              </Chip>
              {categories
                .filter((c) => c.count > 0)
                .map((c) => (
                  <Chip key={c.slug} active={activeCategory === c.slug} onClick={() => setActiveCategory(c.slug)}>
                    {c.name} {c.count}
                  </Chip>
                ))}
            </div>
          </div>

          {/* Raga chips */}
          {ragaIndex.length > 0 && (
            <div>
              <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "10px" }}>Raga</span>
              <div className="flex flex-wrap items-center" style={{ gap: "7px" }}>
                <Chip active={activeRaga === "all"} onClick={() => setActiveRaga("all")}>
                  All ragas
                </Chip>
                {ragaIndex.map(([raga, count]) => (
                  <Chip key={raga} active={activeRaga === raga} onClick={() => setActiveRaga(raga)}>
                    {raga} {count}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          {/* Active filter summary + clear */}
          {hasFilters && (
            <div className="flex items-center gap-3 mt-4" style={{ fontSize: "13px", color: "rgba(243,237,223,0.72)" }}>
              <span>
                Showing <span style={{ color: "#E0BC6A", fontFamily: "var(--font-marcellus), serif", fontSize: "16px" }}>{filtered.length}</span> of {lessons.length} lessons
              </span>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 transition-colors hover:text-gold-hover"
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "10.5px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(243,237,223,0.5)",
                  background: "transparent",
                  border: "1px solid rgba(243,237,223,0.2)",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: 0,
                }}
              >
                <X size={12} aria-hidden />
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grouped lessons */}
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} mx-auto`} style={{ maxWidth: "1440px", padding: "0 32px 80px" }}>
        {filtered.length === 0 ? (
          <div className="vsp-card-neutral" style={{ padding: "64px 48px", textAlign: "center" }}>
            <Search size={32} aria-hidden style={{ color: "rgba(243,237,223,0.3)", margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "rgba(243,237,223,0.62)", margin: 0 }}>
              No lessons match your filters.
            </p>
            <button
              onClick={clearFilters}
              style={{
                marginTop: "16px",
                padding: "10px 20px",
                background: "#E0BC6A",
                color: "#1B1233",
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "13px",
                border: "none",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          CATEGORY_GROUP_ORDER.map((group) => {
            const groupLessons = grouped[group];
            if (!groupLessons || groupLessons.length === 0) return null;
            return (
              <section key={group} style={{ marginBottom: "56px" }}>
                <div className="flex items-baseline justify-between mb-5" style={{ paddingBottom: "12px", borderBottom: "1px solid rgba(224,188,106,0.26)" }}>
                  <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "28px", margin: 0, color: "#F3EDDF" }}>
                    {CATEGORY_GROUP_LABELS[group]}
                  </h2>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                    {groupLessons.length} lesson{groupLessons.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid" style={{ gridTemplateColumns: "repeat(1, minmax(0,1fr)) sm:grid-cols-2 lg:grid-cols-3", gap: "16px" }}>
                  {groupLessons.map((lesson, i) => (
                    <LibraryCard key={lesson.id} lesson={lesson} gold={i === 0 && group === "basics"} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="transition-colors"
      style={{
        padding: "7px 13px",
        border: `1px solid ${active ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
        background: active ? "rgba(224,188,106,0.12)" : "transparent",
        color: active ? "#E0BC6A" : "rgba(243,237,223,0.82)",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        borderRadius: 0,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function LibraryCard({ lesson, gold }: { lesson: LibraryLesson; gold?: boolean }) {
  return (
    <Link
      href={`/lessons/${lesson.id}`}
      className="vsp-lift block"
      style={{ textDecoration: "none", color: "inherit", height: "100%" }}
    >
      <article
        className={gold ? "vsp-card-gold" : "vsp-card-neutral"}
        style={{ display: "flex", flexDirection: "column", overflow: "hidden", height: "100%" }}
      >
        {/* Title card image */}
        <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#251A42", overflow: "hidden" }}>
          {lesson.titleCard ? (
            <img
              src={lesson.titleCard}
              alt=""
              loading="lazy"
              decoding="async"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(155deg, rgba(107,75,168,0.2), rgba(36,26,66,0.6))" }}>
              <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "32px", color: "rgba(224,188,106,0.3)" }}>
                ♪
              </span>
            </div>
          )}
          {lesson.level != null && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "4px 9px",
                background: "rgba(22,16,42,0.85)",
                border: "1px solid rgba(224,188,106,0.46)",
                color: "#E0BC6A",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              L{lesson.level}
            </span>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
          <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: "8px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#E0BC6A" }}>
              {lesson.category.replace(/-/g, " ")}
            </span>
            {lesson.raga && (
              <>
                <span style={{ color: "rgba(243,237,223,0.3)", fontSize: "10px" }}>·</span>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)" }}>
                  {lesson.raga}
                </span>
              </>
            )}
          </div>
          <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", lineHeight: 1.3, color: "#F3EDDF", margin: 0 }}>
            {lesson.title}
          </h3>
          {lesson.titleTamil && (
            <p lang="ta" style={{ fontSize: "13px", color: "rgba(243,237,223,0.62)", margin: "4px 0 0" }}>
              {lesson.titleTamil}
            </p>
          )}
          {lesson.thala && (
            <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.08em", color: "rgba(243,237,223,0.5)", margin: "8px 0 0" }}>
              Thala: {lesson.thala}
            </p>
          )}
          <div className="flex items-center gap-1.5 mt-auto" style={{ paddingTop: "14px" }}>
            {[
              { label: "EN", present: lesson.assets?.hasEnglishNotation ?? true },
              { label: "TA", present: lesson.assets?.hasTamilNotation ?? true },
              { label: "♪", present: lesson.assets?.hasAudio ?? true },
              { label: "▶", present: lesson.assets?.hasVideo ?? true },
            ].map((b) => (
              <span
                key={b.label}
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "9.5px",
                  letterSpacing: "0.1em",
                  padding: "3px 6px",
                  border: `1px solid ${b.present ? "rgba(224,188,106,0.34)" : "rgba(243,237,223,0.1)"}`,
                  color: b.present ? "#E0BC6A" : "rgba(243,237,223,0.3)",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default LibraryPage;
