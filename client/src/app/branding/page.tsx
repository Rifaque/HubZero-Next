import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Branding | HubZero',
  description: 'Strategic brand design that connects and inspires.',
};

export default function BrandingPage() {
  return (
    <main className="min-h-screen px-6 bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">Branding</h1>
        <p className="text-[var(--text-muted)] mb-12 text-lg">
          We help brands find their voice, shape their story, and stand out. Whether you’re starting fresh or rebranding, we align visuals with vision.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Branding Process:</h2>
            <ul className="list-disc pl-6 text-[var(--text-muted)]">
              <li>Logo & Identity Design</li>
              <li>Color Systems & Typography</li>
              <li>Voice & Messaging Guidelines</li>
              <li>Brand Guidelines & Assets</li>
              <li>Social Media Kits</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Make your mark.</h2>
            <p className="text-[var(--text-muted)]">
              Memorable brands are built with intention. We take the time to understand your mission, audience, and personality to create a visual identity that resonates.
            </p>
          </div>
        </div>

        <Link href="/contact" className="inline-block mt-12 px-6 py-3 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition font-semibold">
          Brand With Us
        </Link>
      </div>
      <Footer />
    </main>
  );
}
