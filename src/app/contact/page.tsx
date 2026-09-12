import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FADI Technologies — for client work, collaborations, or just to talk shop.",
};

const channels = [
  {
    label: "Email",
    value: "fadiliddrisu24@gmail.com",
    href: "mailto:fadiliddrisu24@gmail.com",
    description: "Best for detailed briefs and proposals.",
  },
  {
    label: "WhatsApp",
    value: "+233 53 083 0529",
    href: "https://wa.me/233530830529", // update number
    description: "Fast for quick questions.",
  },
  {
    label: "Calendar",
    value: "Book a 20-min call",
    href: "https://cal.com/your-handle", // update when you set up Cal.com
    description: "Pick a slot that works.",
  },
  {
  label: "GitHub",
  value: "github.com/Fadel333",
  href: "https://github.com/Fadel333",
  description: "Code, repos, and open work.",
},
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
          Let&apos;s build something
          <br />
          <span className="text-accent">worth shipping</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          I take on select client work — AI systems, full-stack web apps, and
          security-focused builds. If the fit is right and the problem is real,
          we should talk.
        </p>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between bg-surface p-6 transition-colors hover:bg-surface-muted"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  {c.label}
                </span>
                <div className="mt-2 flex items-center gap-2 text-base font-medium text-fg group-hover:text-accent">
                  {c.value}
                  <span
                    aria-hidden
                    className="text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-fg-muted">
                {c.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* What to include */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              What to include
            </span>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-fg-muted">
            <p>
              If you&apos;re reaching out about a project, three things help me
              respond usefully:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-1 w-3 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-fg">The problem</strong> — what&apos;s
                  broken, and for whom.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-1 w-3 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-fg">The timeline</strong> — when you
                  need something working, not just started.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-1 w-3 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-fg">The budget ballpark</strong> — so
                  I know whether the fit is real before we spend time on calls.
                </span>
              </li>
            </ul>
            <p>
              I reply to everything. If it&apos;s not a fit, I&apos;ll say so —
              usually with a suggestion of who might be.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}