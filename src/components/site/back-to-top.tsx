"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" button + scroll progress indicator.
 *
 * The progress bar is a 2px gold fill along the very top of the viewport,
 * tied to scroll progress (0 → 100%). The back-to-top button appears after
 * the user has scrolled past 600px; it's a 44px circular gold-bordered
 * button anchored bottom-right, respecting the 44px tap floor.
 *
 * Respects prefers-reduced-motion (the button still appears but transitions
 * are collapsed to ~0ms globally).
 */
export function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      setVisible(scrollTop >= 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar — fixed to the very top of the viewport */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background: "#E0BC6A",
          zIndex: 60,
          transition: "width 80ms linear",
        }}
      />

      {/* Back to top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "44px",
          height: "44px",
          display: visible ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(22,16,42,0.92)",
          border: "1px solid #E0BC6A",
          color: "#E0BC6A",
          cursor: "pointer",
          zIndex: 55,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 240ms ease, transform 240ms ease",
        }}
      >
        <ArrowUp size={18} aria-hidden />
      </button>
    </>
  );
}

export default BackToTop;
