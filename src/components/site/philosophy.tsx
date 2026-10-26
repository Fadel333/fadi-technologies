"use client";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32 bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Africa doesn&apos;t need more{" "}
            <span className="text-gray-600 line-through">ideas</span>.<br />
            It needs more <span className="text-pink-500">shippers</span>.
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed">
            Every product under FADI Technologies started the same way — noticing something broken
            in the market around me. Graduate employability. Event photography. Elections integrity.
            Trading education.
          </p>

          <p className="text-xl text-gray-400 leading-relaxed">
            None of them were problems I could stop thinking about. So I built.
            Some are live. Some are paused. But all of them exist as working software,
            not slide decks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}