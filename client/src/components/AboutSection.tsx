'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const familyGuideRef = useRef<HTMLDivElement | null>(null);
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setStatsRef = (index: number) => (el: HTMLDivElement | null) => {
    statsRef.current[index] = el;
  };

  const setGridItemRef = (index: number) => (el: HTMLDivElement | null) => {
    gridItemsRef.current[index] = el;
  };

  useEffect(() => {
    if (!sectionRef.current || !familyGuideRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      familyGuideRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: familyGuideRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      gridItemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: familyGuideRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const stats = [
    { number: '6+', label: 'Clients satisfied so far' },
    { number: '100%', label: 'Satisfaction Guaranteed', gradient: true },
    { number: '~12', label: 'Hubzero Teammates (& growing)' },
    { number: '2023', label: 'Since' },
    { number: '4+', label: 'Ongoing projects' },
    { number: '24/7', label: 'Availability' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-4 sm:px-6 text-center bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* ✨ Dual Gradient Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top-right ball */}
        <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] bg-gradient-to-br from-[var(--glow-grad-1)] via-[var(--glow-grad-2)] to-[var(--glow-grad-3)] rounded-full blur-3xl opacity-25" />

        {/* Bottom-left ball */}
        <div className="absolute bottom-[100px] left-[100px] w-[500px] h-[500px] bg-gradient-to-bl from-[var(--glow-grad-3)] via-[var(--glow-grad-4)] to-[var(--glow-grad-2)] rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative z-10">
        <h2 id="about-heading" className="text-4xl sm:text-5xl font-bold mb-6">
          About Hubzero
        </h2>

        <p className="text-base sm:text-lg max-w-3xl mx-auto text-[var(--text-muted)] mb-12">
          At Hubzero, we are on a mission to deliver top-tier digital solutions with innovation and precision.
          Founded by designers, developers, and creative thinkers, we specialize in graphic design, software development,
          branding, UI/UX, web design, and more.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              ref={setStatsRef(index)}
              className={`p-4 sm:p-6 ${
                item.gradient
                  ? 'bg-gradient-to-br from-[var(--glow-grad-2)] via-[var(--glow-grad-4)] to-[var(--glow-grad-3)] rounded-lg'
                  : ''
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold">{item.number}</h3>
              <p
                className={`text-sm sm:text-base ${
                  item.gradient ? 'text-black font-semibold' : 'text-[var(--text-muted)]'
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Family Guide */}
        <div ref={familyGuideRef} className="mt-24 sm:mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hubzero Family Guide</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-[var(--text-muted)]">
            We are a global digital solutions provider, empowering startups and businesses through design, development, and strategy.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div ref={setGridItemRef(0)} className="flex flex-col justify-center p-5 shadow-lg rounded-lg text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Graphics In Our Life</h3>
              <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
                <strong className="text-[var(--text)]">The Power Of Better Graphics</strong>
                <br />
                Strong visuals enhance branding, user experience, and communication.
                From UI/UX to marketing, better graphics create impact, boost engagement, and leave a lasting impression.
              </p>
              <a href="/about" className="text-blue-400 mt-3 text-sm sm:text-base hover:underline">
                Learn more →
              </a>
            </div>

            {/* Image 1 */}
            <div ref={setGridItemRef(1)} className="flex justify-center p-4">
              <div className="w-full max-w-md aspect-[4/3] relative rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/graphics-design.png"
                  alt="Illustration showing impact of design in life"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div ref={setGridItemRef(2)} className="flex justify-center p-4">
              <div className="w-full max-w-md aspect-[4/3] relative rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/web-design.png"
                  alt="Modern responsive web design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div ref={setGridItemRef(3)} className="flex flex-col justify-center p-5 shadow-lg rounded-lg text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Is Web Design Important?</h3>
              <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
                <strong className="text-[var(--text)]">The Power of Great Web Design</strong>
                <br />
                A well-designed website enhances user experience, credibility, and engagement.
                Clean layouts, intuitive navigation, and stunning visuals make a lasting impression, ensuring users stay and interact.
              </p>
              <a href="/about" className="text-blue-400 mt-3 text-sm sm:text-base hover:underline">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
