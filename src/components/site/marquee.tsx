import type { CSSProperties } from "react";

const ITEMS: string[] = [
  "All India Radio - Trichy, Puducherry, Karaikal",
  "Thyagaraja Aradhana since 1992",
  "Five TV channels",
  "USA tours 2013-15, 2017-19",
  "CCRT Cultural Talent Scholarship 1994-2000",
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
  position: "relative",
  contain: "layout style",
};

const trackStyle: CSSProperties = {
  display: "flex",
  width: "max-content",
  alignItems: "center",
  willChange: "transform",
};

const groupStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "18px 32px",
  whiteSpace: "nowrap",
  flexShrink: 0,
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
    <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
      <span style={itemStyle}>{text}</span>
      <span style={separatorStyle} aria-hidden="true">
        {"\u2726"}
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
        <div className="vsp-marquee-dup" style={groupStyle} aria-hidden={true}>
          <MarqueeGroup />
        </div>
      </div>
    </section>
  );
}

export default Marquee;
