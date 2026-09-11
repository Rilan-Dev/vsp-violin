import type { Metadata } from "next";

/**
 * The canonical public origin — the single source of truth for every
 * canonical URL, og:url, sitemap entry, robots sitemap line and RSS link.
 *
 * This was hardcoded to https://sukapavalan.com across nine files while that
 * domain still served the previous Blogger site. Every page of this build was
 * therefore telling search engines "the real version of this page lives at
 * sukapavalan.com" — a URL returning different, older content — which
 * invites Google to drop these pages as duplicates of the old site.
 *
 * Set NEXT_PUBLIC_SITE_URL per environment:
 *   - production, AFTER the DNS cutover:  https://sukapavalan.com
 *   - production, BEFORE the cutover:     https://vsp-violin.vercel.app
 *   - preview / local:                    the deployment's own origin
 *
 * Vercel injects VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL automatically, so
 * preview deployments self-reference correctly without any configuration.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;
  return "http://localhost:3000";
}

const SITE_URL = resolveSiteUrl();
const SITE_NAME = "Violin Suka Pavalan";

export function createSEO({ title, description, path = "/", image, type = "website", keywords, noIndex = false }: {
  title: string; description: string; path?: string; image?: string; type?: "website" | "article" | "profile"; keywords?: string[]; noIndex?: boolean;
}): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/opengraph-image`;
  return {
    title: fullTitle, description,
    keywords: keywords ?? ["Carnatic violin", "violin lessons online", "free violin notation", "Violin Suka Pavalan", "Carnatic music"],
    authors: [{ name: "Violin Suka Pavalan" }],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title: fullTitle, description, url, siteName: SITE_NAME, type, locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}

export { SITE_URL, SITE_NAME };
