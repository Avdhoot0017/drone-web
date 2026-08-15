import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Cpu, Radar, Wrench } from "lucide-react";

import { MediaFrame } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatCounter } from "@/components/common/stat-counter";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceCards } from "@/components/sections/service-cards";
import { Testimonials } from "@/components/sections/testimonials";
import { aboutParagraphs, companyStats } from "@/content/company";
import { himalaya } from "@/content/products";
import { services } from "@/content/services";
import { softwareProducts } from "@/content/software";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.legalName} | Drone-as-a-Service & Agri Spraying Drones in India`,
  description: siteConfig.description,
  path: routes.home,
});

/**
 * Differentiators shown directly under the hero.
 *
 * Four plain cards set against a sketched hexacopter. Each pillar closes with
 * concrete proof drawn from the client brief, so the claim is backed rather
 * than asserted.
 */
const pillars = [
  {
    icon: Radar,
    title: "Coastal surveillance at 12 NM",
    description:
      "The only Indian drone company operating in coastal waters up to 12 nautical miles, with day and night-thermal payloads.",
    href: routes.daasCoastalSurveillance,
    proof: ["9 fixed-wing UAVs", "Day & night-thermal"],
  },
  {
    icon: Award,
    title: "DGCA type certified platform",
    description:
      "Himalaya, our indigenous hexacopter, is type certified for agrochemical spraying and covers about 6 acres an hour.",
    href: routes.himalaya,
    proof: ["10 L tank", "6 acres per hour"],
  },
  {
    icon: Cpu,
    title: "Geospatial depth since 2010",
    description:
      "Fifteen years of GIS and photogrammetry underpin every survey — ORI, point clouds, DEM, DTM, DSM and contours in house.",
    href: routes.daasLandMapping,
    proof: ["50,000+ acres", "500+ villages"],
  },
  {
    icon: Wrench,
    title: "Fleet support that keeps flying",
    description:
      "Preventive, corrective and predictive maintenance for quadcopters, hexacopters and fixed-wing drones.",
    href: routes.repairMaintenance,
    proof: ["Preventive", "Corrective", "Predictive"],
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* ------------------------------------------------------------------ */}
      {/* Proof points                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-ink-200 bg-white" aria-label="Key figures">
        <div className="container-site grid gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-4 md:py-16">
          {companyStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <StatCounter {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Differentiators                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden section-y">
        {/* Hand-drawn hexacopter, sitting behind the heading's right-hand space. */}
        <Image
          src="/images/pngs/drone-sketch.png"
          alt=""
          aria-hidden
          width={876}
          height={492}
          loading="lazy"
          // Pulled in from the right edge so the airframe sits over the fourth
          // card, and dropped low enough that its legs disappear behind the
          // top of the card row.
          //
          // `drone-highlight` (globals.css) carries the hover lift and glow. It
          // stays at -z-10 behind the cards and heading, so accepting pointer
          // events here cannot steal a click from either.
          className="drone-highlight absolute top-6 right-32 -z-10 hidden w-[42%] max-w-xl select-none lg:block xl:top-8 xl:right-40 xl:w-[40%]"
        />

        {/*
          The container spans the full width and would otherwise sit on top of
          the sketch, swallowing its hover. Making the wrapper click-through and
          re-enabling pointer events on the two content blocks leaves the empty
          space around them — where the drone sits — reachable.
        */}
        <div className="container-site pointer-events-none relative">
          {/* Constrained so the heading never runs beneath the illustration. */}
          <SectionHeading
            eyebrow="Why Schnell"
            title="Missions that need experience, not just equipment"
            intro="Coastlines, valleys, forests and glaciers — Schnell has flown them. That operational record is what government agencies, industry and the agriculture sector buy."
            className="pointer-events-auto mb-12 max-w-xl md:mb-16 lg:max-w-2xl"
          />

          <div className="pointer-events-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-ink-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <div>
                    <span className="mb-6 inline-flex size-10 items-center justify-center rounded-xl bg-brand-matte text-white shadow-sm">
                      <pillar.icon className="size-5" aria-hidden />
                    </span>

                    <h3 className="font-heading text-lg leading-snug font-bold text-ink-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    {/* Proof points — the evidence behind the claim above. */}
                    <ul className="flex flex-wrap gap-2">
                      {pillar.proof.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors duration-200 group-hover:text-brand-matte-hover">
                      Learn more
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Services                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-y bg-ink-50">
        <div className="container-site">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <SectionHeading
              eyebrow="Drone-as-a-Service"
              title="Five verticals, one operating team"
              intro="Government departments and enterprises subscribe to the capability — drones, trained pilots, analytics, maintenance and cloud infrastructure — without buying any of it."
              className="mb-0"
            />
            <Reveal delay={120}>
              <Link
                href={routes.daas}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500"
              >
                All services
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>

          <ServiceCards services={services} />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Himalaya product feature                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-y">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-brand-700 uppercase">
              <Award className="size-3.5" aria-hidden />
              DGCA Type Certified
            </p>
            <h2 className="font-heading text-3xl leading-tight font-bold text-ink-950 md:text-4xl">
              Himalaya — our indigenous agriculture spraying drone
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600 md:text-[1.0625rem]">
              {himalaya.summary}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink-200 pt-8 sm:grid-cols-4">
              {himalaya.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-heading text-2xl font-bold text-brand-500">
                    {stat.value}
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={himalaya.href}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-matte px-7 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-matte-hover active:translate-y-px"
              >
                Full specifications
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href={routes.distributor}
                className="inline-flex h-11 items-center rounded-full border border-ink-200 px-7 text-sm font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-500 hover:text-brand-500"
              >
                Become a distributor
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left">
            <MediaFrame
              image={himalaya.hero}
              aspect="4/3"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* About teaser                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="surface-brand-faint section-y">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="lg:order-2">
            <SectionHeading
              eyebrow="About Schnell"
              title="Built on geospatial expertise, proven in the hardest terrain"
              className="mb-6"
            />
            <div className="space-y-4">
              {aboutParagraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-ink-600">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href={routes.about}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-500"
            >
              Read our story
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>

          <Reveal direction="left" className="lg:order-1">
            <MediaFrame
              image={{
                src: "/images/stock/about-drone-mountains.jpg",
                alt: "Survey drone flying over farmland with a mountain range in the distance",
              }}
              aspect="4/3"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Software                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Software"
            title="GIS, photogrammetry and geotechnical software"
            intro="Alongside its services, Schnell distributes and supports the software its own survey teams rely on — including as exclusive India partner of Blue Marble Geographics."
            className="mb-12 md:mb-14"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {softwareProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70}>
                <Link
                  href={product.href}
                  className="group flex h-full flex-col justify-between rounded-xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                      {product.vendor}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-ink-950 transition-colors duration-200 group-hover:text-brand-500">
                      {product.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                      {product.summary}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-5 size-4 text-brand-500 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand />
    </>
  );
}
