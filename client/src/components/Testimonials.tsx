'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


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
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!testimonialRef.current) return;

    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-[600px] mx-auto mt-32 mb-32 text-center">
      <h2 className="text-4xl font-bold mb-4">We are in a good company</h2>
      <p className="text-gray-400 mb-6">
        Our Clients have shown great appreciation to our projects and
        <br />
        we&apos;re happy to share some of their feedback below
      </p>

      {/* Testimonial Content with Buttons */}
      <div className="relative bg-transparent p-6 rounded-lg text-center">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>

        <div ref={testimonialRef}>
          <p className="text-lg text-gray-300 italic leading-relaxed">
            `&quot;`{testimonials[currentTestimonial].quote}`&quot;`
          </p>
          <h4 className="text-lg font-bold mt-4">
            {testimonials[currentTestimonial].name}
          </h4>
          <div className="flex items-center justify-center gap-3 mt-1">
            <p className="text-gray-400">
              {testimonials[currentTestimonial].company}
            </p>
            <span className="w-[1px] h-5 bg-gray-500"></span>
            <Image
              src="/HubZeroLogoICO.png"
              alt="Hubzero Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
        >
          <FaArrowRight className="text-white text-xl" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
