"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "2", label: "Live Products", suffix: "" },
  { value: "5+", label: "Projects Shipped", suffix: "" },
  { value: "3", label: "Years Building", suffix: "" },
  { value: "100%", label: "Built in Public", suffix: "" },
];

export function Impact() {
  return (
    <section className="py-24 bg-[#09090b] border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl border border-gray-800 bg-[#121214]"
            >
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}