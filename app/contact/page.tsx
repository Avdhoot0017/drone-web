import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { routes } from "@/lib/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  jsonLdScript,
  localBusinessJsonLd,
} from "@/lib/seo";
import { formattedAddress, siteConfig } from "@/lib/site-config";

const crumbs = [{ name: "Contact Us", href: routes.contact }];

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Schnell Drone Technologies Ltd. in Pune for drone procurement, Drone-as-a-Service requirements, GIS software licensing, distribution partnerships or grievances.",
  path: routes.contact,
  keywords: [
    "contact Schnell Drone Technologies",
    "drone company Pune contact",
    "drone service enquiry India",
  ],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd())}
      />

      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        description="Tell us what you need — drones, drone services, software, a distribution partnership, or a grievance to raise."
        image={{
          src: "/images/stock/about-precision-ag.jpg",
          alt: "Drone operations team working in an agricultural field",
        }}
        crumbs={crumbs}
        size="compact"
      />

      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          {/* Contact details ---------------------------------------------- */}
          <div>
            <SectionHeading
              eyebrow="Reach us"
              title="Speak to the right team directly"
              className="mb-8"
            />

            <div className="space-y-5">
              <Reveal>
                <ContactCard
                  icon={<Phone className="size-5" aria-hidden />}
                  title="Business enquiries — Himalaya & products"
                  lines={[
                    { text: siteConfig.contact.sales.phone, href: siteConfig.contact.sales.phoneHref },
                    {
                      text: siteConfig.contact.sales.email,
                      href: `mailto:${siteConfig.contact.sales.email}`,
                    },
                  ]}
                />
              </Reveal>

              <Reveal delay={80}>
                <ContactCard
                  icon={<Mail className="size-5" aria-hidden />}
                  title="General & customer service"
                  lines={[
                    {
                      text: siteConfig.contact.general.phone,
                      href: siteConfig.contact.general.phoneHref,
                    },
                    {
                      text: siteConfig.contact.general.email,
                      href: `mailto:${siteConfig.contact.general.email}`,
                    },
                  ]}
                />
              </Reveal>

              <Reveal delay={160}>
                <ContactCard
                  icon={<MapPin className="size-5" aria-hidden />}
                  title="Registered office"
                  lines={[{ text: formattedAddress }]}
                />
              </Reveal>
            </div>

            {/*
              Map is loaded lazily and titled for screen readers. Swap the query
              for the client's exact Google Business Profile place ID when
              available, so the embed matches their verified listing.
            */}
            <Reveal delay={220} className="mt-8">
              <div className="overflow-hidden rounded-xl border border-ink-200">
                <iframe
                  title={`Map showing the location of ${siteConfig.legalName}`}
                  src="https://www.google.com/maps?q=Icon+Tower+Baner+Road+Pune+411045&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </Reveal>
          </div>

          {/* Form ---------------------------------------------------------- */}
          <div>
            <EnquiryForm
              title="Send a business enquiry"
              description="Choose the nature of your enquiry and give us the detail — area to be covered, timeline, quantities or licence count — and the right team will respond."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: { text: string; href?: string }[];
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-ink-200 bg-white p-5">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="font-heading text-sm font-bold text-ink-950">{title}</h3>
        <ul className="mt-2 space-y-1 text-sm text-ink-600">
          {lines.map((line) => (
            <li key={line.text} className="break-words">
              {line.href ? (
                <a
                  href={line.href}
                  className="transition-colors duration-200 hover:text-brand-500"
                >
                  {line.text}
                </a>
              ) : (
                line.text
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
