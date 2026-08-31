"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { CategoryWithCount } from "@/lib/data";

type MegaColumn = {
  label: string;
  items: CategoryWithCount[];
};

/**
 * Sticky nav with the Lessons mega-menu.
 *
 * Behaviour per handoff:
 *  - opens on hover (desktop), click/Enter/Space (all)
 *  - closes on Escape, mouse leaving nav, focus leaving nav
 *  - closed state is visibility:hidden + aria-hidden so links leave tab order
 *  - aria-expanded / aria-controls on the trigger
 *  - current page link is full-opacity cream; others 0.72
 *  - empty categories render at 0.5/0.6 alpha but stay visible
 */
export function Nav({ megaMenu }: { megaMenu: MegaColumn[] }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Section spy — highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = ["top", "library", "practice", "guru", "honours", "stage", "enrol"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Escape closes; click outside closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const links: { id: string; label: string }[] = [
    { id: "library", label: "Library" },
    { id: "guru", label: "The Guru" },
    { id: "honours", label: "Honours" },
    { id: "stage", label: "Stage" },
  ];

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        // Close if focus leaves the nav entirely.
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(22,16,42,0.92)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(224,188,106,0.24)",
      }}
    >
      <div
        className="flex items-center justify-between gap-4 sm:gap-7 px-5 sm:px-8"
        style={{ paddingBlock: "14px" }}
      >
        <a
          href="#top"
          aria-label="Suka Pavalan — back to top"
          className="shrink-0"
          style={{
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(15px, 3.5vw, 21px)",
            letterSpacing: "0.07em",
            color: "#E0BC6A",
          }}
        >
          SUKA PAVALAN
        </a>

        {/* Desktop + tablet links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="lessons-menu"
            aria-label="Lessons — open category menu"
            onClick={() => setOpen((v) => !v)}
            onMouseEnter={() => {
              cancelClose();
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            className="relative flex items-center gap-1.5 cursor-pointer text-cream bg-transparent border-none"
            style={{ color: "#F3EDDF", fontSize: "14px", fontWeight: 500 }}
          >
            Lessons
            <span style={{ fontSize: "9px", color: "#E0BC6A" }} aria-hidden>
              ▼
            </span>
          </button>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition-colors relative"
              style={{
                color:
                  activeSection === l.id
                    ? "#F3EDDF"
                    : "rgba(243,237,223,0.72)",
                paddingBottom: "4px",
                borderBottom: activeSection === l.id ? "2px solid #E0BC6A" : "2px solid transparent",
                transition: "color 200ms ease, border-color 200ms ease",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#enrol"
          className="shrink-0"
          style={{
            padding: "10px 20px",
            border: "1px solid #E0BC6A",
            color: "#E0BC6A",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "14px",
            letterSpacing: "0.06em",
          }}
        >
          Enrol
        </a>
      </div>

      {/* Mobile hamburger button (≤768px) — opens a Sheet drawer */}
      <div className="md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="flex items-center justify-center"
              style={{
                width: "44px",
                height: "44px",
                background: "transparent",
                border: "1px solid rgba(224,188,106,0.34)",
                color: "#E0BC6A",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <Menu size={18} aria-hidden />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="rounded-none border-l border-[rgba(224,188,106,0.34)] bg-[#16102A] p-0"
            style={{ width: "320px", maxWidth: "85vw" }}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full vsp-scroll" style={{ overflowY: "auto" }}>
              {/* Wordmark + close */}
              <div className="flex items-center justify-between" style={{ padding: "18px 22px", borderBottom: "1px solid rgba(224,188,106,0.24)" }}>
                <span style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "18px", letterSpacing: "0.06em", color: "#E0BC6A" }}>
                  SUKA PAVALAN
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{ background: "transparent", border: "none", color: "rgba(243,237,223,0.62)", cursor: "pointer", padding: "4px" }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main links */}
              <nav className="flex flex-col" style={{ padding: "14px 22px", gap: "4px" }}>
                <a
                  href="/library"
                  onClick={() => setMobileOpen(false)}
                  className="transition-colors hover:text-gold-hover"
                  style={{ fontFamily: "var(--font-marcellus), serif", fontSize: "22px", color: activeSection === "library" ? "#F3EDDF" : "rgba(243,237,223,0.82)", padding: "10px 0", borderBottom: "1px solid rgba(243,237,223,0.08)" }}
                >
                  Library
                </a>
                {[
                  { id: "practice", label: "Practice Room" },
                  { id: "guru", label: "The Guru" },
                  { id: "honours", label: "Honours" },
                  { id: "stage", label: "Stage" },
                  { id: "learn", label: "Learn the Violin" },
                ].map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="transition-colors hover:text-gold-hover"
                    style={{
                      fontFamily: "var(--font-marcellus), serif",
                      fontSize: "22px",
                      color: activeSection === l.id ? "#F3EDDF" : "rgba(243,237,223,0.82)",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(243,237,223,0.08)",
                    }}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#enrol"
                  onClick={() => setMobileOpen(false)}
                  className="vsp-cta-gold flex items-center justify-center"
                  style={{
                    marginTop: "16px",
                    padding: "14px 20px",
                    background: "#E0BC6A",
                    color: "#1B1233",
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "15px",
                    letterSpacing: "0.04em",
                  }}
                >
                  Enrol
                </a>
              </nav>

              {/* Categories */}
              <div style={{ padding: "8px 22px 24px", borderTop: "1px solid rgba(224,188,106,0.16)", marginTop: "12px" }}>
                <span className="vsp-eyebrow" style={{ display: "block", margin: "14px 0 10px" }}>
                  Lessons by category
                </span>
                <div className="flex flex-col" style={{ gap: "8px" }}>
                  {megaMenu.flatMap((col) => col.items).map((c) => {
                    const empty = c.count === 0;
                    return (
                      <a
                        key={c.slug}
                        href={`/library?category=${c.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="transition-colors hover:text-gold-hover flex items-center justify-between"
                        style={{
                          fontSize: "14px",
                          color: empty ? "rgba(243,237,223,0.5)" : "rgba(243,237,223,0.82)",
                          padding: "6px 0",
                        }}
                      >
                        <span>{c.name}</span>
                        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "rgba(224,188,106,0.6)" }}>
                          {c.count}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mega-menu panel */}
      <div
        id="lessons-menu"
        role="region"
        aria-label="Lessons by category"
        aria-hidden={!open}
        onMouseEnter={cancelClose}
        className="grid"
        style={{
          gridTemplateColumns:
            "repeat(2, minmax(0,1fr)) md:repeat(5, minmax(0,1fr))",
          gap: "28px",
          padding: open ? "26px 32px 30px" : "0 32px",
          maxHeight: open ? "70vh" : "0",
          overflowY: open ? "auto" : "hidden",
          visibility: open ? "visible" : "hidden",
          opacity: open ? 1 : 0,
          transition:
            "max-height 340ms cubic-bezier(.16,1,.3,1), opacity 240ms ease, padding 340ms, visibility 340ms",
          borderTop: open ? "1px solid rgba(224,188,106,0.24)" : "1px solid transparent",
          background: "rgba(22,16,42,0.96)",
        }}
      >
        {megaMenu.map((col) => (
          <div key={col.label} className="flex flex-col gap-2.5">
            <span className="vsp-eyebrow">{col.label}</span>
            {col.items.map((c) => {
              const empty = c.count === 0;
              const opacity = empty ? 0.55 : 0.82;
              return (
                <a
                  key={c.slug}
                  href={`/library?category=${c.slug}`}
                  data-category={c.slug}
                  className="transition-colors hover:text-gold-hover"
                  style={{
                    fontSize: "13.5px",
                    color: `rgba(243,237,223,${opacity})`,
                  }}
                >
                  {c.name}{" "}
                  <span
                    style={{
                      color: `rgba(243,237,223,${empty ? 0.5 : 0.55})`,
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "11px",
                    }}
                  >
                    {c.count}
                  </span>
                </a>
              );
            })}
          </div>
        ))}
        {/* Fifth column: page anchors */}
        <div className="flex flex-col gap-2.5">
          <span className="vsp-eyebrow">More</span>
          {[
            { href: "#learn", label: "Learn the Violin" },
            { href: "#guru", label: "The Guru" },
            { href: "#honours", label: "Honours" },
            { href: "#stage", label: "Stage" },
            { href: "#enrol", label: "Enrol" },
          ].map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="transition-colors hover:text-gold-hover"
              style={{ fontSize: "13.5px", color: "rgba(243,237,223,0.82)" }}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
