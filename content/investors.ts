import type { DocumentEntry } from "@/types/content";

/**
 * Investor relations content.
 *
 * Every document below is named in the client brief but no PDF has been
 * supplied yet. `href: ""` renders a disabled "document pending" row rather
 * than a broken link — replace with the real file path under
 * `public/documents/` as each PDF arrives.
 */

export const financialDocuments: DocumentEntry[] = [
  {
    title: "Annual Report",
    financialYear: "FY 2022-23",
    category: "Annual Report",
    href: "",
  },
  {
    title: "Directors' Report",
    financialYear: "FY 2023-24",
    category: "Directors' Report",
    href: "",
  },
  {
    title: "Statutory Audit Report",
    financialYear: "FY 2023-24",
    category: "Audit Report",
    href: "",
  },
  {
    title: "Annual Report",
    financialYear: "FY 2024-25",
    category: "Annual Report",
    href: "",
  },
];

export const corporateDocuments: DocumentEntry[] = [
  {
    title: "Memorandum of Association (MOA)",
    category: "Constitutional document",
    href: "",
  },
  {
    title: "Articles of Association (AOA)",
    category: "Constitutional document",
    href: "",
  },
  {
    title: "Key Managerial Personnel",
    category: "Disclosure",
    href: "",
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

export const investorNotice =
  "Financial statements, disclosures and governance documents are published here as they are approved. Documents marked as pending are being prepared for upload.";
