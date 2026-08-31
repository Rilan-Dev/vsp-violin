"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

/**
 * Studio login gate — a single token field.
 *
 * The Studio is owner-only, never linked from the public site. Access is via
 * a shared secret (STUDIO_TOKEN env var, defaults to "vsp-studio-dev" in
 * development). On success, a cookie is set and the page reloads to show
 * the dashboard.
 */
export function StudioLogin() {
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) {
      setError("Enter the studio token.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.trim() }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Invalid token.");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
        className="vsp-card-gold"
        style={{ maxWidth: "440px", width: "100%", padding: "40px 36px" }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
          <Lock size={22} aria-hidden style={{ color: "#E0BC6A" }} />
          <span className="vsp-eyebrow">Studio · owner only</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "32px",
            lineHeight: 1.1,
            margin: 0,
            color: "#F3EDDF",
          }}
        >
          Suka Pavalan Studio
        </h1>
        <p
          style={{
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: "rgba(243,237,223,0.72)",
            margin: "12px 0 28px",
          }}
        >
          The private dashboard for managing enquiries and lessons. Not linked
          from the public site.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "10.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(243,237,223,0.62)",
              }}
            >
              Studio token
            </span>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter the shared token"
              autoFocus
              aria-label="Studio token"
              style={{
                padding: "12px 16px",
                background: "rgba(22,16,42,0.6)",
                border: "1px solid rgba(243,237,223,0.2)",
                color: "#F3EDDF",
                fontFamily: "var(--font-instrument-sans)",
                fontSize: "14.5px",
                borderRadius: 0,
              }}
            />
          </label>
          {error && (
            <p
              role="status"
              aria-live="polite"
              style={{
                padding: "10px 14px",
                border: "1px solid #E08C50",
                background: "rgba(224,140,80,0.08)",
                color: "#F2C5A5",
                fontSize: "13px",
              }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="vsp-cta-gold flex items-center justify-center gap-2"
            style={{
              padding: "13px 24px",
              background: loading ? "rgba(224,188,106,0.45)" : "#E0BC6A",
              color: "#1B1233",
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "14px",
              letterSpacing: "0.04em",
              border: "none",
              cursor: loading ? "wait" : "pointer",
              borderRadius: 0,
            }}
          >
            {loading ? "Entering…" : "Enter Studio"}
            {!loading && <ArrowRight size={16} aria-hidden />}
          </button>
        </form>
        <p
          style={{
            marginTop: "24px",
            fontSize: "11.5px",
            color: "rgba(243,237,223,0.5)",
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.04em",
          }}
        >
          Dev token: vsp-studio-dev
        </p>
      </div>
    </div>
  );
}

export default StudioLogin;
