'use client';

import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      {/* Background Gradient Behind Hero */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-[var(--home-grad-1)] via-[var(--home-grad-2)] to-transparent blur-2xl z-0 pointer-events-none" />

      {/* Hero Section */}
      <section
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32"
        aria-label="Hero Welcome Section"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 animate-fade-in leading-tight">
          Welcome to <br className="hidden sm:block" />
          HubZero Community
        </h1>
        <p className="text-base sm:text-xl max-w-2xl text-[var(--text-muted)] mb-8">
          We deliver top-quality solutions with a user-first experience — specializing in graphic design, software development, branding, UI/UX, and web design.
          Join us and bring your ideas to life! 🚀
        </p>

        <a
          href="/contact"
          className="px-6 py-3 rounded-lg text-lg font-semibold transition border border-[var(--border)] hover:bg-[var(--bg-light)]"
        >
          <span className="relative z-10">GET IN TOUCH</span>
        </a>
      </section>

      {/* Content Sections */}
      <AboutSection />
      <ProjectSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
