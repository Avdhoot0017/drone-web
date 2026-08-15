import { Breadcrumbs, type Crumb } from "@/components/common/breadcrumbs";
import { Reveal } from "@/components/common/reveal";

/**
 * Shared shell for plain-text legal pages (privacy policy, terms of use).
 *
 * These are placeholders awaiting the client's approved legal copy — the
 * structure is in place so the text can be dropped in without touching layout.
 */
export function LegalPage({
  title,
  updated,
  crumbs,
  sections,
}: {
  title: string;
  updated: string;
  crumbs: Crumb[];
  sections: { heading: string; paragraphs: string[] }[];
}) {
  return (
    <section className="section-y">
      <div className="container-site max-w-3xl">
        <Breadcrumbs crumbs={crumbs} className="mb-8" />

        <Reveal>
          <h1 className="font-heading text-4xl font-bold text-ink-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ink-500">Last updated: {updated}</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 60}>
              <h2 className="font-heading text-xl font-bold text-ink-950">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-base leading-relaxed text-ink-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
