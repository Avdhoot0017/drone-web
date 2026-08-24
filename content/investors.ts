import type { DocumentEntry } from "@/types/content";

/**
 * Investor relations content.
 *
 * Documents are self-hosted under `public/documents/` rather than linked to a
 * third-party drive, so the URLs stay stable and downloads do not depend on
 * anyone's sharing settings. `href: ""` renders a disabled "pending" row rather
 * than a broken link.
 */

export const financialDocuments: DocumentEntry[] = [
  {
    title: "Annual Audit Report",
    financialYear: "FY 2024-25",
    category: "Audit Report",
    href: "/documents/investors/annual-audit-report-fy-2024-25.pdf",
    fileSize: "PDF · 12.6 MB",
  },
  {
    title: "Annual Audit Report",
    financialYear: "FY 2023-24",
    category: "Audit Report",
    href: "/documents/investors/annual-audit-report-fy-2023-24.pdf",
    fileSize: "PDF · 57.5 MB",
  },
  {
    title: "Director's Report",
    financialYear: "FY 2023-24",
    category: "Directors' Report",
    href: "/documents/investors/directors-report-fy-2023-24.pdf",
    fileSize: "PDF · 1.3 MB",
  },
  {
    title: "Annual Audit Report",
    financialYear: "FY 2022-23",
    category: "Audit Report",
    href: "/documents/investors/annual-audit-report-fy-2022-23.pdf",
    fileSize: "PDF · 17.6 MB",
  },
];

export const corporateDocuments: DocumentEntry[] = [
  {
    title: "Memorandum of Association (MOA)",
    category: "Constitutional document",
    href: "/documents/officials/moa-schnell-drone-technologies-limited.pdf",
    fileSize: "PDF · 1.7 MB",
  },
  {
    title: "Articles of Association (AOA)",
    category: "Constitutional document",
    href: "/documents/officials/aoa-schnell-drone-technologies-limited.pdf",
    fileSize: "PDF · 18.9 MB",
  },
];

/**
 * Board committees. Membership is not supplied in the client brief and is
 * intentionally left empty until the company secretary provides it.
 */
export const boardCommittees: { name: string; purpose: string; members: string[] }[] = [
  {
    name: "Audit Committee",
    purpose:
      "Oversees financial reporting, internal controls, the internal audit function and the statutory audit process.",
    members: [],
  },
  {
    name: "Nomination & Remuneration Committee",
    purpose:
      "Recommends board appointments, evaluates director performance and frames remuneration policy.",
    members: [],
  },
  {
    name: "Stakeholder Relationship Committee",
    purpose:
      "Reviews investor grievances and oversees resolution of shareholder complaints.",
    members: [],
  },
];
