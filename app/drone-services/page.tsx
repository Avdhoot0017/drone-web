import type { Metadata } from "next";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { ServiceCards } from "@/components/sections/service-cards";
import { services } from "@/content/services";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript, serviceJsonLd } from "@/lib/seo";

const crumbs = [{ name: "Drone Services", href: routes.daas }];

export const metadata: Metadata = buildMetadata({
  title: "Drone-as-a-Service (DaaS) in India",
  description:
    "Schnell's Drone-as-a-Service verticals: coastal security and surveillance, agriculture fertilizer spraying, traffic monitoring and challan generation, land mapping and survey, and multispectral mapping.",
  path: routes.daas,
  image: "/images/stock/coastal-patrol-boat.jpg",
  keywords: [
    "drone as a service India",
    "DaaS provider India",
    "drone services company",
    "government drone services India",
    "drone survey services",
  ],
});

/** Why departments choose a subscription over buying a fleet. */
const modelPoints = [
  {
    title: "No capital expenditure",
    description:
      "Schnell supplies the drones, trained pilots, AI analytics, maintenance and cloud infrastructure. You pay a service charge, not a procurement bill.",
  },
  {
    title: "Trained pilots, not new hires",
    description:
      "Certified crews who have flown coastal, agricultural and survey missions across India — no recruitment, training or licensing burden on your side.",
  },
  {
    title: "Maintenance is our problem",
    description:
      "Preventive, corrective and predictive servicing keeps availability high. Downtime is absorbed by us, not by your operational schedule.",
  },
  {
    title: "Scales with the mission",
    description:
      "From a single site survey to daily patrols across a 720 km coastline or 500 villages of SVAMITVA mapping.",
  },
];

export default function DroneServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      {/* One Service entity per vertical, so each can surface independently. */}
      {services.map((service) => (
        <script
          key={service.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceJsonLd({
              name: service.title,
              description: service.summary,
              path: service.href,
              image: service.thumbnail.src,
            })
          )}
        />
      ))}

      <PageHero
        eyebrow="Drone-as-a-Service"
        title="Capability on subscription, not on your balance sheet"
        description="Five verticals, one operating team. Schnell supplies the drones, the pilots, the analytics and the maintenance — you commission the outcome."
        image={{
          src: "/images/stock/coastal-patrol-boat.jpg",
          alt: "Maritime patrol vessel under drone surveillance in coastal waters",
        }}
        crumbs={crumbs}
        actions={[{ label: "Discuss a requirement", href: routes.contact }]}
      />

      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our services"
            title="Where Schnell drones are flying today"
            intro="Each vertical below is an active operating line, not a brochure capability — with government departments, cooperatives and enterprises as clients."
            className="mb-12 md:mb-16"
          />
          <ServiceCards services={services} />
        </div>
      </section>

      <section className="section-y bg-ink-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="The DaaS model"
            title="Why departments subscribe instead of buying"
            className="mb-12 md:mb-14"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modelPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80}>
                <article className="h-full rounded-xl border border-ink-200 bg-white p-6">
                  <span className="font-heading text-sm font-bold text-brand-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-base leading-snug font-bold text-ink-950">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    {point.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
