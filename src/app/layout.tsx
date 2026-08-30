import type { Metadata } from "next";
import { Marcellus, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LegalDialog } from "@/components/site/legal-dialog";
import { BackToTop } from "@/components/site/back-to-top";

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
  title: "Violin Suka Pavalan — Carnatic violin lessons & free notation",
  description:
    "37 years on stage. 22 free Carnatic violin notation lessons. One-to-one online and in-person teaching from Karaikal, Puducherry. Music, kept as worship.",
  keywords: [
    "Carnatic violin",
    "violin lessons online",
    "free violin notation",
    "Suka Pavalan",
    "Carnatic music",
    "violin teacher Karaikal",
    "sruthi swara varisai",
    "sarali varisai",
  ],
  authors: [{ name: "Violin Suka Pavalan" }],
  openGraph: {
    title: "Violin Suka Pavalan — Carnatic violin lessons & free notation",
    description:
      "37 years on stage. 22 free Carnatic violin notation lessons. One-to-one online and in-person teaching from Karaikal, Puducherry.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Violin Suka Pavalan — Carnatic violin lessons",
    description:
      "37 years on stage. 22 free Carnatic violin notation lessons. One-to-one online teaching.",
  },
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
      </body>
    </html>
  );
}
