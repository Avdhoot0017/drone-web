import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Intrinsic aspect ratio of the logo file (480 × 172).
 *
 * The asset is stored pre-sized for the web and served `unoptimized`. That is
 * deliberate: Tailwind's preflight applies `img { height: auto }`, so the
 * rendered height is always derived from the *delivered* file's ratio. Letting
 * the optimizer re-encode a tiny logo introduces integer rounding (e.g. 128×45
 * instead of 128×45.9), which no longer matches the declared width/height and
 * makes next/image warn about a distorted aspect ratio. At 20 KB there is
 * nothing to gain from optimizing it anyway.
 */
const LOGO_SRC = "/images/brand/logo-schnell.jpg";
const LOGO_ASPECT = 480 / 172;

interface LogoProps {
  className?: string;
  /** Rendered height in pixels; width is derived from the aspect ratio. */
  height?: number;
  /** Loads eagerly at high fetch priority — use for the header logo. */
  priority?: boolean;
}

/** The Schnell wordmark, always linking home. */
export function Logo({ className, height = 34, priority = false }: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Link
      href={routes.home}
      aria-label={`${siteConfig.legalName} — home`}
      // `inline-block`, not `inline-flex`: as a flex item the image could be
      // shrunk in width while keeping its height, distorting the logo.
      className={cn(
        "inline-block shrink-0 rounded-sm leading-none transition-opacity duration-200 hover:opacity-85",
        className
      )}
    >
      <Image
        src={LOGO_SRC}
        alt={`${siteConfig.legalName} logo`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        unoptimized
        className="rounded-sm"
      />
    </Link>
  );
}
