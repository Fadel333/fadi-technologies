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
    "Independent software developer.",
    "Founder, FADI Technologies.",
    "Building in silence. Shipping anyway.",
  ],
  "skills --list": [
    "→ Full-stack:  Next.js, Python, Postgres, Flask",
    "→ AI/RAG:      vector search, LLM integration, retrieval tuning",
    "→ Security:    threat modeling, secure APIs, responsible disclosure",
    "→ Product:     discovery, scoping, shipping",
  ],
  "work --all": [
    "→ TalentForge AI       [live]",
    "→ Klik Haus            [in-progress]",
    "→ Qiyam                [live]",
    "→ Queen Latifa         [live]",
    "Type `open /work` to see all.",
  ],
  "contact --email": [
    "→ fadiliddrisu24@gmail.com",
    "→ github.com/Fadel333",
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

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

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
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open terminal (Ctrl + backtick)"
        className="fixed bottom-5 right-5 z-40 flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 bg-[#121214] font-mono text-xs text-gray-400 transition-all hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
        title="Open terminal (Ctrl + `)"
      >
        &gt;_
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-800 bg-[#09090b] shadow-[0_0_50px_rgba(236,72,153,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-gray-800 bg-[#121214] px-4 py-3">
          <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3">fadi — zsh</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close terminal"
            className="font-mono text-xs text-gray-500 transition-colors hover:text-white"
          >
            [ESC]
          </button>
        </div>

        {/* Output */}
        <div
          ref={scrollRef}
          className="max-h-[60vh] min-h-[280px] overflow-y-auto p-5 font-mono text-[13px] leading-relaxed"
        >
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line.type === "input" ? (
                <>
                  <span className="text-pink-500">$ </span>
                  <span className="text-white">{line.text}</span>
                </>
              ) : (
                <span className="text-gray-400">{line.text}</span>
              )}
            </div>
          ))}

          {/* Prompt */}
          <div className="flex items-center mt-2">
            <span className="text-pink-500">$&nbsp;</span>
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
              className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-600"
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