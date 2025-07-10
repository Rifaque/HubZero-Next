'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 – Page Not Found';
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl font-extrabold mb-6 text-white animate-fade-in">
            404 – Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might&apos;ve been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg text-lg font-semibold text-white transition relative overflow-hidden 
              bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] hover:opacity-80"
            >
              <span className="relative z-10">GO HOME</span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-lg font-semibold border border-white/30 text-white hover:border-[#5FA4E6] hover:text-[#5FA4E6] transition"
            >
              CONTACT SUPPORT
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
