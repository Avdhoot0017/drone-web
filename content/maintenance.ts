import type { ContentBlock } from "@/types/content";

/** Drone repair & maintenance page content, from the client document. */

export const maintenanceIntro =
  "Drone repair and maintenance services are essential for ensuring safe, efficient and reliable drone operations. Schnell Drone Technologies has a team of skilled engineers who can repair and maintain quadcopters, hexacopters and fixed-wing drones.";

export const maintenanceBlocks: ContentBlock[] = [
  {
    id: "overview",
    type: "prose",
    heading: "A structured maintenance programme protects the investment",
    paragraphs: [
      maintenanceIntro,
      "Regular inspections, preventive maintenance, timely repairs and software updates help maximise drone performance, reduce downtime and extend equipment life.",
      "Whether the fleet is used in agriculture, surveying, inspections, logistics or public safety, a structured maintenance programme improves operational efficiency, reduces the chance of a mishap, and protects the investment made in drone technology.",
    ],
  },

  {
    id: "types",
    type: "cards",
    tone: "muted",
    eyebrow: "Maintenance types",
    heading: "Three levels of maintenance",
    columns: 3,
    numbered: true,
    items: [
      {
        title: "Preventive maintenance",
        description:
          "Scheduled servicing after a specific number of flights to prevent unexpected failures: cleaning and inspection of all components, battery health checks, regular firmware and software updates, and calibration of sensors and navigation systems.",
      },
      {
        title: "Corrective maintenance",
        description:
          "Repair of faults after a malfunction or accident: replacement of damaged components that are beyond repair, followed by full system testing before the drone is returned to service.",
      },
      {
        title: "Predictive maintenance",
        description:
          "Uses flight logs, sensor data and battery analytics to predict component failures, so servicing can be scheduled before a breakdown occurs rather than after.",
      },
    ],
  },

  {
    id: "services",
    type: "bullets",
    eyebrow: "Workshop capability",
    heading: "Most common repair services",
    columns: 3,
    groups: [
      {
        title: "Propulsion",
        items: [
          "Propeller replacement",
          "Motor repair or replacement",
          "Electronic Speed Controller (ESC) repair",
          "Frame and landing gear repair",
        ],
      },
      {
        title: "Avionics",
        items: [
          "Flight controller servicing or replacement",
          "GPS module replacement",
          "IMU and compass calibration",
          "Wiring and connector replacement",
        ],
      },
      {
        title: "Payload & power",
        items: [
          "Camera and gimbal repair",
          "Battery testing and replacement",
          "Firmware installation and upgrades",
        ],
      },
    ],
  },

  {
    id: "gallery",
    type: "gallery",
    tone: "muted",
    heading: "Inside the workshop",
    intro:
      "Workshop photography pending from Schnell; the images below are placeholders.",
    columns: 4,
    images: [
      {
        src: "/images/stock/repair-technician-hands.jpg",
        alt: "Technician repairing a drone on a workbench",
        placeholder: true,
      },
      {
        src: "/images/stock/repair-components.jpg",
        alt: "Disassembled drone electronic components laid out on a workbench",
        placeholder: true,
      },
      {
        src: "/images/stock/repair-soldering.jpg",
        alt: "Engineer soldering a circuit board during a drone repair",
        placeholder: true,
      },
      {
        src: "/images/stock/repair-assembly-tools.jpg",
        alt: "Drone being assembled with repair tools arranged alongside",
        placeholder: true,
      },
    ],
  },

  {
    id: "faq",
    type: "faq",
    heading: "Maintenance questions",
    faqs: [
      {
        question: "Which drone types can Schnell service?",
        answer:
          "Schnell's engineers service quadcopters, hexacopters and fixed-wing drones, covering propulsion, avionics, payload and power systems.",
      },
      {
        question: "How often should a drone be serviced?",
        answer:
          "Preventive maintenance is scheduled after a specific number of flights rather than on a calendar basis, so servicing tracks actual usage. Predictive maintenance then uses flight logs, sensor data and battery analytics to bring a service forward if the data suggests a component is degrading.",
      },
      {
        question: "Is the drone tested before it returns to service?",
        answer:
          "Yes. After any corrective repair the full system is tested before the drone is released back into operation.",
      },
    ],
  },
];
