"use client";

import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import { getSiteContent } from "@/lib/data";
import { useReveal } from "@/components/site/use-reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* ------------------------------------------------------------------ *
 * Enrol — the trial-lesson enquiry section.
 *
 * Three intent cards (1.25 / 1 / 1): the first is gold and carries the
 * trial checklist — it is the primary path. Clicking any card's CTA sets
 * the form's hidden `intent` field and smooth-scrolls to the form panel.
 *
 * The form POSTs to /api/enquiries (Zod-validated server-side). Client-
 * side UX mirrors the required-field checks; the server is the source of
 * truth. Success and failure surface both inline (aria-live) and via the
 * shadcn toaster (mounted globally in layout.tsx).
 *
 * Design tokens: `.vsp-card-gold`, `.vsp-card-neutral`, `.vsp-eyebrow`,
 * gold focus-visible ring from globals.css. Square corners throughout
 * (shadcn's `rounded-md` is overridden via the `rounded-none` utility on
 * every input, textarea, select, and button).
 * ------------------------------------------------------------------ */

type Intent = "lesson" | "booking" | "collaboration";

const INTENT_LABELS: Record<Intent, string> = {
  lesson: "One-to-one Lessons",
  booking: "Book a Performance",
  collaboration: "Collaborations",
};

const INTENT_FOOTERS: Record<Intent, string> = {
  lesson: "Free trial · No obligation · Children and adults welcome",
  booking: "Concerts · Festivals · Thyagaraja Aradhana · Devotional evenings",
  collaboration: "Recordings · Fusion · Session violin · Composition",
};

const TRIAL_CHECKLIST = [
  "Free trial lesson, no obligation",
  "Tamil or English notation provided",
  "Practice tracks in five sruthis",
  "Online or in-person in Karaikal",
  "Children (6–16) and adults welcome",
];

const WHO_FOR_OPTIONS = ["Myself", "My child", "A student", "An organisation"];
const INSTRUMENT_OPTIONS = ["Violin", "Vocal", "Both", "Not sure yet"];
const LEVEL_OPTIONS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Returning after a break",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelStyle: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "10.5px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(243,237,223,0.78)",
};

const inputStyle: CSSProperties = {
  height: "44px",
  backgroundColor: "rgba(243,237,223,0.03)",
  color: "#F3EDDF",
  fontSize: "14.5px",
  fontFamily: "var(--font-instrument-sans), sans-serif",
  borderRadius: 0,
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  height: "auto",
  minHeight: "140px",
  resize: "vertical",
  paddingTop: "12px",
  paddingBottom: "12px",
  lineHeight: 1.6,
};

const intentButtonBase: CSSProperties = {
  fontFamily: "var(--font-marcellus), serif",
  letterSpacing: "0.02em",
  borderRadius: 0,
};

/** Render the contact heading with the word "today" wrapped in gold. */
function renderHeadingWithGoldToday(text: string) {
  const target = "today";
  const idx = text.toLowerCase().indexOf(target);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + target.length);
  const after = text.slice(idx + target.length);
  return (
    <>
      {before}
      <span style={{ color: "#E0BC6A" }}>{match}</span>
      {after}
    </>
  );
}

