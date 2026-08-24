import Image from "next/image";

import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { teamCopy, teamLead, teamSupporting } from "@/content/team";
import { cn } from "@/lib/utils";

/**
 * Team photography block: one wide lead image with three supporting shots.
 *
 * The lead is cropped 16:9 and the rest 4:3 — both close to the photographs'
 * native 3:2, so the group in each frame survives the crop rather than losing
 * heads at the edges.
 */
export function TeamSection({ className }: { className?: string }) {
  return (
    <section className={cn("section-y", className)} aria-labelledby="team-heading">
      <div className="container-site">
        <SectionHeading
          eyebrow={teamCopy.eyebrow}
          title={teamCopy.title}
          intro={teamCopy.intro}
          className="mb-10 md:mb-14"
        />
        <span id="team-heading" className="sr-only">
          {teamCopy.title}
        </span>

        <Reveal>
          <figure className="media-zoom relative aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100 shadow-soft">
            <Image
              src={teamLead.src}
              alt={teamLead.alt}
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </figure>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-3 md:mt-5 md:gap-5">
          {teamSupporting.map((image, index) => (
            <Reveal key={image.src} delay={index * 90}>
              <figure className="media-zoom relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-100 shadow-soft">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 30vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
