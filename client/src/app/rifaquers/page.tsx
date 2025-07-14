import type { Metadata, Viewport } from 'next';
import Head from 'next/head';
import RifaqueClient from '@/components/RifaqueClient';


const buildTime = new Date().toISOString();

export const metadata: Metadata = {
  title: 'Rifaque Ahmed | Portfolio',
  description: 'Portfolio of Rifaque Ahmed – Full Stack Developer.',
  keywords: ['Rifaque Ahmed', 'portfolio', 'Full Stack', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Rifaque Ahmed' }],
  icons: {
    icon: '/RSX-favicon.ico?v=2',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  },
  openGraph: {
    title: 'Rifaque Ahmed | Portfolio',
    description: "Explore the official portfolio of Rifaque Ahmed, a Full Stack Developer skilled in React, Node.js, Python, and modern web technologies. Browse projects, skills, and contact details.",
    url: 'https://hubzero.in/rifaque',
    images: [
    {
      url: 'https://hubzero.in/rifaque-thumbnail.png',
      width: 1200,
      height: 630,
      alt: 'Rifaque Portfolio Banner',
    },
    {
      url: 'https://hubzero.in/rifaque-thumbnail-square.png',
      width: 630,
      height: 630,
      alt: 'Rifaque Portfolio Thumbnail Square',
    },
  ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rifaque Ahmed | Portfolio',
    description: "Hi, I'm Rifaque—a passionate Full Stack Developer.",
    images: [
    'https://hubzero.in/rifaque-thumbnail.png',
    'https://hubzero.in/rifaque-square-thumbnail.png',
    ],
  },
  other: {
    'article:published_time': '2025-07-08T00:00:00Z',
    'article:modified_time': buildTime,
    'article:author': 'https://hubzero.in/rifaque',
    'article:section': 'Portfolio',
    'canonical': 'https://hubzero.in/rifaque',
  },
};

export const viewport: Viewport = {
  themeColor: '#0e0e10',
};

export default function Page() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rifaque Ahmed",
              "url": "https://hubzero.in/rifaque",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://github.com/Rifaque",
                "https://linkedin.com/in/rifaque-akrami"
              ]
            }),
          }}
        />
      </Head>
      <RifaqueClient />
    </>
  );
}
