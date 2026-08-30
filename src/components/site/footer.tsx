import { getSiteContent } from "@/lib/data";

export function Footer() {
  const c = getSiteContent();
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
          padding: "56px 32px 40px",
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
              <span
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "24px",
                  letterSpacing: "0.06em",
                  color: "#E0BC6A",
                }}
              >
                SUKA PAVALAN
              </span>
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
              <div className="flex items-center gap-3 mt-2">
                {[
                  { label: "YouTube", href: contact.social.youtube },
                  { label: "Facebook", href: contact.social.facebook },
                  { label: "Instagram", href: contact.social.instagram },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vsp-eyebrow transition-colors hover:text-gold-hover"
                    style={{
                      padding: "7px 12px",
                      border: "1px solid rgba(224,188,106,0.34)",
                      borderRadius: "0",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
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
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                style={{ fontSize: "14px", color: "rgba(243,237,223,0.82)" }}
              >
                {contact.phone}
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
                { href: "#library", label: "Free Lessons" },
                { href: "#guru", label: "The Guru" },
                { href: "#honours", label: "Honours" },
                { href: "#stage", label: "Stage" },
                { href: "#learn", label: "Learn the Violin" },
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

            {/* Enrol */}
            <div className="flex flex-col gap-2.5">
              <span className="vsp-eyebrow">Begin</span>
              <a
                href="#enrol"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "18px",
                  color: "#E0BC6A",
                }}
              >
                Book a free trial →
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
            {["Privacy", "Terms", "Disclaimer"].map((l) => (
              <a
                key={l}
                href="#legal"
                className="transition-colors hover:text-gold-hover"
                style={{
                  fontSize: "12.5px",
                  color: "rgba(243,237,223,0.5)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
