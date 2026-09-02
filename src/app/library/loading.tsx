/**
 * Loading fallback for the library page.
 * Shows a skeleton with the violet/gold theme while the DB fetches.
 */
export default function LibraryLoading() {
  return (
    <div style={{ background: "#16102A", minHeight: "100vh", color: "#F3EDDF", paddingTop: "90px" }}>
      <div className="mx-auto" style={{ maxWidth: "1440px", padding: "40px 32px 0" }}>
        {/* Header skeleton */}
        <div style={{ height: "14px", width: "180px", marginBottom: "16px", background: "rgba(224,188,106,0.2)" }} />
        <div style={{ height: "48px", width: "70%", marginBottom: "14px", background: "rgba(243,237,223,0.06)" }} />
        <div style={{ height: "17px", width: "60%", marginBottom: "36px", background: "rgba(243,237,223,0.04)" }} />

        {/* Stat block skeleton */}
        <div className="grid gap-px" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: "40px" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ height: "80px", background: "rgba(243,237,223,0.04)" }} />
          ))}
        </div>

        {/* Search skeleton */}
        <div style={{ height: "46px", width: "100%", maxWidth: "560px", marginBottom: "32px", background: "rgba(243,237,223,0.04)", border: "1px solid rgba(243,237,223,0.08)" }} />

        {/* Cards grid skeleton */}
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} style={{ height: "280px", background: "rgba(243,237,223,0.03)", border: "1px solid rgba(243,237,223,0.06)" }}>
              <div style={{ height: "140px", background: "#251A42" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ height: "10px", width: "60%", marginBottom: "10px", background: "rgba(224,188,106,0.15)" }} />
                <div style={{ height: "18px", width: "80%", marginBottom: "6px", background: "rgba(243,237,223,0.06)" }} />
                <div style={{ height: "14px", width: "40%", background: "rgba(243,237,223,0.04)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
