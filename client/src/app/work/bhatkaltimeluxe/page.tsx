'use client';

import Image from 'next/image';
// import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function BhatkalTimeLuxePage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
        <Navbar />
    
        {/* Hero Section */}
      <section ref={sectionRef} className="px-6 sm:px-10 py-32 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
          Bhatkal Time Luxe
        </h1>
        <p className="text-[var(--text-muted)] text-center text-lg sm:text-xl max-w-3xl mx-auto mb-12">
          A sleek luxury fashion eCommerce platform for Bhatkal&apos;s local boutique. Featuring real-time product
          management, fast page loads, and a mobile-first experience.
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-12 h-100">
          <Image
            src="/projectscreenshots/ecommerce-thumbnail.png"
            alt="Bhatkal Time Luxe Website"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-base leading-relaxed text-[var(--text-muted)]">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[var(--text)]">Project Overview</h2>
            <p>
              Bhatkal Time Luxe needed an elegant, mobile-optimized store to reflect their high-end collection
              of watches, bags, and apparel. We designed and developed a custom solution using Next.js, styled
              with Tailwind, and hosted it with Cloudflare Tunnel for secure access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[var(--text)]">Tech Stack</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Frontend: React.js + TailwindCSS</li>
              <li>Animations: GSAP + ScrollTrigger</li>
              <li>Deployment: Ubuntu Server + Cloudflare Tunnel</li>
              <li>Performance: Optimized WebP images, Lazy loading, CDN delivery</li>
              <li>SEO: Structured data, meta tags, sitemap.xml</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://bhatkaltimeluxe.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white font-medium rounded-lg bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-1)] to-[var(--glow-grad-3)] shadow-lg hover:opacity-90 transition"
          >
            Visit Live Site →
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
