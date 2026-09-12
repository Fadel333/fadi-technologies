import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "FADI Technologies is an independent product studio building AI-powered software for African markets. Founded by a Gen Z developer named Iddrisu Fadel who ships.",
};

const capabilities = [
  {
    label: "Full-stack",
    description:
      "Next.js, Python, Postgres, Flask. End-to-end builds — auth, payments, deployment.",
  },
  {
    label: "AI & RAG",
    description:
      "Retrieval-augmented generation, vector search, LLM integration. Systems that use AI where it actually helps.",
  },
  {
    label: "Cybersecurity",
    description:
      "Threat modeling, secure API design, and responsible disclosure. Security baked in, not bolted on.",
  },
  {
    label: "Product",
    description:
      "Discovery, scoping, and shipping. Turning a real problem into a live product, not a concept deck.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
          About
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
          Built by a Gen&nbsp;Z developer who
          <br />
          <span className="text-accent">ships anyway</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          Hey — I&apos;m the founder of FADI Technologies. I build
          AI-powered products for African markets, one problem at a time.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              The studio
            </span>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-fg-muted">
            <p>
              FADI Technologies started as a way to formalize something I was
              already doing — building tools for problems I kept running into.
              Graduate employability. Elections integrity. Prayer habits.
              Trading education. Each one became software, not a slide deck.
            </p>

            <p>
              I&apos;m still early. I&apos;m still learning. Some of what I
              build works, some of it doesn&apos;t, and I publish the honest
              version either way. The throughline is <strong className="text-fg">
              shipped</strong> — because ideas are cheap and working software
              isn&apos;t.
            </p>

            <p>
              Today the studio focuses on three things: <strong className="text-fg">
              full-stack web apps</strong>, <strong className="text-fg">AI and
              RAG systems</strong>, and <strong className="text-fg">security
              work</strong>. Often all three in the same project.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.label} className="bg-surface p-6">
                <h3 className="font-mono text-sm font-semibold text-fg">
                  {c.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            See the work
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}