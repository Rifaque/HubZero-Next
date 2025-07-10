// File: src/components/CTASection.tsx
'use client';

export default function CTASection() {
  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 w-[300px] h-[300px] bg-gradient-radial from-[#5FA4E6] to-transparent opacity-40 blur-2xl" />
        <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-gradient-radial from-[#665DCD] to-transparent opacity-40 blur-2xl" />
      </div>

      {/* Join Hubzero Team Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        <h2 className="text-5xl font-bold text-left bg-gradient-to-r from-[#D2AB67] via-[#5FA4E6] to-[#665DCD] bg-clip-text text-transparent">
          Join <br /> Hubzero Team
        </h2>
        <div className="text-left">
          <p className="text-gray-300 mb-4">
            Join our community of creators, innovators, and visionaries who use cutting-edge design and
            technology to bring ideas to life and elevate digital experiences for everyone.
          </p>
          <p className="text-gray-300 mb-6">
            As our name suggests – Hubzero is a hub of creativity and innovation. We are a team of skilled designers,
            developers, and strategists, passionate about crafting impactful digital solutions, pushing boundaries,
            and enjoying the process along the way!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 border-b border-transparent hover:border-blue-400 transition"
          >
            Learn more about working with us <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative z-10 mt-32">
        <h2 className="text-5xl font-bold">Contact Us</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          We are always open to exciting collaborations! Whether you&apos;re a business in need of digital solutions,
          a designer or developer eager to innovate, or someone with a great idea, let&apos;s connect and create something amazing together!
        </p>
        <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] text-white text-lg font-semibold">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
}
