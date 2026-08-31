import type { CSSProperties } from "react";
import { getSiteContent } from "@/lib/data";

/**
 * Testimonials — earned praise from students and peers.
 *
 * Three editorial cards in a row (middle one gold = the strongest
 * endorsement), followed by a full-width Tamil featured quote that
 * roots the section in the local community. Pure server component —
 * static markup, no client JS. Per the section brief, entrance is
 * handled by the parent's scroll reveal, so this component does not
 * mount its own `useReveal` observer.
 *
 * Design tokens: `.vsp-eyebrow`, `.vsp-card-gold`, `.vsp-card-neutral`.
 * Square corners throughout; gold used only where earned (eyebrow,
 * "talk" in the heading, the opening quotation mark, the middle card
 * fill, the ✦ ornaments, the author line on each card).
 */

type Testimonial = {
  title: string;
  author: string;
  place: string;
  quote: string;
};

/* ---- Inline style tokens ---------------------------------------- */

const EYEBROW_SPACE: CSSProperties = {
  display: "block",
  marginBottom: 18,
};

const HEADING_STYLE: CSSProperties = {
  margin: 0,
  fontSize: "clamp(32px, 4vw, 44px)",
  lineHeight: 1.1,
  letterSpacing: "-0.005em",
  color: "#F3EDDF",
};

const LEAD_STYLE: CSSProperties = {
  margin: "20px 0 0",
  fontSize: "15px",
  lineHeight: 1.65,
  color: "rgba(243, 237, 223, 0.72)",
  maxWidth: "60ch",
};

const QUOTE_MARK_STYLE: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "48px",
  lineHeight: 1,
  color: "#E0BC6A",
  display: "block",
  marginBottom: "10px",
  userSelect: "none",
};

const CARD_TITLE_STYLE: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "20px",
  lineHeight: 1.22,
  letterSpacing: "0.004em",
  color: "#F3EDDF",
  margin: 0,
};

const CARD_QUOTE_STYLE: CSSProperties = {
  fontFamily: "var(--font-instrument-sans), system-ui, sans-serif",
  fontSize: "15px",
  lineHeight: 1.62,
  color: "rgba(243, 237, 223, 0.82)",
  margin: "14px 0 0",
  textWrap: "pretty",
};

const CARD_HAIRLINE: CSSProperties = {
  border: 0,
  borderTop: "1px solid rgba(224, 188, 106, 0.22)",
  margin: "20px 0 14px",
};

const CARD_AUTHOR_STYLE: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  fontSize: "15px",
  lineHeight: 1.3,
  color: "#E0BC6A",
};

const CARD_PLACE_STYLE: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(243, 237, 223, 0.62)",
  marginTop: "5px",
  lineHeight: 1.4,
};

const FEATURED_STAR_STYLE: CSSProperties = {
  color: "#E0BC6A",
  fontSize: "14px",
  lineHeight: 1,
  display: "block",
  margin: "0 auto",
  width: "max-content",
};

const FEATURED_QUOTE_STYLE: CSSProperties = {
  // Marcellus is a Latin-only display face — Tamil glyphs fall back to
  // a system serif via the lang="ta" attribute on the parent <figure>.
  // 'Noto Serif Tamil' is named explicitly so Linux/ChromeOS picks it
  // up if installed; everything else resolves to a generic serif.
  fontFamily:
    "var(--font-marcellus), 'Noto Serif Tamil', 'Noto Sans Tamil', system-ui, serif",
  fontSize: "24px",
  lineHeight: 1.55,
  letterSpacing: "0.005em",
  color: "rgba(243, 237, 223, 0.92)",
  margin: "22px 0",
  textWrap: "balance",
};

const FEATURED_AUTHOR_STYLE: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "12px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#E0BC6A",
  lineHeight: 1.3,
};

const FEATURED_PLACE_STYLE: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "10.5px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(243, 237, 223, 0.62)",
  marginTop: "6px",
  lineHeight: 1.4,
};

const GOLD_SPAN_STYLE: CSSProperties = {
  color: "#E0BC6A",
};

/* ---- Card subcomponent ------------------------------------------ */

