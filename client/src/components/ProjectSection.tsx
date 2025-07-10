// File: src/components/ProjectSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: ["SOFTWARE & HARDWARE", "SOLUTIONS"], img: "/images/project1.png" },
  { title: ["WEBSITE", "DEVELOPMENT"], img: "/images/project2.png" },
  { title: ["SEO"], img: "/images/project3.png" },
  { title: ["BRANDING &", "ADS"], img: "/images/project4.png" },
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
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
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
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-20">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <h2 className="text-5xl font-bold text-left leading-[1.1]">
          Our Projects <br />& Fields
        </h2>
        <div ref={projectsRef} className="grid grid-cols-2">
          <div className="grid grid-rows-2 gap-4">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="w-[210px] h-[210px] p-5 rounded-lg shadow-lg flex flex-col items-center justify-center 
                           border border-[#2b3546] bg-gradient-to-b from-[#0f1115] to-black"
              >
                <div className="w-20 h-20 mx-auto mb-2 relative">
                  <Image
                    src={project.img}
                    alt="Project"
                    fill
                    className="object-cover rounded"
                  />
                </div>

                <p className="text-xs text-gray-300 text-center">
                  {project.title.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-rows-2 gap-4 md:translate-y-10">
            {projects.slice(2, 4).map((project, index) => (
              <div
                key={index}
                className="w-[210px] h-[210px] p-5 rounded-lg shadow-lg flex flex-col items-center justify-center 
                           border border-[#2b3546] bg-gradient-to-b from-[#0f1115] to-black"
              >
                <div className="w-20 h-20 mx-auto mb-2 relative">
                  <Image
                    src={project.img}
                    alt="Project"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-xs text-gray-300 text-center">
                  {project.title.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
