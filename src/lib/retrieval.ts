import { featuredProject, shippedProjects, labProjects } from "@/content/featured";
import { caseStudies } from "@/content/case-studies";
import { nowEntries, currentFocus } from "@/content/now";

export type Chunk = {
  id: string;
  source: string;      // human-readable origin (e.g. "TalentForge case study")
  text: string;        // the content itself
  keywords: string[];  // pre-tokenized for fast matching
};

// ─────────────────────────────────────────────
// Build the knowledge base once at import time
// ─────────────────────────────────────────────

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s+#.-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

function makeChunk(id: string, source: string, text: string): Chunk {
  return { id, source, text, keywords: tokenize(text) };
}

function buildKnowledgeBase(): Chunk[] {
  const chunks: Chunk[] = [];

  // Flagship project
  chunks.push(
    makeChunk(
      "talentforge-overview",
      "TalentForge AI — flagship project",
      `${featuredProject.name}: ${featuredProject.tagline}. ${featuredProject.description} Key points: ${featuredProject.bullets.join(". ")}. Tech stack: ${featuredProject.stack.join(", ")}. Status: ${featuredProject.status}.`
    )
  );

  // Case studies (full problem/approach/outcome)
  for (const [slug, study] of Object.entries(caseStudies)) {
    chunks.push(
      makeChunk(
        `${slug}-overview`,
        `${study.name} — case study`,
        `${study.name} (${study.year}). ${study.tagline}. Role: ${study.role}. Stack: ${study.stack.join(", ")}. Status: ${study.status}.`
      )
    );
    chunks.push(
      makeChunk(
        `${slug}-problem`,
        `${study.name} — problem`,
        study.problem.join(" ")
      )
    );
    chunks.push(
      makeChunk(
        `${slug}-approach`,
        `${study.name} — approach`,
        study.approach.join(" ")
      )
    );
    chunks.push(
      makeChunk(
        `${slug}-outcome`,
        `${study.name} — outcome`,
        study.outcome.join(" ")
      )
    );
  }

  // Other shipped projects
  for (const p of shippedProjects) {
    chunks.push(
      makeChunk(
        `shipped-${p.slug}`,
        `${p.name} — shipped project`,
        `${p.name} (${p.year}). ${p.tagline}. Stack: ${p.stack.join(", ")}. Status: ${p.status}.`
      )
    );
  }

  // Lab projects
  for (const p of labProjects) {
    chunks.push(
      makeChunk(
        `lab-${p.slug}`,
        `${p.name} — lab project`,
        `${p.name}. ${p.tagline}. Stack: ${p.stack.join(", ")}. Status: ${p.status}.`
      )
    );
  }

  // Now page
  chunks.push(
    makeChunk(
      "now-focus",
      "Now — current focus",
      `Currently building: ${currentFocus.building}. Learning: ${currentFocus.learning}. Reading: ${currentFocus.reading}. Open to: ${currentFocus.open_to}.`
    )
  );

  for (const entry of nowEntries) {
    chunks.push(
      makeChunk(
        `now-${entry.date}-${entry.title}`,
        `Now — ${entry.title}`,
        `${entry.date}: ${entry.title}. ${entry.body.join(" ")}`
      )
    );
  }

  // About — studio
  chunks.push(
    makeChunk(
      "about-studio",
      "About — the studio",
      "FADI Technologies is an independent product studio. Founder is a Gen Z software developer and aspiring developer. The studio builds AI-powered products for African markets — full-stack web apps, AI and RAG systems, and security work. Founded and run by the founder. Based in Ghana."
    )
  );

  // Capabilities
  chunks.push(
    makeChunk(
      "capabilities",
      "About — capabilities",
      "Capabilities: Full-stack (Next.js, Python, Postgres, Flask). AI & RAG (retrieval-augmented generation, vector search, LLM integration). Cybersecurity (threat modeling, secure API design, responsible disclosure). Product (discovery, scoping, shipping)."
    )
  );

  // Contact
  chunks.push(
    makeChunk(
      "contact",
      "Contact",
      "Best way to get in touch is email at fadiliddrisu24@gmail.com. Also on GitHub at github.com/Fadel333. Open to select client work — AI systems, full-stack apps, and security-focused builds."
    )
  );

  return chunks;
}

const KNOWLEDGE_BASE = buildKnowledgeBase();

// ─────────────────────────────────────────────
// Search — simple TF-style scoring
// ─────────────────────────────────────────────

export type Retrieved = {
  chunk: Chunk;
  score: number;
};

export function retrieve(query: string, topK = 4): Retrieved[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  const scored = KNOWLEDGE_BASE.map((chunk) => {
    let score = 0;
    for (const q of queryTokens) {
      for (const k of chunk.keywords) {
        if (k === q) score += 3;
        else if (k.startsWith(q) || q.startsWith(k)) score += 1.5;
        else if (k.includes(q) && q.length > 3) score += 0.5;
      }
    }
    // Normalize by chunk length so long chunks don't dominate
    score = score / Math.sqrt(chunk.keywords.length);
    return { chunk, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}