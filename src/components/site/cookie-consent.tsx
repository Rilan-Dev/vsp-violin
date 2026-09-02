"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CONSENT_KEY = "vsp-cookie-consent";

type Consent = "accepted" | "rejected" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "accepted" || stored === "rejected") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConsent(stored);
      }
    } catch {
      // localStorage may be blocked
    }
  }, []);

  const setAndStore = (value: Exclude<Consent, null>) => {
    setConsent(value);
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // localStorage may be blocked
    }
  };

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
          <a href="#legal-privacy" style={{ color: "#E0BC6A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
        <button type="button" onClick={() => setAndStore("rejected")}
          style={{ padding: "9px 16px", background: "transparent", border: "1px solid rgba(243,237,223,0.2)", color: "rgba(243,237,223,0.72)", fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", borderRadius: 0 }}>
          Decline
        </button>
        <button type="button" onClick={() => setAndStore("accepted")} className="vsp-cta-gold"
          style={{ padding: "9px 18px", background: "#E0BC6A", color: "#1B1233", fontFamily: "var(--font-marcellus), serif", fontSize: "13px", letterSpacing: "0.04em", border: "none", cursor: "pointer", borderRadius: 0 }}>
          Accept
        </button>
        <button type="button" onClick={() => setAndStore("rejected")} aria-label="Close cookie banner"
          style={{ background: "transparent", border: "none", color: "rgba(243,237,223,0.4)", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
