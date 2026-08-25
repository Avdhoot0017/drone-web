import Image from "next/image";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { mediaCopy, pressClippings } from "@/content/media-coverage";
import { cn } from "@/lib/utils";

/**
 * Press clipping collage.
 *
 * Laid out with CSS multi-column rather than a grid. The clippings range from
 * 0.52 to 2.90 in aspect ratio, and a grid would force each into a fixed box —
 * cropping the headlines and defeating the point. Columns let every cutting keep
 * its natural shape and simply flow into the shortest column.
 *
 * `break-inside-avoid` stops a clipping being split across a column boundary.
 */
export function MediaCoverage({ className }: { className?: string }) {
  return (
    <section
      className={cn("section-y", className)}
      aria-labelledby="media-coverage-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={mediaCopy.eyebrow}
          title={mediaCopy.title}
          intro={mediaCopy.intro}
          className="mb-10 md:mb-14"
        />
        <span id="media-coverage-heading" className="sr-only">
          {mediaCopy.title}
        </span>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {pressClippings.map((clip, index) => (
            <Reveal
              key={clip.src}
              delay={(index % 3) * 90}
              className="break-inside-avoid"
            >
              <figure className="rounded-xl bg-white p-2.5 shadow-lift transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={clip.src}
                  alt={`${clip.publication}: ${clip.headline}`}
                  width={clip.width}
                  height={clip.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  loading="lazy"
                  // Native ratio preserved — `h-auto` keeps the cutting uncropped.
                  className="h-auto w-full rounded-lg"
                />
                <figcaption className="flex items-center justify-between gap-3 px-1.5 pt-3 pb-1">
                  <span className="font-heading text-sm font-bold text-ink-950">
                    {clip.publication}
                  </span>
                  <span className="shrink-0 rounded-full bg-ink-50 px-2.5 py-1 text-[0.7rem] font-medium text-ink-500">
                    {clip.language}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
