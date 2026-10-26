import Link from "next/link";

const links = [
  { href: "mailto:fadiliddrisu24@gmail.com", label: "Email", external: true },
  { href: "https://github.com/Fadel333", label: "GitHub", external: true },
  { href: "https://linkedin.com/in/fadtechlabs", label: "LinkedIn", external: true },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-800 bg-[#09090b]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left Side: Copyright & Location */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-pink-500">&gt;_</span>
          <span>© {new Date().getFullYear()} FADI Technologies</span>
          <span className="text-gray-600">·</span>
          <span>Built in Ghana 🇬🇭</span>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex gap-6 font-mono text-xs">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-pink-500 hover:underline underline-offset-4"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}