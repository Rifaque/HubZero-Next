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

// Framer motion card animation
const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
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
    <main className="bg-gradient-to-b from-[#050505] to-black text-white min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-[#3ABEFF33] via-[#665DCD22] to-transparent blur-2xl z-0"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#5FA4E6] via-[#D2AB67] to-[#665DCD] text-transparent bg-clip-text"
        >
          Meet the HubZero Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 text-base sm:text-lg"
        >
          Passionate creators, coders, designers, and visionaries driving HubZero forward. Meet the team that makes it happen.
        </motion.p>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.slice(0, 3).map((member, i) => (
            <Link href={`/${member.username}`}>
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:scale-105 transition shadow-lg"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-gray-600 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-blue-400">{member.role}</p>
              <p className="text-sm text-gray-400 mt-2">{member.about}</p>
            </motion.div>
            </Link>
          ))}
        </div>

        {/* Second row - 2 centered cards */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8">
          {team.slice(3).map((member, i) => (
            <Link href={`/${member.username}`}>
            <motion.div
              key={member.name}
              custom={i + 3}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative w-full sm:w-[300px] p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:scale-105 transition shadow-lg"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-gray-600 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-blue-400">{member.role}</p>
              <p className="text-sm text-gray-400 mt-2">{member.about}</p>
            </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
