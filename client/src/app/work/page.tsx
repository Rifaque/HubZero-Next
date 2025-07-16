'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        title: 'Bhatkal Time Luxe',
        subtitle: 'Premium eCommerce experience for a luxury watch brand',
        img: '/projectscreenshots/ecommerce-thumbnail.png',
        link: '/work/bhatkaltimeluxe',
    },
//   {
//     title: 'Mobile App UI/UX',
//     subtitle: 'Streamlined user onboarding',
//     img: '/images/case-app.jpg',
//     link: '/work/mobile-app-ui',
//   },
//   {
//     title: 'SEO Campaign',
//     subtitle: 'Doubling organic traffic',
//     img: '/images/case-seo.jpg',
//     link: '/work/seo-campaign',
//   },
];

export default function WorkPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const setRef = (i: number) => (el: HTMLElement | null) => {
    sectionRefs.current[i] = el;
  };

  useEffect(() => {
    sectionRefs.current.forEach((sec) => {
      if (!sec) return;
      gsap.fromTo(
        sec,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sec,
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

      {/* Hero */}
      <section ref={setRef(0)} className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-24 bg-[var(--bg-dark)]">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] bg-clip-text text-transparent">
          Our Work & Case Studies
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-xl">
          Explore how we’ve transformed brands through design, development, and strategy.
        </p>
      </section>

      {/* Case Study Grid */}
      <section ref={setRef(1)} className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 gap-12">
        {caseStudies.map((c, i) => (
          <a
            key={i}
            href={c.link}
            className="group block overflow-hidden w-1280px rounded-lg bg-[var(--bg-light)] border border-[var(--border-muted)] shadow-lg hover:shadow-xl transition"
          >
            <div className="relative w-full h-56">
              <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-[var(--text-muted)]">{c.subtitle}</p>
              <span className="mt-4 inline-block text-sm text-[var(--glow-grad-2)] font-medium group-hover:underline">
                View Case Study →
              </span>
            </div>
          </a>
        ))}
      </section>

      {/* CTA */}
      <section ref={setRef(2)} className="py-16 bg-[var(--bg-dark)] text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
        <p className="text-[var(--text-muted)] mb-8">Let’s create something impactful together.</p>
        <a href="/contact" className="px-8 py-3 bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] text-black font-semibold rounded-full shadow-lg hover:opacity-90 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </main>
  );
}
