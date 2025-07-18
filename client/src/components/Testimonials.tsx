"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Hubzero has been an absolute game-changer! The advertisement posters you designed were not only visually stunning but also highly effective in driving engagement and boosting our revenue. Your creativity, attention to detail, and strategic approach helped us reach a wider audience and maximize our impact. Looking forward to more amazing collaborations!",
    name: "Business Owner",
    company: "Bhatkally Startup Owner",
  },
  {
    quote:
      "The team at HubZero delivered an outstanding UI/UX design for our platform. Their attention to detail and creativity were unmatched!",
    name: "Sarah Johnson",
    company: "Tech Entrepreneur",
  },
  {
    quote:
      "SEO services by HubZero drastically improved our search rankings. Highly recommend their expertise for digital growth!",
    name: "David Smith",
    company: "E-commerce Owner",
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full px-4 sm:px-6 max-w-3xl mx-auto mt-20 mb-20 text-center text-[var(--text)]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">We are in a good company</h2>
      <p className="text-[var(--text-muted)] mb-8 text-base sm:text-lg">
        Our Clients have shown great appreciation to our projects and
        <br className="hidden sm:block" />
        were happy to share some of their feedback below
      </p>

      {/* Testimonial Content with Buttons */}
      <div className="relative bg-transparent px-4 py-6 sm:p-6 rounded-lg text-center">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 sm:left-[-50px] top-1/2 transform -translate-y-1/2 
          bg-[var(--border-muted)] p-2 rounded-full hover:bg-[var(--border)] transition"
        >
          <FaArrowLeft className="text-[var(--text)] text-lg sm:text-xl" />
        </button>

        <div ref={testimonialRef}>
          <p className="text-base sm:text-lg text-[var(--text-muted)] italic leading-relaxed">
            &quot;{testimonials[currentTestimonial].quote}&quot;
          </p>
          <h4 className="text-base sm:text-lg font-bold mt-4">
            {testimonials[currentTestimonial].name}
          </h4>
          <div className="flex items-center justify-center gap-3 mt-1 flex-wrap">
            <p className="text-[var(--text-muted)] text-sm sm:text-base">
              {testimonials[currentTestimonial].company}
            </p>
            <span className="w-[1px] h-5 bg-[var(--border-muted)] hidden sm:inline-block"></span>
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Image
                src="/HubZeroLogoICO.png"
                alt="Hubzero Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 20px, 24px"
              />
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-2 sm:right-[-50px] top-1/2 transform -translate-y-1/2 
          bg-[var(--border-muted)] p-2 rounded-full hover:bg-[var(--border)] transition"
        >
          <FaArrowRight className="text-[var(--text)] text-lg sm:text-xl" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === currentTestimonial
                ? "bg-[var(--text)]"
                : "bg-[var(--border-muted)]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
