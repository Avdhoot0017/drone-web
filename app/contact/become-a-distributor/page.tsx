import type { Metadata } from "next";
import { Handshake, MapPinned, TrendingUp, Wrench } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const crumbs = [
  { name: "Contact Us", href: routes.contact },
  { name: "Become a Distributor", href: routes.distributor },
];

export const metadata: Metadata = buildMetadata({
  title: "Become a Distributor",
  description:
    "Partner with Schnell Drone Technologies to distribute the DGCA type certified Himalaya agriculture spraying drone across your state. Enquire on +91 95118 46050.",
  path: routes.distributor,
  keywords: [
    "agriculture drone distributor India",
    "Himalaya drone dealership",
    "drone distributorship opportunity",
    "become drone dealer India",
  ],
});

const propositions = [
  {
    icon: Handshake,
    title: "A certified platform to sell",
    description:
      "Himalaya is DGCA type certified, which removes the single biggest obstacle to selling an agricultural drone in India.",
  },
  {
    icon: MapPinned,
    title: "Defined territory",
    description:
      "Schnell is expanding across central and northern India and works with regional partners who know their districts.",
  },
  {
    icon: Wrench,
    title: "Service and spares behind you",
    description:
      "Our engineering team backs every unit with preventive, corrective and predictive maintenance capability.",
  },
  {
    icon: TrendingUp,
    title: "A proven demand story",
    description:
      "Consecutive IFFCO MoAs for Nano Urea and Nano DAP spraying demonstrate the demand your territory will be selling into.",
  },
];

export default function BecomeDistributorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Partnership"
        title="Become a Himalaya distributor"
        description="Bring a DGCA type certified spraying drone — and the service capability behind it — to farmers in your state."
        image={{
          src: "/images/stock/agri-farmer-drone.jpg",
          alt: "Farmer operating an agricultural spraying drone in a field",
        }}
        crumbs={crumbs}
        size="compact"
      />

      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why partner with Schnell"
            title="What you get as a distribution partner"
            className="mb-12 md:mb-14"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {propositions.map((proposition, index) => (
              <Reveal key={proposition.title} delay={index * 80}>
                <article className="h-full rounded-xl border border-ink-200 bg-white p-6">
                  <span className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                    <proposition.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base leading-snug font-bold text-ink-950">
                    {proposition.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    {proposition.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink-50">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Tell us about your territory"
              intro="Share your region, the crops and acreage you serve, and your existing distribution experience. The product team will come back to you directly."
              className="mb-0"
            />

            <dl className="mt-8 space-y-4 rounded-xl border border-ink-200 bg-white p-6 text-sm">
              <div>
                <dt className="font-semibold text-ink-950">Distributor enquiries</dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.contact.sales.phoneHref}
                    className="text-ink-600 transition-colors hover:text-brand-500"
                  >
                    {siteConfig.contact.sales.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-950">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.contact.sales.email}`}
                    className="break-all text-ink-600 transition-colors hover:text-brand-500"
                  >
                    {siteConfig.contact.sales.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <EnquiryForm
            defaultEnquiryType="distributor"
            title="Distributor application"
            description="Your enquiry goes directly to the Himalaya product team."
          />
        </div>
      </section>
    </>
  );
}
