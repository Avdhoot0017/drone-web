import type { Metadata } from "next";

import { LegalPage } from "@/components/common/legal-page";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const crumbs = [{ name: "Privacy Policy", href: routes.privacy }];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects, uses and protects personal information submitted through this website.`,
  path: routes.privacy,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Pending client approval"
      crumbs={crumbs}
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            `When you submit an enquiry or a job application through this website, ${siteConfig.legalName} collects the details you provide — such as your name, email address, telephone number, organisation, location and the content of your message or résumé.`,
            "This placeholder text is to be replaced with the company's approved privacy policy before the site goes live.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "Information submitted through the enquiry forms is used solely to respond to your enquiry, to assess a job application, or to provide the services you have asked about.",
          ],
        },
        {
          heading: "Data retention and security",
          paragraphs: [
            "Enquiry and application data is retained only for as long as necessary to fulfil the purpose for which it was collected, and is protected by appropriate technical and organisational measures.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `For any question about this policy or about the personal data we hold, write to ${siteConfig.contact.general.email} or call ${siteConfig.contact.general.phone}.`,
          ],
        },
      ]}
    />
  );
}
