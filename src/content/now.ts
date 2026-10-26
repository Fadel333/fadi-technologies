export type NowEntry = {
  date: string;         // ISO format: "2026-09-12"
  title: string;
  body: string[];       // each string is a paragraph
  tags?: string[];      // e.g. ["shipped", "learning", "reading"]
};

export const nowEntries: NowEntry[] = [
  {
    date: "2026-10-25", // Updated date
    title: "Shipped Klik Haus — live photography platform",
    body: [
      "Just pushed Klik Haus to production. It's a full-stack photography platform built for a Ghana-based photographer, focused on cinematic, unposed event coverage.",
      "Built with Next.js and Tailwind, deployed on Vercel. The focus was on editorial design, fast load times, and a clean booking inquiry flow.",
    ],
    tags: ["shipped", "klik-haus"],
  },
  {
    date: "2026-09-12",
    title: "Building FADI Technologies' own site",
    body: [
      "Finally shipped this site. It's been on my list for months — the studio had products but no front door.",
      "Built with Next.js 16, Tailwind v4, and pnpm. The whole thing is deployed on Vercel, one push to update.",
    ],
    tags: ["shipped", "building"],
  },
  {
    date: "2026-09-01",
    title: "TalentForge AI — iteration 4",
    body: [
      "Reworked the RAG pipeline to score results against regional hiring language instead of generic job-description embeddings. Match quality is noticeably better in testing.",
      "Still tuning the prompt for edge cases where the underlying data is thin.",
    ],
    tags: ["talentforge", "ai"],
  },
  {
    date: "2026-08-20",
    title: "Learning: vector databases beyond the basics",
    body: [
      "Went deep on HNSW indexing and hybrid search. The gap between 'works on a demo' and 'works at scale' is almost entirely about index tuning.",
      "Reading through the pgvector docs to see how much I can push Postgres before needing a dedicated vector store.",
    ],
    tags: ["learning"],
  },
];

export const currentFocus = {
  building: "TalentForge AI + Client Projects",
  learning: "Advanced RAG patterns, Postgres internals",
  reading: "Designing Data-Intensive Applications",
  open_to: "Select client work — AI systems, full-stack apps",
};