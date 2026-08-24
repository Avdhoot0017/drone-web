import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { managementTeam } from "@/content/company";
import { boardCommittees } from "@/content/investors";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";

/** First letter of the first and last name, e.g. "Anjani Kumar Agarwal" -> "AA". */
function initials(name: string) {
  const parts = name.replace(/^CA\s+/, "").split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.at(-1)?.[0] ?? "")).toUpperCase();
}

const crumbs = [
  { name: "Investors", href: routes.investors },
  { name: "Corporate Governance", href: routes.investorsGovernance },
];

export const metadata: Metadata = buildMetadata({
  title: "Corporate Governance",
  description:
    "Board of Directors and committees of the Board of Schnell Drone Technologies Ltd., with their composition and terms of reference.",
  path: routes.investorsGovernance,
  keywords: [
    "Schnell corporate governance",
    "board of directors Schnell Drone",
    "audit committee drone company",
  ],
});

export default function CorporateGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Investor relations"
        title="Corporate Governance"
        description="The Board of Directors and its committees, and how oversight is exercised at Schnell Drone Technologies Ltd."
        image={{
          src: "/images/stock/people-engineer-plans.jpg",
          alt: "Professionals reviewing documentation",
        }}
        crumbs={crumbs}
        size="compact"
      />

      {/* Board ------------------------------------------------------------ */}
      <section id="board-of-directors" className="section-y scroll-mt-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Composition"
            title="Board of Directors"
            className="mb-10 md:mb-12"
          />

          {/*
            Flex-wrap rather than a grid: with five cards the final row holds
            only two, and flex centres that short row automatically. A grid
            would leave them stuck to the left-hand columns.
          */}
          <div className="flex flex-wrap justify-center gap-5">
            {managementTeam.map((person, index) => (
              <Reveal
                key={person.name}
                delay={index * 70}
                className="w-full max-w-xs sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <article className="flex aspect-square flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6 text-center transition-shadow duration-300 hover:shadow-soft">
                  {/* Same circular crops as the management page. */}
                  {person.image ? (
                    <Image
                      src={person.image.src}
                      alt={person.image.alt}
                      width={420}
                      height={420}
                      loading="lazy"
                      className="size-28 md:size-32 rounded-full object-cover ring-[3px] ring-brand-500 ring-offset-4 ring-offset-white shadow-[0_0_0_1px_var(--brand-200),0_8px_24px_-8px_var(--brand-a40)] transition-shadow duration-300"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="flex size-28 md:size-32 items-center justify-center rounded-full bg-brand-50 ring-[3px] ring-brand-500 ring-offset-4 ring-offset-white shadow-[0_0_0_1px_var(--brand-200),0_8px_24px_-8px_var(--brand-a40)] transition-shadow duration-300"
                    >
                      <span className="font-heading text-2xl font-bold text-brand-400">
                        {initials(person.name)}
                      </span>
                    </span>
                  )}

                  <h3 className="mt-5 font-heading text-base leading-snug font-bold text-ink-950">
                    {person.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-brand-500">
                    {person.designation}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Committees ------------------------------------------------------- */}
      <section id="committees" className="section-y scroll-mt-28 bg-ink-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Oversight"
            title="Committees of the Board"
            intro="Committee membership is to be confirmed by the company secretary and will be published here."
            className="mb-10 md:mb-12"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {boardCommittees.map((committee, index) => (
              <Reveal key={committee.name} delay={index * 80}>
                <article className="flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6">
                  <h3 className="font-heading text-lg leading-snug font-bold text-ink-950">
                    {committee.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">
                    {committee.purpose}
                  </p>

                  <div className="mt-5 border-t border-ink-200 pt-4">
                    <p className="text-xs font-bold tracking-wide text-ink-500 uppercase">
                      Members
                    </p>
                    {committee.members.length ? (
                      <ul className="mt-2 space-y-1 text-sm text-ink-600">
                        {committee.members.map((member) => (
                          <li key={member}>{member}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-ink-500 italic">
                        To be confirmed
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Governance queries"
        description="For questions relating to governance, disclosures or shareholder grievances, contact us and select “Grievance” as the nature of enquiry."
        primary={{ label: "Contact us", href: routes.contact }}
      />
    </>
  );
}
