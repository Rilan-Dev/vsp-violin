import Image from "next/image";
import { getSiteContent } from "@/lib/data";

/**
 * Hero — Violin Suka Pavalan.
 *
 * Server component. Two-column art-directed hero:
 *   LEFT  — gold mono eyebrow, Marcellus h1 with the gold word "worship",
 *           cream lead paragraph, gold-fill + cream-outline CTAs,
 *           four-stat row above a gold hairline.
 *   RIGHT — arch-masked portrait with gradient scrim and overlaid name plate.
 *
 * Entrance: each block carries the `.vsp-rise` class (defined in globals.css)
 * with a staggered inline `animationDelay`. Reduced motion is honoured at the
 * stylesheet level — keyframe durations collapse to 0.001ms.
 *
 * The section keeps square corners everywhere except the arch (the only place
 * radius is allowed in the VSP design system).
 */

const STATS = [
  { num: "37", label: "Years on stage" },
  { num: "5,000+", label: "Live performances" },
  { num: "12", label: "Honorific titles" },
  { num: "1992", label: "First AIR broadcast" },
];

export function Hero() {
  const { brand } = getSiteContent();

  return (
    <section
      id="top"
      aria-label="Hero — Violin Suka Pavalan"
      className="vsp-grain relative overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "120px", // clears the fixed nav
        paddingBottom: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ===== Background radial washes (pointer-events: none) ===== */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Violet wash — anchored at 50% / -10% */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "-10%",
            transform: "translateX(-50%)",
            width: "min(1400px, 140vw)",
            height: "900px",
            background:
              "radial-gradient(closest-side, rgba(107,75,168,0.22), transparent 70%)",
          }}
        />
        {/* Gold wash — anchored at 88% / 80%, low alpha */}
        <div
          style={{
            position: "absolute",
            left: "88%",
            top: "80%",
            transform: "translate(-50%, -50%)",
            width: "760px",
            height: "760px",
            background:
              "radial-gradient(closest-side, rgba(224,188,106,0.14), transparent 72%)",
          }}
        />
      </div>

      {/* ===== Hero content ===== */}
      <div
        className="relative mx-auto w-full"
        style={{ maxWidth: "1440px", padding: "0 32px", zIndex: 1 }}
      >
        <div
          className="grid grid-cols-1 min-[720px]:grid-cols-[1fr_0.92fr]"
          style={{ gap: "48px" }}
        >
          {/* ===== LEFT COLUMN ===== */}
          <div>
            {/* Eyebrow */}
            <p
              className="vsp-eyebrow vsp-rise"
              style={{ animationDelay: "0ms" }}
            >
              Karaikal, Puducherry · on stage since 1990
            </p>

            {/* h1 — page's main heading */}
            <h1
              className="vsp-rise mt-6 text-[40px] leading-[1.08] lg:text-[62px] lg:leading-[1.06]"
              style={{
                animationDelay: "90ms",
                fontFamily: "var(--font-marcellus), serif",
                letterSpacing: "-0.01em",
                color: "#F3EDDF",
                fontWeight: 400,
              }}
            >
              Music, kept as{" "}
              <span style={{ color: "#E0BC6A" }}>worship</span>
            </h1>

            {/* Lead paragraph */}
            <p
              className="vsp-rise mt-7 max-w-[560px] text-[16px] leading-[1.68] lg:text-[17.5px]"
              style={{
                animationDelay: "180ms",
                fontFamily: "var(--font-instrument-sans), sans-serif",
                color: "rgba(243, 237, 223, 0.82)",
              }}
            >
              A 37-year Carnatic violinist and teacher in Karaikal. 22 free
              notation lessons online. One-to-one teaching, in person and
              across the world.
            </p>

            {/* CTAs */}
            <div
              className="vsp-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "270ms" }}
            >
              {/* Primary — gold fill */}
              <a
                href="#enrol"
                className="group inline-flex items-center gap-[10px] bg-[#E0BC6A] text-[#1B1233] hover:bg-[#F2D89A] hover:text-[#1B1233] hover:-translate-y-px transition-all duration-200"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                  padding: "13px 26px",
                  borderRadius: 0,
                }}
              >
                Book a free trial
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ fontSize: "16px", lineHeight: 1 }}
                >
                  →
                </span>
              </a>

              {/* Secondary — cream outline */}
              <a
                href="#library"
                className="inline-flex items-center gap-[10px] bg-transparent text-[#F3EDDF] hover:text-[#F3EDDF] border border-[rgba(243,237,223,0.46)] hover:border-[rgba(243,237,223,0.78)] hover:bg-[rgba(243,237,223,0.04)] hover:-translate-y-px transition-all duration-200"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                  padding: "13px 26px",
                  borderRadius: 0,
                }}
              >
                Browse 22 free lessons
              </a>
            </div>

            {/* Four-stat row above a gold hairline */}
            <div
              className="vsp-rise mt-14"
              style={{
                animationDelay: "360ms",
                borderTop: "1px solid rgba(224, 188, 106, 0.26)",
                paddingTop: "24px",
              }}
            >
              <div
                className="flex flex-wrap"
                style={{ justifyContent: "space-between", gap: "20px" }}
              >
                {STATS.map((s) => (
                  <div key={s.label} style={{ minWidth: "118px" }}>
                    <div
                      className="text-[30px] leading-none lg:text-[44px]"
                      style={{
                        fontFamily: "var(--font-marcellus), serif",
                        color: "#E0BC6A",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "10.5px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(243, 237, 223, 0.62)",
                        marginTop: "10px",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN — arch portrait ===== */}
          <div className="flex justify-center min-[720px]:justify-end">
            <div
              className="vsp-rise relative w-full max-w-[380px] h-[460px] lg:max-w-[460px] lg:h-[600px]"
              style={{ animationDelay: "440ms" }}
            >
              <div
                className="vsp-arch relative overflow-hidden"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#1A1234",
                }}
              >
                <Image
                  src="/assets/portraits/portrait-standing.jpeg"
                  alt="Suka Pavalan, Carnatic violinist, standing portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 380px, 460px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 18%",
                  }}
                />

                {/* Gradient scrim — transparent top to ink bottom */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(22,16,42,0.55) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Name plate overlaid at the bottom of the arch */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "20px 24px 22px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-marcellus), serif",
                      fontSize: "20px",
                      letterSpacing: "0.22em",
                      color: "#F3EDDF",
                    }}
                  >
                    {brand.person}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      color: "rgba(243, 237, 223, 0.72)",
                      marginTop: "6px",
                    }}
                  >
                    {brand.credentials}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
