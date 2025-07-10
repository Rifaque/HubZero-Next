// app/RifaqueClient.jsx
'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGlobe,
  FaDesktop,
  FaWrench,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiFlask,
  SiStreamlit,
  SiMysql,
  SiCloudflare,
  SiNginx,
  SiMongodb,
  SiSqlite,
  SiExpress,
  SiNextdotjs,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { PiFloppyDiskFill } from 'react-icons/pi';
import { MdDeveloperMode } from 'react-icons/md';
import { FiFigma, FiGithub } from 'react-icons/fi';

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineDocumentText } from 'react-icons/hi';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Filter categories
const CATEGORIES = ['All', 'Web', 'Desktop'];

type Project = {
  name: string;
  desc: string;
  longDesc: string;
  repo: string;
  live?: string;
  tech: string[];
  categories: string[];
  start: string;
  end: string;
  screenshot?: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const projects: Project[] = [
  {
    name: 'eCommerce Store',
    desc: 'Luxury eCommerce platform featuring advanced product filtering, optimized image delivery, and a seamless shopping experience.',
    longDesc: 'A luxury eCommerce platform with advanced product filtering, user authentication, shopping carts, and optimized image delivery via Imgix for lightning‑fast load times.',
    repo: 'https://github.com/Rifaque/Bhatkal-Time-Luxe',
    live: 'https://time-luxe.example.com',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Imgix'],
    categories: ['Web'],
    start: 'Apr 2025',
    end: 'May 2025',
    screenshot: '/screenshots/ecommerce-thumbnail.png',
  },
  {
    name: 'Hub Zero Website',
    desc: 'Official website of Hub Zero, built with Next.js and Tailwind CSS, deployed using NGINX on Ubuntu and accelerated with Cloudflare.',
    longDesc: 'Official Hub Zero site built with Next.js & Tailwind, featuring scroll‑snap sections, GSAP animations, and dynamic content, deployed on Ubuntu via NGINX and accelerated with Cloudflare CDN.',
    repo: 'https://github.com/Rifaque/HubZero-MERN',
    live: 'https://hubzero.in',
    tech: ['Next.js', 'Tailwind CSS', 'NGINX', 'Ubuntu', 'Cloudflare'],
    categories: ['Web'],
    start: 'Nov 2024',
    end: 'Present',
    screenshot: '/screenshots/hubzero-thumbnail.png',
  },
  {
    name: 'Hospital Management System',
    desc: 'Patient and staff record management system with login authentication and full CRUD capabilities.',
    longDesc: 'A desktop application for hospitals to manage patient records, appointments, and staff information. Built with Python and Tkinter, backed by a SQLite database.',
    repo: 'https://github.com/Rifaque/Hospital-Management-System',
    tech: ['Python', 'Tkinter', 'SQL'],
    categories: ['Desktop'],
    start: 'Jun 2024',
    end: 'Jul 2024',
    screenshot: '/screenshots/hospital-thumbnail.png',
  },
  {
    name: 'Blood Report Disease Diagnosis App',
    desc: 'A machine learning web app that predicts blood-related diseases using a trained Random Forest classifier.',
    longDesc: 'A Flask‑based web app that takes user blood test parameters and uses a trained Random Forest model to diagnose potential blood disorders.',
    repo: 'https://github.com/Rifaque/Blood-Report-Disease-Diagnosis-App',
    tech: ['Python', 'Flask', 'Random Forest', 'HTML', 'CSS'],
    categories: ['Web'],
    start: 'Oct 2024',
    end: 'Oct 2024',
    screenshot: '/screenshots/blood-app-thumbnail.png',
  },
  {
    name: 'College Management App',
    desc: 'Desktop application for managing students, courses, and academic tasks.',
    longDesc: 'A GUI application for academic institutes to handle student enrollments, course assignments, and task tracking. Developed with Python’s Tkinter and MySQL.',
    repo: 'https://github.com/Rifaque/College-Management-App',
    tech: ['Python', 'Tkinter', 'SQL'],
    categories: ['Desktop'],
    start: 'May 2023',
    end: 'Jun 2023',
    screenshot: '/screenshots/college-thumbnail.png',
  },
];

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Rifaque', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rifaque-akrami', icon: <FaLinkedin /> },
  { label: 'Email', href: 'mailto:rifaque.rs@gmail.com', icon: <FaEnvelope /> },
];

