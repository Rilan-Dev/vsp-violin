"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Check,
  Archive,
  Trash2,
  LogOut,
  Inbox,
  BookOpen,
  TrendingUp,
  Clock,
  PencilLine,
  ExternalLink,
  Check as CheckIcon,
  X,
  FolderTree,
  Plus,
  Tags,
  BarChart3,
  FileText,
  Image as ImageIcon,
  Home,
  Globe,
  MessageSquare,
  Phone,
  Sparkles,
} from "lucide-react";
import type { LessonSummary } from "@/lib/site-content-only";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  city: string | null;
  intent: string;
  instrument: string | null;
  level: string | null;
  whoFor: string | null;
  message: string;
  status: string;
  createdAt: string;
};

type LessonRow = LessonSummary & { hasNotation: boolean; hasVideo: boolean };

type StudioData = {
  enquiries: Enquiry[];
  counts: { total: number; new: number; replied: number; archived: number };
  lessons: LessonRow[];
  lessonsByCategory: { category: string; count: number }[];
  sourceBreakdown: { fromLessonPage: number; fromOther: number };
};

const INTENT_LABELS: Record<string, string> = {
  lesson: "One-to-one Lessons",
  booking: "Performance Booking",
  collaboration: "Collaboration",
};

/**
 * The Studio's top-level sections.
 *
 * This replaced seven flat tabs (Enquiries, Lessons, Categories, Analytics,
 * Content, Media, Settings). The client is not technical, and those names
 * mirrored database tables rather than anything they recognised: "Categories"
 * and "Media" read as peers of "Lessons" when they only exist to support it,
 * and "Settings" showed Prisma/Vercel internals they can do nothing with.
 *
 * Four sections now, each named for a job the owner actually has, ordered the
 * way the business runs: see what needs doing, answer the people who wrote in,
 * publish teaching material, then edit the public site.
 */
type StudioSection = "home" | "enquiries" | "lessons" | "website";

const STUDIO_SECTIONS: ReadonlyArray<{
  key: StudioSection;
  label: string;
  icon: React.ReactNode;
}> = [
  { key: "home", label: "Home", icon: <Home size={15} aria-hidden /> },
  { key: "enquiries", label: "Enquiries", icon: <Inbox size={15} aria-hidden /> },
  { key: "lessons", label: "Lessons", icon: <BookOpen size={15} aria-hidden /> },
  { key: "website", label: "My Website", icon: <Globe size={15} aria-hidden /> },
];

const INTENT_COLORS: Record<string, string> = {
  lesson: "#E0BC6A",
  booking: "#C9AEF5",
  collaboration: "#78DCAA",
};

