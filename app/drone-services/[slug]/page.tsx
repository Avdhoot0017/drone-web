import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { ContentBlocks } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { getServiceBySlug, services } from "@/content/services";
import { routes } from "@/lib/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  jsonLdScript,
  serviceJsonLd,
} from "@/lib/seo";

/**
 * Pre-renders all five service pages at build time.
 * Static HTML is what crawlers see instantly and what makes these pages fast.
 */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/** Requests for any slug outside `generateStaticParams` return a 404. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.href,
    image: service.hero.src,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const crumbs = [
    { name: "Drone Services", href: routes.daas },
    { name: service.navLabel, href: service.href },
  ];

  const faqBlock = service.blocks.find((block) => block.type === "faq");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceJsonLd({
            name: service.title,
            description: service.summary,
            path: service.href,
            image: service.hero.src,
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
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
        image={service.hero}
        crumbs={crumbs}
        actions={[
          { label: "Enquire about this service", href: routes.contact },
          { label: "All drone services", href: routes.daas, variant: "ghost" },
        ]}
      />

      {/* Highlight strip — the four things that matter most, above the fold. */}
      <section className="border-b border-ink-200 bg-white" aria-label="Service highlights">
        <div className="container-site grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {service.highlights.map((highlight, index) => (
            <Reveal key={highlight} delay={index * 70}>
              <p className="flex gap-3 text-sm leading-relaxed font-medium text-ink-800">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                {highlight}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ContentBlocks blocks={service.blocks} />

      <CtaBand
        title={`Planning a ${service.navLabel.toLowerCase()} deployment?`}
        description="Tell us the area, the timeline and the reporting you need, and we will scope the mission and the commercials."
      />
    </>
  );
}
