// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left Column: Links */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold text-lg mb-3">HUBZERO TEAM</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:text-white transition duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white transition duration-200">
                Work with Us
              </Link>
            </li>
          </ul>
          <p className="text-sm mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition duration-200">
              Terms of Use & Privacy Policy
            </Link>
          </p>
        </div>

        {/* Right Column: Logo + Brand */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="w-14 h-14 mb-2 relative">
            <Image
              src="/HubZeroLogoICO.png"
              alt="HubZero Logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
          <h4 className="text-white font-semibold text-lg">HUBZERO</h4>
          <p className="text-sm mt-2">© 2025 HubZero Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
