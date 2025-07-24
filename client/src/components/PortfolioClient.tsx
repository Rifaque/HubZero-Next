'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import {
  FaCode,
  FaFileAlt,
  FaGithub,
  FaExternalLinkAlt,
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
  FaTools,
  FaComments, 
  FaSitemap,
  FaUsers, 
  FaClipboardList, 
  FaThLarge, 
  FaProjectDiagram, 
  FaToolbox,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaMicrophone,
  FaChalkboardTeacher,
  FaPaintBrush,
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
  SiFigma,
  SiAdobexd,
  SiNotion,
  SiFramer,
  SiTrello,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiJest,
  SiPostman,
  SiArduino,
  SiRaspberrypi,
  SiGoogleanalytics,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiPytorch,
  SiGooglecloud,
  SiPlotly,
  SiCplusplus,
  SiCoursera,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { PiFloppyDiskFill, PiPaintBrushBroadBold } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiBarChartSquare, BiLayer } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { TbAssemblyFilled, TbClick, TbVectorBezier } from "react-icons/tb";
import { GiCircuitry } from "react-icons/gi";
import { MdOutlineDashboard, MdOutlineTrackChanges, MdPhoneIphone } from "react-icons/md";
import { BsBroadcast } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";        // User Research


import Image from 'next/image';
import type { PortfolioData } from '@/types/portfolio';
import { motion } from 'framer-motion';
import CommandTerminal from "@/components/CommandTerminal";
import CmdButton from "@/components/CmdButton";

type Props = {
  data: PortfolioData;
};

type SocialLink = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const categoryIconMapping: Record<string, JSX.Element> = {
  "Languages": <FaCode />,
  "Web Development": <FaGlobe />,
  "UI/UX & Design": <FaDesktop />,
  "UI/UX": <FaDesktop />,
  "Design": <PiPaintBrushBroadBold />,
  "Interface": <FaReact />,
  "Tools": <FaTools />,
  "Backend": <FaNodeJs />,
  "Dev Tools": <FaWrench />,
  "Databases": <PiFloppyDiskFill />,
  "Environments": <VscVscode />,
  "Electronics": <GiCircuitry />,
  "Communication Protocols": <BsBroadcast />,
  "Communication": <BsBroadcast />,
  "SEO": <SiGoogleanalytics />,
  "Branding": <FaFileAlt />,
  "Project & Client Management": <FaWrench />,
  "Electronics & Tech": <GiCircuitry />,
  "Data Science": <FaChartLine />,
  "Artificial Intelligence": <FaBrain />,
  "Presentation": <FaChalkboardTeacher />,
  "Data Visualization": <BiBarChartSquare />,
  "Frameworks & Libraries": <FiPackage />,
  "Cloud": <SiGooglecloud />,
};


