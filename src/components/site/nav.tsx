import Link from "next/link";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-white hover:text-pink-500 transition-colors"
        >
          <span className="text-pink-500">&gt;_</span> FADI<span className="text-pink-500">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-gray-400 transition-colors hover:bg-[#121214] hover:text-pink-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}