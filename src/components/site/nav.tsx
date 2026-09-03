"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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

export function Nav({ megaMenu }: { megaMenu: MegaColumn[] }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const links: { href: string; label: string; match: string }[] = [
    { href: "/library", label: "Library", match: "/library" },
    { href: "/about", label: "The Guru", match: "/about" },
    { href: "/honours", label: "Honours", match: "/honours" },
    { href: "/stage", label: "Stage", match: "/stage" },
  ];

  const isActive = (match: string) => {
    if (match === "/library") return pathname === "/library" || pathname.startsWith("/lessons/");
    return pathname === match;
  };

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
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
          href="/"
          aria-label="Suka Pavalan — back to homepage"
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

        {/* Desktop links */}
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
            className="relative flex items-center gap-1.5 cursor-pointer bg-transparent border-none"
            style={{ color: "#F3EDDF", fontSize: "14px", fontWeight: 500 }}
          >
            Lessons
            <ChevronDown
              size={12}
              aria-hidden
              style={{
                color: "#E0BC6A",
                transition: "transform 200ms ease",
                transform: open ? "rotate(180deg)" : "none",
              }}
            />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors relative"
              style={{
                color: isActive(l.match) ? "#F3EDDF" : "rgba(243,237,223,0.72)",
                paddingBottom: "4px",
                borderBottom: isActive(l.match) ? "2px solid #E0BC6A" : "2px solid transparent",
                transition: "color 200ms ease, border-color 200ms ease",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/#enrol"
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

        {/* Mobile hamburger */}
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
                  {[
                    { href: "/library", label: "Library" },
                    { href: "/about", label: "The Guru" },
                    { href: "/honours", label: "Honours" },
                    { href: "/stage", label: "Stage" },
                    { href: "/learn", label: "Learn the Violin" },
                    { href: "/testimonials", label: "Testimonials" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="transition-colors hover:text-gold-hover"
                      style={{
                        fontFamily: "var(--font-marcellus), serif",
                        fontSize: "22px",
                        color: isActive(l.href) ? "#F3EDDF" : "rgba(243,237,223,0.82)",
                        padding: "10px 0",
                        borderBottom: "1px solid rgba(243,237,223,0.08)",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="/#enrol"
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

                {/* Expandable category groups for mobile */}
                <div style={{ padding: "8px 22px 24px", borderTop: "1px solid rgba(224,188,106,0.16)", marginTop: "12px" }}>
                  <span className="vsp-eyebrow" style={{ display: "block", margin: "14px 0 10px" }}>
                    Lessons by category
                  </span>
                  <div className="flex flex-col" style={{ gap: "0" }}>
                    {megaMenu.map((col) => {
                      const colKey = col.label || "Light Music";
                      const isExpanded = expandedGroup === colKey;
                      const totalLessons = col.items.reduce((sum, c) => sum + c.count, 0);
                      return (
                        <div key={colKey} style={{ borderBottom: "1px solid rgba(243,237,223,0.08)" }}>
                          <button
                            type="button"
                            onClick={() => setExpandedGroup(isExpanded ? null : colKey)}
                            className="flex items-center justify-between w-full"
                            style={{
                              padding: "12px 0",
                              background: "transparent",
                              border: "none",
                              color: "#F3EDDF",
                              fontFamily: "var(--font-marcellus), serif",
                              fontSize: "16px",
                              cursor: "pointer",
                              textAlign: "left",
                            }}
                          >
                            <span>{colKey}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "11px", color: "rgba(224,188,106,0.6)" }}>
                                {totalLessons}
                              </span>
                              <ChevronDown
                                size={14}
                                aria-hidden
                                style={{
                                  color: "#E0BC6A",
                                  transition: "transform 200ms ease",
                                  transform: isExpanded ? "rotate(180deg)" : "none",
                                }}
                              />
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="flex flex-col" style={{ paddingBottom: "10px", paddingLeft: "12px", gap: "6px" }}>
                              {col.items.map((c) => {
                                const empty = c.count === 0;
                                return (
                                  <a
                                    key={c.slug}
                                    href={`/library?category=${c.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-between transition-colors hover:text-gold-hover"
                                    style={{
                                      fontSize: "14px",
                                      color: empty ? "rgba(243,237,223,0.5)" : "rgba(243,237,223,0.82)",
                                      padding: "5px 0",
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
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mega-menu panel — hierarchical groups with expandable sub-items */}
      <div
        id="lessons-menu"
        role="region"
        aria-label="Lessons by category"
        aria-hidden={!open}
        onMouseEnter={cancelClose}
        className="vsp-mega-menu"
        style={{
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
        {/* Desktop: 4 hierarchical groups, each expandable on hover */}
        {megaMenu.map((col) => {
          const colKey = col.label || "Light Music";
          const totalLessons = col.items.reduce((sum, c) => sum + c.count, 0);
          return (
            <div key={colKey} className="vsp-mega-group">
              {/* Group header — clickable link to library filtered by group */}
              <a
                href={`/library?category=${col.items[0]?.slug ?? ""}`}
                className="vsp-eyebrow vsp-mega-group-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  color: "#E0BC6A",
                  cursor: "pointer",
                  marginBottom: "12px",
                }}
              >
                <span>{colKey}</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "10px",
                  color: "rgba(243,237,223,0.5)",
                }}>
                  {totalLessons}
                </span>
              </a>
              {/* Sub-items — always visible in the dropdown, indented under the group */}
              <div className="flex flex-col" style={{ gap: "6px", paddingLeft: "8px" }}>
                {col.items.map((c) => {
                  const empty = c.count === 0;
                  const opacity = empty ? 0.5 : 0.82;
                  return (
                    <a
                      key={c.slug}
                      href={`/library?category=${c.slug}`}
                      data-category={c.slug}
                      className="transition-colors hover:text-gold-hover"
                      style={{
                        fontSize: "13px",
                        color: `rgba(243,237,223,${opacity})`,
                        paddingLeft: "12px",
                        position: "relative",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "50%",
                          width: "6px",
                          height: "1px",
                          background: "rgba(224,188,106,0.3)",
                        }}
                      />
                      {c.name}{" "}
                      <span
                        style={{
                          color: `rgba(243,237,223,${empty ? 0.4 : 0.5})`,
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: "10.5px",
                        }}
                      >
                        {c.count}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
        {/* Pages column */}
        <div className="vsp-mega-group vsp-mega-more hidden md:flex flex-col gap-2.5">
          <span className="vsp-eyebrow">Pages</span>
          {[
            { href: "/learn", label: "Learn the Violin" },
            { href: "/about", label: "The Guru" },
            { href: "/honours", label: "Honours" },
            { href: "/stage", label: "Stage" },
            { href: "/testimonials", label: "Testimonials" },
          ].map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="transition-colors hover:text-gold-hover"
              style={{ fontSize: "13px", color: "rgba(243,237,223,0.82)" }}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
