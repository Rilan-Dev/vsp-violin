import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Violin Suka Pavalan — Carnatic violin lessons & free notation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded OpenGraph image — violet ground (#16102A) with gold (#E0BC6A)
 * wordmark "SUKA PAVALAN", tagline, and a violin motif.
 *
 * This is the default OG image for the homepage and any page without
 * its own image. Lesson pages override this with their titleCard.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16102A",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "#E0BC6A" }} />
          <span
            style={{
              color: "#E0BC6A",
              fontSize: "20px",
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Karaikal · since 1990
          </span>
        </div>

        {/* Middle: wordmark + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1
            style={{
              color: "#E0BC6A",
              fontSize: "96px",
              fontWeight: 400,
              letterSpacing: "4px",
              margin: 0,
              lineHeight: 1,
            }}
          >
            SUKA PAVALAN
          </h1>
          <p
            style={{
              color: "#F3EDDF",
              fontSize: "42px",
              lineHeight: 1.2,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Music, kept as <span style={{ color: "#E0BC6A" }}>worship</span>.
          </p>
        </div>

        {/* Bottom: stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { n: "37", l: "Years on stage" },
            { n: "22", l: "Free lessons" },
            { n: "5,000+", l: "Performances" },
            { n: "12", l: "Honorific titles" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ color: "#E0BC6A", fontSize: "48px", fontFamily: "Georgia, serif" }}>
                {s.n}
              </span>
              <span
                style={{
                  color: "rgba(243,237,223,0.6)",
                  fontSize: "16px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