export function StudioDashboard({
  lessons: initialLessons,
  initialUser,
}: {
  lessons: LessonSummary[];
  initialUser?: { id?: string; email?: string } | null;
}) {
  const [data, setData] = useState<StudioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [section, setSection] = useState<StudioSection>("home");
  // Sub-panels inside a section, so Categories and Media no longer need
  // top-level screens of their own.
  const [lessonsPanel, setLessonsPanel] = useState<"lessons" | "categories">("lessons");
  const [websitePanel, setWebsitePanel] = useState<"content" | "media">("content");
  const [enquiriesPanel, setEnquiriesPanel] = useState<"list" | "insights">("list");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "replied" | "archived">("all");
  const [lessonCategoryFilter, setLessonCategoryFilter] = useState<string>("all");
  const [lessonSearch, setLessonSearch] = useState<string>("");
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      // Fetch enquiries + lessons in parallel. Each call fails gracefully so
      // a single broken API doesn't blank out the whole dashboard.
      const [enqRes, lessonsRes] = await Promise.allSettled([
        fetch("/api/studio/enquiries"),
        fetch("/api/studio/lessons"),
      ]);

      // Handle 401 on either — session expired, force re-login.
      if (
        (enqRes.status === "fulfilled" && enqRes.value.status === 401) ||
        (lessonsRes.status === "fulfilled" && lessonsRes.value.status === 401)
      ) {
        window.location.reload();
        return;
      }

      // Parse enquiries (fall back to empty if failed)
      let enquiries: Enquiry[] = [];
      let counts = { total: 0, new: 0, replied: 0, archived: 0 };
      if (enqRes.status === "fulfilled" && enqRes.value.ok) {
        const json = await enqRes.value.json().catch(() => ({ enquiries: [], counts }));
        enquiries = json.enquiries ?? [];
        counts = json.counts ?? counts;
      }

      // Parse lessons — prefer the API result; fall back to the
      // server-passed `initialLessons` prop (used during SSR fallback).
      let lessonSource: LessonSummary[] = initialLessons;
      if (lessonsRes.status === "fulfilled" && lessonsRes.value.ok) {
        const ljson = await lessonsRes.value.json().catch(() => ({ lessons: [] }));
        if (Array.isArray(ljson.lessons) && ljson.lessons.length > 0) {
          lessonSource = ljson.lessons;
        }
      }

      const lessonRows: LessonRow[] = lessonSource.map((l) => ({
        ...l,
        hasNotation: Boolean(l.raga || l.titleTamil),
        hasVideo: true,
      }));
      const lessonsByCategory = Object.entries(
        lessonRows.reduce<Record<string, number>>((acc, l) => {
          acc[l.category] = (acc[l.category] ?? 0) + 1;
          return acc;
        }, {})
      ).map(([category, count]) => ({ category, count }));

      setData({
        enquiries,
        counts,
        lessons: lessonRows,
        lessonsByCategory,
        sourceBreakdown: {
          fromLessonPage: enquiries.filter((e: Enquiry) =>
            e.message.toLowerCase().includes("lesson") || e.intent === "lesson"
          ).length,
          fromOther: enquiries.filter(
            (e: Enquiry) => !e.message.toLowerCase().includes("lesson") && e.intent !== "lesson"
          ).length,
        },
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [initialLessons, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateStatus = async (id: string, status: "new" | "replied" | "archived") => {
    // Optimistic update
    setData((prev) => {
      if (!prev) return prev;
      const enquiries = prev.enquiries.map((e) =>
        e.id === id ? { ...e, status } : e
      );
      const counts = {
        total: enquiries.length,
        new: enquiries.filter((e) => e.status === "new").length,
        replied: enquiries.filter((e) => e.status === "replied").length,
        archived: enquiries.filter((e) => e.status === "archived").length,
      };
      return { ...prev, enquiries, counts };
    });
    setSelectedEnquiry((prev) => (prev?.id === id ? { ...prev, status } : prev));

    await fetch(`/api/studio/enquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  const deleteEnquiry = async (id: string) => {
    setData((prev) => {
      if (!prev) return prev;
      const enquiries = prev.enquiries.filter((e) => e.id !== id);
      const counts = {
        total: enquiries.length,
        new: enquiries.filter((e) => e.status === "new").length,
        replied: enquiries.filter((e) => e.status === "replied").length,
        archived: enquiries.filter((e) => e.status === "archived").length,
      };
      return { ...prev, enquiries, counts };
    });
    setSelectedEnquiry(null);
    await fetch(`/api/studio/enquiries/${id}`, { method: "DELETE" });
  };

  const logout = async () => {
    await fetch("/api/studio/auth", { method: "DELETE" });
    await fetch("/api/studio/logout", { method: "POST" }); // also clear old cookie
    window.location.reload();
  };

  const filteredEnquiries = data
    ? filter === "all"
      ? data.enquiries
      : data.enquiries.filter((e) => e.status === filter)
    : [];

  // Filter lessons by category + search query (Lessons tab)
  const filteredLessons = data
    ? data.lessons.filter((l) => {
        if (lessonCategoryFilter !== "all" && l.category !== lessonCategoryFilter) return false;
        if (lessonSearch.trim()) {
          const q = lessonSearch.trim().toLowerCase();
          const hay = [l.title, l.titleTamil ?? "", l.raga ?? "", l.thala ?? "", l.category]
            .join(" ")
            .toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      })
    : [];

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#16102A", color: "#F3EDDF" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            background: "rgba(22,16,42,0.95)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            borderBottom: "1px solid rgba(224,188,106,0.24)",
          }}
        >
          <div className="flex items-center justify-between" style={{ padding: "14px 20px", gap: "16px" }}>
            <div className="flex items-center gap-4">
              <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", letterSpacing: "0.06em", color: "#E0BC6A" }}>
                VIOLIN SUKA PAVALAN
              </span>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                Studio
              </span>
            </div>
          </div>
        </header>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="px-5 py-6 md:px-8 md:py-8">
          <div className="flex items-center gap-3 mb-8">
            <div
              style={{
                width: 22,
                height: 22,
                border: "2px solid rgba(224,188,106,0.22)",
                borderTopColor: "#E0BC6A",
                borderRadius: "50%",
                animation: "vsp-spin 800ms linear infinite",
              }}
              aria-hidden
            />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.62)",
              }}
            >
              Loading studio…
            </span>
          </div>
          <div className="grid gap-4 mb-8 grid-cols-2 md:grid-cols-4" aria-hidden>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="vsp-card-neutral" style={{ padding: "20px 22px" }}>
                <div style={{ height: 10, marginBottom: 8, background: "rgba(243,237,223,0.08)", width: "60%" }} />
                <div style={{ height: 30, background: "rgba(243,237,223,0.12)", width: "40%" }} />
              </div>
            ))}
          </div>
          <div className="vsp-card-neutral" style={{ padding: "0", overflow: "hidden" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ padding: "18px 16px", borderBottom: "1px solid rgba(243,237,223,0.06)" }}>
                <div style={{ height: 14, background: "rgba(243,237,223,0.08)", width: `${70 - i * 5}%` }} />
              </div>
            ))}
          </div>
          <style>{`@keyframes vsp-spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ minHeight: "100vh", background: "#16102A", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
        <div className="vsp-card-gold" style={{ maxWidth: "520px", width: "100%", padding: "32px" }}>
          <span className="vsp-eyebrow" style={{ display: "block", marginBottom: 14, color: "#E08C50" }}>Studio · connection error</span>
          <h1 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "24px", color: "#F3EDDF", margin: "0 0 14px" }}>
            Couldn’t load the dashboard data.
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(243,237,223,0.72)", lineHeight: 1.6, margin: "0 0 18px" }}>
            The backend APIs didn’t respond. This usually means the database connection failed. Try reloading; if it persists, the database may need attention.
          </p>
          <pre style={{ padding: "12px 14px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(224,140,80,0.4)", color: "#F2C5A5", fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", overflowX: "auto", margin: "0 0 16px" }}>
            {error ?? "Unknown error"}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="vsp-cta-gold"
            style={{ padding: "11px 22px", background: "#E0BC6A", color: "#1B1233", fontFamily: "var(--font-marcellus), serif", fontSize: "13px", border: "none", cursor: "pointer", borderRadius: 0 }}
          >
            Reload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#16102A", color: "#F3EDDF" }}>
      {/* Studio bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(22,16,42,0.95)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          borderBottom: "1px solid rgba(224,188,106,0.24)",
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: "14px 20px", gap: "16px", flexWrap: "wrap" }}>
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", letterSpacing: "0.06em", color: "#E0BC6A" }}>
              VIOLIN SUKA PAVALAN
            </span>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
              Studio
            </span>
            {initialUser?.email && (
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "10.5px",
                  letterSpacing: "0.06em",
                  color: "rgba(243,237,223,0.42)",
                  paddingLeft: "12px",
                  borderLeft: "1px solid rgba(243,237,223,0.12)",
                }}
                title="Signed in"
              >
                {initialUser.email}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap" style={{ justifyContent: "flex-end" }}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{
                padding: "8px 14px",
                border: "1px solid rgba(224,188,106,0.4)",
                background: "transparent",
                color: "#E0BC6A",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <ExternalLink size={13} aria-hidden />
              View my site
            </a>
            <button
              onClick={logout}
              className="flex items-center gap-2 transition-colors"
              style={{
                padding: "8px 14px",
                border: "1px solid rgba(243,237,223,0.2)",
                background: "transparent",
                color: "rgba(243,237,223,0.62)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <LogOut size={13} aria-hidden />
              Sign out
            </button>
          </div>
        </div>

        {/* ---- Primary navigation -------------------------------------
            Four sections, named for what the owner is trying to DO, not
            for the database tables behind them. Categories now live
            inside Lessons (they only exist to group lessons) and Media
            lives inside Website (it is what visitors see), which removes
            two whole screens the client had to reason about. */}
        <nav
          aria-label="Studio sections"
          className="flex items-stretch gap-1 overflow-x-auto"
          style={{ padding: "0 20px", borderTop: "1px solid rgba(243,237,223,0.08)" }}
        >
          {STUDIO_SECTIONS.map((s) => {
            const active = section === s.key;
            const badge = s.key === "enquiries" ? data.counts.new : 0;
            return (
              <button
                key={s.key}
                onClick={() => setSection(s.key)}
                aria-current={active ? "page" : undefined}
                className="flex items-center gap-2 transition-colors whitespace-nowrap"
                style={{
                  padding: "14px 18px",
                  minHeight: 48,
                  border: "none",
                  borderBottom: `2px solid ${active ? "#E0BC6A" : "transparent"}`,
                  background: "transparent",
                  color: active ? "#E0BC6A" : "rgba(243,237,223,0.68)",
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  borderRadius: 0,
                }}
              >
                {s.icon}
                {s.label}
                {badge > 0 && (
                  <span
                    style={{
                      minWidth: 20,
                      height: 20,
                      padding: "0 6px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#78DCAA",
                      color: "#16102A",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "10.5px",
                    }}
                  >
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </header>

      <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="px-5 py-6 md:px-8 md:py-8">
        {section === "home" ? (
          <StudioHome
            counts={data.counts}
            enquiries={data.enquiries}
            lessonCount={data.lessons.length}
            draftCount={data.lessons.filter((l) => (l.status ?? "published") === "draft").length}
            onGo={(target) => {
              if (target === "enquiries") setSection("enquiries");
              if (target === "lessons") { setSection("lessons"); setLessonsPanel("lessons"); }
              if (target === "categories") { setSection("lessons"); setLessonsPanel("categories"); }
              if (target === "content") { setSection("website"); setWebsitePanel("content"); }
              if (target === "media") { setSection("website"); setWebsitePanel("media"); }
            }}
          />
        ) : null}

        {section === "enquiries" ? (
          <>
            <PanelSwitch
              value={enquiriesPanel}
              onChange={setEnquiriesPanel}
              options={[
                { key: "list", label: "The people who wrote in", icon: <Inbox size={13} aria-hidden /> },
                { key: "insights", label: "Where they come from", icon: <BarChart3 size={13} aria-hidden /> },
              ]}
            />
            {enquiriesPanel === "insights" ? <AnalyticsTab /> : (
          <>
            {/* Stats row */}
            <div className="grid gap-4 mb-8 grid-cols-2 md:grid-cols-4">
              <StatCard icon={<Mail size={18} />} label="Total" value={data.counts.total} color="#E0BC6A" />
              <StatCard icon={<Clock size={18} />} label="New" value={data.counts.new} color="#78DCAA" />
              <StatCard icon={<Check size={18} />} label="Replied" value={data.counts.replied} color="#C9AEF5" />
              <StatCard icon={<Archive size={18} />} label="Archived" value={data.counts.archived} color="rgba(243,237,223,0.5)" />
            </div>

            {/* Source breakdown */}
            <div className="vsp-card-neutral mb-8" style={{ padding: "20px 24px" }}>
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp size={16} aria-hidden style={{ color: "#E0BC6A" }} />
                <span className="vsp-eyebrow">Source breakdown</span>
              </div>
              <p style={{ fontSize: "14px", color: "rgba(243,237,223,0.82)", lineHeight: 1.6 }}>
                <span style={{ color: "#E0BC6A", fontFamily: "var(--font-marcellus), serif", fontSize: "20px" }}>
                  {data.sourceBreakdown.fromLessonPage}
                </span>{" "}
                of {data.counts.total} enquiries came through a lesson-related intent —
                the free library is the funnel working as designed.
              </p>
            </div>

            {/* Filter row */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {(["all", "new", "replied", "archived"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className="transition-colors"
                  style={{
                    padding: "7px 14px",
                    border: `1px solid ${filter === f ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                    background: filter === f ? "#E0BC6A" : "transparent",
                    color: filter === f ? "#1B1233" : "rgba(243,237,223,0.82)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: 0,
                  }}
                >
                  {f === "all" ? "All" : f}
                </button>
              ))}
            </div>

            {/* Enquiry list */}
            {filteredEnquiries.length === 0 ? (
              <div className="vsp-card-neutral" style={{ padding: "48px", textAlign: "center" }}>
                <Inbox size={32} aria-hidden style={{ color: "rgba(243,237,223,0.3)", margin: "0 auto 12px" }} />
                <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "rgba(243,237,223,0.62)" }}>
                  No enquiries{filter !== "all" ? ` with status "${filter}"` : ""} yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
                {/* Enquiry list */}
                <div className="vsp-scroll flex flex-col gap-2" style={{ maxHeight: "70vh", overflowY: "auto", paddingRight: "8px" }}>
                  {filteredEnquiries.map((e) => {
                    const isSelected = selectedEnquiry?.id === e.id;
                    const intentColor = INTENT_COLORS[e.intent] ?? "#E0BC6A";
                    return (
                      <button
                        key={e.id}
                        onClick={() => setSelectedEnquiry(e)}
                        className="text-left transition-colors"
                        style={{
                          padding: "16px 18px",
                          border: `1px solid ${isSelected ? "#E0BC6A" : e.status === "new" ? "rgba(224,188,106,0.34)" : "rgba(243,237,223,0.16)"}`,
                          background: isSelected ? "rgba(224,188,106,0.08)" : "rgba(243,237,223,0.035)",
                          cursor: "pointer",
                          borderRadius: 0,
                        }}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: "#F3EDDF" }}>
                            {e.name}
                          </span>
                          <span
                            style={{
                              fontSize: "9.5px",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              padding: "2px 8px",
                              border: `1px solid ${intentColor}`,
                              color: intentColor,
                              fontFamily: "var(--font-geist-mono), monospace",
                            }}
                          >
                            {INTENT_LABELS[e.intent] ?? e.intent}
                          </span>
                        </div>
                        <p style={{ fontSize: "12.5px", color: "rgba(243,237,223,0.62)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {e.message.slice(0, 80)}…
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                            {new Date(e.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          <span style={{ fontSize: "10px", color: e.status === "new" ? "#78DCAA" : e.status === "replied" ? "#C9AEF5" : "rgba(243,237,223,0.5)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                            {e.status}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Enquiry detail */}
                <div>
                  {selectedEnquiry ? (
                    <div className="vsp-card-neutral" style={{ padding: "28px", position: "sticky", top: "96px" }}>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div>
                          <h2 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "26px", margin: 0, color: "#F3EDDF" }}>
                            {selectedEnquiry.name}
                          </h2>
                          <p style={{ fontSize: "13px", color: "rgba(243,237,223,0.62)", margin: "4px 0 0", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.04em" }}>
                            {new Date(selectedEnquiry.createdAt).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
                          </p>
                        </div>
                        <span
                          style={{
                            fontSize: "10px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            padding: "4px 10px",
                            border: `1px solid ${INTENT_COLORS[selectedEnquiry.intent] ?? "#E0BC6A"}`,
                            color: INTENT_COLORS[selectedEnquiry.intent] ?? "#E0BC6A",
                            fontFamily: "var(--font-geist-mono), monospace",
                          }}
                        >
                          {INTENT_LABELS[selectedEnquiry.intent] ?? selectedEnquiry.intent}
                        </span>
                      </div>

                      <dl className="grid gap-px mb-5" style={{ gridTemplateColumns: "1fr 1fr", background: "rgba(243,237,223,0.16)" }}>
                        {[
                          { label: "Email", value: selectedEnquiry.email, href: `mailto:${selectedEnquiry.email}` },
                          { label: "Phone", value: selectedEnquiry.phone ?? "—", href: selectedEnquiry.phone ? `tel:${selectedEnquiry.phone}` : undefined },
                          { label: "City / TZ", value: selectedEnquiry.city ?? "—" },
                          { label: "Who for", value: selectedEnquiry.whoFor ?? "—" },
                          { label: "Instrument", value: selectedEnquiry.instrument ?? "—" },
                          { label: "Level", value: selectedEnquiry.level ?? "—" },
                        ].map((row) => (
                          <div key={row.label} style={{ background: "#1A1234", padding: "12px 14px" }}>
                            <dt style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "9.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)", marginBottom: "4px" }}>
                              {row.label}
                            </dt>
                            <dd style={{ fontSize: "14px", color: "#F3EDDF", margin: 0 }}>
                              {row.href ? (
                                <a href={row.href} style={{ color: "#E0BC6A" }}>{row.value}</a>
                              ) : (
                                row.value
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <div style={{ marginBottom: "20px" }}>
                        <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "8px" }}>Message</span>
                        <p style={{ fontSize: "14.5px", lineHeight: 1.65, color: "rgba(243,237,223,0.88)", whiteSpace: "pre-wrap" }}>
                          {selectedEnquiry.message}
                        </p>
                      </div>

                      {/* Reply link */}
                      <a
                        href={`mailto:${selectedEnquiry.email}?subject=Re: Your enquiry to Violin Suka Pavalan&body=Dear ${selectedEnquiry.name},%0D%0A%0D%0AThank you for your enquiry.%0D%0A%0D%0A`}
                        className="vsp-cta-gold flex items-center justify-center gap-2 mb-4"
                        style={{
                          padding: "12px 20px",
                          background: "#E0BC6A",
                          color: "#1B1233",
                          fontFamily: "var(--font-marcellus), serif",
                          fontSize: "14px",
                          letterSpacing: "0.04em",
                          textDecoration: "none",
                          borderRadius: 0,
                        }}
                      >
                        <Mail size={15} aria-hidden />
                        Reply by email
                      </a>

                      {/* Status actions */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="vsp-eyebrow" style={{ marginRight: "8px" }}>Status</span>
                        {([
                          { value: "new", label: "New", icon: <Clock size={13} /> },
                          { value: "replied", label: "Replied", icon: <Check size={13} /> },
                          { value: "archived", label: "Archive", icon: <Archive size={13} /> },
                        ] as const).map((s) => (
                          <button
                            key={s.value}
                            onClick={() => updateStatus(selectedEnquiry.id, s.value)}
                            aria-pressed={selectedEnquiry.status === s.value}
                            className="flex items-center gap-1.5 transition-colors"
                            style={{
                              padding: "7px 12px",
                              border: `1px solid ${selectedEnquiry.status === s.value ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                              background: selectedEnquiry.status === s.value ? "#E0BC6A" : "transparent",
                              color: selectedEnquiry.status === s.value ? "#1B1233" : "rgba(243,237,223,0.82)",
                              fontFamily: "var(--font-geist-mono), monospace",
                              fontSize: "10.5px",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              cursor: "pointer",
                              borderRadius: 0,
                            }}
                          >
                            {s.icon}
                            {s.label}
                          </button>
                        ))}
                        <button
                          onClick={() => deleteEnquiry(selectedEnquiry.id)}
                          className="flex items-center gap-1.5 transition-colors"
                          style={{
                            padding: "7px 12px",
                            border: "1px solid #E08C50",
                            background: "transparent",
                            color: "#E08C50",
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: "10.5px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            borderRadius: 0,
                            marginLeft: "auto",
                          }}
                        >
                          <Trash2 size={13} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="vsp-card-neutral" style={{ padding: "64px 48px", textAlign: "center" }}>
                      <Mail size={32} aria-hidden style={{ color: "rgba(243,237,223,0.3)", margin: "0 auto 16px" }} />
                      <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "rgba(243,237,223,0.62)" }}>
                        Select an enquiry to read it.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
            )}
          </>
        ) : null}

        {section === "lessons" ? (
          <>
            <PanelSwitch
              value={lessonsPanel}
              onChange={setLessonsPanel}
              options={[
                { key: "lessons", label: "My lessons", icon: <BookOpen size={13} aria-hidden /> },
                { key: "categories", label: "How they're grouped", icon: <Tags size={13} aria-hidden />, hint: "Categories organise lessons in the library and the site menu" },
              ]}
            />
            {lessonsPanel === "categories" ? <CategoriesTab /> : (
          <>
            <div className="grid gap-4 mb-8 grid-cols-2 md:grid-cols-4">
              <StatCard icon={<BookOpen size={18} />} label="Total lessons" value={data.lessons.length} color="#E0BC6A" />
              <StatCard icon={<BookOpen size={18} />} label="Categories" value={data.lessonsByCategory.length} color="#C9AEF5" />
              <StatCard icon={<BookOpen size={18} />} label="With notation" value={data.lessons.filter((l) => l.hasNotation).length} color="#78DCAA" />
              <StatCard icon={<BookOpen size={18} />} label="Drafts" value={data.lessons.filter((l) => (l.status ?? "published") === "draft").length} color="#E08C50" />
            </div>

            {/* Edit hint + new lesson button */}
            <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
              <div className="flex items-center gap-2" style={{ fontSize: "12.5px", color: "rgba(243,237,223,0.5)" }}>
                <PencilLine size={13} aria-hidden style={{ color: "#E0BC6A" }} />
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Click any field to edit · changes save instantly
                </span>
              </div>
              <NewLessonButton categories={data.lessonsByCategory.map((c) => ({ slug: c.category, name: c.category.replace(/-/g, " ") }))} onCreated={(lesson) => {
                setData((prev) => {
                  if (!prev) return prev;
                  const lessons = [...prev.lessons, { ...lesson, hasNotation: Boolean(lesson.raga || lesson.titleTamil), hasVideo: true }];
                  const lessonsByCategory = Object.entries(
                    lessons.reduce<Record<string, number>>((acc, l) => {
                      acc[l.category] = (acc[l.category] ?? 0) + 1;
                      return acc;
                    }, {})
                  ).map(([category, count]) => ({ category, count }));
                  return { ...prev, lessons, lessonsByCategory };
                });
              }} />
            </div>

            {/* Category filter + search */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <div className="flex items-center gap-2 flex-wrap" style={{ flex: "1 1 auto", minWidth: "260px" }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(243,237,223,0.6)",
                    paddingRight: 6,
                  }}
                >
                  Filter
                </span>
                <button
                  type="button"
                  onClick={() => setLessonCategoryFilter("all")}
                  aria-pressed={lessonCategoryFilter === "all"}
                  className="lib-chip font-mono"
                  style={{
                    padding: "6px 12px",
                    border: `1px solid ${lessonCategoryFilter === "all" ? "rgba(224,188,106,0.6)" : "rgba(243,237,223,0.18)"}`,
                    background: lessonCategoryFilter === "all" ? "rgba(224,188,106,0.1)" : "transparent",
                    color: lessonCategoryFilter === "all" ? "#E0BC6A" : "rgba(243,237,223,0.72)",
                    fontSize: "10.5px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  All ({data.lessons.length})
                </button>
                {data.lessonsByCategory
                  .slice()
                  .sort((a, b) => b.count - a.count)
                  .map((c) => {
                    const active = lessonCategoryFilter === c.category;
                    return (
                      <button
                        key={c.category}
                        type="button"
                        onClick={() => setLessonCategoryFilter(c.category)}
                        aria-pressed={active}
                        className="lib-chip font-mono"
                        style={{
                          padding: "6px 12px",
                          border: `1px solid ${active ? "rgba(224,188,106,0.6)" : "rgba(243,237,223,0.18)"}`,
                          background: active ? "rgba(224,188,106,0.1)" : "transparent",
                          color: active ? "#E0BC6A" : "rgba(243,237,223,0.72)",
                          fontSize: "10.5px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          borderRadius: 0,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.category.replace(/-/g, " ")} ({c.count})
                      </button>
                    );
                  })}
              </div>
              <div className="flex items-center gap-2" style={{ flex: "0 0 auto" }}>
                <input
                  type="search"
                  value={lessonSearch}
                  onChange={(e) => setLessonSearch(e.target.value)}
                  placeholder="Search title, raga…"
                  aria-label="Search lessons"
                  style={{
                    padding: "8px 12px",
                    background: "rgba(22,16,42,0.6)",
                    border: "1px solid rgba(243,237,223,0.18)",
                    color: "#F3EDDF",
                    fontFamily: "var(--font-instrument-sans)",
                    fontSize: "12.5px",
                    borderRadius: 0,
                    minWidth: "200px",
                    width: "100%",
                  }}
                />
                {(lessonSearch || lessonCategoryFilter !== "all") && (
                  <button
                    type="button"
                    onClick={() => { setLessonSearch(""); setLessonCategoryFilter("all"); }}
                    aria-label="Clear filter"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(243,237,223,0.2)",
                      color: "rgba(243,237,223,0.62)",
                      padding: "8px 10px",
                      cursor: "pointer",
                      borderRadius: 0,
                    }}
                  >
                    <X size={14} aria-hidden />
                  </button>
                )}
              </div>
            </div>

            {/* Lessons table */}
            <div className="vsp-card-neutral" style={{ padding: "0", overflow: "hidden" }}>
              <div className="vsp-scroll" style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(224,188,106,0.26)" }}>
                      {["Title", "Category", "Raga", "Thala", "Level", "Status", "Actions"].map((h) => (
                        <th key={h} style={{
                          textAlign: "left",
                          padding: "14px 16px",
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: "10px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(243,237,223,0.5)",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLessons.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ padding: "48px", textAlign: "center" }}>
                          <BookOpen size={28} aria-hidden style={{ color: "rgba(243,237,223,0.3)", margin: "0 auto 10px" }} />
                          <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "rgba(243,237,223,0.62)", margin: "0 0 6px" }}>
                            {data.lessons.length === 0
                              ? "No lessons loaded yet."
                              : lessonCategoryFilter !== "all"
                                ? `No lessons in "${lessonCategoryFilter.replace(/-/g, " ")}" yet.`
                                : "No lessons match your search."}
                          </p>
                          <p style={{ fontSize: "12px", color: "rgba(243,237,223,0.4)", fontFamily: "var(--font-geist-mono), monospace", margin: 0 }}>
                            {data.lessons.length === 0
                              ? "Add your first lesson with the “New lesson” button above."
                              : "Try a different category or clear the search."}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredLessons.map((l) => (
                        <EditableLessonRow key={l.id} lesson={l} categories={data.lessonsByCategory.map((c) => ({ slug: c.category, name: c.category.replace(/-/g, " ") }))} onUpdate={(updated) => {
                          setData((prev) => {
                            if (!prev) return prev;
                            const lessons = prev.lessons.map((row) => row.id === l.id ? { ...row, ...updated } : row);
                            return { ...prev, lessons };
                          });
                        }} onDelete={() => {
                          setData((prev) => {
                            if (!prev) return prev;
                            const lessons = prev.lessons.filter((row) => row.id !== l.id);
                            return { ...prev, lessons };
                          });
                        }} />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Result count */}
            <div className="flex items-center justify-between mt-3" style={{ fontSize: "11.5px", color: "rgba(243,237,223,0.5)" }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Showing {filteredLessons.length} of {data.lessons.length} lessons
              </span>
            </div>
          </>
            )}
          </>
        ) : null}

        {section === "website" ? (
          <>
            <PanelSwitch
              value={websitePanel}
              onChange={setWebsitePanel}
              options={[
                { key: "content", label: "Words on my site", icon: <FileText size={13} aria-hidden /> },
                { key: "media", label: "Photos", icon: <ImageIcon size={13} aria-hidden /> },
              ]}
            />
            {websitePanel === "content" ? <ContentTab /> : <MediaTab />}
          </>
        ) : null}
      </div>
    </div>
  );
}

/**
 * A segmented control for switching sub-panels within a section.
 * Two clicks became one screen: Categories and Media are reachable from
 * inside the section they belong to instead of from the top-level nav.
 */
function PanelSwitch<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: ReadonlyArray<{ key: T; label: string; icon?: React.ReactNode; hint?: string }>;
}) {
  return (
    <div className="flex items-center gap-1 flex-wrap mb-6" role="tablist">
      {options.map((o) => {
        const active = o.key === value;
        return (
          <button
            key={o.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.key)}
            title={o.hint}
            className="flex items-center gap-2 transition-colors"
            style={{
              padding: "9px 16px",
              minHeight: 40,
              border: `1px solid ${active ? "#E0BC6A" : "rgba(243,237,223,0.18)"}`,
              background: active ? "rgba(224,188,106,0.12)" : "transparent",
              color: active ? "#E0BC6A" : "rgba(243,237,223,0.7)",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * StudioHome — the landing screen.
 *
 * The Studio previously opened straight onto a raw enquiry table, so the
 * owner had to work out for themselves what needed doing. This answers that
 * question directly: who is waiting for a reply, and the four things they
 * actually come here to do, each one click away.
 */
function StudioHome({
  counts,
  enquiries,
  lessonCount,
  draftCount,
  onGo,
}: {
  counts: { total: number; new: number; replied: number; archived: number };
  enquiries: Enquiry[];
  lessonCount: number;
  draftCount: number;
  onGo: (target: "enquiries" | "lessons" | "categories" | "content" | "media") => void;
}) {
  const waiting = enquiries.filter((e) => e.status === "new").slice(0, 3);

  const actions: Array<{
    label: string;
    hint: string;
    icon: React.ReactNode;
    target: "enquiries" | "lessons" | "categories" | "content" | "media";
  }> = [
    { label: "Add a lesson", hint: "Put a new lesson in the library", icon: <Plus size={17} aria-hidden />, target: "lessons" },
    { label: "Change my words", hint: "Edit the text on any page", icon: <FileText size={17} aria-hidden />, target: "content" },
    { label: "Add a photo", hint: "Portraits, gallery and title cards", icon: <ImageIcon size={17} aria-hidden />, target: "media" },
    { label: "Group my lessons", hint: "Rename or reorder categories", icon: <Tags size={17} aria-hidden />, target: "categories" },
  ];

  return (
    <div>
      {/* ---- What needs you today ---- */}
      <div
        className="vsp-card-gold"
        style={{
          padding: "26px 24px",
          marginBottom: "28px",
          borderColor: counts.new > 0 ? "rgba(120,220,170,0.5)" : undefined,
        }}
      >
        <span className="vsp-eyebrow" style={{ display: "block", marginBottom: 12 }}>
          {counts.new > 0 ? "Needs you today" : "You're all caught up"}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(22px, 3vw, 30px)",
            lineHeight: 1.2,
            color: "#F3EDDF",
            margin: "0 0 8px",
          }}
        >
          {counts.new > 0
            ? `${counts.new} ${counts.new === 1 ? "person is" : "people are"} waiting to hear from you.`
            : "No one is waiting for a reply."}
        </h2>
        <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)", margin: "0 0 18px", maxWidth: "60ch" }}>
          {counts.new > 0
            ? "Every enquiry below came from someone who found your website and asked to learn, book a performance, or work together."
            : `You have replied to everyone who wrote in. ${counts.total} ${counts.total === 1 ? "enquiry has" : "enquiries have"} come through your website so far.`}
        </p>

        {waiting.length > 0 && (
          <div className="flex flex-col gap-2" style={{ marginBottom: 18 }}>
            {waiting.map((e) => (
              <button
                key={e.id}
                onClick={() => onGo("enquiries")}
                className="flex items-center gap-3 flex-wrap text-left transition-colors"
                style={{
                  padding: "12px 14px",
                  minHeight: 48,
                  background: "rgba(22,16,42,0.5)",
                  border: "1px solid rgba(243,237,223,0.12)",
                  color: "#F3EDDF",
                  cursor: "pointer",
                  borderRadius: 0,
                  width: "100%",
                }}
              >
                <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px" }}>{e.name}</span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: INTENT_COLORS[e.intent] ?? "#E0BC6A",
                  }}
                >
                  {e.intent === "lesson" ? "Wants lessons" : e.intent === "booking" ? "Wants to book you" : "Wants to collaborate"}
                </span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "rgba(243,237,223,0.5)" }}>
                  {e.phone ? <Phone size={12} aria-hidden style={{ display: "inline", marginRight: 5 }} /> : null}
                  {e.phone || e.email}
                </span>
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => onGo("enquiries")}
          className="flex items-center gap-2"
          style={{
            padding: "12px 24px",
            minHeight: 44,
            background: "#E0BC6A",
            color: "#1B1233",
            border: "none",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "15px",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          <MessageSquare size={15} aria-hidden />
          {counts.new > 0 ? "Open my enquiries" : "See all enquiries"}
        </button>
      </div>

      {/* ---- Quick actions ---- */}
      <span className="vsp-eyebrow" style={{ display: "block", marginBottom: 14 }}>
        <Sparkles size={12} aria-hidden style={{ display: "inline", marginRight: 6 }} />
        What would you like to do?
      </span>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ marginBottom: 28 }}>
        {actions.map((a) => (
          <button
            key={a.label}
            onClick={() => onGo(a.target)}
            className="flex flex-col items-start gap-2 text-left transition-colors"
            style={{
              padding: "20px 18px",
              minHeight: 110,
              background: "rgba(37,26,66,0.55)",
              border: "1px solid rgba(243,237,223,0.14)",
              color: "#F3EDDF",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            <span style={{ color: "#E0BC6A" }}>{a.icon}</span>
            <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "17px" }}>{a.label}</span>
            <span style={{ fontSize: "12.5px", lineHeight: 1.5, color: "rgba(243,237,223,0.6)" }}>{a.hint}</span>
          </button>
        ))}
      </div>

      {/* ---- Plain-language status ---- */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<Inbox size={18} />} label="Enquiries so far" value={counts.total} color="#E0BC6A" />
        <StatCard icon={<Check size={18} />} label="Already replied" value={counts.replied} color="#78DCAA" />
        <StatCard icon={<BookOpen size={18} />} label="Lessons published" value={lessonCount - draftCount} color="#C9AEF5" />
        <StatCard icon={<PencilLine size={18} />} label="Drafts not yet live" value={draftCount} color="#E08C50" />
      </div>

      {draftCount > 0 && (
        <p style={{ marginTop: 14, fontSize: "13px", color: "rgba(243,237,223,0.6)", lineHeight: 1.6 }}>
          {draftCount} {draftCount === 1 ? "lesson is" : "lessons are"} still a draft — visitors cannot see{" "}
          {draftCount === 1 ? "it" : "them"} yet. Open <strong style={{ color: "#E0BC6A" }}>Lessons</strong> and set{" "}
          {draftCount === 1 ? "its" : "their"} status to Published when ready.
        </p>
      )}
    </div>
  );
}

function StatCard({ icon, label, value, color, suffix }: { icon: React.ReactNode; label: string; value: number; color: string; suffix?: string }) {
  return (
    <div className="vsp-card-neutral" style={{ padding: "20px 22px" }}>
      <div className="flex items-center gap-2 mb-2" style={{ color }}>
        {icon}
        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
          {label}
        </span>
      </div>
      <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "36px", color, margin: 0, lineHeight: 1 }}>
        {value}{suffix && <span style={{ fontSize: "20px", color: "rgba(243,237,223,0.5)" }}>{suffix}</span>}
      </p>
    </div>
  );
}

/**
 * Editable lesson row — inline editing for title, raga, thala, level.
 * Click a field to edit; Enter or blur to save (PATCH); Escape to cancel.
 * Status is a toggle button (draft/published).
 */
/**
 * LessonEditor — the full edit form for one lesson.
 *
 * Inline click-to-edit only ever exposed title, raga, thala and level, and the
 * API only accepted seven of the fifteen fields a lesson can be created with.
 * So category, date, both notation PDFs, both videos, the cover image and the
 * source link were set once and then permanently frozen — a mistyped notation
 * link meant deleting the lesson and entering it all again.
 *
 * Fields are grouped by what they mean to a teacher rather than by column
 * order, and the two groups that are rarely touched start collapsed so the
 * form opens short (progressive disclosure).
 */
function LessonEditor({
  lesson,
  categories,
  onClose,
  onSaved,
}: {
  lesson: LessonRow;
  categories: { slug: string; name: string }[];
  onClose: () => void;
  onSaved: (updated: Partial<LessonRow>) => void;
}) {
  type Draft = {
    title: string; titleTamil: string; category: string; level: string;
    raga: string; thala: string; composer: string; date: string;
    notationTamil: string; notationEnglish: string;
    violinVideo: string; vocalVideo: string; titleCard: string; sourceUrl: string;
    status: string;
  };

  const initial: Draft = {
    title: lesson.title ?? "",
    titleTamil: lesson.titleTamil ?? "",
    category: lesson.category ?? "",
    level: lesson.level != null ? String(lesson.level) : "",
    raga: lesson.raga ?? "",
    thala: lesson.thala ?? "",
    composer: lesson.composer ?? "",
    date: lesson.date ?? "",
    notationTamil: lesson.notationTamil ?? "",
    notationEnglish: lesson.notationEnglish ?? "",
    violinVideo: lesson.violinVideo ?? "",
    vocalVideo: lesson.vocalVideo ?? "",
    titleCard: lesson.titleCard ?? "",
    sourceUrl: lesson.sourceUrl ?? "",
    status: lesson.status ?? "published",
  };

  const [draft, setDraft] = useState<Draft>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showLinks, setShowLinks] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const set = (k: keyof Draft) => (v: string) => { setDraft((d) => ({ ...d, [k]: v })); setError(null); };
  const dirty = (Object.keys(initial) as (keyof Draft)[]).some((k) => draft[k] !== initial[k]);

  const close = () => {
    if (dirty && !window.confirm("You have unsaved changes. Close without saving?")) return;
    onClose();
  };

  const save = async () => {
    if (!draft.title.trim()) { setError("A lesson needs a title."); return; }
    if (!draft.category.trim()) { setError("Choose which group this lesson belongs to."); return; }
    setSaving(true);
    setError(null);

    // Send only what actually changed.
    const body: Record<string, unknown> = {};
    (Object.keys(initial) as (keyof Draft)[]).forEach((k) => {
      if (draft[k] === initial[k]) return;
      if (k === "level") body.level = draft.level === "" ? null : Number(draft.level);
      else body[k] = draft[k];
    });

    try {
      const res = await fetch(`/api/studio/lessons/${lesson.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        const issues = json?.issues?.fieldErrors as Record<string, string[]> | undefined;
        const first = issues && Object.values(issues).flat()[0];
        setError(first ?? json?.error ?? "That could not be saved. Please check the fields and try again.");
        return;
      }
      onSaved({
        ...(json?.lesson ?? {}),
        title: draft.title,
        titleTamil: draft.titleTamil || null,
        category: draft.category,
        level: draft.level === "" ? null : Number(draft.level),
        raga: draft.raga || null,
        thala: draft.thala || null,
        composer: draft.composer || null,
        status: draft.status,
      } as Partial<LessonRow>);
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setSaving(false);
    }
  };

  const label: React.CSSProperties = {
    display: "block", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px",
    letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(243,237,223,0.6)", marginBottom: 6,
  };
  const input: React.CSSProperties = {
    width: "100%", padding: "11px 12px", minHeight: 44, background: "rgba(22,16,42,0.6)",
    border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF",
    fontFamily: "var(--font-instrument-sans), sans-serif", fontSize: "14px", borderRadius: 0,
  };
  const groupHeader: React.CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
    padding: "13px 0", background: "transparent", border: "none",
    borderTop: "1px solid rgba(243,237,223,0.12)", color: "#E0BC6A",
    fontFamily: "var(--font-marcellus), serif", fontSize: "16px", cursor: "pointer", borderRadius: 0,
  };

  const Field = ({ k, title, hint, type = "text", placeholder }: {
    k: keyof Draft; title: string; hint?: string; type?: string; placeholder?: string;
  }) => (
    <label style={{ display: "block" }}>
      <span style={label}>{title}</span>
      <input
        type={type}
        value={draft[k]}
        onChange={(e) => set(k)(e.target.value)}
        placeholder={placeholder}
        style={input}
      />
      {hint && <span style={{ display: "block", marginTop: 5, fontSize: "12px", color: "rgba(243,237,223,0.5)", lineHeight: 1.5 }}>{hint}</span>}
    </label>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Edit ${lesson.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 60, background: "rgba(11,8,22,0.72)",
        backdropFilter: "blur(3px)", display: "flex", alignItems: "flex-start",
        justifyContent: "center", padding: "24px 16px", overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 760, background: "#1A1234",
          border: "1px solid rgba(224,188,106,0.3)", padding: "26px 24px 22px", textAlign: "left",
        }}
      >
        <div className="flex items-start justify-between gap-4" style={{ marginBottom: 18 }}>
          <div>
            <span className="vsp-eyebrow" style={{ display: "block", marginBottom: 6 }}>Edit lesson</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-marcellus), serif", fontSize: "23px", color: "#F3EDDF", lineHeight: 1.2 }}>
              {initial.title}
            </h2>
          </div>
          <button onClick={close} aria-label="Close without saving"
            style={{ background: "transparent", border: "1px solid rgba(243,237,223,0.2)", color: "rgba(243,237,223,0.7)", cursor: "pointer", padding: 0, minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 0 }}>
            <X size={16} aria-hidden />
          </button>
        </div>

        {/* ---- Always open: the things that change most ---- */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2" style={{ marginBottom: 18 }}>
          <Field k="title" title="Lesson name" />
          <Field k="titleTamil" title="Lesson name in Tamil" placeholder="ஸரளி வரிசை" />
          <label style={{ display: "block" }}>
            <span style={label}>Which group it belongs to</span>
            <select value={draft.category} onChange={(e) => set("category")(e.target.value)} style={input}>
              {!categories.some((c) => c.slug === draft.category) && draft.category && (
                <option value={draft.category}>{draft.category.replace(/-/g, " ")}</option>
              )}
              {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
          </label>
          <Field k="level" title="Level" type="number" hint="1 is the easiest. Leave empty if it does not belong to a level." />
          <Field k="raga" title="Raga" />
          <Field k="thala" title="Thala" />
          <Field k="composer" title="Composer" />
          <label style={{ display: "block" }}>
            <span style={label}>Who can see it</span>
            <select value={draft.status} onChange={(e) => set("status")(e.target.value)} style={input}>
              <option value="published">Published — visitors can see it</option>
              <option value="draft">Draft — only you can see it</option>
            </select>
          </label>
        </div>

        {/* ---- Collapsed: notation and video links ---- */}
        <button onClick={() => setShowLinks((v) => !v)} style={groupHeader} aria-expanded={showLinks}>
          <span>Notation sheets and videos</span>
          <span aria-hidden style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px" }}>{showLinks ? "−" : "+"}</span>
        </button>
        {showLinks && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2" style={{ padding: "6px 0 18px" }}>
            <Field k="notationEnglish" title="Notation PDF (English)" type="url" placeholder="https://…" hint="The link students download. Leave empty if there isn't one." />
            <Field k="notationTamil" title="Notation PDF (Tamil)" type="url" placeholder="https://…" />
            <Field k="violinVideo" title="Violin video" type="url" placeholder="https://youtube.com/…" />
            <Field k="vocalVideo" title="Vocal video" type="url" placeholder="https://youtube.com/…" />
          </div>
        )}

        {/* ---- Collapsed: rarely touched ---- */}
        <button onClick={() => setShowExtras((v) => !v)} style={groupHeader} aria-expanded={showExtras}>
          <span>Cover picture and date</span>
          <span aria-hidden style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px" }}>{showExtras ? "−" : "+"}</span>
        </button>
        {showExtras && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2" style={{ padding: "6px 0 18px" }}>
            <Field k="titleCard" title="Cover picture" type="url" placeholder="https://…" hint="The picture shown on the lesson card in the library." />
            <Field k="date" title="Date published" placeholder="2021-03-19" hint="Shown on the lesson page." />
            <Field k="sourceUrl" title="Original page it came from" type="url" placeholder="https://…" hint="Only used for your own reference." />
          </div>
        )}

        {error && (
          <p role="alert" style={{ margin: "14px 0 0", padding: "11px 14px", border: "1px solid rgba(224,140,80,0.5)", background: "rgba(224,140,80,0.08)", color: "#F2C5A5", fontSize: "13.5px", lineHeight: 1.55 }}>
            {error}
          </p>
        )}

        <div className="flex items-center gap-3 flex-wrap" style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(243,237,223,0.12)" }}>
          <button onClick={save} disabled={saving || !dirty}
            style={{ padding: "13px 26px", minHeight: 44, background: saving || !dirty ? "rgba(224,188,106,0.35)" : "#E0BC6A", color: "#1B1233", border: "none", fontFamily: "var(--font-marcellus), serif", fontSize: "15px", cursor: saving || !dirty ? "default" : "pointer", borderRadius: 0 }}>
            {saving ? "Saving…" : dirty ? "Save changes" : "No changes yet"}
          </button>
          <button onClick={close}
            style={{ padding: "13px 20px", minHeight: 44, background: "transparent", border: "1px solid rgba(243,237,223,0.2)", color: "rgba(243,237,223,0.7)", fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", borderRadius: 0 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function EditableLessonRow({
  lesson,
  categories,
  onUpdate,
  onDelete,
}: {
  lesson: LessonRow;
  categories: { slug: string; name: string }[];
  onUpdate: (updated: Partial<LessonRow>) => void;
  onDelete: () => void;
}) {
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [draft, setDraft] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const startEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setDraft(currentValue);
  };

  const saveField = async (field: string) => {
    const value = draft.trim();
    setSaving(true);
    try {
      const body: Record<string, unknown> = {};
      if (field === "level") {
        body.level = value ? parseInt(value, 10) : null;
      } else {
        body[field] = value;
      }
      const res = await fetch(`/api/studio/lessons/${lesson.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const update: Partial<LessonRow> = {};
        if (field === "level") {
          update.level = value ? parseInt(value, 10) : null;
        } else {
          (update as Record<string, unknown>)[field] = value;
        }
        onUpdate(update);
      }
    } catch {
      // silent — the row keeps its original value
    } finally {
      setSaving(false);
      setEditingField(null);
    }
  };

  const cancelEdit = () => {
    setEditingField(null);
    setDraft("");
  };

  const toggleStatus = async () => {
    const next = lesson.status === "published" ? "draft" : "published";
    setSaving(true);
    try {
      const res = await fetch(`/api/studio/lessons/${lesson.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      if (res.ok) {
        onUpdate({ status: next });
      }
    } catch {
      // silent
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 3000);
      return;
    }
    await fetch(`/api/studio/lessons/${lesson.id}`, { method: "DELETE" });
    onDelete();
  };

  const tdStyle: React.CSSProperties = {
    padding: "12px 16px",
    verticalAlign: "middle",
  };

  const fieldBaseStyle: React.CSSProperties = {
    background: "rgba(22,16,42,0.6)",
    border: "1px solid rgba(224,188,106,0.46)",
    color: "#F3EDDF",
    fontFamily: "var(--font-instrument-sans)",
    fontSize: "13px",
    padding: "6px 10px",
    borderRadius: 0,
    width: "100%",
    minWidth: "80px",
  };

  const displayStyle: React.CSSProperties = {
    cursor: "pointer",
    padding: "6px 10px",
    border: "1px solid transparent",
    borderRadius: 0,
    transition: "border-color 160ms ease, background 160ms ease",
  };

  const renderField = (field: string, value: string, displayValue?: string, opts?: { mono?: boolean; gold?: boolean }) => {
    const isEditing = editingField === field;
    const show = displayValue ?? value ?? "—";
    if (isEditing) {
      return (
        <div className="flex items-center gap-1">
          <input
            type={field === "level" ? "number" : "text"}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveField(field);
              if (e.key === "Escape") cancelEdit();
            }}
            onBlur={() => saveField(field)}
            autoFocus
            disabled={saving}
            style={fieldBaseStyle}
            aria-label={`Edit ${field}`}
          />
          {saving && <span style={{ fontSize: "10px", color: "rgba(224,188,106,0.6)" }}>…</span>}
        </div>
      );
    }
    return (
      <span
        onClick={() => startEdit(field, value ?? "")}
        className="vsp-lift inline-block"
        style={{
          ...displayStyle,
          fontFamily: opts?.mono ? "var(--font-geist-mono), monospace" : "var(--font-instrument-sans)",
          fontSize: opts?.mono ? "11px" : "13px",
          letterSpacing: opts?.mono ? "0.06em" : "0",
          color: opts?.gold ? "#E0BC6A" : value ? "#F3EDDF" : "rgba(243,237,223,0.4)",
        }}
        title="Click to edit"
      >
        {show}
      </span>
    );
  };

  return (
    <tr style={{ borderBottom: "1px solid rgba(243,237,223,0.08)" }}>
      <td style={tdStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {renderField("title", lesson.title)}
          {lesson.titleTamil && (
            <span lang="ta" style={{ fontSize: "11px", color: "rgba(243,237,223,0.5)", paddingLeft: "10px" }}>
              {lesson.titleTamil}
            </span>
          )}
        </div>
      </td>
      <td style={tdStyle}>
        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(243,237,223,0.72)" }}>
          {lesson.category.replace(/-/g, " ")}
        </span>
      </td>
      <td style={tdStyle}>{renderField("raga", lesson.raga ?? "", undefined, { gold: true })}</td>
      <td style={tdStyle}>{renderField("thala", lesson.thala ?? "")}</td>
      <td style={tdStyle}>{renderField("level", lesson.level?.toString() ?? "", lesson.level?.toString() ?? "—", { mono: true })}</td>
      <td style={tdStyle}>
        <button
          onClick={toggleStatus}
          disabled={saving}
          aria-pressed={lesson.status === "published"}
          className="transition-colors"
          style={{
            padding: "4px 10px",
            border: `1px solid ${lesson.status === "published" ? "#78DCAA" : "rgba(243,237,223,0.3)"}`,
            background: lesson.status === "published" ? "rgba(120,220,170,0.08)" : "transparent",
            color: lesson.status === "published" ? "#78DCAA" : "rgba(243,237,223,0.5)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          {lesson.status ?? "published"}
        </button>
      </td>
      <td style={tdStyle}>
        <div className="flex items-center gap-2">
          {/* Inline editing only ever reached a handful of fields. This opens
              every field the lesson actually has. */}
          <button
            onClick={() => setEditorOpen(true)}
            aria-label={`Edit ${lesson.title}`}
            title="Edit this lesson"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 12px",
              minHeight: 36,
              background: "transparent",
              border: "1px solid rgba(224,188,106,0.45)",
              color: "#E0BC6A",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            <PencilLine size={12} aria-hidden />
            Edit
          </button>
          {editorOpen && (
            <LessonEditor
              lesson={lesson}
              categories={categories}
              onClose={() => setEditorOpen(false)}
              onSaved={(updated) => { onUpdate(updated); setEditorOpen(false); }}
            />
          )}
          <a
            href={`/lessons/${lesson.id}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open lesson page"
            style={{ color: "rgba(243,237,223,0.5)", display: "flex", padding: "4px" }}
          >
            <ExternalLink size={13} />
          </a>
          <button
            onClick={handleDelete}
            aria-label={confirmDelete ? "Confirm delete" : "Delete lesson"}
            style={{
              background: "transparent",
              border: "none",
              color: confirmDelete ? "#E08C50" : "rgba(243,237,223,0.4)",
              cursor: "pointer",
              padding: "4px",
              borderRadius: 0,
            }}
            title={confirmDelete ? "Click again to confirm" : "Delete"}
          >
            {confirmDelete ? <CheckIcon size={13} /> : <Trash2 size={13} />}
          </button>
        </div>
      </td>
    </tr>
  );
}

type NewLessonData = {
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
  status: string;
};

/**
 * New lesson button + form — opens a modal-like card for creating a lesson.
 * Per the handoff's Studio.dc.html spec: title, category, raga, thala, notation links, status.
 */
function NewLessonButton({ categories, onCreated }: { categories: { slug: string; name: string }[]; onCreated: (lesson: NewLessonData) => void }) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    titleTamil: "",
    category: categories[0]?.slug ?? "",
    raga: "",
    thala: "",
    composer: "",
    notationEnglish: "",
    notationTamil: "",
    status: "draft" as "draft" | "published",
  });

  const submit = async () => {
    setError(null);
    if (!form.title.trim()) {
      setError("Title is required");
      return;
    }
    if (!form.category) {
      setError("Category is required");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/studio/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title.trim(),
          titleTamil: form.titleTamil.trim() || null,
          category: form.category,
          raga: form.raga.trim() || null,
          thala: form.thala.trim() || null,
          composer: form.composer.trim() || null,
          notationEnglish: form.notationEnglish.trim() || null,
          notationTamil: form.notationTamil.trim() || null,
          status: form.status,
        }),
      });
      if (res.ok) {
        const json = await res.json();
        onCreated(json.lesson);
        setForm({ title: "", titleTamil: "", category: categories[0]?.slug ?? "", raga: "", thala: "", composer: "", notationEnglish: "", notationTamil: "", status: "draft" });
        setOpen(false);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Failed to create lesson");
      }
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="vsp-cta-gold flex items-center gap-2"
        style={{
          padding: "9px 16px",
          background: "#E0BC6A",
          color: "#1B1233",
          fontFamily: "var(--font-marcellus), serif",
          fontSize: "12.5px",
          letterSpacing: "0.04em",
          border: "none",
          cursor: "pointer",
          borderRadius: 0,
        }}
      >
        <Plus size={14} aria-hidden />
        New lesson
      </button>
    );
  }

  const inputStyle: React.CSSProperties = {
    padding: "9px 12px",
    background: "rgba(22,16,42,0.6)",
    border: "1px solid rgba(243,237,223,0.2)",
    color: "#F3EDDF",
    fontFamily: "var(--font-instrument-sans)",
    fontSize: "13px",
    borderRadius: 0,
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-geist-mono), monospace",
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(243,237,223,0.62)",
    marginBottom: "5px",
    display: "block",
  };

  return (
    <div className="vsp-card-gold" style={{ padding: "24px", marginTop: "12px", width: "100%" }}>
      <div className="flex items-center justify-between mb-4">
        <span className="vsp-eyebrow">New lesson</span>
        <button onClick={() => { setOpen(false); setError(null); }} aria-label="Close form" style={{ background: "transparent", border: "none", color: "rgba(243,237,223,0.5)", cursor: "pointer", padding: "4px" }}>
          <X size={16} />
        </button>
      </div>

      {error && (
        <div role="status" aria-live="polite" style={{ marginBottom: "14px", padding: "10px 14px", border: "1px solid #E08C50", background: "rgba(224,140,80,0.08)", color: "#F2C5A5", fontSize: "13px" }}>
          {error}
        </div>
      )}

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2" style={{ marginBottom: "14px" }}>
        <label>
          <span style={labelStyle}>Title *</span>
          <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Sri Maha Ganapathim" style={inputStyle} autoFocus />
        </label>
        <label>
          <span style={labelStyle}>Tamil title</span>
          <input type="text" value={form.titleTamil} onChange={(e) => setForm({ ...form, titleTamil: e.target.value })} placeholder="ஸ்ரீ மஹாகணபதிம்" lang="ta" style={inputStyle} />
        </label>
        <label>
          <span style={labelStyle}>Category *</span>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={inputStyle}>
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </label>
        <label>
          <span style={labelStyle}>Raga</span>
          <input type="text" value={form.raga} onChange={(e) => setForm({ ...form, raga: e.target.value })} placeholder="e.g. Nattai" style={inputStyle} />
        </label>
        <label>
          <span style={labelStyle}>Thala</span>
          <input type="text" value={form.thala} onChange={(e) => setForm({ ...form, thala: e.target.value })} placeholder="e.g. Aadhi" style={inputStyle} />
        </label>
        <label>
          <span style={labelStyle}>Composer</span>
          <input type="text" value={form.composer} onChange={(e) => setForm({ ...form, composer: e.target.value })} placeholder="e.g. Muthuswami Dikshitar" style={inputStyle} />
        </label>
        <label>
          <span style={labelStyle}>English notation URL</span>
          <input type="url" value={form.notationEnglish} onChange={(e) => setForm({ ...form, notationEnglish: e.target.value })} placeholder="https://drive.google.com/…" style={inputStyle} />
        </label>
        <label>
          <span style={labelStyle}>Tamil notation URL</span>
          <input type="url" value={form.notationTamil} onChange={(e) => setForm({ ...form, notationTamil: e.target.value })} placeholder="https://drive.google.com/…" style={inputStyle} />
        </label>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span style={labelStyle}>Status</span>
        <div className="flex">
          {(["draft", "published"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setForm({ ...form, status: s })}
              aria-pressed={form.status === s}
              style={{
                padding: "7px 14px",
                border: `1px solid ${form.status === s ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                background: form.status === s ? "#E0BC6A" : "transparent",
                color: form.status === s ? "#1B1233" : "rgba(243,237,223,0.82)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={submit}
          disabled={saving}
          className="vsp-cta-gold"
          style={{
            padding: "11px 22px",
            background: saving ? "rgba(224,188,106,0.45)" : "#E0BC6A",
            color: "#1B1233",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "13px",
            border: "none",
            cursor: saving ? "wait" : "pointer",
            borderRadius: 0,
          }}
        >
          {saving ? "Creating…" : "Create lesson"}
        </button>
        <button
          onClick={() => { setOpen(false); setError(null); }}
          style={{
            padding: "11px 18px",
            background: "transparent",
            border: "1px solid rgba(243,237,223,0.2)",
            color: "rgba(243,237,223,0.82)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

type StudioCategory = {
  slug: string;
  name: string;
  group: string;
  order: number;
  lessonCount: number;
  publishedCount: number;
};

const GROUP_LABELS: Record<string, string> = {
  basics: "Carnatic — Basics",
  advanced: "Carnatic — Advanced",
  devotional: "Devotional",
  light: "Light Music",
  media: "Media",
};

const GROUP_ORDER = ["basics", "advanced", "devotional", "light", "media"];

/** Categories tab — rename, regroup, reorder, add, delete categories. */
function CategoriesTab() {
  const [categories, setCategories] = useState<StudioCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCat, setNewCat] = useState({ slug: "", name: "", group: "advanced", order: 10 });
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch("/api/studio/categories");
      if (!res.ok) throw new Error("Failed");
      const json = await res.json();
      setCategories(json.categories);
    } catch {
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const saveName = async (slug: string) => {
    const value = draftName.trim();
    if (!value) {
      setEditingSlug(null);
      return;
    }
    await fetch(`/api/studio/categories/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: value }),
    });
    setCategories((prev) => prev.map((c) => (c.slug === slug ? { ...c, name: value } : c)));
    setEditingSlug(null);
  };

  const changeGroup = async (slug: string, group: string) => {
    await fetch(`/api/studio/categories/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ group }),
    });
    setCategories((prev) => prev.map((c) => (c.slug === slug ? { ...c, group } : c)));
  };

  const changeOrder = async (slug: string, order: number) => {
    await fetch(`/api/studio/categories/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });
    setCategories((prev) => prev.map((c) => (c.slug === slug ? { ...c, order } : c)));
  };

  const deleteCategory = async (slug: string) => {
    const res = await fetch(`/api/studio/categories/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setCategories((prev) => prev.filter((c) => c.slug !== slug));
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Failed to delete");
      setTimeout(() => setError(null), 4000);
    }
  };

  const addCategory = async () => {
    setError(null);
    const slug = newCat.slug.trim().toLowerCase().replace(/\s+/g, "-");
    if (!slug || !newCat.name.trim()) {
      setError("Slug and name are required");
      return;
    }
    const res = await fetch("/api/studio/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name: newCat.name.trim(), group: newCat.group, order: newCat.order }),
    });
    if (res.ok) {
      const json = await res.json();
      setCategories((prev) => [...prev, { ...json.category, lessonCount: 0, publishedCount: 0 }]);
      setNewCat({ slug: "", name: "", group: "advanced", order: 10 });
      setShowAddForm(false);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Failed to create");
    }
  };

  if (loading) {
    return <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "rgba(243,237,223,0.5)" }}>Loading categories…</p>;
  }

  return (
    <div>
      {/* Header + add button */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Tags size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Categories · {categories.length}</span>
          </div>
          <p style={{ fontSize: "14px", color: "rgba(243,237,223,0.62)", margin: 0 }}>
            Rename, regroup, reorder, or add categories. Changes propagate to the nav menu, library filters, and breadcrumbs.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          aria-pressed={showAddForm}
          className="vsp-cta-gold flex items-center gap-2"
          style={{
            padding: "10px 18px",
            background: showAddForm ? "transparent" : "#E0BC6A",
            color: showAddForm ? "#E0BC6A" : "#1B1233",
            border: showAddForm ? "1px solid #E0BC6A" : "none",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "13px",
            letterSpacing: "0.04em",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          <Plus size={15} aria-hidden />
          {showAddForm ? "Cancel" : "Add category"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div role="status" aria-live="polite" style={{ marginBottom: "16px", padding: "12px 16px", border: "1px solid #E08C50", background: "rgba(224,140,80,0.08)", color: "#F2C5A5", fontSize: "13px" }}>
          {error}
        </div>
      )}

      {/* Add form */}
      {showAddForm && (
        <div className="vsp-card-gold" style={{ padding: "24px", marginBottom: "24px" }}>
          <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "14px" }}>New category</span>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2" style={{ marginBottom: "14px" }}>
            <label className="flex flex-col gap-1.5">
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)" }}>Slug</span>
              <input
                type="text"
                value={newCat.slug}
                onChange={(e) => setNewCat({ ...newCat, slug: e.target.value })}
                placeholder="e.g. thillana"
                style={{ padding: "9px 12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px", borderRadius: 0 }}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)" }}>Display name</span>
              <input
                type="text"
                value={newCat.name}
                onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                placeholder="e.g. Thillana"
                style={{ padding: "9px 12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", fontFamily: "var(--font-instrument-sans)", fontSize: "13px", borderRadius: 0 }}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)" }}>Group</span>
              <select
                value={newCat.group}
                onChange={(e) => setNewCat({ ...newCat, group: e.target.value })}
                style={{ padding: "9px 12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", fontFamily: "var(--font-instrument-sans)", fontSize: "13px", borderRadius: 0 }}
              >
                {GROUP_ORDER.map((g) => <option key={g} value={g}>{GROUP_LABELS[g]}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)" }}>Order</span>
              <input
                type="number"
                value={newCat.order}
                onChange={(e) => setNewCat({ ...newCat, order: parseInt(e.target.value, 10) || 0 })}
                style={{ padding: "9px 12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", fontFamily: "var(--font-geist-mono), monospace", fontSize: "13px", borderRadius: 0 }}
              />
            </label>
          </div>
          <button
            onClick={addCategory}
            className="vsp-cta-gold"
            style={{ padding: "10px 20px", background: "#E0BC6A", color: "#1B1233", fontFamily: "var(--font-marcellus), serif", fontSize: "13px", border: "none", cursor: "pointer", borderRadius: 0 }}
          >
            Create category
          </button>
        </div>
      )}

      {/* Categories grouped */}
      {GROUP_ORDER.map((group) => {
        const groupCats = categories.filter((c) => c.group === group).sort((a, b) => a.order - b.order);
        if (groupCats.length === 0) return null;
        return (
          <section key={group} style={{ marginBottom: "28px" }}>
            <div className="flex items-baseline justify-between mb-3" style={{ paddingBottom: "10px", borderBottom: "1px solid rgba(224,188,106,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "#F3EDDF", margin: 0 }}>
                {GROUP_LABELS[group]}
              </h3>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                {groupCats.length} categor{groupCats.length !== 1 ? "ies" : "y"}
              </span>
            </div>
            <div className="flex flex-col" style={{ gap: "8px" }}>
              {groupCats.map((c) => {
                const isEditing = editingSlug === c.slug;
                const canDelete = c.lessonCount === 0;
                return (
                  <div
                    key={c.slug}
                    className="vsp-card-neutral flex items-center gap-3 flex-wrap"
                    style={{ padding: "14px 18px" }}
                  >
                    {/* Order input */}
                    <input
                      type="number"
                      value={c.order}
                      onChange={(e) => changeOrder(c.slug, parseInt(e.target.value, 10) || 0)}
                      aria-label="Order"
                      style={{ width: "48px", padding: "6px 8px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#E0BC6A", fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", textAlign: "center", borderRadius: 0 }}
                    />
                    {/* Name (editable) */}
                    {isEditing ? (
                      <input
                        type="text"
                        value={draftName}
                        onChange={(e) => setDraftName(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") saveName(c.slug); if (e.key === "Escape") setEditingSlug(null); }}
                        onBlur={() => saveName(c.slug)}
                        autoFocus
                        style={{ flex: "1", minWidth: "140px", padding: "6px 10px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(224,188,106,0.46)", color: "#F3EDDF", fontFamily: "var(--font-marcellus), serif", fontSize: "15px", borderRadius: 0 }}
                      />
                    ) : (
                      <span
                        onClick={() => { setEditingSlug(c.slug); setDraftName(c.name); }}
                        className="vsp-lift"
                        style={{ flex: "1", minWidth: "140px", fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: "#F3EDDF", cursor: "pointer", padding: "4px 8px", border: "1px solid transparent", borderRadius: 0 }}
                        title="Click to rename"
                      >
                        {c.name}
                      </span>
                    )}
                    {/* Slug */}
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "rgba(243,237,223,0.5)" }}>
                      /{c.slug}
                    </span>
                    {/* Lesson count */}
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.08em", color: c.lessonCount > 0 ? "#E0BC6A" : "rgba(243,237,223,0.4)", padding: "3px 8px", border: `1px solid ${c.lessonCount > 0 ? "rgba(224,188,106,0.34)" : "rgba(243,237,223,0.1)"}` }}>
                      {c.lessonCount} lesson{c.lessonCount !== 1 ? "s" : ""}
                    </span>
                    {/* Group selector */}
                    <select
                      value={c.group}
                      onChange={(e) => changeGroup(c.slug, e.target.value)}
                      aria-label="Group"
                      style={{ padding: "5px 10px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "rgba(243,237,223,0.72)", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 0 }}
                    >
                      {GROUP_ORDER.map((g) => <option key={g} value={g}>{GROUP_LABELS[g]}</option>)}
                    </select>
                    {/* Delete */}
                    <button
                      onClick={() => canDelete ? deleteCategory(c.slug) : setError(`Cannot delete "${c.name}": ${c.lessonCount} lesson(s) still in it. Move them first.`)}
                      disabled={!canDelete}
                      aria-label="Delete category"
                      title={canDelete ? "Delete" : "Move lessons first"}
                      style={{ background: "transparent", border: "none", color: canDelete ? "rgba(243,237,223,0.4)" : "rgba(243,237,223,0.15)", cursor: canDelete ? "pointer" : "not-allowed", padding: "4px", borderRadius: 0 }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

type AnalyticsData = {
  total: number;
  weekly: { week: string; count: number; label: string }[];
  intentBreakdown: { intent: string; label: string; count: number; color: string }[];
  statusBreakdown: { new: number; replied: number; archived: number };
  responseRate: number;
  fromLessonPage: number;
  fromOther: number;
  recent: { id: string; intent: string; status: string; createdAt: string }[];
};

/** Analytics tab — enquiry trends, intent breakdown, response rate. */
function AnalyticsTab() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/studio/analytics")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading || !data) {
    return <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "rgba(243,237,223,0.5)" }}>Loading analytics…</p>;
  }

  const maxWeekly = Math.max(...data.weekly.map((w) => w.count), 1);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 size={18} aria-hidden style={{ color: "#E0BC6A" }} />
        <span className="vsp-eyebrow">Analytics · enquiry insights</span>
      </div>

      {/* Key metrics */}
      <div className="grid gap-4 mb-8 grid-cols-2 md:grid-cols-4">
        <StatCard icon={<Inbox size={18} />} label="Total enquiries" value={data.total} color="#E0BC6A" />
        <StatCard icon={<Check size={18} />} label="Response rate" value={data.responseRate} color="#78DCAA" suffix="%" />
        <StatCard icon={<TrendingUp size={18} />} label="From lessons" value={data.fromLessonPage} color="#C9AEF5" />
        <StatCard icon={<Clock size={18} />} label="Pending" value={data.statusBreakdown.new} color="#E08C50" />
      </div>

      {/* Weekly enquiries chart (CSS bars) */}
      <section className="vsp-card-neutral" style={{ padding: "28px", marginBottom: "24px" }}>
        <div className="flex items-baseline justify-between mb-5">
          <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", color: "#F3EDDF", margin: 0 }}>
            Enquiries · last 12 weeks
          </h3>
          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "rgba(243,237,223,0.5)" }}>
            {data.weekly.reduce((a, w) => a + w.count, 0)} total
          </span>
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-1.5" style={{ height: "160px", paddingBottom: "28px", position: "relative" }}>
          {/* Y-axis grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
            <div key={pct} aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: `${28 + pct * 132}px`, height: "1px", background: "rgba(243,237,223,0.06)" }} />
          ))}
          {data.weekly.map((w) => {
            const heightPct = (w.count / maxWeekly) * 100;
            return (
              <div key={w.week} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", position: "relative" }}>
                <span style={{ fontSize: "11px", color: "#E0BC6A", fontFamily: "var(--font-geist-mono), monospace", opacity: w.count > 0 ? 1 : 0.3 }}>
                  {w.count > 0 ? w.count : ""}
                </span>
                <div
                  style={{
                    width: "100%",
                    height: `${heightPct}%`,
                    minHeight: w.count > 0 ? "4px" : "2px",
                    background: w.count > 0 ? "linear-gradient(180deg, #E0BC6A, rgba(224,188,106,0.4))" : "rgba(243,237,223,0.08)",
                    borderRadius: 0,
                    transition: "height 400ms cubic-bezier(0.16,1,0.3,1)",
                    position: "relative",
                  }}
                  title={`${w.label}: ${w.count} enquiries`}
                />
                <span style={{ position: "absolute", bottom: "-22px", fontSize: "9px", color: "rgba(243,237,223,0.4)", fontFamily: "var(--font-geist-mono), monospace", whiteSpace: "nowrap" }}>
                  {w.label.split(" ")[0]}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Intent + source breakdown */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* Intent breakdown */}
        <section className="vsp-card-neutral" style={{ padding: "24px" }}>
          <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "#F3EDDF", margin: "0 0 16px" }}>
            By intent
          </h3>
          <div className="flex flex-col gap-3">
            {data.intentBreakdown.map((item) => {
              const pct = data.total > 0 ? Math.round((item.count / data.total) * 100) : 0;
              return (
                <div key={item.intent}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span style={{ fontSize: "13.5px", color: "rgba(243,237,223,0.82)" }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: item.color }}>
                      {item.count} · {pct}%
                    </span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(243,237,223,0.08)" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: item.color, transition: "width 400ms ease" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Source breakdown */}
        <section className="vsp-card-neutral" style={{ padding: "24px" }}>
          <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "#F3EDDF", margin: "0 0 16px" }}>
            By source
          </h3>
          <p style={{ fontSize: "13.5px", color: "rgba(243,237,223,0.72)", lineHeight: 1.6, marginBottom: "16px" }}>
            The free library is the funnel working as designed.
          </p>
          <div className="flex items-center gap-4">
            <div style={{ position: "relative", width: "100px", height: "100px" }}>
              {/* Donut chart (CSS conic-gradient) */}
              {data.total > 0 && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: `conic-gradient(#E0BC6A 0% ${(data.fromLessonPage / data.total) * 360}deg, rgba(243,237,223,0.12) ${(data.fromLessonPage / data.total) * 360}deg 360deg)`,
                    mask: "radial-gradient(transparent 28px, black 30px)",
                    WebkitMask: "radial-gradient(transparent 28px, black 30px)",
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span style={{ width: "10px", height: "10px", background: "#E0BC6A" }} />
                <span style={{ fontSize: "13px", color: "rgba(243,237,223,0.82)" }}>
                  From lessons: <span style={{ color: "#E0BC6A", fontFamily: "var(--font-geist-mono), monospace" }}>{data.fromLessonPage}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ width: "10px", height: "10px", background: "rgba(243,237,223,0.12)" }} />
                <span style={{ fontSize: "13px", color: "rgba(243,237,223,0.82)" }}>
                  Other: <span style={{ color: "rgba(243,237,223,0.62)", fontFamily: "var(--font-geist-mono), monospace" }}>{data.fromOther}</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Recent activity */}
      <section className="vsp-card-neutral" style={{ padding: "24px", marginTop: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", color: "#F3EDDF", margin: "0 0 16px" }}>
          Recent activity
        </h3>
        {data.recent.length === 0 ? (
          <p style={{ fontSize: "13.5px", color: "rgba(243,237,223,0.5)" }}>No enquiries yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {data.recent.map((r) => (
              <li key={r.id} className="flex items-center justify-between gap-3" style={{ padding: "8px 0", borderBottom: "1px solid rgba(243,237,223,0.08)" }}>
                <span style={{ fontSize: "13px", color: "rgba(243,237,223,0.82)" }}>
                  {r.intent === "lesson" ? "One-to-one Lessons" : r.intent === "booking" ? "Performance Booking" : "Collaboration"}
                </span>
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: "10px", color: r.status === "new" ? "#78DCAA" : r.status === "replied" ? "#C9AEF5" : "rgba(243,237,223,0.5)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {r.status}
                  </span>
                  <span style={{ fontSize: "11px", color: "rgba(243,237,223,0.5)", fontFamily: "var(--font-geist-mono), monospace" }}>
                    {new Date(r.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

// ===== Content Management Tab =====
function ContentTab() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Field groups for the content editor. Each field is keyed by its
   * dot-notation path in the SiteContent DB table. Values are stored in
   * the DB as JSON strings (so strings stay strings, arrays stay
   * arrays). The `type` controls how the editor input renders and how
   * the value is encoded/decoded.
   *  - "string": a single-line text input
   *  - "text": a textarea (longer prose)
   *  - "array": a textarea, one item per line
   *  - "json": a textarea showing the raw JSON (for complex objects)
   */
  type FieldType = "string" | "text" | "array" | "json";
  // `where` says, in the owner's words, the exact spot this text occupies.
  // Without it a key like `home.heroLines` requires the owner to imagine the
  // page and guess — which is what made this panel unusable.
  type FieldDef = { key: string; label: string; type: FieldType; where?: string };
  // `page` is the public URL this section controls. Naming the page — and
  // linking to it — is what turns an abstract key like `home.heroLines` into
  // "the big line at the top of my homepage".
  type Section = { name: string; icon: string; hint?: string; page?: { href: string; label: string }; fields: FieldDef[] };

  const SECTIONS: Section[] = [
    {
      name: "My name & tagline",
      icon: "✦",
      page: { href: "/", label: "the homepage" },
      hint: "How your name and titles appear across every page, including the footer.",
      fields: [
        { key: "brand.name", label: "Full name", type: "string", where: "Your full name, in the footer and page titles" },
        { key: "brand.shortName", label: "Short name (initials)", type: "string", where: "The initials shown in the top-left corner of every page" },
        { key: "brand.tagline", label: "Tagline", type: "string", where: "The short line under your name in the footer" },
        { key: "brand.greeting", label: "Greeting", type: "string" },
        { key: "brand.person", label: "Person name", type: "string" },
        { key: "brand.credentials", label: "Credentials", type: "string", where: "The letters after your name on the homepage portrait" },
        { key: "brand.copyright", label: "Copyright notice", type: "string" },
      ],
    },
    {
      name: "How people reach me",
      icon: "✉",
      page: { href: "/#enrol", label: "the enquiry section" },
      hint: "Your address, phone, email and social links — shown in the footer and enquiry form.",
      fields: [
        { key: "contact.address", label: "Address", type: "string", where: "Your address block in the footer" },
        { key: "contact.phone", label: "Phone", type: "string", where: "The phone number in the footer and the WhatsApp button" },
        { key: "contact.email", label: "Email", type: "string", where: "The email address in the footer and on the enquiry form" },
        { key: "contact.social.youtube", label: "YouTube URL", type: "string" },
        { key: "contact.social.facebook", label: "Facebook URL", type: "string" },
        { key: "contact.social.instagram", label: "Instagram URL", type: "string" },
        { key: "contact.social.twitter", label: "Twitter URL", type: "string" },
        { key: "contact.heroLine", label: "Hero line", type: "string" },
        { key: "contact.formSuccess", label: "Form success message", type: "text", where: "The thank-you message after someone sends an enquiry" },
        { key: "contact.formError", label: "Form error message", type: "text", where: "The message shown if an enquiry fails to send" },
        { key: "contact.directionCta", label: "Direction CTA", type: "string" },
      ],
    },
    {
      name: "Homepage",
      icon: "⌂",
      page: { href: "/", label: "the homepage" },
      hint: "The big opening lines visitors read first, plus the headings further down the page.",
      fields: [
        { key: "home.heroLines", label: "Hero lines (one per line)", type: "array", where: "The large opening words at the very top of the homepage" },
        { key: "home.testimonialsHeading", label: "Testimonials heading", type: "string", where: "The heading above the student quotes" },
        { key: "home.contactHeading", label: "Contact section heading", type: "string" },
        { key: "home.introHeading", label: "Intro heading (one per line)", type: "array" },
        { key: "home.introBody", label: "Intro body (one paragraph per line)", type: "array" },
        { key: "home.mission", label: "Mission statements (one per line)", type: "array" },
        { key: "home.vision", label: "Vision statements (one per line)", type: "array" },
      ],
    },
    {
      name: "About me page",
      icon: "♪",
      page: { href: "/about", label: "the About page" },
      hint: "Your story, your teaching, your tours and your performance record.",
      fields: [
        { key: "about.heroLine", label: "Hero line", type: "string" },
        { key: "about.role", label: "Role", type: "string" },
        { key: "about.body", label: "Body paragraphs (one per line)", type: "array" },
        { key: "about.tours.label", label: "Tours label", type: "string" },
        { key: "about.tours.country", label: "Tours country", type: "string" },
        { key: "about.tours.body", label: "Tours body", type: "text" },
        { key: "about.performance.heading", label: "Performance heading", type: "string" },
        { key: "about.performance.body", label: "Performance body", type: "text" },
        { key: "about.performance.radio.since", label: "Radio since", type: "string" },
        { key: "about.performance.radio.body", label: "Radio body", type: "text" },
        { key: "about.performance.radio.stations", label: "Radio stations (one per line)", type: "array" },
        { key: "about.performance.closing", label: "Performance closing", type: "text" },
      ],
    },
    {
      name: "Honours page",
      icon: "★",
      page: { href: "/honours", label: "the Honours page" },
      hint: "The wording on your honours page. The list of titles itself is in Advanced, at the bottom.",
      fields: [
        { key: "achievements.heroLine", label: "Hero line", type: "string" },
        { key: "achievements.honorificsIntro", label: "Honorifics intro", type: "text" },
        { key: "achievements.accoladesHeading", label: "Accolades heading", type: "string" },
      ],
    },
    {
      name: "Learn the violin page",
      icon: "♩",
      page: { href: "/learn", label: "the Learn page" },
      hint: "The teaching page — its introduction and the strings, materials and fingering sections.",
      fields: [
        { key: "learnTheViolin.intro", label: "Intro", type: "text" },
        { key: "learnTheViolin.pullQuote.text", label: "Pull quote text", type: "text" },
        { key: "learnTheViolin.pullQuote.author", label: "Pull quote author", type: "string" },
        { key: "learnTheViolin.strings.heading", label: "Strings heading", type: "string" },
        { key: "learnTheViolin.strings.intro", label: "Strings intro", type: "text" },
        { key: "learnTheViolin.materials.heading", label: "Materials heading", type: "string" },
        { key: "learnTheViolin.materials.intro", label: "Materials intro", type: "text" },
        { key: "learnTheViolin.materials.closing", label: "Materials closing", type: "text" },
        { key: "learnTheViolin.fingering.heading", label: "Fingering heading", type: "string" },
        { key: "learnTheViolin.fingering.intro", label: "Fingering intro", type: "text" },
      ],
    },
    {
      name: "Advanced — lists and quotes",
      icon: "{ }",
      hint: "Lists such as testimonials and honours. These use a strict format — change only the words between the quote marks, and leave every bracket and comma exactly where it is. If something breaks, reload without saving.",
      fields: [
        { key: "home.testimonials", label: "Testimonials shown on the homepage", type: "json", where: "The student quotes themselves" },
        { key: "achievements.honorifics", label: "List of honorific titles", type: "json", where: "The list of titles on your Honours page" },
        { key: "achievements.accolades", label: "List of awards and accolades", type: "json", where: "The list of awards on your Honours page" },
        { key: "learnTheViolin.strings.items", label: "Violin strings items", type: "json" },
        { key: "learnTheViolin.materials.items", label: "Violin materials items", type: "json" },
        { key: "learnTheViolin.fingering.items", label: "Violin fingering items", type: "json" },
        { key: "learnTheViolin.violinHistory", label: "Violin history paragraphs", type: "json" },
        { key: "gallery.images", label: "Gallery photos", type: "json", where: "The photographs in the gallery on the Stage page" },
      ],
    },
  ];

  useEffect(() => {
    fetch("/api/studio/content").then(r => r.json()).then(d => {
      setContent(d.content || {});
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const saveAll = async () => {
    setSaving(true);
    setSaved(false);
    const items = Object.entries(content).map(([key, value]) => ({ key, value }));
    await fetch("/api/studio/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (loading) return <p style={{ color: "rgba(243,237,223,0.5)", fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px" }}>Loading content...</p>;

  const inputStyle: React.CSSProperties = { padding: "9px 12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", fontFamily: "var(--font-instrument-sans)", fontSize: "13px", borderRadius: 0, width: "100%" };

  // Decode a DB-stored JSON-string value for display in the editor.
  // - "string": parse the JSON string, return the raw string
  // - "text": parse the JSON string, return the raw string
  // - "array": parse the JSON array, join with newlines
  // - "json": return the raw JSON string (pretty-printed)
  const decode = (raw: string | undefined, type: FieldType): string => {
    if (raw == null || raw === "") return "";
    try {
      const parsed = JSON.parse(raw);
      if (type === "array" && Array.isArray(parsed)) {
        return parsed.join("\n");
      }
      if (type === "json") {
        return JSON.stringify(parsed, null, 2);
      }
      // string / text
      return typeof parsed === "string" ? parsed : String(parsed);
    } catch {
      return raw;
    }
  };

  // Encode a display value back into the JSON-string DB format.
  // - "string"/"text": wrap in JSON string
  // - "array": split by newlines, filter empties, JSON.stringify the array
  // - "json": parse the input (to validate), then store as-is
  const encode = (display: string, type: FieldType): string => {
    if (type === "array") {
      const arr = display.split("\n").map((s) => s).filter((s) => s.trim() !== "");
      return JSON.stringify(arr);
    }
    if (type === "json") {
      // Validate JSON before saving — if invalid, save as a plain string
      try {
        JSON.parse(display);
        return display;
      } catch {
        return JSON.stringify(display);
      }
    }
    // string / text
    return JSON.stringify(display);
  };

  const setField = (key: string, display: string, type: FieldType) => {
    const encoded = encode(display, type);
    setContent((prev) => ({ ...prev, [key]: encoded }));
  };

  const FieldWhere = ({ where }: { where?: string }) =>
    where ? (
      <span style={{ display: "block", marginTop: 5, fontSize: "12px", lineHeight: 1.5, color: "rgba(243,237,223,0.5)" }}>
        {where}
      </span>
    ) : null;

  const filteredSections = SECTIONS.map((section) => ({
    ...section,
    fields: section.fields.filter(
      (f) =>
        !searchQuery.trim() ||
        f.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.fields.length > 0);

  const totalFields = SECTIONS.reduce((n, s) => n + s.fields.length, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <FileText size={18} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Content Management · {totalFields} fields</span>
          </div>
          <p style={{ fontSize: "14px", color: "rgba(243,237,223,0.62)", margin: 0 }}>
            Edit site text — hero, contact, social, about, achievements. Changes go live on the public site after Save.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter fields…"
            aria-label="Filter content fields"
            style={{ padding: "7px 12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.18)", color: "#F3EDDF", fontFamily: "var(--font-instrument-sans)", fontSize: "12.5px", borderRadius: 0, minWidth: "160px" }}
          />
          {saved && <span style={{ color: "#78DCAA", fontSize: "12px", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>✓ Saved</span>}
          <button onClick={saveAll} disabled={saving} className="vsp-cta-gold"
            style={{ padding: "9px 18px", background: saving ? "rgba(224,188,106,0.45)" : "#E0BC6A", color: "#1B1233", fontFamily: "var(--font-marcellus), serif", fontSize: "13px", border: "none", cursor: saving ? "wait" : "pointer", borderRadius: 0 }}>
            {saving ? "Saving..." : "Save all"}
          </button>
        </div>
      </div>

      {filteredSections.map((section) => (
        <section key={section.name} className="vsp-card-neutral" style={{ padding: "20px 22px", marginBottom: "20px" }}>
          <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2" style={{ paddingBottom: "10px", borderBottom: "1px solid rgba(224,188,106,0.18)" }}>
            <div className="flex items-baseline gap-3">
              <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "16px", color: "#E0BC6A", lineHeight: 1 }}>{section.icon}</span>
              <h3 style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "17px", color: "#F3EDDF", margin: 0 }}>
                {section.name}
              </h3>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
                {section.fields.length} field{section.fields.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
          {section.page && (
            <a
              href={section.page.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                marginTop: 10, minHeight: 36,
                fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px",
                letterSpacing: "0.13em", textTransform: "uppercase", color: "#E0BC6A",
              }}
            >
              <ExternalLink size={12} aria-hidden />
              Look at {section.page.label}
            </a>
          )}
          {section.hint && (
            <p style={{ fontSize: "12.5px", color: "rgba(243,237,223,0.55)", lineHeight: 1.5, margin: "0 0 14px" }}>
              {section.hint}
            </p>
          )}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            {section.fields.map((field) => {
              const display = decode(content[field.key], field.type);
              const isWide = field.type === "text" || field.type === "array" || field.type === "json";
              return (
                <label key={field.key} className={`flex flex-col gap-1.5 ${isWide ? "md:col-span-2" : ""}`}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)" }}>
                    {field.label}
                  </span>
                  {field.type === "string" ? (
                    <input type="text" value={display} onChange={(e) => setField(field.key, e.target.value, field.type)} style={inputStyle} />
                  ) : (
                    <textarea
                      value={display}
                      onChange={(e) => setField(field.key, e.target.value, field.type)}
                      style={{
                        ...inputStyle,
                        minHeight: field.type === "json" ? "180px" : "80px",
                        resize: "vertical",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        lineHeight: "1.55",
                        fontFamily: field.type === "json" ? "var(--font-geist-mono), monospace" : "var(--font-instrument-sans)",
                        fontSize: field.type === "json" ? "11.5px" : "13px",
                      }}
                    />
                  )}
                  <FieldWhere where={field.where} />
                </label>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

// ===== Media Management Tab =====
/**
 * Photos.
 *
 * Two things made this unusable. Adding a photo required pasting a URL that
 * had to be hosted somewhere first — the owner has pictures on a phone, not
 * URLs — so nothing could realistically be added. And the seeded rows point
 * at relative paths like "images/gallery/gallery-img (1).webp" for files that
 * were never added to the repository, so every thumbnail silently rendered
 * broken with no explanation.
 *
 * Now: upload straight from the device, and a photo that cannot load says so
 * and offers to remove itself instead of showing a broken frame.
 */
function MediaTab() {
  const [media, setMedia] = useState<{ id: string; url: string; altText: string; category: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [newAlt, setNewAlt] = useState("");
  const [newCat, setNewCat] = useState("gallery");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch("/api/studio/media").then(r => r.json()).then(d => {
      setMedia(d.media || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  /**
   * Legacy rows stored bare relative paths. Without a leading slash the
   * browser resolves them against /studio, so they 404 from the admin even
   * where the file exists. Absolute URLs pass through untouched.
   */
  const resolveUrl = (url: string) =>
    /^(https?:)?\/\//.test(url) || url.startsWith("/") ? url : `/${url}`;

  const upload = async () => {
    setUploadError(null);
    if (!file) { setUploadError("Choose a photo from your device first."); return; }
    if (!newAlt.trim()) { setUploadError("Add a short description so the photo works for screen readers."); return; }

    setUploading(true);
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("altText", newAlt.trim());
      body.append("category", newCat);
      const res = await fetch("/api/studio/media/upload", { method: "POST", body });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.media) {
        setMedia([json.media, ...media]);
        setFile(null);
        setNewAlt("");
      } else {
        setUploadError(json?.error ?? "The photo could not be uploaded. Please try again.");
      }
    } catch {
      setUploadError("The photo could not be uploaded. Please check your connection and try again.");
    } finally {
      setUploading(false);
    }
  };

  const deleteMedia = async (id: string) => {
    await fetch(`/api/studio/media/${id}`, { method: "DELETE" });
    setMedia(media.filter(m => m.id !== id));
  };

  if (loading) return <p style={{ color: "rgba(243,237,223,0.5)", fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px" }}>Loading your photos…</p>;

  const inputStyle: React.CSSProperties = { padding: "11px 12px", minHeight: 44, background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", fontFamily: "var(--font-instrument-sans)", fontSize: "14px", borderRadius: 0, width: "100%" };

  // Plain words for where each kind of photo is used on the public site.
  const PLACES: Record<string, { label: string; where: string; color: string }> = {
    portrait: { label: "Portrait", where: "Shown beside your name on the homepage and About page", color: "#E0BC6A" },
    "title-card": { label: "Lesson cover", where: "The picture on a lesson card in the library", color: "#C9AEF5" },
    gallery: { label: "Gallery", where: "The photo gallery on the Stage page", color: "#78DCAA" },
    honours: { label: "Honours", where: "Alongside your awards on the Honours page", color: "#E08C50" },
    misc: { label: "Something else", where: "Not tied to a particular page", color: "rgba(243,237,223,0.6)" },
  };
  const brokenCount = Object.values(broken).filter(Boolean).length;

  return (
    <div>
      {/* ---- Upload ---- */}
      <div className="vsp-card-gold" style={{ padding: "22px", marginBottom: "24px" }}>
        <span className="vsp-eyebrow" style={{ display: "block", marginBottom: "6px" }}>Add a photo</span>
        <p style={{ margin: "0 0 16px", fontSize: "13.5px", lineHeight: 1.6, color: "rgba(243,237,223,0.72)" }}>
          Choose a picture from this device — your phone&apos;s camera roll works. JPG, PNG, WebP or GIF, up to 8MB.
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-3" style={{ marginBottom: "14px" }}>
          <label style={{ display: "block" }}>
            <span style={{ display: "block", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", marginBottom: 7 }}>
              1. Choose the photo
            </span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
              onChange={(e) => { setFile(e.target.files?.[0] ?? null); setUploadError(null); }}
              style={{ ...inputStyle, padding: "9px 12px", cursor: "pointer" }}
            />
          </label>

          <label style={{ display: "block" }}>
            <span style={{ display: "block", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", marginBottom: 7 }}>
              2. Describe it in a few words
            </span>
            <input
              type="text"
              value={newAlt}
              onChange={e => { setNewAlt(e.target.value); setUploadError(null); }}
              placeholder="Violin Suka Pavalan playing at the Thyagaraja Aradhana"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "block" }}>
            <span style={{ display: "block", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(243,237,223,0.62)", marginBottom: 7 }}>
              3. Where should it go?
            </span>
            <select value={newCat} onChange={e => setNewCat(e.target.value)} style={inputStyle}>
              {Object.entries(PLACES).map(([key, v]) => (
                <option key={key} value={key}>{v.label}</option>
              ))}
            </select>
          </label>
        </div>

        <p style={{ margin: "0 0 14px", fontSize: "12.5px", color: "rgba(243,237,223,0.55)", lineHeight: 1.55 }}>
          {PLACES[newCat]?.where}
        </p>

        {uploadError && (
          <p role="alert" style={{ margin: "0 0 14px", padding: "10px 13px", border: "1px solid rgba(224,140,80,0.5)", background: "rgba(224,140,80,0.08)", color: "#F2C5A5", fontSize: "13px", lineHeight: 1.55 }}>
            {uploadError}
          </p>
        )}

        <button
          onClick={upload}
          disabled={uploading}
          style={{ padding: "13px 26px", minHeight: 44, background: uploading ? "rgba(224,188,106,0.45)" : "#E0BC6A", color: "#1B1233", fontFamily: "var(--font-marcellus), serif", fontSize: "15px", border: "none", cursor: uploading ? "default" : "pointer", borderRadius: 0 }}
        >
          {uploading ? "Uploading…" : "Add this photo"}
        </button>
      </div>

      {brokenCount > 0 && (
        <p style={{ margin: "0 0 16px", padding: "12px 15px", border: "1px solid rgba(224,140,80,0.45)", background: "rgba(224,140,80,0.07)", color: "#F2C5A5", fontSize: "13.5px", lineHeight: 1.6 }}>
          {brokenCount} {brokenCount === 1 ? "photo is" : "photos are"} missing — the picture file is no longer where it was
          saved. They are marked below. Remove them and upload the picture again.
        </p>
      )}

      {/* ---- The photos ---- */}
      {media.length === 0 ? (
        <div style={{ padding: "48px 24px", textAlign: "center", border: "1px dashed rgba(243,237,223,0.2)" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "var(--font-marcellus), serif", fontSize: "19px", color: "#F3EDDF" }}>
            No photos yet.
          </p>
          <p style={{ margin: 0, fontSize: "13.5px", color: "rgba(243,237,223,0.6)" }}>
            Add your first one using the box above.
          </p>
        </div>
      ) : (
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {media.map(m => {
            const place = PLACES[m.category] ?? PLACES.misc;
            const isBroken = broken[m.id];
            return (
              <div key={m.id} className="vsp-card-neutral" style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ aspectRatio: "4/3", background: "#251A42", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {isBroken ? (
                    <span style={{ padding: "0 10px", textAlign: "center", fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E08C50", lineHeight: 1.6 }}>
                      Photo missing
                    </span>
                  ) : (
                    <img
                      src={resolveUrl(m.url)}
                      alt={m.altText}
                      onError={() => setBroken((b) => ({ ...b, [m.id]: true }))}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                    />
                  )}
                </div>
                <p style={{ fontSize: "12.5px", color: "#F3EDDF", margin: 0, lineHeight: 1.45 }}>{m.altText}</p>
                <div className="flex items-center justify-between gap-2">
                  <span title={place.where} style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: place.color }}>
                    {place.label}
                  </span>
                  <button
                    onClick={() => deleteMedia(m.id)}
                    aria-label={`Remove the photo described as ${m.altText}`}
                    style={{ background: "transparent", border: "none", color: isBroken ? "#E08C50" : "rgba(243,237,223,0.45)", cursor: "pointer", padding: "10px", minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default StudioDashboard;
