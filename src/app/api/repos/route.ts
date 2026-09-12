import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

// Only these repos appear on the site. Add names as they get polished.
// Everything else stays on GitHub, out of the portfolio.
const FEATURED_REPOS = [
  "career-intelligence", // TalentForge AI
  "TradeDiver",          // trading bot
  "GeoAttend",           // mesh attendance
  "Hafiz",               // prayer habit app
  "OGSP",                // python tooling
];

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "Fadel333";

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API returned ${res.status}` },
        { status: res.status }
      );
    }

    const all: Repo[] = await res.json();

    // Only show curated repos, no forks, no archived.
    // Repos without descriptions are still shown — the site fills in
    // a friendly fallback in that case (see repo-list.tsx).
    const repos = all
      .filter(
        (r) =>
          !r.fork &&
          !r.archived &&
          FEATURED_REPOS.includes(r.name)
      )
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        updatedAt: r.updated_at,
      }));

    return NextResponse.json({ repos });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repos" },
      { status: 500 }
    );
  }
}