import type { Metadata } from "next";

import { ContentBlocks } from "@/components/common/content-blocks";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { maintenanceBlocks } from "@/content/maintenance";
import { routes } from "@/lib/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  jsonLdScript,
  serviceJsonLd,
} from "@/lib/seo";

const crumbs = [{ name: "Drone Repair & Maintenance", href: routes.repairMaintenance }];

export const metadata: Metadata = buildMetadata({
  title: "Drone Repair & Maintenance Services",
  description:
    "Preventive, corrective and predictive drone maintenance from Schnell's engineering team — servicing quadcopters, hexacopters and fixed-wing drones across propulsion, avionics, payload and power systems.",
  path: routes.repairMaintenance,
  image: "/images/stock/repair-technician-hands.jpg",
  keywords: [
    "drone repair service India",
    "drone maintenance company",
    "UAV maintenance India",
    "drone motor ESC repair",
    "gimbal camera repair drone",
  ],
});

export default function RepairMaintenancePage() {
  const faqBlock = maintenanceBlocks.find((block) => block.type === "faq");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceJsonLd({
            name: "Drone Repair & Maintenance",
            description:
              "Preventive, corrective and predictive maintenance for quadcopters, hexacopters and fixed-wing drones.",
            path: routes.repairMaintenance,
            image: "/images/stock/repair-technician-hands.jpg",
            serviceType: "Drone maintenance and repair",
          })
        )}
      />
      {faqBlock?.type === "faq" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqBlock.faqs))}
        />
      ) : null}

      <PageHero
        eyebrow="Fleet support"
        title="Drone Repair & Maintenance"
        description="Schnell's engineers service quadcopters, hexacopters and fixed-wing drones — keeping fleets airworthy, available and safe."
        image={{
          src: "/images/stock/repair-technician-hands.jpg",
          alt: "Technician repairing a drone on a workshop bench",
        }}
        crumbs={crumbs}
        actions={[{ label: "Book a service", href: routes.contact }]}
      />

      <ContentBlocks blocks={maintenanceBlocks} />

      <CtaBand
        title="Get your fleet back in the air"
        description="Tell us the platform, the fault and the fleet size, and we will come back with a service plan and turnaround time."
        primary={{ label: "Request maintenance support", href: routes.contact }}
      />
    </>
  );
}
