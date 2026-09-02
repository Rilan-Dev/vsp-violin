"use client";

import { useEffect, useReducer } from "react";
import { useReveal } from "./use-reveal";

/* ---------------------------------------------------------------------------
 * Practice Room — the signature sruthi dial interaction.
 *
 * Five sruthis × three speeds × two voices = 15 tracks per lesson,
 * collapsed into one dial. Square, precise, gold-on-violet, mono numbers.
 * ------------------------------------------------------------------------- */

type Voice = "violin" | "vocal";
type Sruthi = "C-1" | "D#-2.5" | "F-4" | "G#-5.5" | "A#-6.5";
type Speed = "1st" | "2nd" | "3rd" | "thrikaalam";

interface State {
  voice: Voice;
  sruthi: Sruthi;
  speed: Speed;
  playing: boolean;
  progress: number; // 0–100
}

type Action =
  | { type: "SET_VOICE"; voice: Voice }
  | { type: "SET_SRUTHI"; sruthi: Sruthi }
  | { type: "SET_SPEED"; speed: Speed }
  | { type: "TOGGLE_PLAY" }
  | { type: "TICK" };

const SRUTHI_OPTIONS: Sruthi[] = ["C-1", "D#-2.5", "F-4", "G#-5.5", "A#-6.5"];

const SPEED_OPTIONS: { id: Speed; label: string }[] = [
  { id: "1st", label: "1st Speed" },
  { id: "2nd", label: "2nd Speed" },
  { id: "3rd", label: "3rd Speed" },
  { id: "thrikaalam", label: "Thrikaalam" },
];

const BULLETS = [
  "Five sruthis match every vocal range",
  "Three speeds build from walk to run",
  "Violin and vocal tracks are separate — learn the line, then play it",
];

const LEAD =
  "Every lesson ships with practice audio in five sruthis — C, D#, F, G#, A# — across three speeds, for violin and vocal. That's fifteen files per lesson, collapsed into a single dial. Pick your sruthi, pick your speed, press play. This is how a student practises between lessons.";

const TOTAL_SECONDS = 30;
const TICK_MS = 500;
const TICK_STEP = 2.5; // 2.5% per 500ms → 100% in 20s of ticks, scaled to 30s clock

const initialState: State = {
  voice: "violin",
  sruthi: "D#-2.5",
  speed: "1st",
  playing: false,
  progress: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_VOICE":
      // Switching tracks resets the clock. Playback continues if it was running.
      return { ...state, voice: action.voice, progress: 0 };
    case "SET_SRUTHI":
      return { ...state, sruthi: action.sruthi, progress: 0 };
    case "SET_SPEED":
      return { ...state, speed: action.speed, progress: 0 };
    case "TOGGLE_PLAY":
      // If we're at the end, restart from zero on play.
      if (state.progress >= 100) {
        return { ...state, playing: true, progress: 0 };
      }
      return { ...state, playing: !state.playing };
    case "TICK": {
      const next = state.progress + TICK_STEP;
      if (next >= 100) {
        // Hold at the end and stop. The next play press restarts from 0.
        return { ...state, progress: 100, playing: false };
      }
      return { ...state, progress: next };
    }
    default:
      return state;
  }
}

function formatSruthiLarge(s: Sruthi): string {
  const [note, position] = s.split("-");
  return `${note} — ${position}`;
}