export function Enrol() {
  const c = getSiteContent();
  const { ref: sectionRef, visible } = useReveal<HTMLElement>({
    threshold: 0.1,
  });
  const { toast } = useToast();
  const panelRef = useRef<HTMLDivElement | null>(null);

  const [intent, setIntent] = useState<Intent>("lesson");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [whoFor, setWhoFor] = useState("");
  const [instrument, setInstrument] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleIntentClick = (next: Intent) => {
    setIntent(next);
    setSubmitError(null);
    // Defer the scroll so the intent label paints first.
    if (panelRef.current) {
      panelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setWhoFor("");
    setInstrument("");
    setLevel("");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    // Mirror server-side required checks for immediate UX.
    if (!name.trim()) {
      setSubmitError(
        "Please tell me your name so I know who I'm writing back to.",
      );
      return;
    }
    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      setSubmitError("A valid email is required so I can reply.");
      return;
    }
    if (!message.trim()) {
      setSubmitError(
        "A short message helps me understand what you're looking for.",
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          city: city.trim() || undefined,
          intent,
          instrument: instrument || undefined,
          level: level || undefined,
          whoFor: whoFor || undefined,
          message: message.trim(),
        }),
      });

      if (res.ok) {
        toast({
          title: "Enquiry sent",
          description: c.contact.formSuccess,
        });
        resetForm();
        return;
      }

      const data = (await res.json().catch(() => null)) as {
        error?: string;
        issues?: Record<string, string[]>;
      } | null;

      let issueText = "";
      if (data?.issues) {
        const parts: string[] = [];
        for (const [k, v] of Object.entries(data.issues)) {
          if (Array.isArray(v) && v.length) parts.push(`${k}: ${v.join(", ")}`);
        }
        issueText = parts.join(" · ");
      }
      const full = issueText
        ? `${c.contact.formError} — ${issueText}`
        : c.contact.formError;
      setSubmitError(full);
      toast({
        title: "Couldn't send",
        description: full,
      });
    } catch {
      setSubmitError(c.contact.formError);
      toast({
        title: "Couldn't send",
        description: c.contact.formError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="enrol"
      aria-label="Enrol — three ways to begin"
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{
        paddingTop: "90px",
        paddingBottom: "80px",
        background: "linear-gradient(180deg, #16102A 0%, #1A1234 100%)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1140px", padding: "0 32px" }}>
        {/* ===== Section header ===== */}
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="vsp-eyebrow">Begin · three ways in</p>
          <h2
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "clamp(32px, 4.6vw, 44px)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#F3EDDF",
              fontWeight: 400,
              marginTop: "18px",
            }}
          >
            {renderHeadingWithGoldToday(c.home.contactHeading)}
          </h2>
          <p
            style={{
              marginTop: "18px",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(243,237,223,0.72)",
              fontFamily: "var(--font-instrument-sans), sans-serif",
            }}
          >
            Whether you have a query, wish to learn, or want to book a
            performance — I&apos;m here to listen. Every enquiry reaches Suka
            Pavalan directly.
          </p>
        </div>

        {/* ===== Three intent cards ===== */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr_1fr]"
          style={{ gap: "16px", marginTop: "48px" }}
        >
          {/* Card 1 — lessons (gold, primary) */}
          <div
            className="vsp-card-gold"
            style={{
              padding: "28px",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className="vsp-eyebrow">One-to-one Lessons</p>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "26px",
                lineHeight: 1.15,
                color: "#F3EDDF",
                marginTop: "10px",
                fontWeight: 400,
              }}
            >
              Begin with a free trial
            </h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              {TRIAL_CHECKLIST.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontFamily: "var(--font-instrument-sans), sans-serif",
                    fontSize: "14.5px",
                    lineHeight: 1.5,
                    color: "rgba(243,237,223,0.88)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      color: "#E0BC6A",
                      fontSize: "14px",
                      lineHeight: 1.5,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: "24px" }}>
              <button
                type="button"
                onClick={() => handleIntentClick("lesson")}
                aria-pressed={intent === "lesson"}
                className="group inline-flex items-center gap-[10px] bg-[#E0BC6A] text-[#1B1233] hover:bg-[#F2D89A] transition-all duration-200"
                style={{ ...intentButtonBase, fontSize: "14.5px", padding: "12px 22px" }}
              >
                Start your trial
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 — booking */}
          <div
            className="vsp-card-neutral"
            style={{
              padding: "28px",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className="vsp-eyebrow">Book a Performance</p>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "22px",
                lineHeight: 1.2,
                color: "#F3EDDF",
                marginTop: "10px",
                fontWeight: 400,
              }}
            >
              For sabhas and organisers
            </h3>
            <p
              style={{
                fontFamily: "var(--font-instrument-sans), sans-serif",
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: "rgba(243,237,223,0.78)",
                marginTop: "14px",
              }}
            >
              Concerts, festivals, Thyagaraja Aradhana, fusion collaborations,
              devotional evenings.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "24px" }}>
              <button
                type="button"
                onClick={() => handleIntentClick("booking")}
                aria-pressed={intent === "booking"}
                className="group inline-flex items-center gap-[8px] bg-transparent text-[#E0BC6A] border border-[rgba(224,188,106,0.46)] hover:border-[rgba(224,188,106,0.8)] hover:bg-[rgba(224,188,106,0.06)] transition-all duration-200"
                style={{ ...intentButtonBase, fontSize: "14px", padding: "11px 18px" }}
              >
                Enquire about booking
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Card 3 — collaborations */}
          <div
            className="vsp-card-neutral"
            style={{
              padding: "28px",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className="vsp-eyebrow">Collaborations</p>
            <h3
              style={{
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "22px",
                lineHeight: 1.2,
                color: "#F3EDDF",
                marginTop: "10px",
                fontWeight: 400,
              }}
            >
              For fellow musicians
            </h3>
            <p
              style={{
                fontFamily: "var(--font-instrument-sans), sans-serif",
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: "rgba(243,237,223,0.78)",
                marginTop: "14px",
              }}
            >
              Recordings, fusion projects, session violin, vocal and
              composition work.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "24px" }}>
              <button
                type="button"
                onClick={() => handleIntentClick("collaboration")}
                aria-pressed={intent === "collaboration"}
                className="group inline-flex items-center gap-[8px] bg-transparent text-[#E0BC6A] border border-[rgba(224,188,106,0.46)] hover:border-[rgba(224,188,106,0.8)] hover:bg-[rgba(224,188,106,0.06)] transition-all duration-200"
                style={{ ...intentButtonBase, fontSize: "14px", padding: "11px 18px" }}
              >
                Propose a collaboration
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ===== Form panel ===== */}
        <div
          ref={panelRef}
          className="vsp-card-neutral mx-auto p-6 md:p-8"
          style={{
            maxWidth: "760px",
            borderRadius: 0,
            marginTop: "48px",
            scrollMarginTop: "96px", // clears fixed nav when scrolled into view
          }}
        >
          {/* Panel header — current intent + reply note */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(243,237,223,0.16)",
            }}
          >
            <div>
              <p className="vsp-eyebrow">Intent</p>
              <p
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "20px",
                  color: "#E0BC6A",
                  marginTop: "6px",
                }}
              >
                {INTENT_LABELS[intent]}
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-instrument-sans), sans-serif",
                fontSize: "13px",
                lineHeight: 1.5,
                color: "rgba(243,237,223,0.62)",
                maxWidth: "320px",
                textAlign: "right",
              }}
            >
              Every enquiry reaches Suka Pavalan directly. A reply usually comes
              within two days.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-label="Trial lesson enquiry"
            noValidate
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "24px",
            }}
          >
            {/* Row: Name | Email */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "20px" }}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-name" style={labelStyle}>
                  Name{" "}
                  <span aria-hidden style={{ color: "#E0BC6A" }}>
                    *
                  </span>
                </Label>
                <Input
                  id="enrol-name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-none"
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-email" style={labelStyle}>
                  Email{" "}
                  <span aria-hidden style={{ color: "#E0BC6A" }}>
                    *
                  </span>
                </Label>
                <Input
                  id="enrol-email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-none"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row: Phone | City */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "20px" }}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-phone" style={labelStyle}>
                  Phone (optional)
                </Label>
                <Input
                  id="enrol-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-none"
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-city" style={labelStyle}>
                  City / Timezone (optional)
                </Label>
                <Input
                  id="enrol-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-none"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row: WhoFor | Instrument | Level */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "20px" }}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-who" style={labelStyle}>
                  Who is this for?
                </Label>
                <Select value={whoFor} onValueChange={setWhoFor}>
                  <SelectTrigger
                    id="enrol-who"
                    className="rounded-none w-full"
                    style={inputStyle}
                    aria-label="Who is this for?"
                  >
                    <SelectValue placeholder="Select…" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {WHO_FOR_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o} className="rounded-none">
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-instrument" style={labelStyle}>
                  Instrument
                </Label>
                <Select value={instrument} onValueChange={setInstrument}>
                  <SelectTrigger
                    id="enrol-instrument"
                    className="rounded-none w-full"
                    style={inputStyle}
                    aria-label="Instrument"
                  >
                    <SelectValue placeholder="Select…" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {INSTRUMENT_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o} className="rounded-none">
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="enrol-level" style={labelStyle}>
                  Level
                </Label>
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger
                    id="enrol-level"
                    className="rounded-none w-full"
                    style={inputStyle}
                    aria-label="Level"
                  >
                    <SelectValue placeholder="Select…" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {LEVEL_OPTIONS.map((o) => (
                      <SelectItem key={o} value={o} className="rounded-none">
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="enrol-message" style={labelStyle}>
                Message{" "}
                <span aria-hidden style={{ color: "#E0BC6A" }}>
                  *
                </span>
              </Label>
              <Textarea
                id="enrol-message"
                required
                aria-required="true"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a little about the student, your goals, and your timezone."
                className="rounded-none"
                style={textareaStyle}
              />
            </div>

            {/* aria-live error */}
            {submitError && (
              <p
                role="status"
                aria-live="polite"
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.5,
                  color: "#F2C5A5",
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  padding: "10px 14px",
                  border: "1px solid rgba(224,140,80,0.4)",
                  background: "rgba(224,140,80,0.08)",
                  borderRadius: 0,
                }}
              >
                {submitError}
              </p>
            )}

            {/* Submit + intent footnote */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "4px",
              }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group rounded-none"
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                  padding: "13px 26px",
                  background: isSubmitting
                    ? "rgba(224,188,106,0.45)"
                    : "#E0BC6A",
                  color: "#1B1233",
                  borderRadius: 0,
                }}
              >
                {isSubmitting ? "Sending…" : "Send enquiry"}
                {!isSubmitting && (
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                )}
              </Button>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "10.5px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(243,237,223,0.5)",
                }}
              >
                {INTENT_FOOTERS[intent]}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Enrol;
