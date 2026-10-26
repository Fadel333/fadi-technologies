"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroNew() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Animated Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs text-pink-500 uppercase tracking-widest mb-6"
        >
          [ SYSTEM ONLINE ] // FADI TECHNOLOGIES
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
        >
          I don&apos;t just write code. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            I build systems that ship.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          From AI-powered career platforms to cinematic photography sites. 
          No slide decks. No vanity metrics. Just working software for real markets.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/work" className="bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors">
            Explore the Work
          </Link>
          <Link href="/contact" className="border border-gray-700 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors">
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}