"use client";

import { useEffect, useState } from "react";

export default function StudioPage() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/studio/auth")
      .then(r => r.json())
      .then(d => {
        if (d.authenticated) {
          setStatus("authed");
        } else {
          setStatus("login");
        }
      })
      .catch(() => setStatus("login"));
  }, []);

  if (status === "loading") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#16102A" }}>
        <p style={{ color: "#F3EDDF", fontFamily: "monospace" }}>Loading...</p>
      </div>
    );
  }

  if (status === "login") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#16102A", padding: "24px" }}>
        <div className="vsp-card-gold" style={{ maxWidth: "440px", width: "100%", padding: "40px 36px" }}>
          <h1 style={{ fontFamily: "serif", fontSize: "32px", color: "#F3EDDF", margin: "0 0 24px" }}>Suka Pavalan Studio</h1>
          <form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements[0] as HTMLInputElement).value;
            const password = (form.elements[1] as HTMLInputElement).value;
            const res = await fetch("/api/studio/auth", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
              window.location.reload();
            } else {
              alert("Invalid credentials");
            }
          }}>
            <div style={{ marginBottom: "16px" }}>
              <input type="email" placeholder="admin@sukapavalan.com" required style={{ width: "100%", padding: "12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", borderRadius: 0 }} />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <input type="password" placeholder="Password" required style={{ width: "100%", padding: "12px", background: "rgba(22,16,42,0.6)", border: "1px solid rgba(243,237,223,0.2)", color: "#F3EDDF", borderRadius: 0 }} />
            </div>
            <button type="submit" style={{ width: "100%", padding: "13px", background: "#E0BC6A", color: "#1B1233", fontFamily: "serif", fontSize: "14px", border: "none", cursor: "pointer", borderRadius: 0 }}>
              Sign in
            </button>
          </form>
          <p style={{ marginTop: "24px", fontSize: "12px", color: "rgba(243,237,223,0.5)" }}>Admin: admin@sukapavalan.com</p>
        </div>
      </div>
    );
  }

  // Authed — show a simple message for now
  return (
    <div style={{ minHeight: "100vh", background: "#16102A", color: "#F3EDDF", padding: "80px 32px" }}>
      <h1>Studio Dashboard</h1>
      <p>You are logged in as admin.</p>
      <button onClick={async () => {
        await fetch("/api/studio/auth", { method: "DELETE" });
        window.location.reload();
      }} style={{ padding: "10px 20px", background: "#E0BC6A", color: "#1B1233", border: "none", cursor: "pointer", borderRadius: 0 }}>
        Logout
      </button>
    </div>
  );
}
