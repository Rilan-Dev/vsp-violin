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
} from "lucide-react";
import type { LessonSummary } from "@/lib/data";

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

const INTENT_COLORS: Record<string, string> = {
  lesson: "#E0BC6A",
  booking: "#C9AEF5",
  collaboration: "#78DCAA",
};

export function StudioDashboard({ lessons }: { lessons: LessonSummary[] }) {
  const [data, setData] = useState<StudioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"enquiries" | "lessons">("enquiries");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "replied" | "archived">("all");
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/studio/enquiries");
      if (res.status === 401) {
        router.refresh();
        return;
      }
      if (!res.ok) throw new Error("Failed to load");
      const json = await res.json();
      // Merge server-side lessons with enquiry data
      const lessonRows: LessonRow[] = lessons.map((l) => ({
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
        enquiries: json.enquiries,
        counts: json.counts,
        lessons: lessonRows,
        lessonsByCategory,
        sourceBreakdown: {
          fromLessonPage: json.enquiries.filter((e: Enquiry) =>
            e.message.toLowerCase().includes("lesson") || e.intent === "lesson"
          ).length,
          fromOther: json.enquiries.filter(
            (e: Enquiry) => !e.message.toLowerCase().includes("lesson") && e.intent !== "lesson"
          ).length,
        },
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [lessons, router]);

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
    await fetch("/api/studio/logout", { method: "POST" });
    router.refresh();
  };

  const filteredEnquiries = data
    ? filter === "all"
      ? data.enquiries
      : data.enquiries.filter((e) => e.status === filter)
    : [];

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#16102A", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
          Loading studio…
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ minHeight: "100vh", background: "#16102A", display: "flex", alignItems: "center", justifyContent: "center", color: "#F2C5A5" }}>
        Error: {error}
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
        <div className="flex items-center justify-between" style={{ padding: "14px 32px", gap: "24px" }}>
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "20px", letterSpacing: "0.06em", color: "#E0BC6A" }}>
              SUKA PAVALAN
            </span>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
              Studio
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("enquiries")}
              aria-pressed={activeTab === "enquiries"}
              className="flex items-center gap-2 transition-colors"
              style={{
                padding: "8px 14px",
                border: `1px solid ${activeTab === "enquiries" ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                background: activeTab === "enquiries" ? "#E0BC6A" : "transparent",
                color: activeTab === "enquiries" ? "#1B1233" : "rgba(243,237,223,0.82)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <Inbox size={13} aria-hidden />
              Enquiries
              {data.counts.new > 0 && (
                <span
                  style={{
                    marginLeft: "4px",
                    padding: "1px 7px",
                    background: activeTab === "enquiries" ? "#1B1233" : "#E0BC6A",
                    color: activeTab === "enquiries" ? "#E0BC6A" : "#1B1233",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  {data.counts.new}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("lessons")}
              aria-pressed={activeTab === "lessons"}
              className="flex items-center gap-2 transition-colors"
              style={{
                padding: "8px 14px",
                border: `1px solid ${activeTab === "lessons" ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                background: activeTab === "lessons" ? "#E0BC6A" : "transparent",
                color: activeTab === "lessons" ? "#1B1233" : "rgba(243,237,223,0.82)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <BookOpen size={13} aria-hidden />
              Lessons ({data.lessons.length})
            </button>
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
              Exit
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "32px" }}>
        {activeTab === "enquiries" ? (
          <>
            {/* Stats row */}
            <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr)) md:repeat(4, minmax(0,1fr))" }}>
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
              <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
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
                        href={`mailto:${selectedEnquiry.email}?subject=Re: Your enquiry to Suka Pavalan&body=Dear ${selectedEnquiry.name},%0D%0A%0D%0AThank you for your enquiry.%0D%0A%0D%0A`}
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
        ) : (
          /* Lessons tab */
          <>
            <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr)) md:repeat(3, minmax(0,1fr))" }}>
              <StatCard icon={<BookOpen size={18} />} label="Total lessons" value={data.lessons.length} color="#E0BC6A" />
              <StatCard icon={<BookOpen size={18} />} label="Categories" value={data.lessonsByCategory.length} color="#C9AEF5" />
              <StatCard icon={<BookOpen size={18} />} label="With notation" value={data.lessons.filter((l) => l.hasNotation).length} color="#78DCAA" />
            </div>

            {/* Edit hint */}
            <div className="flex items-center gap-2 mb-4" style={{ fontSize: "12.5px", color: "rgba(243,237,223,0.5)" }}>
              <PencilLine size={13} aria-hidden style={{ color: "#E0BC6A" }} />
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Click any field to edit · changes save instantly
              </span>
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
                    {data.lessons.map((l) => (
                      <EditableLessonRow key={l.id} lesson={l} onUpdate={(updated) => {
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: string }) {
  return (
    <div className="vsp-card-neutral" style={{ padding: "20px 22px" }}>
      <div className="flex items-center gap-2 mb-2" style={{ color }}>
        {icon}
        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,237,223,0.5)" }}>
          {label}
        </span>
      </div>
      <p style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "36px", color, margin: 0, lineHeight: 1 }}>
        {value}
      </p>
    </div>
  );
}

/**
 * Editable lesson row — inline editing for title, raga, thala, level.
 * Click a field to edit; Enter or blur to save (PATCH); Escape to cancel.
 * Status is a toggle button (draft/published).
 */
function EditableLessonRow({
  lesson,
  onUpdate,
  onDelete,
}: {
  lesson: LessonRow;
  onUpdate: (updated: Partial<LessonRow>) => void;
  onDelete: () => void;
}) {
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

export default StudioDashboard;
