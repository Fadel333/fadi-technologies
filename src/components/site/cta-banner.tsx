"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="py-20 bg-[#09090b]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="rounded-2xl border border-pink-500/30 bg-pink-500/5 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-pink-500 uppercase tracking-widest mb-3">
              [ OPEN FOR WORK ]
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mt-2">
              I take on select client work. Let&apos;s see if we&apos;re a fit.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}