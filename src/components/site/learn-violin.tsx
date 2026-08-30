import { getSiteContent } from "@/lib/data";

const STRING_WATERMARK: Record<string, string> = {
  "G String (G3)": "G",
  "A String (A4)": "A",
  "D String (D4)": "D",
  "E String (E5)": "E",
};

const MATERIAL_SWATCH: Record<string, string> = {
  "Gut Strings": "#A87344",
  "Steel Strings": "#B8B8C0",
  "Synthetic Strings": "#C9AE6A",
};

/**
 * Learn the Violin — the instrument itself, as educational content.
 * Per the handoff this is a content page; here it is a preview section.
 */
export function LearnViolin() {
  const c = getSiteContent();
  const lv = c.learnTheViolin;

  return (
    <section
      id="learn"
      aria-label="Learn the Violin — the instrument"
      style={{
        padding: "80px 0",
        borderTop: "1px solid rgba(224,188,106,0.18)",
        background: "#16102A",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1440px", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ maxWidth: "760px" }}>
          <span className="vsp-eyebrow">Learn the Violin · the instrument</span>
          <h2
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "clamp(30px, 4.2vw, 46px)",
              lineHeight: 1.1,
              margin: "14px 0 20px",
              color: "#F3EDDF",
              letterSpacing: "-0.005em",
            }}
          >
            Learn the <span style={{ color: "#E0BC6A" }}>language</span> of the
            violin.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.68,
              color: "rgba(243,237,223,0.82)",
              maxWidth: "680px",
            }}
          >
            {lv.intro}
          </p>
        </div>

        {/* Violin strings — 4 column grid */}
        <div style={{ marginTop: "56px" }}>
          <div className="flex items-baseline justify-between mb-5">
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "24px",
                color: "#F3EDDF",
              }}
            >
              {lv.strings.heading}
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
              {lv.strings.intro}
            </span>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns:
                "repeat(1, minmax(0,1fr)) sm:repeat(2, minmax(0,1fr)) lg:repeat(4, minmax(0,1fr))",
            }}
          >
            {lv.strings.items.map((s) => (
              <article
                key={s.name}
                className="vsp-card-neutral"
                style={{
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "160px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-16px",
                    right: "-8px",
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "96px",
                    lineHeight: 1,
                    color: "rgba(243,237,223,0.04)",
                    pointerEvents: "none",
                  }}
                >
                  {STRING_WATERMARK[s.name] ?? ""}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "20px",
                    color: "#E0BC6A",
                    position: "relative",
                  }}
                >
                  {s.name}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(243,237,223,0.72)",
                    marginTop: "10px",
                    position: "relative",
                  }}
                >
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <figure
          style={{
            margin: "64px auto",
            maxWidth: "860px",
            textAlign: "center",
          }}
        >
          <div
            aria-hidden="true"
            style={{ color: "#E0BC6A", fontSize: "18px", marginBottom: "18px" }}
          >
            ✦
          </div>
          <blockquote
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.6vw, 28px)",
              lineHeight: 1.4,
              color: "rgba(243,237,223,0.92)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            “{lv.pullQuote.text}”
          </blockquote>
          <figcaption
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(243,237,223,0.62)",
              marginTop: "18px",
            }}
          >
            — {lv.pullQuote.author}
          </figcaption>
          <div
            aria-hidden="true"
            style={{ color: "#E0BC6A", fontSize: "18px", marginTop: "18px" }}
          >
            ✦
          </div>
        </figure>

        {/* Materials & Fingering — two columns */}
        <div
          className="grid gap-10"
          style={{
            gridTemplateColumns:
              "repeat(1, minmax(0,1fr)) lg:repeat(2, minmax(0,1fr))",
          }}
        >
          {/* Materials */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "22px",
                color: "#F3EDDF",
                marginBottom: "8px",
              }}
            >
              {lv.materials.heading}
            </h3>
            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: "rgba(243,237,223,0.72)",
                marginBottom: "20px",
              }}
            >
              {lv.materials.intro}
            </p>
            <div className="flex flex-col gap-3">
              {lv.materials.items.map((m) => (
                <article
                  key={m.name}
                  className="vsp-card-neutral"
                  style={{
                    padding: "16px 18px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "0 0 28px",
                      height: "28px",
                      marginTop: "2px",
                      background: MATERIAL_SWATCH[m.name] ?? "#E0BC6A",
                      border: "1px solid rgba(243,237,223,0.2)",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#F3EDDF",
                      }}
                    >
                      {m.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "13.5px",
                        lineHeight: 1.55,
                        color: "rgba(243,237,223,0.72)",
                        marginTop: "4px",
                      }}
                    >
                      {m.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.55,
                color: "rgba(243,237,223,0.62)",
                marginTop: "14px",
                fontStyle: "italic",
              }}
            >
              {lv.materials.closing}
            </p>
          </div>

          {/* Fingering */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "22px",
                color: "#F3EDDF",
                marginBottom: "8px",
              }}
            >
              {lv.fingering.heading}
            </h3>
            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: "rgba(243,237,223,0.72)",
                marginBottom: "20px",
              }}
            >
              {lv.fingering.intro}
            </p>
            <ol className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
              {lv.fingering.items.map((f) => (
                <li
                  key={f.code}
                  className="flex items-start gap-4"
                >
                  <span
                    style={{
                      flex: "0 0 56px",
                      height: "56px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(224,188,106,0.46)",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "14px",
                      color: "#E0BC6A",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {f.code.split(" – ")[0]}
                  </span>
                  <div style={{ paddingTop: "6px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#F3EDDF",
                      }}
                    >
                      {f.code}
                    </p>
                    <p
                      style={{
                        fontSize: "13.5px",
                        lineHeight: 1.55,
                        color: "rgba(243,237,223,0.72)",
                        marginTop: "3px",
                      }}
                    >
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnViolin;
