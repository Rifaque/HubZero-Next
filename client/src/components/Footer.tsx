// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="text-left md:text-start">
          <h4 className="text-white font-semibold text-lg mb-2">HUBZERO TEAM</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white transition">Work with Us</Link>
            </li>
          </ul>
          <p className="text-sm mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Terms of Use & Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:items-end md:text-right mt-6 md:mt-0">
          <div className="w-16 h-16 mb-2 relative">
            <Image
              src="/HubZeroLogoICO.png"
              alt="HubZero Logo"
              fill
              className="object-contain"
            />
          </div>

          <h4 className="text-white font-semibold text-lg">HUBZERO</h4>
          <p className="text-sm mt-2">© 2025 HubZero Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
