import { Download, FileText, Lock } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import type { DocumentEntry } from "@/types/content";

/**
 * List of downloadable investor documents.
 *
 * A document with no `href` renders as a disabled row labelled "pending"
 * rather than a link that 404s — investors get an honest status, and no broken
 * link is exposed to crawlers.
 */
export function DocumentList({ documents }: { documents: DocumentEntry[] }) {
  return (
    <ul className="divide-y divide-ink-200 overflow-hidden rounded-xl border border-ink-200 bg-white">
      {documents.map((document, index) => {
        const available = Boolean(document.href);

        const inner = (
          <>
            <span
              className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${
                available ? "bg-brand-50 text-brand-500" : "bg-ink-100 text-ink-300"
              }`}
            >
              {available ? (
                <FileText className="size-5" aria-hidden />
              ) : (
                <Lock className="size-4" aria-hidden />
              )}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block font-heading text-[0.95rem] font-bold text-ink-950">
                {document.title}
                {document.financialYear ? (
                  <span className="ml-2 font-sans text-sm font-normal text-ink-500">
                    {document.financialYear}
                  </span>
                ) : null}
              </span>
              <span className="mt-0.5 block text-xs text-ink-500">{document.category}</span>
            </span>

            {available ? (
              <Download
                className="size-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden
              />
            ) : (
              <span className="shrink-0 rounded-full bg-ink-100 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-ink-500 uppercase">
                Pending
              </span>
            )}
          </>
        );

        return (
          <Reveal as="li" key={`${document.title}-${document.financialYear ?? index}`} delay={index * 60}>
            {available ? (
              <a
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-brand-50"
              >
                {inner}
              </a>
            ) : (
              <div className="flex items-center gap-4 px-5 py-4 opacity-75">{inner}</div>
            )}
          </Reveal>
        );
      })}
    </ul>
  );
}
