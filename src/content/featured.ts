export type FeaturedProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  status: "live" | "in-progress" | "paused" | "concept";
  videoUrl?: string;
  posterImage?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const featuredProject: FeaturedProject = {
  slug: "talentforge-ai",
  name: "TalentForge AI",
  tagline: "AI career intelligence for African job seekers",
  description:
    "A live platform that helps African graduates match with roles, sharpen applications, and understand what employers actually want — built on a RAG pipeline tuned to regional hiring patterns.",
  bullets: [
    "Live with real users, actively iterated",
    "RAG pipeline tuned to African hiring language",
    "Full-stack: Next.js, Python, Postgres, vector search",
  ],
  stack: ["Next.js", "Python", "Postgres", "Vector DB", "RAG"],
  status: "live",
  videoUrl: "",
  posterImage: "/talentforge-poster.jpg",
  liveUrl: "https://career-intelligence-3.onrender.com",
  repoUrl: "https://github.com/Fadel333/career-intelligence",
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "in-progress" | "paused" | "concept";
  year: string;
  stack: string[];
  href?: string;
  private?: boolean;
};

export const shippedProjects: Project[] = [
  {
    slug: "trading-bot-fawzi",
    name: "Trading Bot",
    tagline:
      "Client-commissioned Telegram bot with AI-driven signals and Postgres-backed trade history.",
    status: "in-progress",
    year: "2025",
    stack: ["Flask", "Telegram API", "Postgres", "AI"],
    private: true,
  },
];

export type LabProject = {
  slug: string;
  name: string;
  tagline: string;
  status: "in-progress" | "paused" | "concept";
  stack: string[];
};

export const labProjects: LabProject[] = [
  {
    slug: "my-vote-app",
    name: "My Vote App",
    tagline:
      "Verified digital elections platform, built for and pilot-tested at ATU SRC elections.",
    status: "paused",
    stack: ["Next.js", "Postgres", "Auth"],
  },
  {
    slug: "qiyam",
    name: "Qiyam",
    tagline:
      "Android prayer habit app — streaks, reminders, and a calm interface built for consistency.",
    status: "concept",
    stack: ["Android", "Kotlin"],
  },
  {
    slug: "queen-latifa",
    name: "Queen Latifa",
    tagline:
      "Ghana-based e-commerce marketplace — product listings, checkout, and seller tools.",
    status: "concept",
    stack: ["Next.js", "Node", "Postgres"],
  },
  {
    slug: "momo-guard",
    name: "MoMo Guard",
    tagline:
      "Transaction watchdog for mobile money — flags anomalies and notifies users in real time.",
    status: "concept",
    stack: ["Python", "Webhooks"],
  },
  {
    slug: "geo-attend",
    name: "GeoAttend",
    tagline:
      "Proximity-based attendance tracking using local device mesh. No internet required.",
    status: "in-progress",
    stack: ["Android", "Bluetooth"],
  },
  {
    slug: "ogsp",
    name: "OGSP",
    tagline: "Python tooling — utility scripts and experiments.",
    status: "in-progress",
    stack: ["Python"],
  },
  {
    slug: "security-alert-saas",
    name: "Security Alert SaaS",
    tagline:
      "Monitoring and alerting for small businesses without a dedicated security team.",
    status: "concept",
    stack: ["Next.js", "Node"],
  },
  {
    slug: "dj-portfolio",
    name: "DJ Portfolio",
    tagline:
      "One-page site with audio-reactive visuals for a Ghana-based DJ.",
    status: "in-progress",
    stack: ["Next.js", "Web Audio"],
  },
];