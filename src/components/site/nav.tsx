import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-fg"
        >
          FADI<span className="text-accent">.</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}