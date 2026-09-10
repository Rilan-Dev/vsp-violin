"use client";

import { useEffect, useState } from "react";
import { StudioLogin } from "@/components/site/studio-login";
import { StudioDashboard } from "@/components/site/studio-dashboard";

export default function StudioPage() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if already authed via cookie
    fetch("/api/studio/auth", { method: "GET" })
      .then(r => {
        if (r.ok) {
          setAuthed(true);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#16102A" }}>
        <p style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", color: "rgba(243,237,223,0.5)" }}>
          Loading...
        </p>
      </div>
    );
  }

  if (!authed) {
    return <StudioLogin />;
  }

  return <StudioDashboard lessons={[]} />;
}
