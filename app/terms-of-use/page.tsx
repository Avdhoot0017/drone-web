import type { Metadata } from "next";

import { LegalPage } from "@/components/common/legal-page";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const crumbs = [{ name: "Terms of Use", href: routes.terms }];

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms governing the use of the ${siteConfig.legalName} website.`,
  path: routes.terms,
});

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="Pending client approval"
      crumbs={crumbs}
      sections={[
        {
          heading: "Acceptance of terms",
          paragraphs: [
            `By accessing this website you agree to these terms of use. This placeholder text is to be replaced with ${siteConfig.legalName}'s approved terms before the site goes live.`,
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on this website, including text, imagery, specifications and trademarks, is the property of the company or its licensors and may not be reproduced without written permission.",
          ],
        },
        {
          heading: "Accuracy of information",
          paragraphs: [
            "Product specifications, service descriptions and operational figures are provided for general information and may be revised. They do not form part of any contract unless expressly agreed in writing.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms may be directed to ${siteConfig.contact.general.email}.`,
          ],
        },
      ]}
    />
  );
}
