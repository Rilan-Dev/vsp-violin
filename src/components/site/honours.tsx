import type { CSSProperties } from "react";
import { getSiteContent } from "@/lib/data";

/* ------------------------------------------------------------------ *
 * Honours
 *
 * A gallery of earned recognition — the honorific titles conferred on
 * Suka Pavalan over his career. The titles are rendered as a horizontal
 * scrolling rail of medal-like cards; the first card (Violin Ratna,
 * 2024) is gold to mark it as the most recent / prestigious. Gold is
 * otherwise reserved for the year numbers and a single CTA at the foot.
 *
 * Server component — the rail is a native `overflow-x: auto` container
 * with `scroll-snap-type: x mandatory`. No JS, no client bundle.
 *
 * Design tokens: `.vsp-eyebrow`, `.vsp-card-gold`, `.vsp-card-neutral`,
 * `.vsp-hairline-gold`, `.vsp-scroll`. Square corners everywhere.
 * ------------------------------------------------------------------ */

const CTA_URL = "https://vspviolinrainbow.com/achievement.html";

const sectionStyle: CSSProperties = {
  padding: "80px 0",
  background: "#16102A",
  borderTop: "1px solid rgba(224, 188, 106, 0.18)",
  borderBottom: "1px solid rgba(224, 188, 106, 0.18)",
  position: "relative",
};

const innerStyle: CSSProperties = {
  maxWidth: 1440,
  margin: "0 auto",
  padding: "0 32px",
};

const headerStyle: CSSProperties = {
  maxWidth: 760,
  marginBottom: 48,
};

const h2Style: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "clamp(30px, 4.2vw, 44px)",
  lineHeight: 1.12,
  letterSpacing: "-0.01em",
  color: "#F3EDDF",
  margin: "14px 0 18px",
};

const introStyle: CSSProperties = {
  fontFamily: "var(--font-instrument-sans), sans-serif",
  fontSize: "16px",
  lineHeight: 1.68,
  color: "rgba(243, 237, 223, 0.72)",
  maxWidth: 640,
  margin: 0,
};

const railStyle: CSSProperties = {
  display: "flex",
  gap: 16,
  overflowX: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  scrollPaddingLeft: 32,
  paddingBottom: 16, // room so the scrollbar doesn't clip card borders
  margin: "0 -32px", // bleed to the section edges
  paddingLeft: 32,
  paddingRight: 32,
  WebkitOverflowScrolling: "touch",
};

const cardBaseStyle: CSSProperties = {
  flex: "0 0 auto",
  minWidth: 300,
  maxWidth: 320,
  scrollSnapAlign: "start",
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  borderRadius: 0, // square corners — gold is reserved for earned elements, not curves
};

const titleStyle: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "24px",
  lineHeight: 1.18,
  letterSpacing: "-0.005em",
  color: "#F3EDDF",
  margin: 0,
};

const titleOnGoldStyle: CSSProperties = {
  ...titleStyle,
  color: "#1B1233",
};

const meaningStyle: CSSProperties = {
  fontFamily: "var(--font-instrument-sans), sans-serif",
  fontStyle: "italic",
  fontSize: "14px",
  lineHeight: 1.5,
  color: "rgba(243, 237, 223, 0.72)",
  margin: 0,
};

const meaningOnGoldStyle: CSSProperties = {
  ...meaningStyle,
  color: "rgba(27, 18, 51, 0.78)",
};

const hairlineStyle: CSSProperties = {
  border: 0,
  borderTop: "1px solid rgba(224, 188, 106, 0.26)",
  margin: "4px 0 2px",
};

const awardedByStyle: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "11px",
  lineHeight: 1.5,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(243, 237, 223, 0.62)",
  margin: 0,
};

const awardedByOnGoldStyle: CSSProperties = {
  ...awardedByStyle,
  color: "rgba(27, 18, 51, 0.72)",
};

const yearStyle: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "28px",
  lineHeight: 1,
  letterSpacing: "0.02em",
  color: "#E0BC6A",
  marginTop: "auto",
  paddingTop: 4,
};

