"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Observe",
    description: "Find a real problem in the market. No fake problems, no hypothetical users.",
  },
  {
    number: "02",
    title: "Scope",
    description: "Define the smallest viable product. What ships first? What waits?",
  },
  {
    number: "03",
    title: "Build",
    description: "Write code, break things, fix them. Iterate fast. Ship faster.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Push to production. Real users, real feedback, real iteration.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-[#09090b] border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-pink-500 uppercase tracking-widest mb-4">
            [ THE PROCESS ]
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How I ship.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-gray-800 mb-4 font-mono">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-gray-700">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}