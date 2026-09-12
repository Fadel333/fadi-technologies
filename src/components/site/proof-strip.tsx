"use client";

import { useEffect, useState } from "react";

type GithubStats = {
  repos: number;
  followers: number;
  yearsActive: number;
  username: string;
  profileUrl: string;
};

export function ProofStrip() {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setStats(data))
      .catch(() => setError(true));
  }, []);

  const items = [
    stats && { value: `${stats.repos}+`, label: "Public repos" },
    stats && { value: `${stats.followers}`, label: "Followers" },
    stats && { value: `${stats.yearsActive}`, label: "Years building" },
    { value: "2", label: "Products shipped" },
    { value: "1", label: "Live with users" },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <section className="border-y border-border bg-surface-muted/50">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-semibold text-fg">
                {item.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-fg-subtle">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {stats && (
          <a
            href={stats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-fg-muted transition-colors hover:text-accent"
          >
            github.com/{stats.username} ↗
          </a>
        )}

        {error && (
          <span className="font-mono text-xs text-fg-subtle">
            github stats unavailable
          </span>
        )}
      </div>
    </section>
  );
}