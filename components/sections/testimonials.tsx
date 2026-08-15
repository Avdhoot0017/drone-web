import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

/** Seconds each card spends crossing the viewport — tune the pace here. */
const SECONDS_PER_CARD = 7;

/**
 * Testimonial marquee.
 *
 * Two rows scroll in opposite directions — the upper one rightwards, the lower
 * one leftwards — which reads as motion without the eye having to track any one
 * card. Hovering or tabbing into a row freezes it so the quote can be read, and
 * `prefers-reduced-motion` turns each row into a plain horizontal scroller.
 *
 * Cards are rendered twice per row to make the loop seamless; the duplicate set
 * is hidden from assistive technology so screen readers hear each quote once.
 */
export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const topRow = testimonials.slice(0, half);
  const bottomRow = testimonials.slice(half);

  return (
    <section className="section-y overflow-hidden bg-ink-50" aria-label="Client testimonials">
      <div className="container-site">
        {/* Left-aligned with the red kicker rule, matching every other section
            heading on the page. */}
        <SectionHeading
          eyebrow="Client feedback"
          title="Trusted on the missions that matter"
          intro="Government departments, cooperatives and enterprises rely on Schnell crews for work where the terrain is hardest and the evidence has to hold up."
          className="mb-0"
        />
      </div>

      {/* Rows share the site container, so they line up with the heading above
          and keep a margin from the viewport edges. */}
      <div className="container-site mt-12 space-y-5 md:mt-16 md:space-y-6">
        <MarqueeRow items={topRow} direction="right" />
        <MarqueeRow items={bottomRow} direction="left" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  // Duration scales with the number of cards so both rows move at the same
  // visual speed even when one holds an extra card.
  const duration = items.length * SECONDS_PER_CARD * 2;

  return (
    <div
      // `overflow-hidden` clips the track at the container's edge rather than
      // letting cards spill into the page margin.
      className="marquee-row group relative overflow-hidden"
      // Fades the cards out at both edges instead of cutting them off.
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <div
        className="marquee-track gap-5 md:gap-6"
        data-direction={direction}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {/* Duplicate set — purely visual, so it is hidden from screen readers. */}
        {items.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.id}-duplicate`}
            testimonial={testimonial}
            duplicate
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  duplicate = false,
}: {
  testimonial: Testimonial;
  duplicate?: boolean;
}) {
  return (
    <figure
      aria-hidden={duplicate}
      // `tabIndex` on the real cards only: focusing one pauses the row, so
      // keyboard users can stop the motion and read.
      tabIndex={duplicate ? -1 : 0}
      className={cn(
        "w-[19rem] shrink-0 rounded-xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-300 sm:w-[22rem]",
        "hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift",
        "focus-visible:-translate-y-1 focus-visible:border-brand-300"
      )}
    >
      <div className="flex items-center justify-between">
        <StarRating rating={testimonial.rating} />
        <Quote className="size-5 text-brand-100" aria-hidden />
      </div>

      <blockquote className="mt-4">
        <p className="text-[0.95rem] leading-relaxed text-ink-600">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
        <Image
          src={testimonial.avatar.src}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          className="size-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-ink-950">
            {testimonial.name}
          </p>
          <p className="truncate text-xs text-ink-500">
            {testimonial.role}, {testimonial.organisation}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

/** Star rating with a text equivalent for assistive technology. */
function StarRating({ rating }: { rating: number }) {
  return (
    <p className="flex items-center gap-0.5">
      <span className="sr-only">{rating} out of 5 stars</span>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden
          className={cn(
            "size-4",
            index < rating
              ? "fill-brand-500 text-brand-500"
              : "fill-ink-200 text-ink-200"
          )}
        />
      ))}
    </p>
  );
}
