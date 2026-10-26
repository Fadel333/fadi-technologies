export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  status: "live" | "in-progress" | "paused" | "concept";
  role: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
  posterImage?: string;
  problem: string[];
  approach: string[];
  outcome: string[];
  metrics?: { value: string; label: string }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "talentforge-ai": {
    slug: "talentforge-ai",
    name: "TalentForge AI",
    tagline: "AI career intelligence for African job seekers",
    year: "2026 – present",
    status: "live",
    role: "Founder & full-stack engineer",
    stack: ["Next.js", "Python", "Postgres", "Vector DB", "RAG"],
    liveUrl: "https://career-intelligence-3.onrender.com",
    repoUrl: "https://github.com/Fadel333/career-intelligence",
    videoUrl: "",
    posterImage: "/talentforge-poster.jpg",
    problem: [
      "African graduates apply to dozens of roles with generic CVs that don't match what regional employers actually ask for. The problem isn't effort — it's feedback. Job seekers rarely learn why an application fails.",
      "Existing career tools are tuned to US and European hiring patterns. They miss the specific language, credentials, and regional expectations that shape hiring across African markets.",
    ],
    approach: [
      "I built a retrieval-augmented generation (RAG) pipeline that indexes regional job descriptions alongside applicant profiles. Instead of generic advice, users get concrete matches and gaps explained in their own context.",
      "The stack is Next.js on the frontend for fast iteration, with a Python service handling embedding, vector search, and LLM orchestration. Postgres backs the relational data; a vector store handles semantic matching.",
      "Every recommendation surfaces its source — the exact job posting or skill signal that produced it — so users can trust the output instead of guessing whether the AI is hallucinating.",
    ],
    outcome: [
      "TalentForge AI is live and in active iteration. Early users have reported clearer feedback on applications and faster role discovery.",
      "The project has become the foundation for how FADI Technologies approaches AI more broadly — RAG where it helps, deterministic code where it doesn't.",
    ],
    metrics: [
      { value: "Live", label: "Status" },
      { value: "RAG", label: "Core tech" },
      { value: "Africa", label: "Market focus" },
    ],
  },

  "trading-bot-fawzi": {
    slug: "trading-bot-fawzi",
    name: "Trading Bot",
    tagline: "Client-commissioned Telegram bot with AI-driven signals",
    year: "2025",
    status: "in-progress",
    role: "Solo engineer (client work)",
    stack: ["Flask", "Telegram API", "Postgres", "AI"],
    videoUrl: "",
    problem: [
      "A client wanted to run a signal-driven trading operation over Telegram but had no infrastructure for it. Existing bots were either black boxes or required constant babysitting.",
    ],
    approach: [
      "Built a Flask service that subscribes to market data, evaluates signals against configurable rules, and pushes trades through Telegram with a consistent interface.",
      "Postgres logs every trade for later analysis. The AI layer scores signals based on historical outcomes.",
    ],
    outcome: [
      "Built and demoed. Hosting is the next step — the code is functional and the client is using it in testing.",
    ],
    metrics: [
      { value: "Client", label: "Type" },
      { value: "Built", label: "Status" },
      { value: "Flask", label: "Core" },
    ],
  },

  "klik-haus": {
    slug: "klik-haus",
    name: "Klik Haus",
    tagline: "Cinematic photography for life's most important days",
    year: "2026",
    status: "live",
    role: "Full-stack Engineer & Designer",
    stack: ["Next.js", "Tailwind", "Vercel"],
    liveUrl: "https://photographer-web-omega.vercel.app/",
    videoUrl: "",
    posterImage: "/klik-haus-poster.jpg",
    problem: [
      "Photographers in Ghana often rely on Instagram or generic template sites to showcase their work. These platforms don't reflect the premium, cinematic, and quiet nature of event photography.",
      "There is no easy way for clients to understand the photographer's approach, browse a curated gallery, and inquire about bookings in one seamless, elegant experience.",
    ],
    approach: [
      "Built a high-end, editorial-style photography platform using Next.js and Tailwind CSS. The design prioritizes large, high-quality images and smooth transitions, letting the photography speak for itself.",
      "Implemented a clean, user-friendly booking inquiry flow. The site is deployed on Vercel with a focus on fast load times and mobile responsiveness, ensuring it looks perfect on any device.",
      "The copy and structure are designed to tell a story — from the quiet, observational approach to the 'three things we never compromise on' — building trust with potential clients before they even reach out.",
    ],
    outcome: [
      "Klik Haus is live and serving as a professional portfolio for the photographer. The platform successfully handles inquiries and showcases the photographer's best work.",
      "It serves as a testament to the ability to build fast, beautiful, and functional front-end platforms tailored to specific creative industries.",
    ],
    metrics: [
      { value: "Live", label: "Status" },
      { value: "Next.js", label: "Framework" },
      { value: "Editorial", label: "Design Style" },
    ],
  },
};