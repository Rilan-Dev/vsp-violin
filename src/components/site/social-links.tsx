/**
 * Social links rendered as official brand marks.
 *
 * These were plain uppercase text links in bordered boxes ("YOUTUBE",
 * "FACEBOOK", "INSTAGRAM"), which read as site navigation rather than as
 * recognisable destinations. Brand marks are recognised pre-attentively —
 * nobody reads the word "YouTube" to know what it is.
 *
 * Each mark uses its official colour. X is the exception: its mark is black,
 * which is invisible on this site's ink background, so it uses the white
 * treatment X specifies for dark grounds.
 *
 * Icon-only links need an accessible name, so every link carries an
 * aria-label, and each target is 44x44 to meet the minimum touch size.
 */

type Social = { key: "youtube" | "facebook" | "instagram" | "twitter"; href?: string };

const BRAND: Record<
  Social["key"],
  { name: string; color: string; viewBox: string; path: React.ReactNode }
> = {
  youtube: {
    name: "YouTube",
    color: "#FF0000",
    viewBox: "0 0 24 24",
    path: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    ),
  },
  facebook: {
    name: "Facebook",
    color: "#1877F2",
    viewBox: "0 0 24 24",
    path: (
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    ),
  },
  instagram: {
    name: "Instagram",
    // Instagram's mark is a gradient; see the <defs> emitted below.
    color: "url(#vsp-ig-gradient)",
    viewBox: "0 0 24 24",
    path: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.66-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    ),
  },
  twitter: {
    name: "X",
    color: "#F3EDDF",
    viewBox: "0 0 24 24",
    path: (
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
    ),
  },
};

export function SocialLinks({
  social,
  size = 20,
}: {
  social: Partial<Record<Social["key"], string>>;
  size?: number;
}) {
  const items = (Object.keys(BRAND) as Social["key"][])
    .map((key) => ({ key, href: social[key] }))
    .filter((s): s is { key: Social["key"]; href: string } => Boolean(s.href));

  if (items.length === 0) return null;

  return (
    <ul className="flex items-center gap-1" style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {/* Instagram's official mark is a gradient, defined once for all icons. */}
      <svg width="0" height="0" aria-hidden style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="vsp-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#F56040" />
            <stop offset="75%" stopColor="#C13584" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
      </svg>

      {items.map(({ key, href }) => {
        const brand = BRAND[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${brand.name} (opens in a new tab)`}
              title={brand.name}
              className="transition-opacity hover:opacity-100"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                opacity: 0.85,
                borderRadius: 0,
              }}
            >
              <svg
                width={size}
                height={size}
                viewBox={brand.viewBox}
                fill={brand.color}
                aria-hidden
                focusable="false"
              >
                {brand.path}
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
