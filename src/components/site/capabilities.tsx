const capabilities = [
    {
      title: "AI & RAG Systems",
      description: "Retrieval-augmented generation, vector search, and LLM integration. AI where it actually helps.",
      icon: "🧠",
    },
    {
      title: "Full-Stack Platforms",
      description: "Next.js, Python, Postgres. From booking systems to e-commerce, built for scale.",
      icon: "⚡",
    },
    {
      title: "Security & Tooling",
      description: "Threat modeling, secure APIs, and custom bots. Security baked in, not bolted on.",
      icon: "🛡️",
    },
  ];
  
  export function Capabilities() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20 border-t border-gray-800">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            &gt;_ What I Build
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-gray-800 bg-[#121214] hover:border-pink-500/50 transition-colors">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{c.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }