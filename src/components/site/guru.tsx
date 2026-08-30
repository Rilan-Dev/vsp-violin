import Image from "next/image";
import { getSiteContent } from "@/lib/data";

/**
 * Guru — Violin Suka Pavalan.
 *
 * Server component. Two-column editorial profile:
 *   LEFT  — gold mono eyebrow, Marcellus h2 with the gold word "lineage",
 *           Geist Mono role line, first 3 paragraphs of the bio,
 *           Joshua Bell pull-quote with a left gold border.
 *   RIGHT — small arch-masked "in performance" portrait, lineage list of
 *           seven gurus (gold ✦ markers on a thin gold connector),
 *           qualification cards (5 items, 2-col on desktop),
 *           USA tours note with year-range chips.
 *
 * Entrance: the section wrapper carries `.vsp-rise` (CSS-only, fires on
 * load). Reduced motion is honoured at the stylesheet level — keyframe
 * durations collapse to 0.001ms via the global override in globals.css.
 *
 * Square corners everywhere except the small arch portrait. Gold marks
 * earned things: the eyebrow, "lineage", the pull-quote border, the ✦
 * lineage markers, the year-range chips, the small portrait's hairline.
 * Geist Mono for all eyebrows, labels, data, role line.
 */

const LINEAGE: { name: string; detail: string }[] = [
  { name: "Thiruvarur Shri S. Santhanam", detail: "Violin & Vocal · from age 6" },
  { name: "Nellai Shri E. Shanmuganathan", detail: "Violin & Vocal" },
  { name: "Mayavaram Shri S. Sivaswamy Iyer", detail: "Violin & Vocal" },
  { name: "Shri V. L. Sudharsan", detail: "Advanced violin" },
  { name: "Shri Kumaresh (Ganesh Kumaresh)", detail: "Advanced violin" },
  { name: "Porayar Shri Adisayam Arumairaj", detail: "Western music" },
  { name: "Shri S. Subramaniyan", detail: "Harmonium · Father" },
];

export function Guru() {
  const c = getSiteContent();
  const about = c.about;
  const pullQuote = c.learnTheViolin.pullQuote;
  const bioParagraphs = about.body.slice(0, 3);
  const tours = about.tours;

  return (
    <section
      id="guru"
      aria-labelledby="guru-heading"
      className="vsp-rise py-14 lg:py-20 px-5 lg:px-8"
      style={{
        background: "#16102A",
        borderTop: "1px solid rgba(224,188,106,0.18)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1440px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1px_0.92fr]"
          style={{ gap: "28px" }}
        >
          {/* ===== LEFT COLUMN — the story ===== */}
          <div>
            {/* Eyebrow */}
            <p className="vsp-eyebrow">The Guru · since 1990</p>

            {/* h2 — section heading */}
            <h2
              id="guru-heading"
              className="mt-6 text-[34px] leading-[1.1] lg:text-[44px] lg:leading-[1.08]"
              style={{
                fontFamily: "var(--font-marcellus), serif",
                letterSpacing: "-0.01em",
                color: "#F3EDDF",
                fontWeight: 400,
              }}
            >
              A <span style={{ color: "#E0BC6A" }}>lineage</span> kept in the
              hands.
            </h2>

            {/* Role line */}
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.62)",
              }}
            >
              {about.role}
            </p>

            {/* Bio — first 3 paragraphs */}
            <div className="mt-7" style={{ maxWidth: "560px" }}>
              {bioParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={i > 0 ? "mt-4" : undefined}
                  style={{
                    fontFamily: "var(--font-instrument-sans), sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.62,
                    color: "rgba(243,237,223,0.82)",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Pull-quote — Joshua Bell */}
            <blockquote
              className="mt-9"
              style={{
                borderLeft: "3px solid #E0BC6A",
                paddingLeft: "20px",
                maxWidth: "560px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontStyle: "italic",
                  fontSize: "20px",
                  lineHeight: 1.45,
                  color: "#F3EDDF",
                }}
              >
                &ldquo;{pullQuote.text}&rdquo;
              </p>
              <footer
                className="mt-3"
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(243,237,223,0.62)",
                }}
              >
                — {pullQuote.author}
              </footer>
            </blockquote>
          </div>

          {/* ===== Divider — desktop only ===== */}
          <div
            aria-hidden
            className="hidden lg:block"
            style={{
              background: "rgba(224,188,106,0.16)",
              width: "1px",
              height: "100%",
            }}
          />

          {/* ===== RIGHT COLUMN — the evidence ===== */}
          <div>
            {/* Small arch-masked portrait */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "150px",
                height: "180px",
                borderRadius: "75px 75px 0 0",
                background: "#1A1234",
                border: "1px solid rgba(224,188,106,0.34)",
                borderBottom: "none",
              }}
            >
              <Image
                src="/assets/portraits/portrait-playing.jpeg"
                alt="Suka Pavalan performing on violin"
                fill
                sizes="150px"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 25%",
                }}
              />
            </div>

            {/* Lineage list */}
            <div className="mt-8">
              <p className="vsp-eyebrow">Lineage</p>
              <ol
                className="relative mt-4"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {/* Thin gold vertical connector — sits behind the ✦ markers */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: "5px",
                    top: "12px",
                    bottom: "12px",
                    width: "1px",
                    background: "rgba(224,188,106,0.32)",
                  }}
                />
                {LINEAGE.map((t) => (
                  <li
                    key={t.name}
                    style={{
                      display: "flex",
                      gap: "14px",
                      padding: "7px 0",
                      position: "relative",
                    }}
                  >
                    {/* Gold ✦ marker — ink background punches through the connector */}
                    <span
                      aria-hidden
                      style={{
                        color: "#E0BC6A",
                        fontSize: "11px",
                        lineHeight: "20px",
                        width: "12px",
                        flex: "0 0 12px",
                        textAlign: "center",
                        background: "#16102A",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      ✦
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-marcellus), serif",
                          fontSize: "15px",
                          lineHeight: 1.3,
                          color: "#F3EDDF",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: "11px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(243,237,223,0.62)",
                          marginTop: "2px",
                        }}
                      >
                        {t.detail}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Qualification cards */}
            <div className="mt-9">
              <p className="vsp-eyebrow">Qualifications</p>
              <div
                className="grid grid-cols-1 md:grid-cols-2 mt-4"
                style={{ gap: "10px" }}
              >
                {about.education.map((e) => (
                  <div
                    key={e.title}
                    className="vsp-card-neutral"
                    style={{ padding: "16px" }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-instrument-sans), sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: 1.35,
                        color: "#F3EDDF",
                      }}
                    >
                      {e.title}
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        color: "rgba(243,237,223,0.62)",
                      }}
                    >
                      {e.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* USA Tours note */}
            <div
              className="mt-9"
              style={{
                borderTop: "1px solid rgba(224,188,106,0.16)",
                paddingTop: "20px",
              }}
            >
              <p className="vsp-eyebrow">{tours.label}</p>
              <div
                className="mt-3"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "16px",
                  color: "#F3EDDF",
                }}
              >
                {tours.country}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {tours.years.map((y) => (
                  <span
                    key={y}
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      color: "#E0BC6A",
                      border: "1px solid rgba(224,188,106,0.46)",
                      background: "rgba(224,188,106,0.08)",
                      padding: "5px 10px",
                    }}
                  >
                    {/* Hyphen → en-dash for the editorial year ranges */}
                    {y.replace(" - ", " – ")}
                  </span>
                ))}
              </div>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(243,237,223,0.72)",
                }}
              >
                {tours.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guru;
