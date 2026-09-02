/**
 * Loading fallback for lesson pages.
 * Shows a skeleton with the violet/gold theme while the DB fetches.
 */
export default function LessonLoading() {
  return (
    <div style={{ background: "#16102A", minHeight: "100vh", color: "#F3EDDF", paddingTop: "90px" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px", padding: "32px 32px 0" }}>
        {/* Breadcrumb skeleton */}
        <div style={{ height: "14px", width: "300px", marginBottom: "24px", background: "rgba(243,237,223,0.08)" }} />

        {/* Title skeleton */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
          <div style={{ height: "52px", width: "70%", background: "rgba(243,237,223,0.06)" }} />
          <div style={{ height: "22px", width: "40%", background: "rgba(224,188,106,0.12)" }} />
          <div style={{ height: "17px", width: "80%", background: "rgba(243,237,223,0.04)" }} />
        </div>

        {/* CTA skeleton */}
        <div className="flex gap-3" style={{ marginBottom: "36px" }}>
          <div style={{ height: "46px", width: "200px", background: "rgba(224,188,106,0.15)" }} />
          <div style={{ height: "46px", width: "160px", background: "rgba(243,237,223,0.06)" }} />
        </div>

        {/* Details table skeleton */}
        <div className="grid gap-px" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: "48px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ height: "64px", background: "rgba(243,237,223,0.04)" }} />
          ))}
        </div>

        {/* Notation + Practice track skeleton */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "1.15fr 0.85fr", marginBottom: "48px" }}>
          <div style={{ height: "320px", background: "rgba(243,237,223,0.04)", border: "1px solid rgba(243,237,223,0.08)" }} />
          <div style={{ height: "320px", background: "rgba(224,188,106,0.08)", border: "1px solid rgba(224,188,106,0.2)" }} />
        </div>

        {/* Video grid skeleton */}
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ aspectRatio: "16 / 9", background: "#251A42", border: "1px solid rgba(243,237,223,0.08)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