export default function RifaqueClient() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.title = 'Rifaque Ahmed | Portfolio';
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <main className="bg-[#0e0e10] text-white font-mono scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/50 border-b border-white/10 px-6 py-3 flex justify-between items-center z-50">
        <h1 onClick={() => scrollTo('hero')} className="text-[#3ABEFF] font-bold cursor-pointer">
          &lt;Rifaque /&gt;
        </h1>
        <div className="hidden md:flex gap-6 text-white/70 text-sm">
          {['about', 'skills', 'projects'].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className="hover:text-[#3ABEFF] transition"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? '✕' : <span className="text-2xl">☰</span>}
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed top-[64px] w-full bg-[#0e0e10] border-b border-white/10 z-40 px-6 py-4 flex flex-col gap-4">
          {['about', 'skills', 'projects', 'contact'].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className="hover:text-[#3ABEFF] transition"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}

        </div>
      )}

      {/* Hero */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="absolute w-[90vw] h-[90vw] max-w-[40rem] max-h-[40rem] bg-gradient-to-br from-[#3ABEFF] via-cyan-400 to-blue-300 rounded-full blur-[200px] opacity-30 animate-pulse -z-10" />
        <p className="text-sm text-[#3ABEFF]">~/portfolio/rifaque</p>
        <h1 className="mt-2 font-bold text-gray-100 text-4xl md:text-6xl">
          <span className="text-green-400">$</span> Hello, I&apos;m{' '}
          <span className="text-[#3ABEFF]">Rifaque</span>
          <span className="animate-pulse">_</span>
        </h1>
        <p className="mt-4 text-gray-400">
          <Typewriter
            words={[
              'Full Stack Developer',
              'Problem Solver',
              'Software Engineer',
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/Rifaque-Ahmed-Resume.pdf"
            download
            className="flex items-center gap-2 bg-[#3ABEFF] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#56D4FF] transition"
          >
            <FaFileAlt /> Download Resume
          </a>
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-5 py-2 transition text-sm"
            >
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 bg-[#0e0e10] text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Text */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3ABEFF] mb-6">About Me</h2>
            <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m a Computer Science student at Anjuman Institute of Technology and Management, set to graduate in 2026. As a passionate full stack developer, I build scalable and high-performance web applications, with hands-on experience in both frontend and backend technologies.
            </p>
            <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
              As the co-founder and lead developer at Hub Zero, I&apos;ve led several impactful projects including a full-featured eCommerce store, educational platforms, and predictive healthcare tools powered by AI. I&apos;m currently developing and maintaining Hub Zero&apos;s dynamic website, integrating advanced features like user authentication, admin dashboards, and real-time content management.
            </p>
            <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m proficient in <span className="text-[#3ABEFF] font-medium">React, Node.js, Express, and MongoDB</span>, and experienced in deployment tools like NGINX and Cloudflare. My tech stack also includes Python, JavaScript, Tailwind CSS, and modern frameworks like Next.js and Flask. I&apos;m familiar with authentication systems (JWT, OTP), cloud deployment, and server configuration on Ubuntu.
            </p>
            <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
              With a strong foundation in UI/UX design and software architecture, I strive to build applications that are not just functional, but also intuitive and responsive. I thrive in fast-paced environments and love collaborating with like-minded builders, and I'm actively seeking roles in full stack engineering, software development, or cloud infrastructure.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://linkedin.com/in/rifaque-akrami" target="_blank" className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Rifaque" target="_blank" className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition">
                <FaGithub /> GitHub
              </a>
              <a href="mailto:rifaque123@gmail.com" className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition">
                <FaEnvelope /> Email
              </a>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <GoLocation className="text-[#3ABEFF]" />
              <span>Bhatkal, Karnataka, India - 581320</span>
            </div>
          </div>


        </div>
      </section>



      {/* Skills */}
      <section id="skills" className="bg-zinc-900 px-6 py-20">
        <h2 className="text-2xl font-bold text-[#3ABEFF] text-center mb-10">Skills & Tools</h2>
        {/* First row: 3 boxes */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              title: 'Languages',
              icon: <MdDeveloperMode className="text-[#3ABEFF]" />,
              tags: [
                { icon: <FaPython />, label: 'Python' },
                { icon: <FaJsSquare />, label: 'JavaScript' },
                { icon: <FaJava />, label: 'Java' },
              ],
            },
            {
              title: 'Interface',
              icon: <FaReact className="text-[#3ABEFF]" />,
              tags: [
                { icon: <FaReact />, label: 'React' },
                { icon: <SiNextdotjs />, label: 'Next.js' },
                { icon: <SiStreamlit />, label: 'Tailwind CSS' },
                { icon: <FaCss3Alt />, label: 'CSS' },
                { icon: <FaDesktop />, label: 'Tkinter' },
                { icon: <SiFlask />, label: 'Flask' },
              ],
            },
            {
              title: 'Databases',
              icon: <PiFloppyDiskFill className="text-[#3ABEFF]" />,
              tags: [
                { icon: <SiMongodb />, label: 'MongoDB' },
                { icon: <SiMysql />, label: 'SQL' },
                { icon: <SiSqlite />, label: 'SQLite' },
              ],
            },
          ].map((cat) => (
            <div key={cat.title} className="bg-white/5 p-6 rounded-lg">
              <h3 className="flex items-center gap-2 font-semibold mb-4 text-[#3ABEFF]">
                {cat.icon} {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((t) => (
                  <span key={t.label} className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    {t.icon} {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Second row: 2 boxes */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Tools',
              icon: <FaWrench className="text-[#3ABEFF]" />,
              tags: [
                { icon: <SiCloudflare />, label: 'Cloudflare' },
                { icon: <SiNginx />, label: 'NGINX' },
                { icon: <HiOutlineDocumentText />, label: 'Postman' },
                { icon: <FiFigma />, label: 'Figma' },
                { icon: <FaGitAlt />, label: 'Git' },
                { icon: <VscVscode />, label: 'VS Code' },
              ],
            },
            {
              title: 'Web Development',
              icon: <FaGlobe className="text-[#3ABEFF]" />,
              tags: [
                { icon: <FaReact />, label: 'React' },
                { icon: <SiNextdotjs />, label: 'Next.js' },
                { icon: <FaHtml5 />, label: 'HTML' },
                { icon: <FaCss3Alt />, label: 'CSS' },
                { icon: <FaJsSquare />, label: 'JavaScript' },
                { icon: <SiExpress />, label: 'Express.js' },
                { icon: <FaNodeJs />, label: 'Node.js' },
              ],
            },
          ].map((cat) => (
            <div key={cat.title} className="bg-white/5 p-6 rounded-lg">
              <h3 className="flex items-center gap-2 font-semibold mb-4 text-[#3ABEFF]">
                {cat.icon} {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((t) => (
                  <span key={t.label} className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    {t.icon} {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-20">
        <h2 className="text-2xl font-bold text-[#3ABEFF] text-center mb-6">Featured Projects</h2>

        <div className="flex justify-center gap-4 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full transition border ${
                filter === cat ? 'bg-[#3ABEFF] text-black' : 'bg-white/10 text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-48">
                <Image src={p.screenshot!} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#3ABEFF]">{p.name}</h3>
                  <span className="text-xs whitespace-nowrap bg-white/10 px-2 py-0.5 rounded-full">
                    {p.start}
                    <span className="hidden sm:inline"> – {p.end}</span>
                  </span>
                </div>
                <p className="text-gray-300 mt-2 text-sm">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-white/10 px-3 py-1 rounded-full text-xs">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-[#3ABEFF] text-black text-sm"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded border border-white/40 text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More on GitHub Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Rifaque"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/10 text-white px-6 py-2 rounded hover:bg-white/10 transition"
          >
            <FiGithub className="w-5 h-5" />
            <span className="text-sm font-medium">See More on GitHub</span>
          </a>
        </div>
      </section>
       
       {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <h2 className="text-2xl font-bold text-[#3ABEFF] text-center mb-10">
          Get in Touch
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#3ABEFF] mb-4">Let’s Work Together</h3>
            <form
              action="https://formsubmit.co/rifaque123@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/10 text-sm text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3ABEFF] border border-white/10"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/10 text-sm text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3ABEFF] border border-white/10"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Project collaboration"
                  className="w-full bg-white/10 text-sm text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3ABEFF] border border-white/10"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full bg-white/10 text-sm text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3ABEFF] border border-white/10 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#3ABEFF] text-black text-sm font-semibold px-5 py-2 rounded hover:bg-[#56D4FF] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#3ABEFF] mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <AiOutlineMail className="text-[#3ABEFF]" />
                  <span>rifaque123@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlinePhone className="text-[#3ABEFF]" />
                  <span>+91 6364282251</span>
                </div>
                <div className="flex items-center gap-3">
                  <GoLocation className="text-[#3ABEFF]" />
                  <span>Bhatkal, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#3ABEFF] mb-4">Find Me Online</h3>
              <div className="flex gap-6 text-sm text-white/80">
                <a
                  href="https://github.com/Rifaque"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[#3ABEFF] transition"
                >
                  <AiFillGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rifaque-akrami"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[#3ABEFF] transition"
                >
                  <AiFillLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Scroll to Top & Footer */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#3ABEFF] text-black px-4 py-2 rounded-full shadow hover:bg-[#56D4FF] transition"
        >
          ↑ Top
        </button>
      )}
      <footer className="text-center py-10 text-sm text-white/40 border-t border-white/10">
        <p>© 2025 Rifaque • Designed, developed & deployed in dark mode 💻🚀</p>
        <div className="mt-3 flex justify-center gap-4">
          <FaDiscord className="w-5 h-5 text-white/70" />
          <FaYoutube className="w-5 h-5 text-white/70" />
          <FaInstagram className="w-5 h-5 text-white/70" />
        </div>
      </footer>
    </main>
  );
}
