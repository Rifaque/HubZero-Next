import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UI/UX Design | HubZero',
  description: 'Design experiences that engage, inspire, and convert.',
};

export default function UIUXPage() {
  return (
    <main className="min-h-screen px-6 bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">UI/UX Design</h1>
        <p className="text-[var(--text-muted)] mb-12 text-lg">
          We craft intuitive, beautiful, and user-centric interfaces. Our design process is guided by empathy, strategy, and interaction best practices.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Design Focus:</h2>
            <ul className="list-disc pl-6 text-[var(--text-muted)]">
              <li>User Research & Wireframes</li>
              <li>Prototyping & Usability Testing</li>
              <li>Design Systems</li>
              <li>Micro-interactions & Animations</li>
              <li>Accessibility-First Approach</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Design that performs.</h2>
            <p className="text-[var(--text-muted)]">
              Great design is more than looks — it&apos; s about creating frictionless flows and meaningful interactions. We prioritize clarity, feedback, and delight in every pixel.
            </p>
          </div>
        </div>

        <Link href="/contact" className="inline-block mt-12 px-6 py-3 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition font-semibold">
          Talk to a Designer
        </Link>
      </div>
      <Footer />
    </main>
  );
}
