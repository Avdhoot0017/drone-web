import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentBlocks } from "@/components/common/content-blocks";
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
        <div className="container-site grid gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {product.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Specification sheet                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="specifications" className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Key features & parameters"
            title={`${product.name} specifications`}
            intro="Transcribed from the DGCA type certification data sheet."
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
