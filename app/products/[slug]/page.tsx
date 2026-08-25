import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Download } from "lucide-react";

import { ContentBlocks, MediaFrame } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatCounter } from "@/components/common/stat-counter";
import { products } from "@/content/products";
import { routes } from "@/lib/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  jsonLdScript,
  productJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: product.href,
    image: product.hero.src,
    keywords: product.keywords,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const crumbs = [
    { name: "Products", href: routes.products },
    { name: product.name, href: product.href },
  ];

  const faqBlock = product.blocks.find((block) => block.type === "faq");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          productJsonLd({
            name: `${product.name} ${product.category}`,
            description: product.metaDescription,
            path: product.href,
            image: product.hero.src,
            // The full spec sheet is exposed as structured properties, which
            // is what lets search engines answer spec questions directly.
            properties: product.specifications.map((spec) => ({
              name: spec.label,
              value: spec.value,
            })),
          })
        )}
      />
      {faqBlock?.type === "faq" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqBlock.faqs))}
        />
      ) : null}

      <PageHero
        eyebrow={product.eyebrow}
        title={`${product.name} — ${product.category}`}
        description={product.summary}
        image={product.hero}
        crumbs={crumbs}
        actions={[
          { label: "Sales enquiry", href: routes.contact },
          { label: "Become a distributor", href: routes.distributor, variant: "ghost" },
        ]}
      />

      {/* Headline performance figures */}
      <section className="border-b border-ink-200 bg-white" aria-label="Key performance figures">
        <div className="container-site grid gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {product.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Product gallery                                                     */}
      {/* Four equal squares on one row. A uniform crop lets the eye compare   */}
      {/* the angles directly, which a mixed-size bento worked against.        */}
      {/* ------------------------------------------------------------------ */}
      {product.gallery?.length ? (
        <section className="section-y bg-ink-50" aria-label={`${product.name} photographs`}>
          <div className="container-site">
            <SectionHeading
              eyebrow="Gallery"
              title={`${product.name} up close`}
              className="mb-10 md:mb-12"
            />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {product.gallery.map((image, index) => (
                <Reveal key={image.src} delay={index * 80}>
                  <MediaFrame
                    image={image}
                    aspect="1/1"
                    sizes="(min-width: 1024px) 23vw, 50vw"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ------------------------------------------------------------------ */}
      {/* Specification sheet                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="specifications" className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Key features & parameters"
            title={`${product.name} specifications`}
            className="mb-10 md:mb-14"
          />

          <Reveal>
            <div className="overflow-hidden rounded-xl border border-ink-200">
              <dl className="divide-y divide-ink-200">
                {product.specifications.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`grid gap-1 px-5 py-4 transition-colors duration-200 hover:bg-brand-50 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] sm:gap-6 sm:px-7 ${
                      index % 2 === 1 ? "bg-ink-50/60" : "bg-white"
                    }`}
                  >
                    <dt className="font-heading text-sm font-bold text-ink-950">
                      {spec.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink-600">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Brochure download                                                   */}
      {/* Sits directly after the spec sheet: a reader who has got this far is */}
      {/* the one who wants the PDF. Size and page count are stated up front   */}
      {/* so nobody starts a 1.2 MB download blind.                            */}
      {/* ------------------------------------------------------------------ */}
      {product.brochure ? (
        <section className="section-y bg-ink-50" aria-label={`${product.name} brochure`}>
          <div className="container-site">
            <Reveal>
              <div className="grid items-center gap-8 rounded-xl border border-ink-200 bg-white p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10 md:p-10">
                {/* Cover renders at its natural page ratio, lightly lifted off
                    the card so it reads as a physical document. */}
                <Image
                  src={product.brochure.cover.src}
                  alt={product.brochure.cover.alt}
                  width={438}
                  height={612}
                  loading="lazy"
                  className="mx-auto w-36 rounded-lg border border-ink-200 shadow-lift sm:mx-0 sm:w-44"
                />

                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">
                    Product brochure
                  </p>
                  <h2 className="mt-3 font-heading text-2xl leading-snug font-bold text-ink-950 md:text-3xl">
                    Download the {product.name} brochure
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-600">
                    The full sales brochure — performance figures, the complete
                    specification sheet from the DGCA type certificate, and
                    distributor contact details.
                  </p>

                  <a
                    href={product.brochure.href}
                    download
                    aria-label={`Download the ${product.name} brochure, PDF, ${product.brochure.fileSize}, ${product.brochure.pages} pages`}
                    className="group mt-7 inline-flex items-center gap-2.5 rounded-lg bg-brand-matte px-6 py-3.5 font-heading text-sm font-bold text-white transition-colors duration-300 hover:bg-brand-matte-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  >
                    <Download
                      className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                      aria-hidden
                    />
                    Download brochure
                  </a>

                  <p className="mt-3.5 text-xs text-ink-500">
                    PDF &middot; {product.brochure.fileSize} &middot;{" "}
                    {product.brochure.pages} pages
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <ContentBlocks blocks={product.blocks} />

      <CtaBand
        contact="sales"
        title={`Enquire about the ${product.name}`}
        description="Speak to the product team about pricing, demonstrations, training and state-level distribution."
        primary={{ label: "Send a sales enquiry", href: routes.contact }}
        secondary={{ label: "Become a distributor", href: routes.distributor }}
      />
    </>
  );
}
