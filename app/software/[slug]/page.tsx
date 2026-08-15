import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { ContentBlocks } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { getSoftwareBySlug, softwareProducts } from "@/content/software";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return softwareProducts.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getSoftwareBySlug(slug);

  if (!product) return {};

  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: product.href,
    image: product.hero.src,
    keywords: product.keywords,
  });
}

export default async function SoftwareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getSoftwareBySlug(slug);

  if (!product) notFound();

  const crumbs = [
    { name: "Software", href: routes.software },
    { name: product.name, href: product.href },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      {/*
        SoftwareApplication markup describes the product itself; Schnell is
        declared as the distributing organisation via the site-wide @id.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: product.name,
          description: product.metaDescription,
          applicationCategory: "DesignApplication",
          operatingSystem: "Windows",
          publisher: { "@type": "Organization", name: product.vendor },
          provider: { "@id": `${siteConfig.url}/#organization` },
        })}
      />

      <PageHero
        eyebrow={product.vendor}
        title={product.name}
        description={product.summary}
        image={product.hero}
        crumbs={crumbs}
        actions={[
          { label: "Request pricing", href: routes.contact },
          { label: "All software", href: routes.software, variant: "ghost" },
        ]}
        size="compact"
      />

      <section className="border-b border-ink-200 bg-white" aria-label="Product highlights">
        <div className="container-site grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {product.highlights.map((highlight, index) => (
            <Reveal key={highlight} delay={index * 70}>
              <p className="flex gap-3 text-sm leading-relaxed font-medium text-ink-800">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                {highlight}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ContentBlocks blocks={product.blocks} />

      <CtaBand
        title={`Licensing ${product.name}`}
        description="Send us your seat count and deployment details for a quotation, and ask about training and technical support in India."
        primary={{ label: "Request a quotation", href: routes.contact }}
      />
    </>
  );
}
