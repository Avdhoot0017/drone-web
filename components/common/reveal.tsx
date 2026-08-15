"use client";

import { type ElementType, type ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface RevealProps {
  children: ReactNode;
  /** Direction the content travels from. Defaults to a subtle rise. */
  direction?: RevealDirection;
  /** Stagger in milliseconds — use with an index to cascade a grid. */
  delay?: number;
  /** How much of the element must be visible before it animates in. */
  threshold?: number;
  /** Render as a different element (e.g. "li", "section"). */
  as?: ElementType;
  className?: string;
}

/**
 * Reveals its children once they scroll into view.
 *
 * The animation lives in `globals.css` under `[data-reveal]`; this component
 * only flips the `data-revealed` attribute on the DOM node. Writing the
 * attribute directly rather than through React state is deliberate — it is a
 * one-way sync to an external system (the DOM), it avoids a re-render per
 * element on a page that may hold dozens of them, and it keeps the markup
 * identical between server and client.
 *
 * Because the content is always present in the server-rendered HTML, it stays
 * fully visible to crawlers and to users whose JavaScript never loads.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  as: Component = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => {
      node.dataset.revealed = "true";
    };

    // Older browsers without IntersectionObserver simply see the content.
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect(); // reveal once, then stop observing
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      data-reveal={direction}
      data-revealed="false"
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Convenience wrapper that staggers a list of children automatically.
 * Each child animates `step` milliseconds after the previous one.
 */
export function RevealGroup({
  children,
  step = 90,
  direction = "up",
  className,
}: {
  children: ReactNode[];
  step?: number;
  direction?: RevealDirection;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      {children.map((child, index) => (
        <Reveal key={index} direction={direction} delay={index * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
