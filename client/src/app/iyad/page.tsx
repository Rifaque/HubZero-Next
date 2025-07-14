import type { Metadata, Viewport } from 'next';
import Head from 'next/head';
import data from '@/data/iyad.json';
import PortfolioClient from '@/components/PortfolioClient';

const buildTime = new Date().toISOString();

export const metadata: Metadata = {
  title: `${data.fullname} | Portfolio`,
  description: `Portfolio of ${data.fullname} – ${data.title}.`,
  keywords: [data.fullname, 'portfolio', ...data.skills.flatMap(skill => skill.items)],
  authors: [{ name: data.fullname }],
  icons: {
    // icon: '/RSX-favicon.ico?v=2', // ← Only used by rifaque
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  },
  openGraph: {
    title: `${data.fullname} | Portfolio`,
    description: `Explore the official portfolio of ${data.fullname}, a ${data.title} skilled in modern web technologies. Browse projects, skills, and contact details.`,
    url: `https://hubzero.in/${data.username}`,
    // images: [                        // ← Only rifaque has custom OG images
    //   {
    //     url: `https://hubzero.in/${data.username}-thumbnail.png`,
    //     width: 1200,
    //     height: 630,
    //     alt: `${data.name} Portfolio Banner`,
    //   },
    //   {
    //     url: `https://hubzero.in/${data.username}-thumbnail-square.png`,
    //     width: 630,
    //     height: 630,
    //     alt: `${data.name} Portfolio Thumbnail Square`,
    //   },
    // ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${data.fullname} | Portfolio`,
    description: `Hi, I'm ${data.name} — a passionate ${data.title}.`,
    // images: [                        // ← Only rifaque has these
    //   `https://hubzero.in/${data.username}-thumbnail.png`,
    //   `https://hubzero.in/${data.username}-thumbnail-square.png`,
    // ],
  },
  other: {
    'article:published_time': '2025-07-08T00:00:00Z',
    'article:modified_time': buildTime,
    'article:author': `https://hubzero.in/${data.username}`,
    'article:section': 'Portfolio',
    'canonical': `https://hubzero.in/${data.username}`,
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
              "name": data.fullname,
              "url": `https://hubzero.in/${data.username}`,
              "jobTitle": data.title,
              "email": data.socials.email.replace(/^mailto:/, ''),
              "sameAs": Object.values(data.socials).filter(link => link.startsWith('http')),
              // "image": `https://hubzero.in/${data.username}-thumbnail.png`, // ← Only if custom image exists
            }),
          }}
        />
      </Head>
      <PortfolioClient data={data} />
    </>
  );
}
