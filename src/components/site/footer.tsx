import { getDynamicContent } from "@/lib/dynamic-content";
import { SocialLinks } from "@/components/site/social-links";

export async function Footer() {
  const c = await getDynamicContent();
  const contact = c.contact;
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: "1px solid rgba(224,188,106,0.26)",
        background: "#1A1234",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1440px",
          padding: "40px 20px 32px",
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(1, minmax(0,1fr))",
            gap: "36px",
          }}
        >
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand + tagline */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {/* The live social profile picture, served by /api/avatar.
                    It follows whatever is currently set on Facebook, so
                    changing it there changes it here within a few hours with
                    nobody touching the site. A plain <img> on purpose: the
                    source is a proxied route, not a known-dimension static
                    asset, and the route always returns something — it falls
                    back to the shipped portrait if social is unreachable. */}
                <img
                  src="/api/avatar"
                  alt="Violin Suka Pavalan"
                  width={52}
                  height={52}
                  loading="lazy"
                  style={{
                    width: 52,
                    height: 52,
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "1px solid rgba(224,188,106,0.45)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "24px",
                    letterSpacing: "0.06em",
                    color: "#E0BC6A",
                  }}
                >
                  VIOLIN SUKA PAVALAN
                </span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(243,237,223,0.72)",
                  maxWidth: "320px",
                }}
              >
                {c.brand.tagline} {c.contact.heroLine}
              </p>
              <div className="flex items-center mt-2" style={{ marginLeft: -10 }}>
                <SocialLinks social={contact.social} />
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <span className="vsp-eyebrow">Contact</span>
              <a
                href={`mailto:${contact.email}`}
                style={{ fontSize: "14px", color: "rgba(243,237,223,0.82)" }}
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                style={{ fontSize: "14px", color: "rgba(243,237,223,0.82)" }}
              >
                {contact.phone}
              </a>
              {/* WhatsApp is how most enquiries in this market actually
                  arrive, and it works for the diaspora audience the site
                  targets. wa.me needs the number digits-only, no plus. */}
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  color: "rgba(243,237,223,0.82)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "24px",
                }}
              >
                <span aria-hidden style={{ color: "#78DCAA", fontSize: "12px" }}>
                  ●
                </span>
                Message on WhatsApp
              </a>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.55,
                  color: "rgba(243,237,223,0.62)",
                  marginTop: "6px",
                }}
              >
                {contact.addressLines.join(" ")}
              </p>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-2.5">
              <span className="vsp-eyebrow">Explore</span>
              {[
                { href: "/library", label: "Free Lessons" },
                { href: "/about", label: "The Guru" },
                { href: "/honours", label: "Honours" },
                { href: "/stage", label: "Stage" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/learn", label: "Learn the Violin" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition-colors hover:text-gold-hover"
                  style={{ fontSize: "14px", color: "rgba(243,237,223,0.82)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <span className="vsp-eyebrow">Contact</span>
              <a
                href="#contact"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "18px",
                  color: "#E0BC6A",
                }}
              >
                Contact Us →
              </a>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.55,
                  color: "rgba(243,237,223,0.62)",
                  marginTop: "6px",
                }}
              >
                One-to-one online and in-person teaching from Karaikal,
                Puducherry.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-12 pt-6"
          style={{ borderTop: "1px solid rgba(243,237,223,0.16)" }}
        >
          <p
            style={{
              fontSize: "12.5px",
              color: "rgba(243,237,223,0.5)",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.04em",
            }}
          >
            © {year} Violin Suka Pavalan. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy", hash: "#legal-privacy" },
              { label: "Terms", hash: "#legal-terms" },
              { label: "Disclaimer", hash: "#legal-disclaimer" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.hash}
                className="transition-colors hover:text-gold-hover"
                style={{
                  fontSize: "12.5px",
                  color: "rgba(243,237,223,0.5)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/feed.xml"
              className="transition-colors hover:text-gold-hover"
              style={{
                fontSize: "12.5px",
                color: "rgba(243,237,223,0.5)",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.04em",
              }}
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
