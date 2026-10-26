"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function FeaturedWork() {
  return (
    <section className="py-24 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-sm text-gray-500 uppercase tracking-widest">
            &gt;_ Featured Builds
          </h2>
          <div className="h-px flex-1 bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Klik Haus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-gray-800 bg-[#121214] overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-800">
              <span className="text-gray-500 font-mono text-sm">[ IMAGE: KLIK HAUS ]</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                Klik Haus
              </h3>
              <p className="text-gray-400 mb-6">
                Cinematic photography platform for life&apos;s most important days.
              </p>
              <a
                href="https://photographer-web-omega.vercel.app/"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-mono text-pink-500 hover:text-pink-400"
              >
                Visit Live ↗
              </a>
            </div>
          </motion.div>

          {/* TalentForge Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-2xl border border-gray-800 bg-[#121214] overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-800">
              <span className="text-gray-500 font-mono text-sm">[ IMAGE: TALENTFORGE AI ]</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-500 transition-colors">
                TalentForge AI
              </h3>
              <p className="text-gray-400 mb-6">
                AI career intelligence for African job seekers.
              </p>
              <Link
                href="/work/talentforge-ai"
                className="inline-flex items-center gap-2 text-sm font-mono text-pink-500 hover:text-pink-400"
              >
                Read Case Study →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}