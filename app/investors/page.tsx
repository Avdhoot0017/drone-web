import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/common/cta-band";
import { DocumentList } from "@/components/common/document-list";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { corporateDocuments, financialDocuments } from "@/content/investors";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const crumbs = [{ name: "Investors", href: routes.investors }];

export const metadata: Metadata = buildMetadata({
  title: "Investor Relations",
  description:
    "Financial information, annual reports, directors' reports, statutory audit reports and corporate governance disclosures for Schnell Drone Technologies Ltd.",
  path: routes.investors,
  keywords: [
    "Schnell Drone Technologies investor relations",
    "annual report drone company India",
    "corporate governance drone company",
  ],
});

export default function InvestorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Investor relations"
        title="Financial information & disclosures"
        description="Reports, statements and governance documents for shareholders and prospective investors in Schnell Drone Technologies Ltd."
        image={{
          src: "/images/stock/mapping-aerial-farm-uk.jpg",
          alt: "Aerial view of surveyed land representing the company's operating footprint",
        }}
        crumbs={crumbs}
        size="compact"
      />

      {/* Notice ----------------------------------------------------------- */}
      <section className="section-y">
        <div className="container-site">
          {/* Financial information ---------------------------------------- */}
          <div id="financial-information" className="mt-14 scroll-mt-28">
            <SectionHeading
              eyebrow="Financial information"
              title="Reports & statements"
              className="mb-8"
            />
            <DocumentList documents={financialDocuments} />
          </div>

          {/* Investor information ----------------------------------------- */}
          <div id="investor-information" className="mt-16 scroll-mt-28">
            <SectionHeading
              eyebrow="Investor information"
              title="Disclosures & announcements"
              intro="Shareholder disclosures, updates and announcements will be published in this section."
              className="mb-8"
            />
            <Reveal>
              <p className="rounded-xl border border-dashed border-ink-300 bg-white px-5 py-6 text-sm text-ink-500">
                No announcements have been published yet. Content for this
                section is to be supplied by Schnell Drone Technologies.
              </p>
            </Reveal>
          </div>

          {/* Corporate documents ------------------------------------------ */}
          <div id="corporate-documents" className="mt-16 scroll-mt-28">
            <SectionHeading
              eyebrow="Other documents"
              title="Constitutional documents"
              className="mb-8"
            />
            <DocumentList documents={corporateDocuments} />
          </div>

          {/* Governance link ---------------------------------------------- */}
          <Reveal className="mt-16">
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-brand-200 bg-brand-50 p-7 md:p-9">
              <div>
                <h2 className="font-heading text-xl font-bold text-ink-950">
                  Corporate governance
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600">
                  Composition of the Board of Directors and the committees of
                  the Board, together with their terms of reference.
                </p>
              </div>
              <Link
                href={routes.investorsGovernance}
                className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-brand-matte px-6 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-matte-hover active:translate-y-px"
              >
                View governance
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Investor queries & grievances"
        description={`Write to ${siteConfig.contact.general.email} or use the contact form, selecting “Grievance” where applicable.`}
        primary={{ label: "Contact investor relations", href: routes.contact }}
      />
    </>
  );
}
