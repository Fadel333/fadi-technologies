"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI & RAG Systems",
    description: "Custom AI pipelines, vector search, and LLM integration. Built for accuracy, not hype.",
    features: ["RAG pipelines", "Vector databases", "LLM orchestration"],
    icon: "🧠",
  },
  {
    title: "Full-Stack Platforms",
    description: "End-to-end web applications — from booking systems to e-commerce marketplaces.",
    features: ["Next.js + React", "Python + Postgres", "Auth & Payments"],
    icon: "⚡",
  },
  {
    title: "Security & Tooling",
    description: "Secure APIs, threat modeling, and custom automation bots for real business needs.",
    features: ["API security", "Telegram bots", "Monitoring tools"],
    icon: "🛡️",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-[#09090b] border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs text-pink-500 uppercase tracking-widest mb-4">
            [ SERVICES ]
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I actually build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-gray-800 bg-[#121214] hover:border-pink-500/50 transition-colors group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span className="text-pink-500">&gt;</span> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}