import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small red kicker above the heading. */
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Heading level — pick the one that fits the page outline, not the size. */
  as?: "h2" | "h3";
  align?: "left" | "center";
  className?: string;
}

/**
 * The standard section header used across every page: kicker, title, lead.
 * Keeping it in one component guarantees consistent type scale and rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">
          {align === "left" ? (
            <span className="h-px w-8 bg-brand-500" aria-hidden />
          ) : null}
          {eyebrow}
        </p>
      ) : null}

      <Heading className="font-heading text-3xl leading-[1.15] font-bold text-ink-950 md:text-4xl lg:text-[2.65rem]">
        {title}
      </Heading>

      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-ink-600">{intro}</p>
      ) : null}
    </Reveal>
  );
}
