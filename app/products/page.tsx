import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MediaFrame } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { products } from "@/content/products";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";

const crumbs = [{ name: "Products", href: routes.products }];

export const metadata: Metadata = buildMetadata({
  title: "Drone Products",
  description:
    "Schnell's indigenous drone products, led by the DGCA type certified Himalaya agriculture spraying drone — a medium-class hexacopter with a 10 litre tank built for Indian field conditions.",
  path: routes.products,
  image: "/images/doc/himalaya-spraying-field.jpeg",
  keywords: [
    "Schnell drone products",
    "Indian made agriculture drone",
    "DGCA type certified drone",
    "buy agriculture spraying drone India",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Products"
        title="Drones designed, built and certified in India"
        description="Schnell develops its own drone platforms alongside its service business — engineered around the conditions its own pilots fly in every day."
        image={{
          src: "/images/doc/himalaya-spraying-field.jpeg",
          alt: "Himalaya spraying drone hovering over an orchard",
        }}
        crumbs={crumbs}
        size="compact"
      />

      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our platforms"
            title="Current product line"
            className="mb-12 md:mb-16"
          />

          <div className="space-y-8">
            {products.map((product, index) => (
              <Reveal key={product.slug}>
                <article className="grid overflow-hidden rounded-xl border border-ink-200 bg-white lg:grid-cols-2">
                  <MediaFrame
                    image={product.thumbnail}
                    aspect="4/3"
                    className="rounded-none"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    // The first card sits just below a compact hero, so it is a
                    // genuine LCP candidate and must not be lazy-loaded.
                    priority={index === 0}
                  />

                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <p className="text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">
                      {product.category}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl font-bold text-ink-950">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-600">
                      {product.summary}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {product.badges.map((badge) => (
                        <li
                          key={badge}
                          className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                        >
                          {badge}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={product.href}
                        className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-matte px-6 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-matte-hover active:translate-y-px"
                      >
                        View specifications
                        <ArrowRight
                          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                      <Link
                        href={routes.distributor}
                        className="inline-flex h-11 items-center rounded-full border border-ink-200 px-6 text-sm font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-500 hover:text-brand-500"
                      >
                        Become a distributor
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        contact="sales"
        title="Talk to the Himalaya sales team"
        description="For pricing, demonstrations, state-level distribution or bulk procurement, speak to the product team directly."
        primary={{ label: "Send a sales enquiry", href: routes.contact }}
      />
    </>
  );
}
