import type { Metadata } from "next";

const SITE_URL = "https://sukapavalan.com";
const SITE_NAME = "Violin Suka Pavalan";

export function createSEO({ title, description, path = "/", image, type = "website", keywords, noIndex = false }: {
  title: string; description: string; path?: string; image?: string; type?: "website" | "article" | "profile"; keywords?: string[]; noIndex?: boolean;
}): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/opengraph-image`;
  return {
    title: fullTitle, description,
    keywords: keywords ?? ["Carnatic violin", "violin lessons online", "free violin notation", "Suka Pavalan", "Carnatic music"],
    authors: [{ name: "Violin Suka Pavalan" }],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title: fullTitle, description, url, siteName: SITE_NAME, type, locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}

export { SITE_URL, SITE_NAME };
