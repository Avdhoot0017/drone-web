import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MediaFrame } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { MediaCoverage } from "@/components/sections/media-coverage";
import { TeamSection } from "@/components/sections/team-section";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatCounter } from "@/components/common/stat-counter";
import { aboutParagraphs, companyStats, milestones, visionStatement } from "@/content/company";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const crumbs = [{ name: "About Us", href: routes.about }];

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Schnell Drone Technologies Ltd. — founded in 2010 as a GIS and photogrammetry venture, now one of India's leading Drone-as-a-Service companies, operating across coastlines, valleys, forests and glaciers.",
  path: routes.about,
  image: "/images/stock/about-drone-mountains.jpg",
  keywords: [
    "Schnell Drone Technologies about",
    "drone company Pune",
    "DaaS company India",
    "drone company history India",
  ],
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="About Schnell"
        title="Fifteen years of geospatial expertise, flown in the field"
        description="From an entrepreneurial GIS venture in 2010 to one of India's leading Drone-as-a-Service companies, operating across multiple states."
        image={{
          src: "/images/stock/about-drone-mountains.jpg",
          alt: "Survey drone flying over farmland with a mountain range behind",
        }}
        crumbs={crumbs}
      />

      {/* Company story ---------------------------------------------------- */}
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built on a foundation of GIS and photogrammetry"
              className="mb-8"
            />
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * 60}>
                  <p className="text-base leading-relaxed text-ink-600 md:text-[1.0625rem]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left" className="lg:pt-24">
            <MediaFrame
              image={{
                src: "/images/doc/himalaya-spraying-field.jpeg",
                alt: "Himalaya spraying drone hovering over a pomegranate orchard",
              }}
              aspect="3/2"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
            <MediaFrame
              image={{
                src: "/images/stock/about-precision-ag.jpg",
                alt: "Drones assisting precision agriculture across rural farmland",
              }}
              aspect="3/2"
              className="mt-4"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats ------------------------------------------------------------ */}
      <section className="border-y border-ink-200 bg-ink-50" aria-label="Company figures">
        <div className="container-site grid gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-4 md:py-16">
          {companyStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Vision                                                              */}
      {/* An editorial pull-quote rather than an icon badge — the statement    */}
      {/* is the content, so the type carries it and the red rule supplies the */}
      {/* brand note. The eyebrow matches every other section on the site.     */}
      {/* ------------------------------------------------------------------ */}
      <section id="vision" className="section-y bg-brand-50">
        <div className="container-site">
          <Reveal className="max-w-4xl">
            <h2 className="flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] text-brand-500 uppercase">
              <span className="h-px w-8 bg-brand-500" aria-hidden />
              Our vision
            </h2>

            <blockquote className="mt-8 border-l-4 border-brand-500 pl-6 md:pl-10">
              <p className="font-heading text-2xl leading-[1.28] font-bold text-balance text-ink-950 md:text-3xl lg:text-[2.15rem]">
                {visionStatement}
              </p>

              <footer className="mt-7 text-sm font-semibold text-ink-500">
                &mdash; {siteConfig.legalName}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Milestones ------------------------------------------------------- */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Milestones"
            title="The record behind the reputation"
            className="mb-12 md:mb-16"
          />

          <ol className="relative border-l border-ink-200 pl-8 md:pl-12">
            {milestones.map((milestone, index) => (
              <Reveal as="li" key={milestone.year} delay={index * 80} className="relative pb-12 last:pb-0">
                {/* Timeline node */}
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[2.30rem] size-3 rounded-full border-2 border-white bg-brand-500 ring-4 ring-brand-100 md:-left-[3.30rem]"
                />
                <p className="font-heading text-sm font-bold tracking-wide text-brand-500">
                  {milestone.year}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-ink-950">
                  {milestone.title}
                </h3>
                <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-ink-600">
                  {milestone.description}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <Link
              href={routes.management}
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-500"
            >
              Meet the leadership team
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <TeamSection className="bg-ink-50" />

      <MediaCoverage />

      <CtaBand />
    </>
  );
}
