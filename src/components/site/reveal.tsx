"use client";

import { useReveal } from "./use-reveal";
import type { ReactNode } from "react";

/**
 * Shared scroll-reveal wrapper for static (server-renderable) section content.
 *
 * Usage:
 *   <Reveal as="section"><HeavyContent /></Reveal>
 *
 * Respects prefers-reduced-motion automatically (via useReveal).
 */
type RevealProps = {
  children: ReactNode;
  as?: "section" | "div" | "article" | "header" | "figure";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  threshold?: number;
  id?: string;
  "aria-label"?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  style,
  delay = 0,
  threshold,
  id,
  "aria-label": ariaLabel,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold });
  return (
    <Tag
      ref={ref as React.Ref<any>}
      id={id}
      aria-label={ariaLabel}
      className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
