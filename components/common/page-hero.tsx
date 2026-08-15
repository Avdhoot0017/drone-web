import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs, type Crumb } from "@/components/common/breadcrumbs";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";
import type { ImageRef } from "@/types/content";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: ImageRef;
  crumbs: Crumb[];
  actions?: { label: string; href: string; variant?: "solid" | "ghost" }[];
  /** Compact height for secondary pages. */
  size?: "default" | "compact";
}

/**
 * Interior-page hero: a photograph under a dark scrim with breadcrumbs, title
 * and optional actions.
 *
 * The image is the Largest Contentful Paint element on every page that uses
 * it, so it loads eagerly at high fetch priority. (`priority` was deprecated
 * in Next.js 16 in favour of these explicit props.)
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  actions,
  size = "default",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-ink-950",
        size === "compact"
          ? "min-h-[19rem] md:min-h-[22rem]"
          : "min-h-[24rem] md:min-h-[32rem]"
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="scrim-media absolute inset-0" aria-hidden />

      <div className="container-site relative z-10 pt-28 pb-12 md:pt-32 md:pb-16">
        <Reveal direction="up">
          <Breadcrumbs crumbs={crumbs} theme="dark" />

          {eyebrow ? (
            <p className="mt-6 text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-3 max-w-4xl font-heading text-4xl leading-[1.1] font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {description}
            </p>
          ) : null}

          {actions?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={cn(
                    "group inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 active:translate-y-px",
                    action.variant === "ghost"
                      ? "border border-white/30 text-white hover:border-white hover:bg-white/10"
                      : "bg-brand-matte text-white hover:bg-brand-matte-hover"
                  )}
                >
                  {action.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
