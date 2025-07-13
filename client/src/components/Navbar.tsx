"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsOpen(false); // close dropdown if open
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md py-4 px-6 md:px-10 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-8 w-8">
          <Image
            src="/HubZeroLogoICO.png"
            alt="Hub Zero Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-xl font-bold text-white">HUBZERO</h1>
      </Link>

      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden text-white text-2xl z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
        <a href="/about" className="text-gray-300 hover:text-white transition">ABOUT US</a>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition flex items-center gap-1"
          >
            OUR SERVICES <span className="text-xs">▼</span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 mt-2 w-48 bg-black/90 border border-gray-700 rounded-md shadow-lg overflow-hidden"
              >
                <a href="#web-development" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition">Web Development</a>
                <a href="#ui-ux" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition">UI/UX Design</a>
                <a href="#branding" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition">Branding</a>
                <a href="#seo" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition">SEO Optimization</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#work" className="text-gray-300 hover:text-white transition">WORK WITH US</a>
        <a href="#blog" className="text-gray-300 hover:text-white transition">BLOG</a>
      </div>

      {/* Contact Link */}
      <a
        href="#contact"
        className="hidden md:flex relative items-center text-gray-300 hover:text-white transition"
      >
        <span className="before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-[#665DCD] before:to-[#5FA4E6] before:inline-block before:mr-2"></span>
        GET IN TOUCH
      </a>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 md:hidden z-40"
          >
            <a href="/about" className="text-gray-300 hover:text-white transition">ABOUT US</a>

            {/* Mobile Dropdown as a collapsible group */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-400 text-sm mb-1">OUR SERVICES</span>
              <a href="#web-development" className="text-gray-300 hover:text-white transition">Web Development</a>
              <a href="#ui-ux" className="text-gray-300 hover:text-white transition">UI/UX Design</a>
              <a href="#branding" className="text-gray-300 hover:text-white transition">Branding</a>
              <a href="#seo" className="text-gray-300 hover:text-white transition">SEO Optimization</a>
            </div>

            <a href="#work" className="text-gray-300 hover:text-white transition">WORK WITH US</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition">BLOG</a>
            <a href="#contact" className="text-white font-medium mt-2">GET IN TOUCH</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
