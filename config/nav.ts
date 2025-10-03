export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string; image?: string; description?: string }>;
};

export const navConfig: NavItem[] = [
  {
    label: "Why orca?",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Corporate Social Responsibility", href: "/responsibility" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Freight Audit", href: "/services/freight-audit", image: "/block-bg.png", description: "Eliminate overspending with technology‑assisted auditing" },
      { label: "Freight Payment", href: "/services/freight-payment", image: "/block-bg.png", description: "Automate freight payables without losing control" },
      { label: "Freight Claims Processing", href: "/services/freight-claims-processing", image: "/block-bg.png", description: "Manage claims at speed with real‑time status" },
      { label: "Freight Rating", href: "/services/freight-rating", image: "/block-bg.png", description: "Compare carriers and modes in real time" },
      { label: "Freight Invoice Management", href: "/services/freight-invoice-management", image: "/block-bg.png", description: "Centralize, standardize, and accelerate" },
      { label: "Freight Accounting", href: "/services/freight-accounting", image: "/block-bg.png", description: "Generate accurate accruals and GL coding automatically" },
      { label: "Supply Chain Analytics", href: "/services/supply-chain-analytics", image: "/block-bg.png", description: "Real‑time answers from carrier scorecards to SKU costs" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Articles", href: "/blog" },
      { label: "Videos", href: "/media" },
      { label: "Carbon Calculator", href: "/carbon-calculator" },
    ],
  },
  { label: "FAQ", href: "/#faq" },
];


