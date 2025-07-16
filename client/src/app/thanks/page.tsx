'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { PiSmileyWinkFill } from 'react-icons/pi';

export default function ThanksPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col overflow-hidden">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#3ABEFF33] blur-[180px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#665DCD33] blur-[180px]" />
      </div>

      {/* Content */}
      <section className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl w-full backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl"
        >
          <div className="text-5xl sm:text-6xl mb-4 text-blue-400">
            <PiSmileyWinkFill />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-[var(--text-muted)] mb-8 text-base sm:text-lg">
            Your message has been sent. We’ll get back to you shortly 🚀
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
