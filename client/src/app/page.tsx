import Home from '@/components/Home';

export const metadata = {
  title: "HubZero | Home",
  description: "HubZero is a creative community delivering high-quality software, branding, and design.",
  openGraph: {
    title: "HubZero | Home",
    description: "Join the creative collective of developers and designers at HubZero.",
    url: "https://hubzero.in/",
    siteName: "HubZero",
    images: [
      {
        url: "/og-image.png", // Put your OG image in the public folder
        width: 512,
        height: 512,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HubZero | Home",
    description: "Creative development, design, and tech at HubZero.",
    images: ["/og-image.png"],
  },
};


export default function HomePage() {
  return <Home />;
}
