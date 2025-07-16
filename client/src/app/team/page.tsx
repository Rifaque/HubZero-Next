'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';

type TeamMember = {
  name: string;
  username: string;
  role: string;
  image: string;
  about: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('/data/team.json')
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error('Failed to load team data', err));
  }, []);

  return (
    <main className="bg-gradient-to-b from-[var(--bg-dark)] to-black text-white min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-[#3ABEFF33] via-[#665DCD22] to-transparent blur-2xl z-0 pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#5FA4E6] via-[#D2AB67] to-[#665DCD] text-transparent bg-clip-text"
        >
          Meet the HubZero Team
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] mx-auto origin-left mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 text-base sm:text-lg"
        >
          Passionate creators, coders, designers, and visionaries driving HubZero forward. Meet the team that makes it happen.
        </motion.p>

        {/* Responsive Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <Link href={`/${member.username}`} key={member.username}>
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="group relative p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:scale-[1.04] hover:border-white/20 transition-all shadow-lg overflow-hidden"
              >
                {/* Gradient Aura */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-radial from-[#5FA4E6]/30 to-transparent blur-2xl z-0 group-hover:opacity-60 transition pointer-events-none" />

                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-gray-600 shadow-md z-10">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white z-10">{member.name}</h3>
                <p className="text-sm text-blue-400 z-10">{member.role}</p>
                <p className="text-sm text-gray-400 mt-2 z-10">{member.about}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