const yearPlaceholderStyle: CSSProperties = {
  ...yearStyle,
  color: "rgba(224, 188, 106, 0.42)", // dim gold for titles with no recorded year
  marginTop: "auto",
  paddingTop: 4,
};

const accoladesWrapStyle: CSSProperties = {
  marginTop: 72,
};

const accoladesGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
  marginTop: 28,
};

const accoladeCardStyle: CSSProperties = {
  padding: 28,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const accoladeTitleStyle: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "18px",
  lineHeight: 1.3,
  letterSpacing: "-0.005em",
  color: "#F3EDDF",
  margin: 0,
};

const accoladeBodyStyle: CSSProperties = {
  fontFamily: "var(--font-instrument-sans), sans-serif",
  fontSize: "14px",
  lineHeight: 1.62,
  color: "rgba(243, 237, 223, 0.72)",
  margin: 0,
};

const ctaWrapStyle: CSSProperties = {
  marginTop: 56,
  display: "flex",
  justifyContent: "flex-start",
};

const ctaStyle: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "18px",
  letterSpacing: "0.01em",
  color: "#E0BC6A",
  borderBottom: "1px solid rgba(224, 188, 106, 0.46)",
  paddingBottom: 4,
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  transition: "color 200ms ease, border-color 200ms ease",
};

export function Honours() {
  const { achievements } = getSiteContent();
  const { honorifics, accolades, accoladesHeading, honorificsIntro } = achievements;

  return (
    <section id="honours" style={sectionStyle} aria-label="Honours — conferred titles">
      <div style={innerStyle}>
        {/* ---- Header ---- */}
        <header style={headerStyle}>
          <span className="vsp-eyebrow">Honours · conferred titles</span>
          <h2 style={h2Style}>
            A journey adorned with <span style={{ color: "#E0BC6A" }}>prestigious</span> titles.
          </h2>
          <p style={introStyle}>{honorificsIntro}</p>
        </header>

        {/* ---- Horizontal scrolling rail of title cards ---- */}
        <div
          className="vsp-scroll"
          style={railStyle}
          aria-label="Honorific titles — scroll horizontally"
          role="region"
        >
          {honorifics.map((h, i) => {
            const isGold = i === 0;
            const hasYear = typeof h.year === "number";
            const hasAwardedBy = Boolean(h.awardedBy);

            return (
              <article
                key={h.title}
                className={isGold ? "vsp-card-gold" : "vsp-card-neutral"}
                style={cardBaseStyle}
              >
                <h3 style={isGold ? titleOnGoldStyle : titleStyle}>{h.title}</h3>
                <p style={isGold ? meaningOnGoldStyle : meaningStyle}>{h.meaning}</p>

                <hr style={hairlineStyle} className="vsp-hairline-gold" />

                {hasAwardedBy ? (
                  <p style={isGold ? awardedByOnGoldStyle : awardedByStyle}>{h.awardedBy}</p>
                ) : (
                  <p style={isGold ? awardedByOnGoldStyle : awardedByStyle} aria-hidden="true">
                    &nbsp;
                  </p>
                )}

                {hasYear ? (
                  <div style={yearStyle} aria-label={`Year ${h.year}`}>
                    {h.year}
                  </div>
                ) : (
                  <div style={yearPlaceholderStyle} aria-label="Year not recorded">
                    &mdash;
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ---- Prestigious Accolades ---- */}
        <div style={accoladesWrapStyle}>
          <span className="vsp-eyebrow">{accoladesHeading}</span>
          <div style={accoladesGridStyle}>
            {accolades.map((a) => (
              <article
                key={a.title}
                className="vsp-card-neutral"
                style={accoladeCardStyle}
              >
                <h3 style={accoladeTitleStyle}>{a.title}</h3>
                <p style={accoladeBodyStyle}>{a.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- View all honours CTA ---- */}
        <div style={ctaWrapStyle}>
          <a href={CTA_URL} style={ctaStyle} target="_blank" rel="noopener noreferrer">
            View all honours
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Honours;