function TestimonialCard({
  t,
  gold,
  elevated,
}: {
  t: Testimonial;
  gold: boolean;
  elevated: boolean;
}) {
  // flex column with the blockquote absorbing free space so author/
  // place always sit at the bottom of the card — equal heights
  // regardless of quote length or place wrap count.
  const figureClasses = [
    gold ? "vsp-card-gold" : "vsp-card-neutral",
    elevated ? "md:-translate-y-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure
      className={figureClasses}
      style={{
        padding: "28px",
        borderRadius: 0,
        minHeight: "460px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span aria-hidden="true" style={QUOTE_MARK_STYLE}>
        &ldquo;
      </span>
      <h3 style={CARD_TITLE_STYLE}>{t.title}</h3>
      <blockquote
        className="line-clamp-6"
        style={{ ...CARD_QUOTE_STYLE, flex: 1 }}
      >
        {t.quote}
      </blockquote>
      <hr style={CARD_HAIRLINE} />
      <figcaption>
        <div style={CARD_AUTHOR_STYLE}>{t.author}</div>
        <div style={CARD_PLACE_STYLE}>{t.place}</div>
      </figcaption>
    </figure>
  );
}

/* ---- Section ----------------------------------------------------- */

export function Testimonials() {
  const content = getSiteContent();
  const all = content.home.testimonials as Testimonial[];
  // First 3 English testimonials -> three-card grid. The 4th (Tamil)
  // becomes the featured pull-quote below, breaking the grid.
  const cards = all.slice(0, 3);
  const featured = all[3];

  // Sentence-case the heading pulled from data ("See What All the Talk
  // is About" -> "See what all the talk is about.") and wrap the word
  // "talk" in a gold span so the earned word reads first.
  const headingLower = content.home.testimonialsHeading.toLowerCase();
  let heading = headingLower.charAt(0).toUpperCase() + headingLower.slice(1);
  if (!/[.!?…]$/.test(heading)) heading += ".";
  const talkParts = heading.split("talk");

  return (
    <section
      id="testimonials"
      aria-label="Testimonials from students and peers"
      className="py-20 px-5 md:px-8"
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        position: "relative",
        // Faint violet glow that pools around the Tamil block at the
        // bottom — suggests "rooted in the local community" without
        // adding a hard surface treatment.
        background:
          "radial-gradient(ellipse 80% 50% at 50% 95%, rgba(107, 75, 168, 0.10), transparent 60%)",
      }}
    >
      {/* ---- Header ---------------------------------------------- */}
      <header style={{ marginBottom: "56px", maxWidth: "820px" }}>
        <span className="vsp-eyebrow" style={EYEBROW_SPACE}>
          Testimonials · from students and peers
        </span>
        <h2 className="font-display text-balance" style={HEADING_STYLE}>
          {talkParts.length > 1 ? (
            <>
              {talkParts[0]}
              <span style={GOLD_SPAN_STYLE}>talk</span>
              {talkParts.slice(1).join("talk")}
            </>
          ) : (
            heading
          )}
        </h2>
        <p style={LEAD_STYLE}>
          Diaspora parents, adult self-learners, and fellow musicians — in their own words.
        </p>
      </header>

      {/* ---- Three cards ---------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "16px" }}>
        {cards.map((t, i) => (
          <TestimonialCard
            key={i}
            t={t}
            gold={i === 1}
            elevated={i === 1}
          />
        ))}
      </div>

      {/* ---- Tamil featured quote ------------------------------- */}
      {featured && (
        <div
          style={{
            marginTop: "80px",
            paddingTop: "64px",
            borderTop: "1px solid rgba(224, 188, 106, 0.18)",
          }}
        >
          <figure
            lang="ta"
            style={{
              textAlign: "center",
              maxWidth: "920px",
              margin: "0 auto",
            }}
          >
            <span aria-hidden="true" style={FEATURED_STAR_STYLE}>
              ✦
            </span>
            <blockquote style={FEATURED_QUOTE_STYLE}>
              {featured.quote}
            </blockquote>
            <span aria-hidden="true" style={FEATURED_STAR_STYLE}>
              ✦
            </span>
            <figcaption style={{ marginTop: "26px" }}>
              <div style={FEATURED_AUTHOR_STYLE}>{featured.author}</div>
              <div style={FEATURED_PLACE_STYLE}>{featured.place}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
