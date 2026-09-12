"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "input" | "output"; text: string };

const HELP_TEXT = [
  "Available commands:",
  "  whoami         — who is this",
  "  skills --list  — capabilities",
  "  work --all     — shipped projects",
  "  contact --email— how to reach me",
  "  clear          — clear the terminal",
  "  exit           — close terminal",
];

const RESPONSES: Record<string, string[]> = {
  whoami: [
    "Gen Z software developer.",
    "Founder, FADI Technologies.",
    "Aspiring everything. Shipping anyway.",
  ],
  "skills --list": [
    "→ Full-stack:  Next.js, Python, Postgres, Flask",
    "→ AI/RAG:      vector search, LLM integration, retrieval tuning",
    "→ Security:    threat modeling, secure APIs, responsible disclosure",
    "→ Product:     discovery, scoping, shipping",
  ],
  "work --all": [
    "→ TalentForge AI       [live]",
    "→ Trading Bot          [in-progress]",
    "→ Qiyam                [live]",
    "→ Queen Latifa         [live]",
    "Type `open /work` to see all.",
  ],
  "contact --email": [
    "→ fadiliddrisu24@gmail.com",
    "→ github.com/your-handle",
  ],
  help: HELP_TEXT,
};

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "FADI terminal v0.1 — type `help` to begin." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Global keyboard shortcut: Ctrl + ` toggles the terminal
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  function run(cmd: string) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newLines: Line[] = [{ type: "input", text: trimmed }];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    if (trimmed === "exit") {
      setOpen(false);
      setInput("");
      return;
    }
    if (trimmed.startsWith("open ")) {
      const path = trimmed.slice(5).trim();
      newLines.push({ type: "output", text: `→ navigating to ${path}` });
      setLines((prev) => [...prev, ...newLines]);
      setInput("");
      setTimeout(() => {
        window.location.href = path;
      }, 300);
      return;
    }

    const response = RESPONSES[trimmed];
    if (response) {
      response.forEach((r) => newLines.push({ type: "output", text: r }));
    } else {
      newLines.push({
        type: "output",
        text: `command not found: ${trimmed}. Try \`help\`.`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  }

  if (!open) {
    // Hidden trigger — a small fixed dot in the bottom-right corner
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open terminal (Ctrl + backtick)"
        className="fixed bottom-5 right-5 z-40 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface font-mono text-[10px] text-fg-subtle transition-colors hover:border-accent hover:text-accent"
        title="Open terminal (Ctrl + `)"
      >
        &gt;_
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-[#0a0a0b] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border bg-[#131316] px-3 py-2">
          <div className="flex items-center gap-2 font-mono text-[11px] text-fg-muted">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3">fadi — zsh</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close terminal"
            className="font-mono text-xs text-fg-subtle transition-colors hover:text-fg"
          >
            esc
          </button>
        </div>

        {/* Output */}
        <div
          ref={scrollRef}
          className="max-h-[60vh] min-h-[280px] overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
        >
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line.type === "input" ? (
                <>
                  <span className="text-terminal">$ </span>
                  <span className="text-fg">{line.text}</span>
                </>
              ) : (
                <span className="text-fg-muted">{line.text}</span>
              )}
            </div>
          ))}

          {/* Prompt */}
          <div className="flex items-center">
            <span className="text-terminal">$&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  run(input);
                }
              }}
              className="flex-1 bg-transparent text-fg outline-none placeholder:text-fg-subtle/50"
              placeholder="type a command..."
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}