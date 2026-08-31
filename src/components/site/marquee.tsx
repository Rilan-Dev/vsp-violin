import type { CSSProperties } from "react";

/**
 * Credibility Marquee — a full-bleed band of credentials that scrolls
 * horizontally on a 36s linear loop. The track is duplicated; the second
 * copy carries `vsp-marquee-dup` + `aria-hidden="true"` so the loop is
 * visually seamless and accessible. Reduced-motion CSS (in globals.css)
 * freezes the track, wraps it, and hides the duplicate automatically.
 */

const ITEMS: string[] = [
  "All India Radio — Trichy, Puducherry, Karaikal",
  "Thyagaraja Aradhana since 1992",
  "Five TV channels",
  "USA tours 2013–15, 2017–19",
  "CCRT Cultural Talent Scholarship 1994–2000",
  "37 years on stage",
  "5,000+ live performances",
  "Students across USA, UK, Canada, Gulf, Australia",
];

const sectionStyle: CSSProperties = {
  borderTop: "1px solid rgba(224, 188, 106, 0.26)",
  borderBottom: "1px solid rgba(224, 188, 106, 0.26)",
  background: "rgba(37, 26, 66, 0.55)",
  overflow: "hidden",
  width: "100%",
};

const trackStyle: CSSProperties = {
  display: "flex",
  width: "max-content",
  alignItems: "center",
};

const groupStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "18px 0",
  whiteSpace: "nowrap",
};

const itemStyle: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "12px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(243, 237, 223, 0.76)",
};

const separatorStyle: CSSProperties = {
  color: "#E0BC6A",
  fontSize: "12px",
  margin: "0 24px",
  lineHeight: 1,
};

function MarqueeGroup() {
  return ITEMS.map((text, i) => (
    <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
      <span style={itemStyle}>{text}</span>
      <span style={separatorStyle} aria-hidden="true">
        ✦
      </span>
    </span>
  ));
}

export function Marquee() {
  return (
    <section style={sectionStyle} aria-label="Career highlights and credentials">
      <div className="vsp-marquee-track" style={trackStyle}>
        <div style={groupStyle} aria-hidden={false}>
          <MarqueeGroup />
        </div>
        <div className="vsp-marquee-dup" style={groupStyle} aria-hidden="true">
          <MarqueeGroup />
        </div>
      </div>
    </section>
  );
}

export default Marquee;
