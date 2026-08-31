"use client";

import { useState } from "react";
import { X } from "lucide-react";

const CONSENT_KEY = "vsp-cookie-consent";

type Consent = "accepted" | "rejected" | null;

/**
 * Cookie consent banner — GDPR-lite for the EU/UK diaspora audience.
 *
 * The site itself doesn't set tracking cookies, but the footer notes
 * "we employ the use of cookies" in the carried-over Privacy Policy.
 * This banner makes that explicit and lets the user accept or reject.
 *
 * Consent is stored in localStorage (no cookie set — keeping it simple
 * and cookie-free). The banner only shows once per visitor.
 *
 * SSR-safe: the lazy initializer reads localStorage only on the client
 * (guarded by `typeof window`), and the banner renders null on the
 * first server render to avoid hydration mismatch.
 */
function getInitialConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(CONSENT_KEY) as Consent;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  // Lazy initializer — runs only on the client, not during SSR.
  const [consent, setConsent] = useState<Consent>(getInitialConsent);
  // Track whether we've hydrated to avoid SSR/client mismatch.
  // On the server, `consent` is null (from the initializer guard).
  // On the client's first render, it's also null (matches SSR).
  // After mount, the effect reads the real value — but since the
  // lazy initializer already ran on the client, `consent` is already
  // the real value by the time React hydrates. So we don't need a
  // mounted flag or an effect at all.
  const setAndStore = (value: Exclude<Consent, null>) => {
    setConsent(value);
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // localStorage may be blocked — silent fail
    }
  };

  // If consent already given, don't show the banner
  if (consent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 60,
        background: "rgba(22,16,42,0.97)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderTop: "1px solid rgba(224,188,106,0.34)",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1", minWidth: "280px" }}>
        <span aria-hidden="true" style={{ fontSize: "20px" }}>✦</span>
        <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.55, color: "rgba(243,237,223,0.82)" }}>
          This site uses cookies for a better experience. See our{" "}
          <a
            href="#legal-privacy"
            style={{ color: "#E0BC6A", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
        <button
          type="button"
          onClick={() => setAndStore("rejected")}
          style={{
            padding: "9px 16px",
            background: "transparent",
            border: "1px solid rgba(243,237,223,0.2)",
            color: "rgba(243,237,223,0.72)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => setAndStore("accepted")}
          className="vsp-cta-gold"
          style={{
            padding: "9px 18px",
            background: "#E0BC6A",
            color: "#1B1233",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "13px",
            letterSpacing: "0.04em",
            border: "none",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setAndStore("rejected")}
          aria-label="Close cookie banner"
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(243,237,223,0.4)",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