function formatTime(progress: number): string {
  const seconds = Math.floor((progress / 100) * TOTAL_SECONDS);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function PracticeRoom() {
  const { ref, visible } = useReveal<HTMLElement>({ threshold: 0.12 });
  const [state, dispatch] = useReducer(reducer, initialState);

  // Tick the progress bar while playing. Cleared on pause, on completion,
  // and on unmount.
  useEffect(() => {
    if (!state.playing) return;
    const id = setInterval(() => dispatch({ type: "TICK" }), TICK_MS);
    return () => clearInterval(id);
  }, [state.playing]);

  const activeSpeedLabel =
    SPEED_OPTIONS.find((s) => s.id === state.speed)?.label ?? "";

  return (
    <section
      id="practice"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #1A1234 0%, #241A44 100%)",
        padding: "48px 20px",
        borderTop: "1px solid rgba(224,188,106,0.18)",
        borderBottom: "1px solid rgba(224,188,106,0.18)",
      }}
    >
      <div
        className={`reveal ${visible ? "is-visible" : ""}`}
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        <div
          className="grid grid-cols-1 min-[720px]:grid-cols-[1fr_0.92fr] gap-6 min-[720px]:gap-10 min-[1024px]:gap-16"
          style={{ alignItems: "center" }}
        >
          {/* ===================== LEFT COLUMN — the argument ===================== */}
          <div className="flex flex-col" style={{ gap: "20px" }}>
            <span className="vsp-eyebrow">The Practice Room</span>

            <h2
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "28px",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#F3EDDF",
                margin: 0,
              }}
            >
              One dial.{" "}
              <span style={{ color: "#E0BC6A" }}>Fifteen</span> tracks.
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(243,237,223,0.82)",
                maxWidth: "540px",
                margin: 0,
              }}
            >
              {LEAD}
            </p>

            <ul
              className="flex flex-col"
              style={{
                gap: "12px",
                listStyle: "none",
                padding: 0,
                margin: "8px 0 0",
              }}
            >
              {BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-start"
                  style={{
                    gap: "12px",
                    fontSize: "14.5px",
                    lineHeight: 1.55,
                    color: "rgba(243,237,223,0.82)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: "#E0BC6A",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================== RIGHT COLUMN — the dial ===================== */}
          <div
            className="vsp-card-gold"
            style={{ padding: "32px", borderRadius: "0" }}
          >
            {/* ---- 1. Voice toggle (Violin / Vocal) ---- */}
            <div
              role="group"
              aria-label="Voice"
              className="flex"
              style={{ width: "100%" }}
            >
              {(["violin", "vocal"] as Voice[]).map((v, i) => {
                const active = state.voice === v;
                return (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={active}
                    onClick={() => dispatch({ type: "SET_VOICE", voice: v })}
                    style={{
                      flex: 1,
                      padding: "11px 16px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "12px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      background: active ? "#E0BC6A" : "transparent",
                      color: active ? "#1B1233" : "rgba(243,237,223,0.76)",
                      border: `1px solid ${
                        active ? "#E0BC6A" : "rgba(224,188,106,0.34)"
                      }`,
                      borderLeft: i === 0 ? undefined : "none",
                      cursor: "pointer",
                      transition:
                        "background 200ms ease, color 200ms ease, border-color 200ms ease",
                    }}
                  >
                    {v === "violin" ? "Violin" : "Vocal"}
                  </button>
                );
              })}
            </div>

            {/* ---- 2. Large sruthi readout + speed summary ---- */}
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div>
                <div className="vsp-eyebrow" style={{ marginBottom: "8px" }}>
                  Active sruthi
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "24px",
                    color: "#E0BC6A",
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                  }}
                >
                  {formatSruthiLarge(state.sruthi)}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="vsp-eyebrow" style={{ marginBottom: "8px" }}>
                  Speed
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "14px",
                    color: "rgba(243,237,223,0.9)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {activeSpeedLabel}
                </div>
              </div>
            </div>

            {/* ---- 2b. Sruthi buttons ---- */}
            <div
              role="group"
              aria-label="Sruthi selection"
              className="flex flex-wrap"
              style={{ gap: "8px", marginTop: "20px" }}
            >
              {SRUTHI_OPTIONS.map((s) => {
                const active = state.sruthi === s;
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    onClick={() => dispatch({ type: "SET_SRUTHI", sruthi: s })}
                    className={active ? "vsp-sruthi-active" : ""}
                    style={{
                      padding: "12px 16px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      background: active ? "#E0BC6A" : "transparent",
                      color: active
                        ? "#1B1233"
                        : "rgba(243,237,223,0.76)",
                      border: `1px solid ${
                        active ? "#E0BC6A" : "rgba(243,237,223,0.5)"
                      }`,
                      cursor: "pointer",
                      transition:
                        "background 200ms ease, color 200ms ease, border-color 200ms ease",
                    }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            {/* ---- 3. Speed buttons ---- */}
            <div
              role="group"
              aria-label="Speed selection"
              className="flex flex-wrap"
              style={{ gap: "8px", marginTop: "12px" }}
            >
              {SPEED_OPTIONS.map((sp) => {
                const active = state.speed === sp.id;
                return (
                  <button
                    key={sp.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => dispatch({ type: "SET_SPEED", speed: sp.id })}
                    className={active ? "vsp-sruthi-active" : ""}
                    style={{
                      padding: "12px 16px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      background: active ? "#E0BC6A" : "transparent",
                      color: active
                        ? "#1B1233"
                        : "rgba(243,237,223,0.76)",
                      border: `1px solid ${
                        active ? "#E0BC6A" : "rgba(243,237,223,0.5)"
                      }`,
                      cursor: "pointer",
                      transition:
                        "background 200ms ease, color 200ms ease, border-color 200ms ease",
                    }}
                  >
                    {sp.label}
                  </button>
                );
              })}
            </div>

            {/* ---- 4. Now playing label + transport bar ---- */}
            <div
              style={{
                marginTop: "28px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(243,237,223,0.16)",
              }}
            >
              {/* Now playing line — Geist Mono uppercase */}
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(243,237,223,0.62)",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: state.playing
                      ? "#E0BC6A"
                      : "rgba(243,237,223,0.4)",
                    display: "inline-block",
                    flexShrink: 0,
                    transition: "background 200ms ease",
                  }}
                />
                <span>
                  Now playing — {state.voice} · {state.sruthi} · {state.speed}
                </span>
              </div>

              {/* Transport: play/pause + progress + time */}
              <div className="flex items-center" style={{ gap: "16px" }}>
                {/* Play button + rotating ring */}
                <div
                  style={{
                    position: "relative",
                    width: "64px",
                    height: "64px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      animation: "vsp-dial-spin 3.6s linear infinite",
                      animationPlayState: state.playing
                        ? "running"
                        : "paused",
                      opacity: state.playing ? 1 : 0.45,
                      transition: "opacity 300ms ease",
                    }}
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="rgba(224,188,106,0.2)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="#E0BC6A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="55 135"
                    />
                  </svg>

                  <button
                    type="button"
                    aria-pressed={state.playing}
                    aria-label={
                      state.playing
                        ? "Pause practice track"
                        : "Play practice track"
                    }
                    onClick={() => dispatch({ type: "TOGGLE_PLAY" })}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "1px solid #E0BC6A",
                      background: state.playing
                        ? "rgba(224,188,106,0.14)"
                        : "transparent",
                      color: "#E0BC6A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      padding: 0,
                      position: "relative",
                      zIndex: 1,
                      transition: "background 200ms ease",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        lineHeight: 1,
                        transform: state.playing
                          ? "none"
                          : "translateX(1px)",
                        transition: "transform 200ms ease",
                      }}
                    >
                      {state.playing ? "⏸" : "▶"}
                    </span>
                  </button>
                </div>

                {/* Progress track */}
                <div
                  role="progressbar"
                  aria-valuenow={Math.round(state.progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Practice track progress"
                  style={{
                    flex: 1,
                    position: "relative",
                    height: "4px",
                    background: "rgba(243,237,223,0.16)",
                  }}
                >
                  <div
                    style={{
                      width: `${state.progress}%`,
                      height: "100%",
                      background: "#E0BC6A",
                      transition: "width 500ms linear",
                    }}
                  />
                </div>

                {/* Time readout */}
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "13px",
                    color: "rgba(243,237,223,0.7)",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    minWidth: "92px",
                    textAlign: "right",
                  }}
                >
                  {formatTime(state.progress)} / 00:30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
