import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Optimization | HubZero',
  description: 'Rank higher, load faster, and convert better with expert SEO.',
};

export default function SEOPage() {
  return (
    <main className="min-h-screen px-6  bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">SEO Optimization</h1>
        <p className="text-[var(--text-muted)] mb-12 text-lg">
          Search visibility matters. We combine technical SEO, content strategy, and performance optimization to boost your site’s discoverability and traffic.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">SEO Services:</h2>
            <ul className="list-disc pl-6 text-[var(--text-muted)]">
              <li>On-page SEO (Headings, Metadata, URLs)</li>
              <li>Performance & Core Web Vitals</li>
              <li>Semantic HTML & Accessibility</li>
              <li>Keyword Research & Mapping</li>
              <li>Structured Data & Schema Markup</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Optimized by design.</h2>
            <p className="text-[var(--text-muted)]">
              Great websites deserve to be seen. We integrate SEO from day one — no shortcuts, no fluff. Just clean, performant, search-engine-friendly code.
            </p>
          </div>
        </div>

        <Link href="/contact" className="inline-block mt-12 px-6 py-3 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition font-semibold">
          Improve Your SEO
        </Link>
      </div>
      <Footer />
    </main>
  );
}
