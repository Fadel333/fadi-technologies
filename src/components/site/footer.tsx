import Link from "next/link";

const links = [
  { href: "mailtofadiliddrisu24@gmail.com", label: "Email", external: true },
  { href: "https://github.com/Fadel333", label: "GitHub", external: true },
  { href: "https://linkedin.com/in/fadtechlabs", label: "LinkedIn", external: true },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span>© {new Date().getFullYear()} FADI Technologies</span>
          <span className="text-fg-subtle">·</span>
          <span>Built in Ghana</span>
        </div>

        <nav className="flex gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}