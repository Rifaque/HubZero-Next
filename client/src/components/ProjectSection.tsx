'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: ['SOFTWARE & HARDWARE', 'SOLUTIONS'], img: '/images/project1.png' },
  { title: ['WEBSITE', 'DEVELOPMENT'], img: '/images/project2.png' },
  { title: ['SEO'], img: '/images/project3.png' },
  { title: ['BRANDING &', 'ADS'], img: '/images/project4.png' },
];

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;

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
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      projectsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Our Projects <br /> & Fields
        </h2>

        {/* Project Tiles */}
        <div ref={projectsRef} className="grid grid-cols-2 gap-4 justify-center md:justify-end">
          {[0, 1, 2, 3].map((i) => {
            const project = projects[i];
            const isOffset = i > 1;

            return (
              <div
                key={i}
                className={`w-[160px] sm:w-[180px] md:w-[210px] h-[160px] sm:h-[180px] md:h-[210px] p-4 sm:p-5 rounded-lg shadow-lg border border-[#2b3546]
                bg-gradient-to-b from-[#0f1115] to-black flex flex-col items-center justify-center transition duration-300 hover:scale-105
                ${isOffset ? 'md:translate-y-10' : ''}`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative mb-2">
                  <Image
                    src={project.img}
                    alt={`Project ${i + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-xs text-gray-300 text-center leading-snug">
                  {project.title.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
