import { cn } from "@/lib/utils";

/**
 * A single S-curve wave closing the hero, with a brand-red edge.
 *
 * One full wave across the width — a crest on the left falling to a trough on
 * the right — rather than a run of small ripples. The fill takes the colour of
 * the section below, so the wave reads as that section rising into the hero;
 * set it with a text utility, e.g. `className="text-white"`.
 *
 * Purely decorative; hidden from assistive technology.
 */

/** The wave line itself: two mirrored cubics meeting at the mid-point. */
// Control points at 45 / 155 against a 100 baseline — pull them further apart
// for a deeper wave, closer together for a flatter one.
const CURVE = "M 0 100 C 240 45 480 45 720 100 C 960 155 1200 155 1440 100";

export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden
      focusable="false"
      className={cn("pointer-events-none block w-full", className)}
    >
      {/* Body of the wave — everything below the curve. */}
      <path d={`${CURVE} L 1440 200 L 0 200 Z`} fill="currentColor" />

      {/*
        Red edge along the curve. `non-scaling-stroke` is essential here:
        `preserveAspectRatio="none"` stretches the viewBox unevenly, which would
        otherwise squash the stroke to an uneven thickness across the width.
      */}
      <path
        d={CURVE}
        fill="none"
        stroke="var(--brand-500)"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
