import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";
import type { ServiceEntry } from "@/types/content";

/**
 * Grid of Drone-as-a-Service verticals, used on the homepage and the services
 * hub. Each card lifts and zooms its photograph on hover.
 */
export function ServiceCards({
  services,
  columns = 3,
}: {
  services: ServiceEntry[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={index * 80}>
          <Link
            href={service.href}
            className="media-zoom group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
              <Image
                src={service.thumbnail.src}
                alt={service.thumbnail.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/55 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-lg leading-snug font-bold text-ink-950 transition-colors duration-200 group-hover:text-brand-500">
                {service.navLabel}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-600">
                {service.summary}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                Learn more
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
