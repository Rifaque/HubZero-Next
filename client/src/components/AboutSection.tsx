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

  // Helpers to assign refs safely
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
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
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
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      familyGuideRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: familyGuideRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
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
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: familyGuideRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
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
    <section ref={sectionRef} className="py-20 px-6 text-center bg-black text-white">
      <h2 className="text-5xl font-bold mb-6">About Hubzero</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-12">
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
            className={`p-6 ${item.gradient ? 'bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] rounded-lg' : ''}`}
          >
            <h3 className="text-2xl font-bold">{item.number}</h3>
            <p className={`text-gray-400 ${item.gradient ? 'text-gray-900 font-semibold' : ''}`}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Hubzero Family Guide */}
      <div ref={familyGuideRef} className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-4">Hubzero Family Guide</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          We are a global digital solutions provider, empowering startups and businesses through design, development, and strategy.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
          {/* Box 1 */}
          <div ref={setGridItemRef(0)} className="flex flex-col justify-center p-6 bg-black/50 rounded-lg text-left">
            <h3 className="text-2xl font-bold">Graphics In Our Life</h3>
            <p className="text-gray-400 mt-2">
              <strong className="text-white">The Power Of Better Graphics</strong>
              <br />
              Strong visuals enhance branding, user experience, and communication.
              From UI/UX to marketing, better graphics create impact, boost engagement, and leave a lasting impression.
            </p>
            <a href="#learn" className="text-blue-400 mt-3 inline-block hover:underline">
              Learn more →
            </a>
          </div>

          {/* Box 2 */}
          <div ref={setGridItemRef(1)} className="flex justify-center p-6">
            <div className="w-full max-w-md relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/graphics-design.png"
                alt="Graphics Design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </div>


          {/* Box 3 */}
          <div ref={setGridItemRef(2)} className="flex justify-center p-6">
            <div className="w-full max-w-md relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/web-design.png"
                alt="Web Design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </div>


          {/* Box 4 */}
          <div ref={setGridItemRef(3)} className="flex flex-col justify-center p-6 bg-black/50 rounded-lg text-left">
            <h3 className="text-2xl font-bold">Is Web Design Important?</h3>
            <p className="text-gray-400 mt-2">
              <strong className="text-white">The Power of Great Web Design</strong>
              <br />
              A well-designed website enhances user experience, credibility, and engagement.
              Clean layouts, intuitive navigation, and stunning visuals make a lasting impression, ensuring users stay and interact.
            </p>
            <a href="#learn" className="text-blue-400 mt-3 inline-block hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
