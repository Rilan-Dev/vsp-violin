import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#16102A",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Large 404 in Marcellus */}
        <p
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(80px, 14vw, 140px)",
            lineHeight: 1,
            margin: 0,
            color: "#E0BC6A",
            letterSpacing: "-0.02em",
          }}
        >
          404
        </p>

        {/* Gold hairline */}
        <div
          aria-hidden="true"
          style={{
            width: "60px",
            height: "1px",
            background: "#E0BC6A",
            margin: "24px auto",
          }}
        />

        <span className="vsp-eyebrow">Lost a string</span>
        <h1
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(28px, 4vw, 38px)",
            lineHeight: 1.15,
            margin: "12px 0 18px",
            color: "#F3EDDF",
            letterSpacing: "-0.005em",
          }}
        >
          This page is out of tune.
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.65,
            color: "rgba(243,237,223,0.72)",
            margin: "0 0 36px",
          }}
        >
          The page you&apos;re looking for may have moved, been renamed, or never
          existed. The lesson library, the guru&apos;s story, and the stage are all
          still here — let&apos;s get you back to the music.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="vsp-cta-gold flex items-center gap-2"
            style={{
              padding: "13px 26px",
              background: "#E0BC6A",
              color: "#1B1233",
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "14px",
              letterSpacing: "0.04em",
            }}
          >
            <Home size={15} aria-hidden />
            Back to homepage
          </Link>
          <Link
            href="/library"
            className="flex items-center gap-2 transition-colors"
            style={{
              padding: "13px 26px",
              border: "1px solid rgba(243,237,223,0.46)",
              color: "#F3EDDF",
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "14px",
              letterSpacing: "0.04em",
            }}
          >
            <Search size={15} aria-hidden />
            Browse the library
          </Link>
        </div>

        {/* Decorative footer */}
        <p
          style={{
            marginTop: "48px",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "10.5px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(243,237,223,0.4)",
          }}
        >
          ✦ Suka Pavalan · Carnatic violin · since 1990 ✦
        </p>
      </div>
    </div>
  );
}
