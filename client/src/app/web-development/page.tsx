import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';



export const metadata: Metadata = {
  title: 'Web Development | HubZero',
  description: 'Explore how we build high-performance websites tailored to your business goals.',
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen px-6 bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="max-w-4xl py-32 mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Web Development</h1>
        <p className="text-[var(--text-muted)] mb-12 text-lg">
          We build fast, responsive, and scalable websites using the latest technologies. Whether you&apos;re a startup or enterprise, we bring your ideas to life with clean code and seamless UI.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What we offer:</h2>
            <ul className="list-disc pl-6 text-[var(--text-muted)]">
              <li>Custom Website Development</li>
              <li>MERN Stack Solutions</li>
              <li>CMS & eCommerce Platforms</li>
              <li>Performance Optimization</li>
              <li>Responsive & Mobile-First Design</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Why choose us?</h2>
            <p className="text-[var(--text-muted)]">
              Our full-stack engineers and designers collaborate to ensure every project is technically sound and visually impressive. We use best practices in accessibility, SEO, and security.
            </p>
          </div>
        </div>

        <Link href="/contact" className="inline-block mt-12 px-6 py-3 rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition font-semibold">
          Start Your Project
        </Link>
      </div>
      <Footer />
    </main>
  );
}
