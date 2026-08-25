import type { Metadata } from "next";
import { ArrowRight, Briefcase, Compass, GraduationCap, GraduationCap as Cap, Map, MapPin, Wrench } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { CareerForm } from "@/components/forms/career-form";
import { hiringSteps, jobOpenings } from "@/content/careers";
import { routes } from "@/lib/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  jobPostingJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const crumbs = [{ name: "Careers", href: routes.careers }];

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Current openings at Schnell Drone Technologies — UAV service engineers, GIS and photogrammetry, Agri Tech business development, UAV R&D, HR and UAV pilots, in Pune and across India.",
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

      {/* One JobPosting per opening — what makes these eligible for the jobs
          experience in Google Search. */}
      {jobOpenings.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            jobPostingJsonLd({
              id: job.id,
              title: job.title,
              description: [
                job.summary,
                `Qualification: ${job.qualification}`,
                `Key skills: ${job.keySkills.join(", ")}.`,
                job.experience ? `Experience: ${job.experience}` : undefined,
              ]
                .filter(Boolean)
                .join(" "),
              location: job.location,
              employmentType: job.employmentType,
              postedOn: job.postedOn,
            })
          )}
        />
      ))}

      <PageHero
        eyebrow="Careers"
        title="Careers at Schnell Drone Technologies"
        description="Join us and be part of an innovative team shaping the future of drone technology, UAV systems, GIS, photogrammetry, Agri Tech, R&amp;D and advanced engineering."
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

      {/* ------------------------------------------------------------------ */}
      {/* Current openings                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section id="openings" className="section-y scroll-mt-28 bg-ink-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Now hiring"
            title="Current job openings"
            intro="Explore our current openings and find the opportunity that matches your skills and career aspirations."
            className="mb-12 md:mb-14"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {jobOpenings.map((job, index) => (
              <Reveal key={job.id} delay={index * 70}>
                <article
                  id={job.id}
                  className="flex h-full scroll-mt-28 flex-col rounded-xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift md:p-7"
                >
                  <p className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold tracking-wide text-brand-700 uppercase">
                    <Briefcase className="size-3.5" aria-hidden />
                    {job.department}
                  </p>

                  <h3 className="mt-4 font-heading text-xl leading-snug font-bold text-ink-950">
                    {job.title}
                  </h3>

                  {/* Location, and experience where the brief states one. */}
                  <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-ink-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4 shrink-0 text-brand-500" aria-hidden />
                      {job.location}
                    </span>
                    {job.experience ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Cap className="size-4 shrink-0 text-brand-500" aria-hidden />
                        {job.experience}
                      </span>
                    ) : null}
                  </p>

                  {job.summary ? (
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-600">
                      {job.summary}
                    </p>
                  ) : null}

                  <dl className="mt-5 space-y-4 border-t border-ink-200 pt-5">
                    <div>
                      <dt className="text-xs font-bold tracking-wide text-ink-500 uppercase">
                        Qualification
                      </dt>
                      <dd className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-600">
                        {job.qualification}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold tracking-wide text-ink-500 uppercase">
                        Key skills
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {job.keySkills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  {/* mt-auto pins the action to the card foot, so it lines up
                      across a row whatever the description length. */}
                  <a
                    href="#apply"
                    className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-500"
                  >
                    Apply for this role
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Hiring process                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading
            eyebrow="What to expect"
            title="Our hiring process"
            intro="Six stages between applying and your first project."
            className="mb-12 md:mb-16"
          />

          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {hiringSteps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 90} className="relative">
                {/*
                  Connector into the next stage. Drawn only where the steps sit
                  on one row; at narrower widths they wrap and a horizontal rule
                  would point at nothing. Suppressed on the last item of each
                  three-column row for the same reason.
                */}
                {index < hiringSteps.length - 1 && (index + 1) % 3 !== 0 ? (
                  <span
                    aria-hidden
                    className="absolute top-5 left-12 -right-8 hidden h-px bg-gradient-to-r from-brand-300 to-ink-200 lg:block"
                  />
                ) : null}

                <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-heading text-sm font-bold text-brand-600">
                  {index + 1}
                </span>

                <h3 className="mt-5 font-heading text-lg leading-snug font-bold text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Application form ------------------------------------------------- */}
      <section id="apply" className="section-y scroll-mt-28 bg-ink-50">
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
