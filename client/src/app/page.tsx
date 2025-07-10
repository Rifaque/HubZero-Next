// File: src/app/page.tsx
'use client';

import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-6xl font-extrabold mb-6 text-white animate-fade-in">
          Welcome to <br/>HubZero Community
        </h1>
        <p className="text-xl max-w-2xl text-gray-300 mb-6">
          Welcome to Hubzero! We deliver top-quality solutions with a user-friendly experience,
          specializing in graphic design, software development, branding, UI/UX, web design, and more. 
          Join us and bring your ideas to life!🚀
        </p>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg text-lg font-semibold text-white transition relative overflow-hidden 
          bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] hover:opacity-80"
        >
          <span className="relative z-10">GET IN TOUCH</span>
        </a>
      </div>

      <AboutSection />
      <ProjectSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
