"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { StudioLogin } from "@/components/site/studio-login";
import { StudioDashboard } from "@/components/site/studio-dashboard";

/**
 * StudioPage — admin portal at /studio.
 *
 * Flow:
 * 1. Loading state while we check the auth session.
 * 2. If authed → render the full StudioDashboard (7 tabs).
 * 3. If not authed → render the professional StudioLogin form.
 *
 * Auth is verified client-side via GET /api/studio/auth which checks
 * the `sb-access-token` httpOnly cookie set by Supabase Auth.
 *
 * An ErrorBoundary wraps the dashboard so a single rendering error in
 * a tab doesn't blank out the entire portal — admin sees a clear,
 * actionable error card instead of a white screen.
 */

type AuthState = "loading" | "authed" | "login";
type AuthUser = { id?: string; email?: string } | null;

class DashboardErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("StudioDashboard render error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#16102A",
            color: "#F3EDDF",
            padding: "80px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="vsp-card-gold"
            style={{ maxWidth: "560px", width: "100%", padding: "36px 32px" }}
          >
            <span
              className="vsp-eyebrow"
              style={{ display: "block", marginBottom: 14, color: "#E08C50" }}
            >
              Studio · render error
            </span>
            <h1
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "26px",
                lineHeight: 1.2,
                color: "#F3EDDF",
                margin: "0 0 16px",
              }}
            >
              The dashboard hit an unexpected error.
            </h1>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                color: "rgba(243,237,223,0.72)",
                margin: "0 0 18px",
              }}
            >
              The sign-in succeeded, but something went wrong while rendering
              the dashboard tabs. Try reloading the page — your session is
              still valid. If the error persists, sign out and sign back in.
            </p>
            <pre
              style={{
                padding: "14px 16px",
                background: "rgba(22,16,42,0.6)",
                border: "1px solid rgba(224,140,80,0.4)",
                color: "#F2C5A5",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11.5px",
                lineHeight: 1.55,
                overflowX: "auto",
                margin: "0 0 20px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {this.state.error.message}
            </pre>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => window.location.reload()}
                className="vsp-cta-gold"
                style={{
                  padding: "11px 22px",
                  background: "#E0BC6A",
                  color: "#1B1233",
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "13px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 0,
                }}
              >
                Reload page
              </button>
              <button
                onClick={async () => {
                  await fetch("/api/studio/auth", { method: "DELETE" });
                  window.location.reload();
                }}
                style={{
                  padding: "11px 18px",
                  background: "transparent",
                  border: "1px solid rgba(243,237,223,0.2)",
                  color: "rgba(243,237,223,0.82)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: 0,
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function StudioPage() {
  const [status, setStatus] = useState<AuthState>("loading");
  const [user, setUser] = useState<AuthUser>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/studio/auth", { method: "GET" })
      .then(async (r) => {
        if (cancelled) return;
        if (r.ok) {
          const data = await r.json().catch(() => ({}));
          setStatus("authed");
          setUser(data.user ?? null);
        } else {
          setStatus("login");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("login");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16102A",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 28,
              height: 28,
              border: "2px solid rgba(224,188,106,0.22)",
              borderTopColor: "#E0BC6A",
              borderRadius: "50%",
              animation: "vsp-spin 800ms linear infinite",
              margin: "0 auto 14px",
            }}
            aria-hidden
          />
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(243,237,223,0.5)",
              margin: 0,
            }}
          >
            Checking session…
          </p>
        </div>
        <style>{`@keyframes vsp-spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (status === "login") {
    return <StudioLogin />;
  }

  // Authed — render the full dashboard.
  return (
    <DashboardErrorBoundary>
      <StudioDashboard lessons={[]} initialUser={user} />
    </DashboardErrorBoundary>
  );
}
