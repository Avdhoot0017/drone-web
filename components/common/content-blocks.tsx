import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatCounter } from "@/components/common/stat-counter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { ContentBlock } from "@/types/content";

/**
 * Renders a page body from typed content blocks.
 *
 * Every service, product and software page is drawn by this one component, so
 * spacing, type scale, background banding and reveal animations stay identical
 * across the site.
 */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block) => (
        <BlockSection key={block.id} block={block} />
      ))}
    </>
  );
}

function BlockSection({ block }: { block: ContentBlock }) {
  // A split can carry its own heading inside the text column.
  const inlineHeading =
    block.type === "split" && block.headingPlacement === "inline";

  return (
    <section
      id={block.id}
      className={cn(
        "section-y",
        block.tone === "muted" && "bg-ink-50",
        block.tone === "brand" && "surface-brand-faint"
      )}
    >
      <div className="container-site">
        {block.heading && !inlineHeading ? (
          <SectionHeading
            eyebrow={block.eyebrow}
            title={block.heading}
            intro={block.intro}
            className="mb-10 md:mb-14"
          />
        ) : null}

        <BlockBody block={block} />
      </div>
    </section>
  );
}

function BlockBody({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <div className="max-w-3xl space-y-5">
          {block.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 70}>
              <p className="text-base leading-relaxed text-ink-600 md:text-[1.0625rem]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      );

    case "bullets":
      return (
        <div
          className={cn(
            "grid gap-x-10 gap-y-9",
            (block.columns ?? 2) === 1 && "max-w-3xl",
            (block.columns ?? 2) === 2 && "md:grid-cols-2",
            (block.columns ?? 2) === 3 && "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {block.groups.map((group, index) => (
            <Reveal key={group.title ?? index} delay={index * 80}>
              {group.title ? (
                <h3 className="mb-4 font-heading text-lg font-bold text-ink-950">
                  {group.title}
                </h3>
              ) : null}
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-600">
                    <Check
                      className="mt-1 size-4 shrink-0 text-brand-500"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      );

    case "cards":
      return (
        <div
          className={cn(
            "grid gap-5",
            (block.columns ?? 3) === 2 && "sm:grid-cols-2",
            (block.columns ?? 3) === 3 && "sm:grid-cols-2 lg:grid-cols-3",
            (block.columns ?? 3) === 4 && "sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {block.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group h-full rounded-xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                {block.numbered ? (
                  <span className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-brand-50 font-heading text-sm font-bold text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <h3 className="font-heading text-lg leading-snug font-bold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      );

    case "table":
      return (
        <Reveal>
          <div className="overflow-x-auto rounded-xl border border-ink-200">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              {block.data.caption ? (
                <caption className="border-b border-ink-200 bg-ink-50 px-5 py-3 text-left text-xs font-semibold tracking-wide text-ink-500 uppercase">
                  {block.data.caption}
                </caption>
              ) : null}
              <thead>
                <tr className="bg-ink-950 text-white">
                  {block.data.head.map((cell) => (
                    <th
                      key={cell}
                      scope="col"
                      className="px-5 py-3.5 font-heading text-xs font-bold tracking-wider uppercase"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.data.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-t border-ink-200 transition-colors duration-200 odd:bg-white even:bg-ink-50/60 hover:bg-brand-50"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={cn(
                          "px-5 py-3.5 align-top leading-relaxed",
                          cellIndex === 0
                            ? "font-semibold text-ink-950"
                            : "text-ink-600"
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      );

    case "split":
      return (
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-2 lg:gap-16",
            block.verticalAlign === "start" ? "items-start" : "items-center"
          )}
        >
          <Reveal
            direction={block.imageSide === "left" ? "left" : "right"}
            className={cn(block.imageSide === "left" && "lg:order-2")}
          >
            <div className="space-y-5">
              {block.headingPlacement === "inline" && block.heading ? (
                <SectionHeading
                  eyebrow={block.eyebrow}
                  title={block.heading}
                  intro={block.intro}
                  className="mb-8"
                />
              ) : null}

              {block.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-ink-600 md:text-[1.0625rem]"
                >
                  {paragraph}
                </p>
              ))}

              {block.bullets?.length ? (
                <ul className="mt-6 space-y-3">
                  {block.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] text-ink-600">
                      <Check className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>

          <Reveal
            direction={block.imageSide === "left" ? "right" : "left"}
            className={cn(block.imageSide === "left" && "lg:order-1")}
          >
            <MediaFrame image={block.image} aspect={block.imageAspect ?? "4/3"} />
          </Reveal>
        </div>
      );

    case "stats":
      return (
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {block.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      );

    case "gallery":
      return (
        <div
          className={cn(
            "grid gap-4",
            (block.columns ?? 4) === 2 && "sm:grid-cols-2",
            (block.columns ?? 4) === 3 && "sm:grid-cols-2 lg:grid-cols-3",
            (block.columns ?? 4) === 4 && "grid-cols-2 lg:grid-cols-4"
          )}
        >
          {block.images.map((image, index) => (
            <Reveal key={image.src + index} delay={index * 70} direction="zoom">
              <MediaFrame image={image} aspect="4/3" />
            </Reveal>
          ))}
        </div>
      );

    case "collage":
      return (
        /*
          CSS multi-column rather than a grid: these photographs range from
          portrait to 4:3, and a grid would crop each into a uniform box.
          `break-inside-avoid` stops one being split across a column boundary.
          The white mount separates neighbouring photos, which is what a bare
          edge-to-edge collage was missing.
        */
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {block.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 80} className="break-inside-avoid">
              <figure className="rounded-xl bg-white p-2.5 shadow-lift transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 100vw"
                  className="h-auto w-full rounded-lg"
                />
                {image.caption ? (
                  <figcaption className="px-1.5 pt-3 pb-1 text-[0.8rem] leading-snug text-ink-500">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
      );

    case "steps":
      return (
        <div>
          {block.paragraphs?.length ? (
            <div className="mb-12 max-w-3xl space-y-5">
              {block.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * 70}>
                  <p className="text-base leading-relaxed text-ink-600 md:text-[1.0625rem]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          ) : null}

          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {block.steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 110} className="relative">
                {/*
                  Connector running from this step's marker into the next one.
                  Drawn only at the widest breakpoint, where the steps sit on a
                  single row — at narrower widths they wrap and a horizontal
                  rule would point at nothing.
                */}
                {index < block.steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-5 left-12 -right-8 hidden h-px bg-gradient-to-r from-brand-300 to-ink-200 lg:block"
                  />
                ) : null}

                <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-heading text-sm font-bold text-brand-600">
                  {index + 1}
                </span>

                <h3 className="mt-5 font-heading text-lg leading-snug font-bold text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">
                  {step.description}
                </p>

                {step.output ? (
                  <p className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {step.output}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </ol>
        </div>
      );

    case "faq":
      return (
        <Reveal className="max-w-3xl">
          <Accordion className="rounded-xl border border-ink-200 bg-white px-5">
            {block.faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 font-heading text-base font-semibold text-ink-950 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-ink-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      );
  }
}

/**
 * Shared image frame: fixed aspect ratio (so nothing shifts while loading),
 * rounded corners, and a slow zoom on hover.
 */
export function MediaFrame({
  image,
  aspect = "16/10",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
}: {
  image: { src: string; alt: string; placeholder?: boolean };
  aspect?: "16/10" | "4/3" | "3/2" | "1/1" | "16/9" | "3/4";
  className?: string;
  /** Loads eagerly at high fetch priority — for above-the-fold images. */
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "media-zoom relative overflow-hidden rounded-xl bg-ink-100",
        className
      )}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="object-cover"
      />
      {image.placeholder ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-ink-950/70 px-3 py-1.5 text-center text-[0.65rem] font-semibold tracking-wide text-white/90 uppercase">
          Placeholder — client photo pending
        </figcaption>
      ) : null}
    </figure>
  );
}
