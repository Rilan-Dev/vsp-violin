"use client";

import { useState } from "react";
import { Share2, Copy, Check } from "lucide-react";

/**
 * Share button for lesson pages.
 * Uses the native Web Share API on mobile (WhatsApp, email, copy),
 * falls back to a copy-to-clipboard button on desktop.
 */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url, text: `${title} — free Carnatic violin lesson` });
        return;
      } catch {
        // user cancelled — fall through to copy
      }
    }
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API not available
    }
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => {
          if (navigator.share) {
            handleShare();
          } else {
            setOpen(!open);
          }
        }}
        aria-label="Share this lesson"
        aria-expanded={open}
        className="flex items-center gap-2 transition-colors"
        style={{
          padding: "10px 16px",
          border: "1px solid rgba(243,237,223,0.2)",
          background: "transparent",
          color: "rgba(243,237,223,0.82)",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          cursor: "pointer",
          borderRadius: 0,
        }}
      >
        <Share2 size={14} aria-hidden />
        Share
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "8px",
            minWidth: "200px",
            background: "#1A1234",
            border: "1px solid rgba(224,188,106,0.34)",
            zIndex: 20,
          }}
        >
          <button
            type="button"
            onClick={copyUrl}
            className="flex items-center gap-2 w-full transition-colors hover:bg-[rgba(224,188,106,0.08)]"
            style={{
              padding: "10px 14px",
              background: "transparent",
              border: "none",
              color: copied ? "#78DCAA" : "#F3EDDF",
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "13px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
            {copied ? "Copied!" : "Copy link"}
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${title} — ${typeof window !== "undefined" ? window.location.href : ""}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full transition-colors hover:bg-[rgba(224,188,106,0.08)]"
            style={{
              padding: "10px 14px",
              color: "#F3EDDF",
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "13px",
              textDecoration: "none",
              borderTop: "1px solid rgba(243,237,223,0.1)",
            }}
          >
            <Share2 size={14} aria-hidden />
            WhatsApp
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`A free Carnatic violin lesson: ${typeof window !== "undefined" ? window.location.href : ""}`)}`}
            className="flex items-center gap-2 w-full transition-colors hover:bg-[rgba(224,188,106,0.08)]"
            style={{
              padding: "10px 14px",
              color: "#F3EDDF",
              fontFamily: "var(--font-instrument-sans)",
              fontSize: "13px",
              textDecoration: "none",
              borderTop: "1px solid rgba(243,237,223,0.1)",
            }}
          >
            <Share2 size={14} aria-hidden />
            Email
          </a>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
