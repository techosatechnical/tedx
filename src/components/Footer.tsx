import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin as Linkedin, FaInstagram as Instagram, FaYoutube as Youtube } from 'react-icons/fa';

import logoWhite from '../assets/logo-white.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-25 container mx-auto">
        <div>
          <div>
            <Image alt="Logo" loading="lazy" width={240} height={64} className="h-full w-60 -ml-3 object-contain" src={logoWhite} />
          </div>
          <h4 className="font-semibold mb-4 mt-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/applicationstatus">Speaker Application</Link></li>
            <li><Link href="#">TEDxAssist</Link></li>
            <li><Link href="/pressrelease">Press Release</Link></li>
            <li><Link href="/theme">Theme</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Our community</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/teamphotos">TEDxThaltej 2026</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/collaborators">Collaborators</Link></li>
            <li><Link href="/speakerverifier">Speaker Verifier</Link></li>
            <li><Link href="/auditreports">Audit reports</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Become a TED Member</h4>
          <p className="text-sm text-gray-300 mb-6">
            TED Members help billions of people worldwide access inspiring ideas. Plus, they get exclusive benefits like invite-only events with speakers. Join today for a brighter future – and a better you.
          </p>
          <h4 className="font-semibold mb-3">Follow <span className="text-[#EB0028]">Tedx</span> Thaltej youth</h4>
          <div className="flex gap-4 mb-6">
            <a href="https://www.linkedin.com/company/tedxthaltej-youth/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/tedxthaltejyouth?igsh=MTNyeGZ6NGxzcHMxNA==" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </a>
            <a href="https://youtu.be/GG64ZSxIqtQ?si=XvsHHQuWT0j8IsL0" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-10 mx-25 border-gray-700" />
      <p className="text-center text-xs text-white mt-6">
        © TEDxThaltej Youth 2026 | Licensed by TED | All Rights Reserved
      </p>
      <p className="text-center md:text-sm text-xs text-white mt-6">
        Developed by Fenil Shah - Copyright © Fenil Shah Publications
      </p>
    </footer>
  );
}
