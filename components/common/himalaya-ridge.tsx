import { cn } from "@/lib/utils";

/**
 * Layered Himalayan ridge line.
 *
 * A visual signature for the brand: the company's flagship product is the
 * "Himalaya" drone, so a mountain range anchors the hero and ties the product
 * name to the identity.
 *
 * Rendered in the colour of the section *below* the hero, so the peaks appear
 * to rise out of the page into the dark photography — translucent for the
 * distant ranges, which reads as snow haze, and solid for the nearest one,
 * which merges seamlessly into the next section. A brand-red rim light traces
 * the front ridge.
 *
 * The summits are few and broad on purpose: with `preserveAspectRatio="none"`
 * the artwork is stretched to the element's width, and closely spaced peaks
 * would flatten into a sawtooth rather than reading as mountains.
 *
 * Set the colour with a text utility, e.g. `className="text-white"`.
 *
 * Purely decorative — hidden from assistive technology.
 */
export function HimalayaRidge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden
      focusable="false"
      className={cn("pointer-events-none block w-full", className)}
    >
      <defs>
        {/* Each layer fades upward so the peaks dissolve into the sky */}
        <linearGradient id="ridge-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="ridge-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.24" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="ridge-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Far range — three distant summits, highest at the centre-left */}
      <path
        d="M0 220 L0 148 L190 84 L395 142 L640 46 L910 134 L1175 74 L1440 128 L1440 220 Z"
        fill="url(#ridge-far)"
      />

      {/* Middle range */}
      <path
        d="M0 220 L0 180 L235 116 L470 174 L745 96 L1015 166 L1265 112 L1440 158 L1440 220 Z"
        fill="url(#ridge-mid)"
      />

      {/* Nearest range — solid, meets the section below */}
      <path
        d="M0 220 L0 202 L285 152 L560 198 L860 138 L1150 194 L1440 156 L1440 220 Z"
        fill="url(#ridge-near)"
      />

      {/* Brand rim light catching the front ridge */}
      <path
        d="M0 202 L285 152 L560 198 L860 138 L1150 194 L1440 156"
        fill="none"
        stroke="var(--brand-500)"
        strokeWidth="2.5"
        strokeOpacity="0.85"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
