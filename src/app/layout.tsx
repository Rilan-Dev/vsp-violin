import type { Metadata } from "next";
import { Marcellus, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LegalDialog } from "@/components/site/legal-dialog";
import { BackToTop } from "@/components/site/back-to-top";
import { KeyboardShortcuts } from "@/components/site/keyboard-shortcuts";
import { CookieConsent } from "@/components/site/cookie-consent";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Violin Suka Pavalan — Carnatic violin lessons & free notation",
    template: "%s — Violin Suka Pavalan",
  },
  description:
    "37 years on stage. 22 free Carnatic violin notation lessons. One-to-one online and in-person teaching from Karaikal, Puducherry. Music, kept as worship.",
  keywords: [
    "Carnatic violin", "violin lessons online", "free violin notation", "Suka Pavalan",
    "Carnatic music", "violin teacher Karaikal", "sruthi swara varisai", "sarali varisai",
    "geetham", "varnam", "krithi",
  ],
  authors: [{ name: "Violin Suka Pavalan" }],
  creator: "Violin Suka Pavalan",
  metadataBase: new URL("https://sukapavalan.com"),
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  manifest: "/manifest.json",
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: {
    title: "Violin Suka Pavalan — Carnatic violin lessons & free notation",
    description: "37 years on stage. 22 free Carnatic violin notation lessons. One-to-one online and in-person teaching from Karaikal, Puducherry.",
    type: "website", locale: "en_US", siteName: "Violin Suka Pavalan", url: "https://sukapavalan.com",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Violin Suka Pavalan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Violin Suka Pavalan — Carnatic violin lessons",
    description: "37 years on stage. 22 free Carnatic violin notation lessons.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${marcellus.variable} ${instrumentSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <LegalDialog />
        <BackToTop />
        <KeyboardShortcuts />
        <CookieConsent />
      </body>
    </html>
  );
}
