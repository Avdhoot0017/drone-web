import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { MediaFrame } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { softwareProducts } from "@/content/software";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";

const crumbs = [{ name: "Software", href: routes.software }];

export const metadata: Metadata = buildMetadata({
  title: "GIS, Photogrammetry & Geotechnical Software",
  description:
    "Global Mapper, Agisoft Metashape, Surfer, Grapher and GEO5 from Schnell Drone Technologies — exclusive India partner of Blue Marble Geographics, with more than 1,000 clients served.",
  path: routes.software,
  image: "/images/stock/mapping-aerial-farmland.jpg",
  keywords: [
    "GIS software India",
    "Global Mapper India partner",
    "Agisoft Metashape India",
    "Surfer Grapher India",
    "GEO5 geotechnical software India",
  ],
});

export default function SoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Software"
        title="The software our own survey teams rely on"
        description="Schnell distributes, licenses, trains and supports the GIS, photogrammetry and geotechnical software behind its geospatial work — including as exclusive India partner of Blue Marble Geographics."
        image={{
          src: "/images/stock/mapping-aerial-farmland.jpg",
          alt: "Aerial survey imagery of agricultural land used in GIS analysis",
        }}
        crumbs={crumbs}
        actions={[{ label: "Request a quote", href: routes.contact }]}
      />

      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Five products, one support team"
            intro="Licensing, training and technical support are handled in India by the same engineers who use these tools on live survey projects."
            className="mb-12 md:mb-16"
          />

          <div className="space-y-6">
            {softwareProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 60}>
                <article className="grid overflow-hidden rounded-xl border border-ink-200 bg-white transition-shadow duration-300 hover:shadow-lift lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                  <MediaFrame
                    image={product.thumbnail}
                    aspect="16/10"
                    className="rounded-none"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />

                  <div className="flex flex-col justify-center p-7 md:p-9">
                    <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                      {product.vendor}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-ink-950">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
                      {product.summary}
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {product.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-snug text-ink-600"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={product.href}
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-500"
                    >
                      Explore {product.name}
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need licensing, training or a quotation?"
        description="Tell us which product and how many seats, and we will send pricing along with training and support options."
        primary={{ label: "Request software pricing", href: routes.contact }}
      />
    </>
  );
}
