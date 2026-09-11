import { NextResponse } from "next/server";

/**
 * GET /api/avatar — the artist's current social profile picture.
 *
 * Serves whatever profile picture is live on social media right now, so that
 * changing it there changes it here without anyone touching the site.
 *
 * What is actually possible, having tested each platform:
 *
 *   Facebook  — works, and is the primary source. `graph.facebook.com/<page>/
 *               picture` is Facebook's own documented endpoint, needs no token
 *               or app, and 302s to the current CDN file. Change the page's
 *               picture and this redirect starts pointing somewhere new, which
 *               is exactly the sync that was asked for. Max useful size is
 *               652x652.
 *   YouTube   — works as a fallback, but only by reading the avatar URL out of
 *               the channel page's HTML, since the Data API needs a key. That
 *               is scraping, and it will break whenever YouTube changes its
 *               markup, so it is second in line and failure is tolerated.
 *   Instagram — not possible. The endpoint returns 403 without an authenticated
 *               Graph token tied to a Business account.
 *   X         — not possible. Profile lookups require a paid API tier.
 *
 * Failure is never fatal: if every source fails, this redirects to the local
 * portrait that shipped with the site, so any <img> pointing here always
 * renders something.
 *
 * Cached for six hours. Long enough that a normal page view costs nothing,
 * short enough that a changed picture appears the same day.
 */

const FACEBOOK_PAGE = "ViolinSukaPavalan";
const YOUTUBE_CHANNEL = "UCwtXQIbtIvtGXEXnGU0pL7w";
const FALLBACK = "/assets/portraits/portrait-standing.jpeg";

const SIX_HOURS = 60 * 60 * 6;
export const revalidate = SIX_HOURS;

/** Facebook's redirect target IS the current picture. Resolve without following. */
async function fromFacebook(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://graph.facebook.com/${FACEBOOK_PAGE}/picture?width=1000&height=1000`,
      { redirect: "manual", next: { revalidate: SIX_HOURS } }
    );
    const location = res.headers.get("location");
    return location && location.startsWith("http") ? location : null;
  } catch {
    return null;
  }
}

/** Fallback: lift the avatar URL out of the channel page markup. */
async function fromYouTube(): Promise<string | null> {
  try {
    const res = await fetch(`https://www.youtube.com/channel/${YOUTUBE_CHANNEL}`, {
      headers: { "user-agent": "Mozilla/5.0 (compatible; vsp-site/1.0)" },
      next: { revalidate: SIX_HOURS },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/https:\/\/yt3\.(?:ggpht|googleusercontent)\.com\/[A-Za-z0-9_\-=/]+/);
    return match ? match[0] : null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const remote = (await fromFacebook()) ?? (await fromYouTube());

  if (!remote) {
    return NextResponse.redirect(new URL(FALLBACK, request.url), {
      status: 302, // temporary: the social source may come back
      headers: { "Cache-Control": "public, max-age=300" },
    });
  }

  // Stream the bytes rather than redirecting to the CDN. The CDN URLs are
  // signed and expire, so a redirect that a browser cached would start 403ing;
  // proxying also keeps the page on one origin and avoids a CSP allowance for
  // fbcdn/googleusercontent.
  try {
    const img = await fetch(remote, { next: { revalidate: SIX_HOURS } });
    if (!img.ok) throw new Error(`upstream ${img.status}`);
    const buffer = await img.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": img.headers.get("content-type") ?? "image/jpeg",
        // Serve the stale copy while revalidating so a slow social response
        // never delays a page render.
        "Cache-Control": `public, max-age=${SIX_HOURS}, stale-while-revalidate=86400`,
      },
    });
  } catch {
    return NextResponse.redirect(new URL(FALLBACK, request.url), {
      status: 302,
      headers: { "Cache-Control": "public, max-age=300" },
    });
  }
}
