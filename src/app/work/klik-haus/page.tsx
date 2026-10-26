import Link from "next/link";

export default function KlikHausPage() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-pink-500 mb-4">
          [ CASE STUDY ] // KLIK HAUS
        </p>
        <h1 className="text-4xl font-bold mb-4">Klik Haus</h1>
        <p className="text-gray-400 text-lg mb-8">
          Cinematic photography for life's most important days.
        </p>

        <div className="space-y-6 text-gray-300">
          <p>
            Klik Haus is a full-stack photography platform built for events across Ghana. 
            It features a custom booking inquiry system, a dynamic gallery, and a clean, 
            editorial design that puts the photography first.
          </p>
          <p>
            <strong className="text-white">The Build:</strong> Built with Next.js and Tailwind, 
            deployed on Vercel. The site handles inquiries, showcases selected work, and 
            tells the story of the photographer's quiet, observational approach.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["Next.js", "Tailwind", "Vercel"].map((s) => (
            <span key={s} className="rounded-sm border border-gray-800 bg-[#121214] px-3 py-1 font-mono text-xs text-gray-400">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a 
            href="https://photographer-web-omega.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-3 rounded-md text-sm transition-all"
          >
            Visit Live Site ↗
          </a>
          <Link 
            href="/work" 
            className="border border-gray-700 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-md text-sm transition-colors"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
}