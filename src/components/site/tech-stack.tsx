"use client";
import { motion } from "framer-motion";

const tools = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind", category: "Design" },
  { name: "Python", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Postgres", category: "Database" },
  { name: "Vector DB", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "Vercel", category: "Deploy" },
  { name: "Git", category: "Version Control" },
];

export function TechStack() {
  return (
    <section className="py-24 bg-[#09090b] border-y border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The Arsenal</h2>
          <p className="text-gray-400">The tools I use to turn ideas into shipped products.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full border border-gray-800 bg-[#121214] hover:border-pink-500/50 transition-colors cursor-default"
            >
              <span className="text-sm font-mono text-white">{tool.name}</span>
              <span className="text-[10px] text-gray-500 ml-2 uppercase tracking-wider">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}