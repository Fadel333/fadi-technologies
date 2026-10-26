"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
};

function timeAgo(iso: string): string {
  const days = Math.floor(
    (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export function RepoList() {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    fetch("/api/repos")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setRepos(data.repos))
      .catch(() => setRepos([]));
  }, []);

  if (repos === null) {
    return (
      <p className="font-mono text-xs text-gray-500 animate-pulse">
        &gt;_ scanning github repositories...
      </p>
    );
  }

  if (repos.length === 0) {
    return (
      <p className="font-mono text-xs text-gray-500">
        &gt;_ no public repos found. work in progress.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {repos.map((r) => (
        <a
          key={r.name}
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-lg border border-gray-800 bg-[#09090b] p-5 transition-all hover:border-pink-500/50 hover:bg-[#121214]"
        >
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-mono text-sm font-bold text-gray-200 group-hover:text-pink-500 transition-colors">
                <span className="text-gray-600 group-hover:text-pink-500 mr-2">/</span>
                {r.name}
              </h3>
              <span className="font-mono text-[10px] text-gray-600">
                {timeAgo(r.updatedAt)}
              </span>
            </div>
            <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-gray-400">
              {r.description || "No description provided."}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
            {r.language && (
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500/50" />
                {r.language}
              </span>
            )}
            {r.stars > 0 && <span>★ {r.stars}</span>}
            {r.forks > 0 && <span>⑂ {r.forks}</span>}
          </div>
        </a>
      ))}
    </div>
  );
}