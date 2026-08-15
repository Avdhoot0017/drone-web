"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface StatCounterProps {
  /** Target number to count up to. Omit for placeholder stats awaiting data. */
  value?: number;
  /** Text shown when `value` is undefined — e.g. "—" for a pending figure. */
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Extra context shown under the label. */
  hint?: string;
  durationMs?: number;
  className?: string;
}

/**
 * A headline statistic that counts up when it scrolls into view.
 *
 * The final value is rendered into the server HTML first and only animated
 * after hydration, so crawlers and no-JS users always read the real number.
 */
export function StatCounter({
  value,
  placeholder = "—",
  prefix = "",
  suffix = "",
  label,
  hint,
  durationMs = 1600,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value ?? 0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (value === undefined) return;

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        setStarted(true);
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          // easeOutExpo — fast start, long settle. Reads as "precise".
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        setDisplay(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs, started]);

  return (
    <div ref={ref} className={cn("text-center sm:text-left", className)}>
      <div className="font-heading text-4xl leading-none font-bold tracking-tight text-brand-500 tabular-nums md:text-5xl">
        {value === undefined ? (
          <span className="text-ink-300" title="Figure to be confirmed by the client">
            {placeholder}
          </span>
        ) : (
          <>
            {prefix}
            {display.toLocaleString("en-IN")}
            {suffix}
          </>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold tracking-wide text-ink-950 uppercase">
        {label}
      </p>
      {hint ? <p className="mt-1 text-sm text-ink-500">{hint}</p> : null}
    </div>
  );
}
