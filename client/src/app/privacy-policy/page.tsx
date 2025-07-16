'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 min-h-screen">
      <Navbar />

      <section className="px-6 py-24 sm:py-32 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--text-muted)] mb-6 text-base sm:text-lg leading-relaxed"
        >
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit and interact with hubzero.in.
        </motion.p>

        <div className="space-y-8 text-sm sm:text-base text-[var(--text-muted)]">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">1. Information We Collect</h2>
            <p className="mt-2">
              We collect only the information you voluntarily provide, such as your name, email address, and message when submitting a form on our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">2. How We Use Your Information</h2>
            <p className="mt-2">
              Your information is used solely for communication and support. We never sell or share your data with unauthorized third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">3. Data Security</h2>
            <p className="mt-2">
              We implement reasonable technical and organizational measures to safeguard your data. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">4. Third-Party Form Services</h2>
            <p className="mt-2">
              We use <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Formspree</a> and <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">FormSubmit</a> to process contact form submissions. These services collect your form data on our behalf and forward it to us via email. Please review their respective privacy policies to understand how they handle your information:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Formspree Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://formsubmit.co/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  FormSubmit Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">5. Cookies & Analytics</h2>
            <p className="mt-2">
              We currently do not use tracking cookies or analytics services. If this changes in the future, we will update this policy accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">6. Policy Updates</h2>
            <p className="mt-2">
              We may revise this Privacy Policy from time to time. Changes will be reflected on this page with a new &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">7. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, feel free to reach out through our <a href="/contact" className="text-blue-400 hover:underline">contact form</a>.
            </p>
          </div>

          <p className="mt-8 text-xs text-[var(--text-muted)]">Last updated: July 16, 2025</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
