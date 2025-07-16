'use client';

export default function CTASection() {
  return (
    <section className="relative bg-[var(--bg)] text-[var(--text)] py-20 px-6 text-center overflow-hidden">
      {/* Join Hubzero Team */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D2AB67] via-[#5FA4E6] to-[#665DCD] bg-clip-text text-transparent leading-tight">
          Join <br className="hidden sm:block" /> Hubzero Team
        </h2>
        <div>
          <p className="text-[var(--text-muted)] mb-4">
            Join our community of creators, innovators, and visionaries who use cutting-edge design and
            technology to bring ideas to life and elevate digital experiences for everyone.
          </p>
          <p className="text-[var(--text-muted)] mb-6">
            As our name suggests – Hubzero is a hub of creativity and innovation. We are a team of skilled designers,
            developers, and strategists, passionate about crafting impactful digital solutions, pushing boundaries,
            and enjoying the process along the way!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 border-b border-transparent hover:border-blue-400 transition duration-300"
          >
            Learn more about working with us <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative z-10 mt-28 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold">Contact Us</h2>
        <p className="text-[var(--text-muted)] mt-4 leading-relaxed">
          We are always open to exciting collaborations! Whether you&apos;re a business in need of digital solutions,
          a designer or developer eager to innovate, or someone with a great idea — let&apos;s connect and create
          something amazing together!
        </p>
        <a href="/contact">
          <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            GET IN TOUCH
          </button>
        </a>
      </div>
    </section>
  );
}
