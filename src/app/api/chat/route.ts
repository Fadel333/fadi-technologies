import { NextResponse } from "next/server";
import { retrieve } from "@/lib/retrieval";

export const runtime = "nodejs";

type Message = { role: "user" | "assistant"; content: string };

type Body = { messages: Message[] };

const SYSTEM_PROMPT = `You are the assistant on FADI Technologies' portfolio site. FADI Technologies is an independent product studio founded by a Gen Z software developer in Ghana. It builds AI-powered products for African markets — full-stack web apps, AI/RAG systems, and security work.

Voice: direct, warm, confident without bragging. Short sentences. No corporate speak. It's fine to say "still early" or "in progress" — honesty is part of the brand.

Rules:
- Only answer using the CONTEXT below. If the answer isn't in the context, say so and offer the email fadiliddrisu24@gmail.com.
- Never invent metrics, dates, or clients.
- If asked about hiring or client work, mention the studio takes select projects and to reach out by email.
- Keep answers to 2-5 sentences unless the user asks for detail.`;

function buildContext(query: string): string {
  const results = retrieve(query, 5);
  if (results.length === 0) return "";
  return results.map((r) => `[${r.chunk.source}]\n${r.chunk.text}`).join("\n\n");
}

function ruleBasedAnswer(query: string): string {
  const results = retrieve(query, 3);

  if (results.length === 0) {
    return "I don't have that in the site content yet. For anything specific, email fadiliddrisu24@gmail.com — the founder replies to everything.";
  }

  const top = results[0].chunk;
  const others = results.slice(1).map((r) => r.chunk);

  let answer = top.text;

  // If we got multiple strong hits from different sources, add a pointer
  if (others.length > 0 && results[1].score > results[0].score * 0.5) {
    const sourceNames = others
      .map((c) => c.source.split(" — ")[0])
      .filter((s, i, arr) => arr.indexOf(s) === i);
    if (sourceNames.length > 0) {
      answer += `\n\nRelated: ${sourceNames.join(", ")}.`;
    }
  }

  return answer;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = body.messages ?? [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) {
    return NextResponse.json({ error: "No user message" }, { status: 400 });
  }

  const query = lastUser.content.trim();
  const context = buildContext(query);
  const apiKey = process.env.GROQ_API_KEY;

  // ── Path A: rule-based (default, zero cost) ──
  if (!apiKey) {
    const answer = ruleBasedAnswer(query);
    return NextResponse.json({ answer, mode: "retrieval" });
  }

  // ── Path B: LLM via Groq ──
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "system",
            content: context
              ? `CONTEXT:\n${context}`
              : "CONTEXT: (no matching content found)",
          },
          ...messages.slice(-6),
        ],
        temperature: 0.4,
        max_tokens: 400,
      }),
    });

    if (!res.ok) {
      // fall back to rule-based on any LLM error
      const answer = ruleBasedAnswer(query);
      return NextResponse.json({ answer, mode: "retrieval-fallback" });
    }

    const data = await res.json();
    const answer =
      data.choices?.[0]?.message?.content?.trim() ||
      ruleBasedAnswer(query);
    return NextResponse.json({ answer, mode: "llm" });
  } catch {
    const answer = ruleBasedAnswer(query);
    return NextResponse.json({ answer, mode: "retrieval-fallback" });
  }
}