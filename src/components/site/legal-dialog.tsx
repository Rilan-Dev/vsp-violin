"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import legalContent from "@/lib/legal-content.json";

type PolicySlug = "privacy" | "terms" | "disclaimer";

const POLICY_INDEX: Record<PolicySlug, number> = { privacy: 0, terms: 1, disclaimer: 2 };

const FLAG_SLUGS: Record<PolicySlug, string[]> = {
  privacy: ["Information we collect", "Google DoubleClick DART Cookie", "Advertising Partners Privacy Policies"],
  terms: ["Comments", "License"],
  disclaimer: [],
};

const FLAG_NOTES: Record<string, string> = {
  "Information we collect": "Describes registering an account — the new site has no visitor accounts.",
  "Google DoubleClick DART Cookie": "References \"www.website.com\" — a template placeholder.",
  "Advertising Partners Privacy Policies": "Assumes ad serving — the new site runs no ads; can go entirely.",
  "Comments": "Governs user comments — the new site has none; enquiries go through a private form. Cut, or rewrite to cover form submissions.",
  "License": "The opening terminology paragraph names \"prevailing law of Netherlands\" — a generator default. Business operates from Karaikal, Puducherry, India.",
};

const TITLES: Record<PolicySlug, string> = {
  privacy: "Privacy Policy",
  terms: "Terms and Conditions",
  disclaimer: "Disclaimer",
};

/**
 * Legal dialog — opens from the footer's Privacy/Terms/Disclaimer links.
 * The three policies are carried verbatim from sukapavalan.com per the
 * design handoff; five passages need a lawyer's eye before launch and
 * are flagged inline in a warm-orange block.
 *
 * Opened via the global hash `#legal` → component listens for hashchange.
 */
export function LegalDialog() {
  const [open, setOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicySlug>("privacy");

  // Hash-driven open/close so footer `<a href="#legal">` links work.
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#legal")) {
        const slug = (hash.replace("#legal-", "") || "privacy").split("-")[0] as PolicySlug;
        if (["privacy", "terms", "disclaimer"].includes(slug)) {
          setActivePolicy(slug);
        } else {
          setActivePolicy("privacy");
        }
        setOpen(true);
        // Strip the hash so the dialog can be re-opened by clicking the link again.
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const policy = legalContent.policies[POLICY_INDEX[activePolicy]];
  const flagsForThis = FLAG_SLUGS[activePolicy];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="rounded-none max-w-3xl max-h-[88vh] overflow-y-auto vsp-scroll"
        style={{
          background: "#1A1234",
          border: "1px solid rgba(224,188,106,0.34)",
          color: "#F3EDDF",
        }}
      >
        <VisuallyHidden>
          <DialogTitle>{TITLES[activePolicy]}</DialogTitle>
          <DialogDescription>
            Legal policy carried verbatim from sukapavalan.com — flagged for legal review.
          </DialogDescription>
        </VisuallyHidden>

        {/* Header */}
        <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(224,188,106,0.26)" }}>
          <span className="vsp-eyebrow">Legal · carried verbatim</span>
          <h2
            style={{
              fontFamily: "var(--font-marcellus), serif",
              fontSize: "34px",
              lineHeight: 1.1,
              marginTop: "8px",
              color: "#F3EDDF",
            }}
          >
            {TITLES[activePolicy]}
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "rgba(243,237,223,0.62)",
              marginTop: "8px",
            }}
          >
            Carried across verbatim from sukapavalan.com. Passages flagged in warm orange need a
            lawyer&apos;s eye before launch.
          </p>
        </div>

        {/* Policy switcher */}
        <div
          className="flex gap-2"
          style={{ padding: "18px 0", borderBottom: "1px solid rgba(243,237,223,0.16)" }}
        >
          {(Object.keys(TITLES) as PolicySlug[]).map((slug) => (
            <button
              key={slug}
              type="button"
              onClick={() => setActivePolicy(slug)}
              aria-pressed={activePolicy === slug}
              className="transition-colors"
              style={{
                padding: "8px 14px",
                border: `1px solid ${activePolicy === slug ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                background: activePolicy === slug ? "#E0BC6A" : "transparent",
                color: activePolicy === slug ? "#1B1233" : "rgba(243,237,223,0.82)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {TITLES[slug]}
            </button>
          ))}
        </div>

        {/* Policy body */}
        <div style={{ padding: "24px 0 8px" }} className="vsp-scroll">
          {policy?.intro?.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "14.5px",
                lineHeight: 1.65,
                color: "rgba(243,237,223,0.82)",
                marginBottom: "14px",
              }}
            >
              {p}
            </p>
          ))}
          {policy?.sections?.map((section, idx) => {
            const isFlagged = flagsForThis.includes(section.heading);
            return (
              <section key={idx} style={{ marginBottom: "22px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "19px",
                    color: "#E0BC6A",
                    marginBottom: "10px",
                  }}
                >
                  {section.heading}
                </h3>
                {isFlagged && (
                  <div
                    role="note"
                    aria-label="Needs legal review"
                    style={{
                      marginBottom: "12px",
                      padding: "12px 14px",
                      border: "1px solid #E08C50",
                      background: "rgba(224,140,80,0.06)",
                      borderLeft: "3px solid #E08C50",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "9.5px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#E08C50",
                        marginBottom: "4px",
                      }}
                    >
                      ✦ Needs legal review
                    </span>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.55,
                        color: "rgba(243,237,223,0.82)",
                        margin: 0,
                      }}
                    >
                      {FLAG_NOTES[section.heading] ?? "Flagged for review before launch."}
                    </p>
                  </div>
                )}
                {section.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "rgba(243,237,223,0.78)",
                      marginBottom: "10px",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </section>
            );
          })}
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: "12px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(243,237,223,0.16)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "10.5px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(243,237,223,0.5)",
          }}
        >
          Source: sukapavalan.com — carried verbatim. Generator attribution links dropped.
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LegalDialog;
