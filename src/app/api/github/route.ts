import { NextResponse } from "next/server";

// Cache the response for 1 hour. The GitHub API is rate-limited to
// 60 requests/hour per IP for unauthenticated calls — this keeps us
// safely under that even with traffic.
export const revalidate = 3600;

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  login: string;
};

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "fadel333";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
        // If you add a token later, this line will pick it up automatically:
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API returned ${res.status}` },
        { status: res.status }
      );
    }

    const data: GitHubUser = await res.json();

    // Compute years since the account was created — an honest "since" number
    const yearsActive = Math.max(
      1,
      Math.floor(
        (Date.now() - new Date(data.created_at).getTime()) /
          (1000 * 60 * 60 * 24 * 365)
      )
    );

    return NextResponse.json({
      repos: data.public_repos,
      followers: data.followers,
      yearsActive,
      username: data.login,
      profileUrl: data.html_url,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}