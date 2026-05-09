export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  layout: "triple" | "stacked";
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "zayzom",
    title: "Zayzom — Saudi Market Intelligence",
    description:
      "An AI-powered financial analysis platform for the TASI market. Lens-based perspectives, company deep-dives, and an embedded analyst that answers questions in seconds.",
    tags: ["AI", "Fintech", "Next.js", "Data"],
    href: "#",
    layout: "triple",
    images: [
      { src: "/images/zayzom-lens.jpg", alt: "Zayzom Lens — pick a stock, choose a perspective" },
      { src: "/images/zayzom-companies.jpg.webp", alt: "Zayzom companies grid for the Saudi market" },
      { src: "/images/zayzom-detail.jpg.webp", alt: "Zayzom company detail with embedded AI analyst" },
    ],
  },
  {
    slug: "ai-maturity",
    title: "Data & AI Maturity Diagnostic",
    description:
      "A self-assessment that scores a company’s AI readiness across nine dimensions and returns a personalised report — use cases, automation pathways, agent strategies, training.",
    tags: ["AI", "Product", "Assessment"],
    href: "#",
    layout: "stacked",
    images: [
      { src: "/images/ai-diagnostic.jpg.webp", alt: "Data & AI Maturity Diagnostic — sectioned self-assessment flow" },
      { src: "/images/n8n-workflow.jpg.webp", alt: "n8n agent workflow for the Pitch Deck Analyzer" },
    ],
  },
];
