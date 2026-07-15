import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram as Instagram } from 'react-icons/fa';

import logoWhite from '../assets/TEDx white.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-24 md:px-8 container mx-auto">
        <div>
          <div className="flex flex-col items-start">
            <Image alt="Logo" loading="lazy" width={240} height={64} className="h-full w-48 md:w-60 object-contain" src={logoWhite} />
            <p className="text-xs text-red-500 mt-2 max-w-xs">This Independent TEDx event is operated under license  from TED</p>
          </div>
          <h4 className="font-semibold mb-4 mt-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/theme">Theme</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Our community</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="">TEDx Chinmaya Vidyalaya Attukal 2026</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/speakers">Speakers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Become a TED Member</h4>
          <p className="text-sm text-gray-300 mb-6">
            TED Members help billions of people worldwide access inspiring ideas. Plus, they get exclusive benefits like invite-only events with speakers. Join today for a brighter future – and a better you.
          </p>
          <h4 className="font-semibold mb-3">Follow <span className="text-[#EB0028]">Tedx</span> Chinmaya Vidyalaya<br /> Attukal Youth</h4>
          <div className="flex gap-4 mb-4">

            <a href="https://www.instagram.com/tedx_cva_youth/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </a>
            <a href="https://www.ted.com/tedx/events/69493" target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center">
              <Image src="/TedXCva.png" alt="TEDx Thaltej Youth" width={100} height={30} className="h-6 w-auto object-contain hover:opacity-80 transition-opacity" />
            </a>

          </div>
        </div>
      </div>

      <hr className="my-6 mx-25 border-gray-700" />
      <p className="text-center text-xs text-white mt-6">
        © TEDx Chinmaya Vidyalaya Attukal Youth 2026 | Licensed by TED | All Rights Reserved
      </p>
      <p className="text-center md:text-sm text-xs text-white mt-6">
        Developed by Techosa - Copyright © Techosa
      </p>
    </footer>
  );
}
