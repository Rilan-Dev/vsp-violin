"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight } from "lucide-react";

/**
 * Studio login — professional authentication using Supabase Auth.
 * Admin users sign in with email + password.
 * To create an admin user, use the Supabase dashboard or the admin API.
 *
 * Default admin: admin@sukapavalan.com / SukaPavalan2026!
 */
export function StudioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Enter your email and password.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Invalid credentials.");
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
          <span className="vsp-eyebrow">Studio · admin access</span>
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
          The private dashboard for managing enquiries, lessons, categories,
          content, and media. Sign in with your admin credentials.
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
              Email
            </span>
            <div className="flex items-center gap-2">
              <Mail size={15} aria-hidden style={{ color: "#E0BC6A", flexShrink: 0 }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@sukapavalan.com"
                autoFocus
                required
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "rgba(22,16,42,0.6)",
                  border: "1px solid rgba(243,237,223,0.2)",
                  color: "#F3EDDF",
                  fontFamily: "var(--font-instrument-sans)",
                  fontSize: "14.5px",
                  borderRadius: 0,
                }}
              />
            </div>
          </label>
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
              Password
            </span>
            <div className="flex items-center gap-2">
              <Lock size={15} aria-hidden style={{ color: "#E0BC6A", flexShrink: 0 }} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "rgba(22,16,42,0.6)",
                  border: "1px solid rgba(243,237,223,0.2)",
                  color: "#F3EDDF",
                  fontFamily: "var(--font-instrument-sans)",
                  fontSize: "14.5px",
                  borderRadius: 0,
                }}
              />
            </div>
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
            {loading ? "Signing in…" : "Sign in"}
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
          Admin: admin@sukapavalan.com
        </p>
      </div>
    </div>
  );
}

export default StudioLogin;
