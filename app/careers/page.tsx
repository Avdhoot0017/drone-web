import type { Metadata } from "next";
import { Compass, GraduationCap, Map, Wrench } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { CareerForm } from "@/components/forms/career-form";
import { routes } from "@/lib/routes";
import { breadcrumbJsonLd, buildMetadata, jsonLdScript } from "@/lib/seo";

const crumbs = [{ name: "Careers", href: routes.careers }];

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Schnell Drone Technologies — drone pilots, GIS and geospatial engineers, R&D and maintenance engineers, and operations roles across our Indian operating states.",
  path: routes.careers,
  keywords: [
    "drone pilot jobs India",
    "GIS engineer jobs Pune",
    "drone company careers India",
    "UAV jobs Maharashtra",
  ],
});

/** Disciplines Schnell hires into, from the capability described in the brief. */
const disciplines = [
  {
    icon: Compass,
    title: "Drone pilots & field operations",
    description:
      "Fly coastal surveillance, agricultural spraying and survey missions across valleys, forests, coastlines and glaciers.",
  },
  {
    icon: Map,
    title: "GIS & geospatial analysts",
    description:
      "Process drone data into ORI, point clouds, DEM, DTM, DSM and contours, and turn it into decisions for clients.",
  },
  {
    icon: Wrench,
    title: "R&D and maintenance engineers",
    description:
      "Develop and support indigenous drone platforms — airframes, avionics, payloads and the maintenance programme behind them.",
  },
  {
    icon: GraduationCap,
    title: "Sales, marketing & business strategy",
    description:
      "Take type-certified platforms and DaaS offerings to government departments, cooperatives and enterprises across India.",
  },
];

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHero
        eyebrow="Careers"
        title="Fly the missions others cannot"
        description="Schnell's teams operate where the terrain is hardest and the stakes are highest. If that appeals, we would like to hear from you."
        image={{
          src: "/images/stock/agri-two-farmers.jpg",
          alt: "Field team preparing a drone for a mission",
        }}
        crumbs={crumbs}
      />

      {/* Disciplines ------------------------------------------------------ */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="Where you'd fit"
            title="Disciplines we hire into"
            className="mb-12 md:mb-14"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <Reveal key={discipline.title} delay={index * 80}>
                <article className="h-full rounded-xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                  <span className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                    <discipline.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base leading-snug font-bold text-ink-950">
                    {discipline.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    {discipline.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form ------------------------------------------------- */}
      <section className="section-y bg-ink-50">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Send us your application"
              intro="Fill in the short form and attach your résumé. We review every application and will be in touch if there is a fit."
              className="mb-0"
            />
            <p className="mt-8 rounded-xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-600">
              Applications are reviewed on a rolling basis. If you do not see a
              specific role advertised, apply anyway and tell us what you would
              like to do — Schnell is expanding across multiple states.
            </p>
          </div>

          <CareerForm />
        </div>
      </section>
    </>
  );
}
