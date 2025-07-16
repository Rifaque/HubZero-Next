'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-hidden px-6 py-32 flex items-center justify-center">
        {/* Glowing Background Orbs */}
        <div className="absolute -z-10 inset-0 pointer-events-none">
          <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-[#3ABEFF33] blur-[180px]" />
          <div className="absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-[#665DCD33] blur-[180px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <h1 className="text-4xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-[var(--text-muted)] mb-8 text-center">
            Have an idea or a question? Reach out! ✨
          </p>

          <form
            action="https://formspree.io/f/xqalkylo"
            method="POST"
            className="space-y-6"
          >
            {/* Formspree hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New message from HubZero Website" />
            <input type="hidden" name="_next" value="https://hubzero.in/thanks" />

            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition"
            >
              <PiPaperPlaneRightFill className="text-lg" />
              Send Message
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
