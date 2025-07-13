'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

// 🔧 Type-safe helper
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
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={setRef<HTMLElement>(sectionRefs, 0)}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] bg-clip-text text-transparent">
          Get to know <br className="hidden sm:block" />
          the HubZero team
        </h1>
        <p className="text-base sm:text-xl max-w-2xl text-gray-300 mb-8">
          Founded in 2024, we’re a collective of engineers, designers, and creators building impactful digital
          experiences. From concept to launch, we craft solutions tailored to people.
        </p>
        <a
          href="#team"
          className="px-6 py-3 rounded-lg text-lg font-semibold transition relative overflow-hidden 
          bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] hover:opacity-80"
        >
          <span className="relative z-10">MEET THE TEAM</span>
        </a>
      </section>

      {/* Mission Section */}
      <section
        ref={setRef<HTMLElement>(sectionRefs, 1)}
        className="max-w-5xl mx-auto text-center px-6 py-20"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D2AB67] via-[#5FA4E6] to-[#665DCD] bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At HubZero, we blend creativity with technical precision to develop solutions that not only meet
          business goals but elevate the user experience. From branding to full-stack applications — we’re
          committed to pushing boundaries and staying ahead of the curve.
        </p>
      </section>

      {/* Team CTA */}
      <section
        id="team"
        ref={setRef<HTMLElement>(sectionRefs, 2)}
        className="text-center bg-[#0a0a0a] px-6 py-24"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Meet Our Core Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          We’re a growing team of developers, designers, strategists, and collaborators — all working to
          bring great ideas to life through thoughtful digital design and engineering.
        </p>
        <Link href="/team">
          <button className="mt-4 px-8 py-4 bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition">
            View Team Profiles
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