const skillIconMapping: Record<string, JSX.Element> = {
  // 🖥️ Languages
  "Python": <FaPython />,
  "JavaScript": <FaJsSquare />,
  "Java": <FaJava />,
  "C": <SiCoursera />,
  "C++": <SiCplusplus />,
  "Assembly": <TbAssemblyFilled />,
  "Verilog": <SiVercel />,

  // 🎨 UI/UX & Design
  "Design": <FaFileAlt />,
  "Figma": <SiFigma />,
  "Adobe XD": <SiAdobexd />,
  "Wireframing": <MdOutlineDashboard />,
  "UI/UX": <FaDesktop />,
  "Design Systems": <BiLayer />,
  "User Research": <LuClipboardList />,
  "Prototyping": <TbVectorBezier />,
  "Responsive Design": <MdPhoneIphone />,
  "Usability Testing": <MdOutlineTrackChanges />,
  "Interaction Design": <TbClick />,

  // 🛠️ Tools
  "Tools": <FaWrench />,
  "Notion": <SiNotion />,
  "Framer": <SiFramer />,
  "Trello": <SiTrello />,

  // 🔙 Backend
  "Node.js": <FaNodeJs />,
  "Express": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,

  // 🧪 Dev Tools
  "Docker": <SiDocker />,
  "Redis": <SiRedis />,
  "Jest": <SiJest />,
  "Postman": <SiPostman />,

  // ⚡ Electronics
  "Electronics": <PiFloppyDiskFill />,
  "Arduino": <SiArduino />,
  "Raspberry Pi": <SiRaspberrypi />,

  // 💬 Communication Protocols
  "I2C": <FaGlobe />,
  "UART": <FaGlobe />,
  "HTTP APIs": <FaGlobe />,

  // 🌐 Web Dev
  "React": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiStreamlit />, // Placeholder icon
  "CSS": <FaCss3Alt />,
  "HTML": <FaHtml5 />,
  "Tkinter": <FaDesktop />,
  "Flask": <SiFlask />,
  "Streamlit": <SiStreamlit />,

  // 🗄️ Databases
  "SQL": <SiMysql />,
  "SQLite": <SiSqlite />,
  "MySQL": <SiMysql />,

  // 💻 Environments
  "Cloudflare": <SiCloudflare />,
  "NGINX": <SiNginx />,
  "VS Code": <VscVscode />,
  "Git": <FaGitAlt />,
  "Web Development": <FaGlobe />,

  // 🖌️ Design
  "Inkspace": <FaFileAlt />, 
  "Visual Design": <FaPaintBrush />,

  // Tools
  "Miro": <FaProjectDiagram />, // Closest visual, or <FaFileAlt /> as fallback
  "ADK Tools": <FaToolbox />,   // Assumed Android Dev Kit tools? Generic toolbox icon
  "Google Cloud": <SiGooglecloud/>,

  // Project & Client Management
  "Agile Workflow": <FaProjectDiagram />,
  "Team Leadership": <FaUsers />,
  "Resource Planning": <FaClipboardList />,
  "Client Communication": <FaComments />,

  // Electronics & Tech
  "Circuit Design": <FaSitemap />,
  "Soldering": <FaWrench />,
  "Prototyping Boards": <FaThLarge />,

  // 📊 Data Science
  "Machine Learning": <FaRobot />,
  "Data Cleaning": <FaWrench />,
  "Data Analysis": <FaChartLine />,
  "TensorFlow": <SiTensorflow />,
  "scikit-learn": <SiScikitlearn />,
  "pandas": <SiPandas />,
  "PyTorch": <SiPytorch />,
  "matplotlib": <SiPlotly />,
  "seaborn": <SiPlotly />,

  // 🤖 AI
  "AI Research": <FaBrain />,
  "ML Research": <FaBrain />,
  "Algorithm Development": <FaProjectDiagram />,

  // 🎤 Presentation
  "Public Speaking": <FaMicrophone />,
  "Presentation Design": <FaChalkboardTeacher />,
  "Complex Concept Simplification": <FaChalkboardTeacher /> // fallback for explanation-like topics
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const formatLabel = (cat: string) =>
  cat.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioClient({ data }: Props) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showCmd, setShowCmd] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const socialLinks: SocialLink[] = [
    { label: 'GitHub', href: data.socials.github, icon: <FaGithub /> },
    { label: 'LinkedIn', href: data.socials.linkedin, icon: <FaLinkedin /> },
    { label: 'Email', href: data.socials.email, icon: <FaEnvelope /> },
  ];

  const allCategories = ['All', ...new Set(data.projects.flatMap(p => p.categories))];
  const CATEGORIES = allCategories;


  // 🔑 Global keyboard toggle
  useEffect(() => {
    const handleGlobalToggle = (e: KeyboardEvent) => {
      if ((e.key === "`" || e.key === "~") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setShowCmd(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalToggle);
    return () => window.removeEventListener("keydown", handleGlobalToggle);
  }, []);

  useEffect(() => {
    document.title = `${data.name} | Portfolio`;
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.name]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const filteredProjects = filter === 'All'
    ? data.projects
    : data.projects.filter((p) => p.categories.includes(filter));

return (
    <main className="bg-[#0e0e10] text-white font-mono scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/50 border-b border-white/10 px-6 py-3 flex justify-between items-center z-50">
        <h1 onClick={() => scrollTo('hero')} className="text-[#3ABEFF] font-bold cursor-pointer">
          &lt;<span className="text-gray-100">{data.name}</span> /&gt;
        </h1>
        <div className="hidden md:flex gap-6 text-white/70 text-sm">
          {['about', 'skills', 'projects','contact'].map((sec) => (
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
        <div className="fixed top-[44px] w-full bg-[#0e0e10] border-b border-white/10 z-40 px-6 py-4 flex flex-col gap-4">
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
        <p className="text-sm text-[#3ABEFF]">~/portfolio/{data.username}</p>
        <h1 className="mt-2 font-bold text-gray-100 text-4xl md:text-6xl">
          <span className="text-green-400">$</span> Hello, I&apos;m{' '}
          <span className="text-[#3ABEFF]">{data.name}</span>
          <span className="animate-pulse">_</span>
        </h1>
        <p className="mt-4 text-gray-400">
          <Typewriter
            words={data.typewriter}
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
            href={data.resume}
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
                {data.about[0]}  
            </p>
            <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
                {data.about[1]}  
            </p>
            <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                {data.about[2]}  
            </p>


            {/* Socials */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={data.socials.linkedin} target="_blank" className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={data.socials.github} target="_blank" className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition">
                <FaGithub /> GitHub
              </a>
              <a href={data.socials.email} className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition">
                <FaEnvelope /> Email
              </a>
            </div>

            {/* Location */}
            {data.location && (
                <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                    <GoLocation className="text-[#3ABEFF]" />
                    <span>{data.location}</span>
                </div>
            )}
          </div>


        </div>
      </section>



      {/* Skills */}
      <section id="skills" className="bg-zinc-900 px-6 py-20">
        <h2 className="text-2xl font-bold text-[#3ABEFF] text-center mb-10">Skills & Tools</h2>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:flex-wrap gap-6">
          {data.skills.map((group, index) => (
            <div key={index} className="flex-1 min-w-[280px] bg-white/5 p-6 rounded-lg">
                <h3 className="flex items-center gap-2 font-semibold mb-4 text-[#3ABEFF]">
                  {categoryIconMapping[group.category] && (
                    <span className="text-lg">{categoryIconMapping[group.category]}</span>
                  )}
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => {
                    const icon = skillIconMapping[item];
                    return (
                    <motion.span
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {icon && <span className="text-lg">{icon}</span>}
                      {item}
                    </motion.span>
                    );
                })}
                </div>
            </div>
            ))}
        </div>
      </section>


      {/* Projects */}
        <section id="projects" className="px-6 py-20">
        <h2 className="text-2xl font-bold text-[#3ABEFF] text-center mb-6">Featured Projects</h2>

        {/* Categories (Filter) */}
        <div className="flex justify-center gap-4 mb-8 overflow-x-auto px-2 snap-x">
            {CATEGORIES.map((cat) => (
            <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1 rounded-full transition border ${
                filter === cat ? 'bg-[#3ABEFF] text-black' : 'bg-white/10 text-white'
                }`}
            >
                {formatLabel(cat)}
            </button>
            ))}
        </div>

        {/* Project Grid */}
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
        >
            {filteredProjects.map((p) => (
            <motion.div
                key={p.name}
                variants={item}
                transition={{ duration: 0.4 }}
                className="bg-white/5 rounded-lg overflow-hidden shadow-lg group hover:shadow-[0_0_20px_#3ABEFF33] transition-transform hover:-translate-y-1"
            >
                {/* Screenshot */}
                {p.screenshot && (
                    <div className="relative h-44">
                        <Image
                        src={p.screenshot}
                        alt={p.name}
                        fill
                        className="object-cover"
                        />
                    </div>
                )}


                {/* Project Info */}
                <div className="p-5">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-[#3ABEFF]">{p.name}</h3>
                    <span className="text-xs whitespace-nowrap bg-white/10 px-2 py-0.5 rounded-full">
                    {p.start}
                    <span className="hidden sm:inline"> – {p.end}</span>
                    </span>
                </div>

                <p className="text-gray-300 mt-2 text-sm line-clamp-3">{p.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                    <span key={t} className="bg-white/10 px-3 py-1 rounded-full text-xs">{t}</span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 flex items-center gap-2 rounded bg-[#3ABEFF] text-black text-sm hover:brightness-90 transition"
                      >
                        <FaExternalLinkAlt size={14} /> Demo
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 flex items-center gap-2 rounded border border-white/40 text-sm hover:bg-white/10 transition"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
            </motion.div>
            ))}
        </motion.div>

        {/* See More on GitHub */}
        <div className="mt-12 flex justify-center">
            <a
            href={data.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/10 text-white px-6 py-2 rounded hover:bg-white/10 focus:ring-2 focus:ring-[#3ABEFF] transition"
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
                action={`https://formsubmit.co/${data.socials.email.replace('mailto:', '')}`}
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
                    <a
                    href={data.socials.email}
                    className="hover:underline hover:text-white transition"
                    >
                    {data.socials.email.replace("mailto:", "")}
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <AiOutlinePhone className="text-[#3ABEFF]" />
                    <a
                    href={`tel:${data.phone.replace(/ /g, '')}`}
                    className="hover:underline hover:text-white transition"
                    >
                    {data.phone}
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <GoLocation className="text-[#3ABEFF]" />
                    <span>{data.location}</span>
                </div>
                </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#3ABEFF] mb-4">Find Me Online</h3>
                <div className="flex gap-6 text-sm text-white/80">
                {data.socials.github && (
                    <a
                    href={data.socials.github}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-[#3ABEFF] transition"
                    >
                    <AiFillGithub /> GitHub
                    </a>
                )}
                {data.socials.linkedin && (
                    <a
                    href={data.socials.linkedin}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-[#3ABEFF] transition"
                    >
                    <AiFillLinkedin /> LinkedIn
                    </a>
                )}
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Scroll to Top & Footer */}
      {showTopBtn && !showCmd && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#3ABEFF] text-black px-4 py-2 rounded-full shadow hover:bg-[#56D4FF] transition"
        >
          ↑ Top
        </button>
      )}
      <footer className="text-center py-10 text-sm text-white/40 border-t border-white/10">
        <p>© 2025 Hub Zero • Designed, developed & deployed in dark mode 💻🚀</p>
        <div className="mt-3 flex justify-center gap-4">
          <FaDiscord className="w-5 h-5 text-white/70" />
          <FaYoutube className="w-5 h-5 text-white/70" />
          <FaInstagram className="w-5 h-5 text-white/70" />
        </div>
      </footer>
      
    <CmdButton onClick={() => setShowCmd(!showCmd)} />
    <CommandTerminal
      data={data}
      show={showCmd}
      onToggle={() => setShowCmd(false)}
      history={history}
      setHistory={setHistory}
    />
    </main>
  );
}
