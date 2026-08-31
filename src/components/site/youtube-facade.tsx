"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type Props = {
  youtubeId: string;
  title: string;
  /** Optional playlist ID — if provided, embeds as a playlist. */
  playlistId?: string;
};

/**
 * YouTube facade — renders a lightweight thumbnail + play button instead of
 * loading the full YouTube iframe upfront. The iframe only loads when the
 * user clicks. This cuts ~2MB of JS per 8-video lesson page.
 *
 * Uses ytimg.com for the thumbnail (no API key needed). The facade respects
 * prefers-reduced-motion (no scale-on-hover).
 */
export function YouTubeFacade({ youtubeId, title, playlistId }: Props) {
  const [activated, setActivated] = useState(false);
  const [thumbOk, setThumbOk] = useState(true);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Preload the iframe when the user tabs to the button (keyboard users).
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    const onFocus = () => setActivated(true);
    btn.addEventListener("focus", onFocus, { once: true });
    return () => btn.removeEventListener("focus", onFocus);
  }, []);

  const thumbSrc = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const embedSrc = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1`
    : `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  if (activated) {
    return (
      <div style={{ position: "absolute", inset: 0 }}>
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play: ${title}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        padding: 0,
        border: "none",
        cursor: "pointer",
        background: "#251A42",
        overflow: "hidden",
      }}
    >
      {/* Thumbnail */}
      {thumbOk ? (
        <img
          src={thumbSrc}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setThumbOk(false)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(155deg, rgba(107,75,168,0.3), rgba(36,26,66,0.8))",
          }}
        >
          <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "32px", color: "rgba(224,188,106,0.4)" }}>♪</span>
        </div>
      )}

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(22,16,42,0.1) 0%, rgba(22,16,42,0.5) 100%)",
        }}
      />

      {/* Play button */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#E0BC6A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 220ms ease, background 220ms ease",
        }}
      >
        <Play size={22} fill="#1B1233" color="#1B1233" style={{ marginLeft: "3px" }} />
      </div>

      {/* Title overlay at bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 12px",
          background: "linear-gradient(transparent, rgba(22,16,42,0.9))",
          fontSize: "11px",
          color: "rgba(243,237,223,0.9)",
          fontFamily: "var(--font-geist-mono), monospace",
          letterSpacing: "0.04em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </div>
    </button>
  );
}

export default YouTubeFacade;
