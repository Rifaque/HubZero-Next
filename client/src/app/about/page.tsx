'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

// 👇 Type-safe ref setter
function setRef<T>(refArray: React.MutableRefObject<(T | null)[]>, index: number) {
  return (el: T | null) => {
    refArray.current[index] = el;
  };
}

export default function AboutPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section
        ref={setRef<HTMLElement>(sectionRefs, 0)}
        className="max-w-5xl mx-auto text-center py-24 px-6"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-yellow-500 text-transparent bg-clip-text mt-32 mb-6">
          About Hub Zero
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Founded in 2024, Hub Zero is a team of engineers passionate about advancing technology and design...
        </p>
      </section>

      <section
        ref={setRef<HTMLElement>(sectionRefs, 1)}
        className="max-w-4xl mx-auto text-center py-20 px-6"
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Our Team
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Meet the minds behind Hub Zero.</p>
        <Link href="/team">
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition">
            View Our Team
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
