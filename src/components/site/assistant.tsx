"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What has Fadel built with AI?",
  "Tell me about TalentForge",
  "Is he available for client work?",
  "What's his security experience?",
];

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey — I'm the FADI assistant. Ask me about the studio, the projects, or what's currently being built.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: Shift + / toggles
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.shiftKey && e.key === "?") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      const answer: string =
        data.answer ||
        "Something went wrong. Try again, or email fadiliddrisu24@gmail.com.";
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Couldn't reach the assistant. Email fadiliddrisu24@gmail.com if it's urgent.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open assistant (Shift + ?)"
        className="fixed bottom-5 left-5 z-40 flex h-9 items-center gap-2 rounded-md border border-gray-800 bg-[#121214] px-3 font-mono text-[11px] text-gray-400 transition-all hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
        title="Ask the FADI assistant (Shift + ?)"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
        &gt;_ ask
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-start bg-black/80 p-4 backdrop-blur-sm sm:items-center sm:justify-start sm:pl-6"
      onClick={() => setOpen(false)}
    >
      <div
        className="flex h-[560px] w-full max-w-md flex-col overflow-hidden rounded-xl border border-gray-800 bg-[#09090b] shadow-[0_0_50px_rgba(236,72,153,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 bg-[#121214] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="font-mono text-xs font-bold text-white tracking-wider">
              FADI_ASSISTANT
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close assistant"
            className="font-mono text-xs text-gray-500 transition-colors hover:text-white"
          >
            [ESC]
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto p-4"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-pink-600 text-white font-medium"
                    : "bg-[#121214] border border-gray-800 text-gray-300 font-mono text-[13px]"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-lg bg-[#121214] border border-gray-800 px-4 py-3 font-mono text-xs text-pink-500">
                processing
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}

          {/* Suggestions on first render only */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-md border border-gray-800 bg-[#121214] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-pink-500/50 hover:text-pink-500"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-gray-800 bg-[#121214] p-3"
        >
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="execute command..."
              className="flex-1 rounded-md border border-gray-800 bg-[#09090b] px-3 py-2.5 font-mono text-sm text-white outline-none placeholder:text-gray-600 focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-md bg-pink-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              ↗
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}