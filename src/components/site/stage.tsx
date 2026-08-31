import Image from "next/image";
import { getSiteContent } from "@/lib/data";

/**
 * Stage section — performance record and gallery.
 * Per the handoff: "10 performance videos, the radio/TV/tours record,
 * and a gallery with placeholder cards."
 */
export function Stage() {
  const c = getSiteContent();
  const perf = c.about.performance;

  return (
    <section
      id="stage"
      aria-label="Stage — the public performance record"
      style={{
        padding: "80px 0",
        borderTop: "1px solid rgba(224,188,106,0.18)",
        background: "#16102A",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1440px", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ maxWidth: "760px" }}>
          <span className="vsp-eyebrow">Stage · the public record</span>
          <h2
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "clamp(30px, 4.2vw, 46px)",
              lineHeight: 1.1,
              margin: "14px 0 18px",
              color: "#F3EDDF",
              letterSpacing: "-0.005em",
            }}
          >
            Five <span style={{ color: "#E0BC6A" }}>thousand</span>{" "}
            performances. One instrument.
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.62,
              color: "rgba(243,237,223,0.72)",
              maxWidth: "640px",
            }}
          >
            {perf.body}
          </p>
        </div>

        {/* Three record cards */}
        <div
          className="grid gap-4 mt-12 grid-cols-1 md:grid-cols-3"
        >
          {/* AIR */}
          <article className="vsp-card-neutral" style={{ padding: "26px" }}>
            <span className="vsp-eyebrow">Radio</span>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "26px",
                color: "#E0BC6A",
                marginTop: "10px",
              }}
            >
              All India Radio
            </h3>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.62)",
                margin: "4px 0 14px",
              }}
            >
              {perf.radio.since}
            </p>
            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: "rgba(243,237,223,0.72)",
                marginBottom: "16px",
              }}
            >
              {perf.radio.body}
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: "8px" }}>
              {perf.radio.stations.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    padding: "5px 10px",
                    border: "1px solid rgba(224,188,106,0.34)",
                    color: "#E0BC6A",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </article>

          {/* Stage — 5000+ */}
          <article className="vsp-card-neutral" style={{ padding: "26px" }}>
            <span className="vsp-eyebrow">Stage</span>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "26px",
                color: "#E0BC6A",
                marginTop: "10px",
              }}
            >
              {perf.stage[0].since}
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.62,
                color: "rgba(243,237,223,0.82)",
                margin: "14px 0 0",
              }}
            >
              {perf.stage[0].body}
            </p>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "10.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.5)",
                marginTop: "auto",
                paddingTop: "18px",
              }}
            >
              Solo · ensemble · televised
            </p>
          </article>

          {/* Thyagaraja Aradhana */}
          <article className="vsp-card-gold" style={{ padding: "26px" }}>
            <span className="vsp-eyebrow">Annual homage</span>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "26px",
                color: "#E0BC6A",
                marginTop: "10px",
              }}
            >
              Thyagaraja Aradhana
            </h3>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.72)",
                margin: "4px 0 14px",
              }}
            >
              {perf.stage[1].since}
            </p>
            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: "rgba(243,237,223,0.82)",
              }}
            >
              {perf.stage[1].body}
            </p>
          </article>
        </div>

        {/* Closing line */}
        <p
          style={{
            fontStyle: "italic",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(243,237,223,0.62)",
            textAlign: "center",
            maxWidth: "760px",
            margin: "36px auto 0",
          }}
        >
          {perf.closing}
        </p>

        {/* Gallery of Glory — horizontal rail */}
        <div style={{ marginTop: "56px" }}>
          <div className="flex items-baseline justify-between mb-5">
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "24px",
                color: "#F3EDDF",
              }}
            >
              Gallery of Glory
            </h3>
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "10.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.5)",
              }}
            >
              archive · 15 images · file needed
            </span>
          </div>
          <div
            className="vsp-scroll"
            role="region"
            aria-label="Performance gallery — scroll horizontally"
            style={{
              display: "flex",
              gap: "14px",
              overflowX: "auto",
              paddingBottom: "16px",
              scrollSnapType: "x mandatory",
              margin: "0 -32px",
              paddingInline: "32px",
            }}
          >
            {/* Lead portrait */}
            <figure
              style={{
                flex: "0 0 320px",
                scrollSnapAlign: "start",
                position: "relative",
                height: "240px",
                border: "1px solid rgba(224,188,106,0.34)",
              }}
            >
              <Image
                src="/assets/portraits/portrait-seated.jpeg"
                alt="Suka Pavalan seated with violin, stage portrait"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                sizes="320px"
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "10px 14px",
                  background:
                    "linear-gradient(transparent, rgba(22,16,42,0.85))",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "10.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#E0BC6A",
                }}
              >
                Seated · stage
              </figcaption>
            </figure>
            {/* Placeholder cards — file needed */}
            {[
              "Award ceremony · 2024",
              "Thyagaraja Aradhana",
              "USA tour · 2017",
              "AIR broadcast",
              "Fusion collaboration",
            ].map((label) => (
              <figure
                key={label}
                style={{
                  flex: "0 0 280px",
                  scrollSnapAlign: "start",
                  height: "240px",
                  background:
                    "linear-gradient(155deg, rgba(107,75,168,0.18), rgba(36,26,66,0.6))",
                  border: "1px solid rgba(243,237,223,0.16)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <svg
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="1"
                    y="5"
                    width="32"
                    height="22"
                    stroke="rgba(224,188,106,0.4)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="17"
                    cy="16"
                    r="6"
                    stroke="rgba(224,188,106,0.4)"
                    strokeWidth="1"
                  />
                  <rect
                    x="11"
                    y="1"
                    width="12"
                    height="5"
                    stroke="rgba(224,188,106,0.4)"
                    strokeWidth="1"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "10.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(243,237,223,0.5)",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "9.5px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(224,188,106,0.5)",
                  }}
                >
                  file needed
                </span>
              </figure>
            ))}
          </div>
        </div>

        {/* USA tours band */}
        <div
          style={{
            marginTop: "48px",
            padding: "22px 28px",
            border: "1px solid rgba(224,188,106,0.34)",
            background: "rgba(37,26,66,0.4)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
          }}
        >
          <div>
            <span className="vsp-eyebrow">Abroad Tours</span>
            <p
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "20px",
                color: "#F3EDDF",
                marginTop: "6px",
              }}
            >
              {c.about.tours.country}
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {c.about.tours.years.map((y) => (
              <span
                key={y}
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "8px 16px",
                  border: "1px solid rgba(224,188,106,0.46)",
                  color: "#E0BC6A",
                }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stage;
