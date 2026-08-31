"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Keyboard } from "lucide-react";

/**
 * Global keyboard shortcuts.
 *   g h → home (/)
 *   g l → library (/library)
 *   g a → about (/about)
 *   g o → honours (/honours)
 *   g s → stage (/stage)
 *   g e → learn (/learn)
 *   ?   → show this help
 *   Esc → close help
 *
 * The "g" prefix avoids collisions with single-key shortcuts (like "/"
 * on the library page). Inspired by GitHub's keyboard navigation.
 */
export function KeyboardShortcuts() {
  const [helpOpen, setHelpOpen] = useState(false);
  const gPressedRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't interfere with typing in inputs/textareas
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable) {
        return;
      }

      // "?" shows help
      if (e.key === "?" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setHelpOpen(true);
        return;
      }

      // Escape closes help
      if (e.key === "Escape") {
        setHelpOpen(false);
        gPressedRef.current = false;
        return;
      }

      // "g" prefix — wait for next key
      if (e.key === "g" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        gPressedRef.current = true;
        setTimeout(() => { gPressedRef.current = false; }, 1000);
        return;
      }

      // If "g" was pressed, handle the second key
      if (gPressedRef.current) {
        const routes: Record<string, string> = {
          h: "/",
          l: "/library",
          a: "/about",
          o: "/honours",
          s: "/stage",
          e: "/learn",
        };
        const route = routes[e.key.toLowerCase()];
        if (route) {
          e.preventDefault();
          if (pathname !== route) {
            router.push(route);
          }
        }
        gPressedRef.current = false;
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [router, pathname]);

  if (!helpOpen) {
    // Small hint button in the bottom-left (visible after 2s on desktop)
    return (
      <button
        type="button"
        onClick={() => setHelpOpen(true)}
        aria-label="Keyboard shortcuts (press ?)"
        className="hidden md:flex items-center justify-center"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          width: "36px",
          height: "36px",
          background: "rgba(22,16,42,0.92)",
          border: "1px solid rgba(243,237,223,0.2)",
          color: "rgba(243,237,223,0.5)",
          cursor: "pointer",
          zIndex: 50,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 0,
          transition: "color 200ms ease, border-color 200ms ease",
        }}
        title="Keyboard shortcuts (?)"
      >
        <Keyboard size={15} aria-hidden />
      </button>
    );
  }

  // Help overlay
  return (
    <div
      role="dialog"
      aria-label="Keyboard shortcuts"
      onClick={() => setHelpOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(22,16,42,0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="vsp-card-gold"
        style={{ maxWidth: "440px", width: "100%", padding: "32px 36px" }}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Keyboard size={20} aria-hidden style={{ color: "#E0BC6A" }} />
            <span className="vsp-eyebrow">Keyboard shortcuts</span>
          </div>
          <button
            onClick={() => setHelpOpen(false)}
            aria-label="Close"
            style={{ background: "transparent", border: "none", color: "rgba(243,237,223,0.5)", cursor: "pointer", fontSize: "16px" }}
          >
            ✕
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { keys: ["g", "h"], label: "Go to homepage" },
            { keys: ["g", "l"], label: "Go to library" },
            { keys: ["g", "a"], label: "Go to The Guru (about)" },
            { keys: ["g", "o"], label: "Go to honours" },
            { keys: ["g", "s"], label: "Go to stage" },
            { keys: ["g", "e"], label: "Go to learn" },
            { keys: ["/"], label: "Focus search (on library page)" },
            { keys: ["?"], label: "Show this help" },
            { keys: ["Esc"], label: "Close dialogs / clear search" },
          ].map((s) => (
            <li key={s.label} className="flex items-center justify-between gap-4">
              <span style={{ fontSize: "14px", color: "rgba(243,237,223,0.82)" }}>{s.label}</span>
              <span className="flex items-center gap-1">
                {s.keys.map((k, i) => (
                  <kbd
                    key={i}
                    style={{
                      padding: "3px 8px",
                      border: "1px solid rgba(224,188,106,0.46)",
                      color: "#E0BC6A",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "11px",
                      borderRadius: 0,
                      minWidth: "24px",
                      textAlign: "center",
                    }}
                  >
                    {k}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "20px", fontSize: "11.5px", color: "rgba(243,237,223,0.5)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.04em" }}>
          Press <kbd style={{ color: "#E0BC6A" }}>Esc</kbd> or click anywhere to close.
        </p>
      </div>
    </div>
  );
}

export default KeyboardShortcuts;
