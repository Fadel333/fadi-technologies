"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactNew() {
  return (
    <section className="py-32 bg-[#09090b] border-t border-gray-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Got a problem worth <br />
          <span className="text-pink-500">shipping a solution to?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          I take on select client work — AI systems, full-stack platforms, and security builds.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors"
        >
          Start a Conversation →
        </Link>
      </motion.div>
    </section>
  );
}