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

  // We filter out the "0 followers" and "repos" if they look bad, 
  // or we keep them but style them sleekly. Let's keep the dynamic data 
  // but add our hardcoded flexes.
  const items = [
    stats && { value: `${stats.repos}+`, label: "Public Repos" },
    stats && { value: `${stats.followers}`, label: "Followers" },
    stats && { value: `${stats.yearsActive}`, label: "Years Building" },
    { value: "02", label: "Products Shipped" },
    { value: "01", label: "Live with Users" },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <section className="border-y border-gray-800 bg-[#09090b]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-6 px-6 py-6">
        
        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-1 group">
              <span className="font-mono text-xl font-bold text-white group-hover:text-pink-500 transition-colors">
                {item.value}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        {stats && (
          <a
            href={stats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-gray-400 transition-colors hover:text-pink-500 flex items-center gap-2 border border-gray-800 bg-[#121214] px-3 py-1.5 rounded-md"
          >
            <span className="text-pink-500">&gt;_</span>
            github.com/{stats.username} ↗
          </a>
        )}

        {/* Error State */}
        {error && (
          <span className="font-mono text-xs text-gray-600">
            [ STATS_UNAVAILABLE ]
          </span>
        )}
      </div>
    </section>
  );
}