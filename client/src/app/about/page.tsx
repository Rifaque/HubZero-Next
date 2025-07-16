'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

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
          ease: 'expo.out',
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
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      {/* HERO */}
      <section
        ref={setRef(sectionRefs, 0)}
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[var(--glow-grad-1)] via-[var(--glow-grad-2)] to-[var(--glow-grad-3)] rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-[var(--glow-grad-3)] via-[var(--glow-grad-4)] to-[var(--glow-grad-2)] rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] bg-clip-text text-transparent">
            Redefining Digital Experiences
          </h1>
          <p className="mt-6 text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            HubZero is a collective of visionaries shaping the digital future through tech, design & strategy.
          </p>
          <a
            href="#values"
            className="mt-8 inline-block px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] shadow-[0_0_40px_rgba(102,93,205,0.4)] hover:scale-105 transition"
          >
            Explore Our Vision
          </a>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        ref={setRef(sectionRefs, 1)}
        className="py-24 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-1)] bg-clip-text text-transparent">
          What We Do
        </h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-12">
          We turn ideas into impactful products through design, engineering, and branding.
        </p>
        <div className="grid sm:grid-cols-3 gap-10">
          {[
            { title: 'Web Development', desc: 'Scalable, performant full-stack apps tailored to your brand.' },
            { title: 'UI/UX Design', desc: 'Intuitive, beautiful interfaces crafted for humans.' },
            { title: 'Brand Strategy', desc: 'Identity, storytelling, and experience — aligned.' },
          ].map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-light)] border border-[var(--border-muted)] rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{title}</h3>
              <p className="text-[var(--text-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE STORY */}
      <section
        ref={setRef(sectionRefs, 2)}
        className="flex flex-col md:flex-row items-center gap-12 py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-[var(--text)]">
            Our Story
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Founded in 2024, HubZero started with a shared passion for building delightful digital solutions. From small client projects to bold internal innovations, we’re driven by curiosity and teamwork.
          </p>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 bg-gradient-to-br from-[var(--glow-grad-1)] via-[var(--glow-grad-4)] to-[var(--glow-grad-2)] blur-3xl rounded-full opacity-20" />
        </div>
      </section>

      {/* CORE VALUES */}
      <section
        id="values"
        ref={setRef(sectionRefs, 3)}
        className="py-64 px-6 text-center relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[var(--glow-grad-2)]/10 to-transparent blur-3xl pointer-events-none z-0" />

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-xl mx-auto">
            These values shape our mindset, our process, and the work we create every day.
          </p>

          <div className="grid sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: '🤝',
                title: 'Collaboration',
                desc: 'We thrive on co-creation, teamwork, and mutual support.',
              },
              {
                icon: '🎯',
                title: 'Excellence',
                desc: 'We pursue quality — in code, design, experience, and execution.',
              },
              {
                icon: '🚀',
                title: 'Innovation',
                desc: 'We explore. We experiment. We evolve constantly and fearlessly.',
              },
            ].map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="group bg-[var(--bg-light)] border border-[var(--border-muted)] rounded-2xl p-8 transition hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">{icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">{title}</h3>
                <p className="text-[var(--text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TEAM CTA */}
      <section
        ref={setRef(sectionRefs, 4)}
        className="relative py-48 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--home-grad-1)] to-transparent blur-3xl pointer-events-none" />
        <h2 className="text-4xl font-bold mb-4 text-[var(--text)]">Meet Our Team</h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
          A growing family of engineers, designers, and creators united by purpose.
        </p>
        <Link href="/team">
          <button className="mt-4 px-8 py-4 bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(102,93,205,0.4)] hover:scale-105 transition">
            View Team Profiles
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
