import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/common/cta-band";
import { TeamSection } from "@/components/sections/team-section";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { managementTeam } from "@/content/company";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";

/** First letter of the first and last name, e.g. "Anjani Kumar Agarwal" -> "AA". */
function initials(name: string) {
  const parts = name.replace(/^CA\s+/, "").split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.at(-1)?.[0] ?? "")).toUpperCase();
}

const crumbs = [
  { name: "About Us", href: routes.about },
  { name: "Management", href: routes.management },
];

export const metadata: Metadata = buildMetadata({
  title: "Management & Board of Directors",
  description:
    "The promoters, whole-time directors and independent directors leading Schnell Drone Technologies Ltd. — engineers and professionals across product development, drone operations, sales, finance and strategy.",
  path: routes.management,
  keywords: [
    "Schnell Drone Technologies management",
    "Bhushan Sharad Khomane",
    "Satyawan Balwant Jadhav",
    "Sharmin Sahil Inamdar",
    "board of directors drone company India",
  ],
});

export default function ManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Leadership"
        title="Management"
        description="Schnell is led by engineers and experienced professionals with expertise across product development, drone operations, sales and marketing, finance and business strategy."
        image={{
          src: "/images/stock/people-engineer-plans.jpg",
          alt: "Engineer reviewing technical plans on site",
        }}
        crumbs={crumbs}
        size="compact"
      />

      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Board & management"
            title="The people behind the missions"
            className="mb-12 md:mb-16"
          />

          <div className="space-y-5">
            {managementTeam.map((person, index) => (
              <Reveal key={person.name} delay={index * 70}>
                <article className="grid gap-6 rounded-xl border border-ink-200 bg-white p-6 transition-shadow duration-300 hover:shadow-soft sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8 md:p-8">
                  {/*
                    Photographs are circular, face-centred crops. Where none has
                    been supplied the monogram keeps the row's rhythm intact
                    rather than leaving a gap.
                  */}
                  {person.image ? (
                    <Image
                      src={person.image.src}
                      alt={person.image.alt}
                      width={600}
                      height={600}
                      loading="lazy"
                      className="size-24 shrink-0 md:size-32 rounded-full object-cover ring-[3px] ring-brand-500 ring-offset-4 ring-offset-white shadow-[0_0_0_1px_var(--brand-200),0_8px_24px_-8px_var(--brand-a40)] transition-shadow duration-300"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="flex size-24 shrink-0 md:size-32 items-center justify-center rounded-full bg-brand-50 ring-[3px] ring-brand-500 ring-offset-4 ring-offset-white shadow-[0_0_0_1px_var(--brand-200),0_8px_24px_-8px_var(--brand-a40)] transition-shadow duration-300"
                    >
                      <span className="font-heading text-2xl font-bold text-brand-400 md:text-3xl">
                        {initials(person.name)}
                      </span>
                    </span>
                  )}

                  <div>
                    <h3 className="font-heading text-xl font-bold text-ink-950">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-500">
                      {person.designation}
                      {person.age ? (
                        <span className="ml-2 font-normal text-ink-500">
                          Aged {person.age} years
                        </span>
                      ) : null}
                    </p>

                    {person.qualifications?.length ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {person.qualifications.map((qualification) => (
                          <li
                            key={qualification}
                            className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                          >
                            {qualification}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {person.bio.length ? (
                      <div className="mt-4 space-y-3">
                        {person.bio.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-[0.95rem] leading-relaxed text-ink-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 rounded-lg border border-dashed border-ink-300 bg-ink-50 px-4 py-3 text-sm text-ink-500">
                        Profile to be provided by Schnell Drone Technologies.
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection className="bg-ink-50" />

      <CtaBand
        title="Want to work with this team?"
        description="Schnell is hiring engineers, drone pilots and geospatial analysts across its operating states."
        primary={{ label: "See open roles", href: routes.careers }}
        secondary={{ label: "Contact us", href: routes.contact }}
      />
    </>
  );
}
