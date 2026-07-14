'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import logoBlack from '../assets/TEDx black.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="w-full">
      <div className="bg-[#EB0028] text-white text-sm flex justify-center items-center px-4 py-2">
        <span>Speaker Applications are OPEN</span>
        <Link href="/applicationstatus" className="ml-4 border border-white px-3 py-1 rounded hover:bg-white hover:text-red-700 transition">
          Apply Now
        </Link>
      </div>
      <nav className="bg-white px-6 py-4 shadow sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image alt="TEDx Logo" loading="lazy" width={168} height={90} src={logoBlack} />
          </Link>

          <button
            className="md:hidden text-gray-700"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          <div className="hidden md:flex flex-1 justify-center space-x-12 text-md font-light text-black items-center">
            <Link href="/" className="hover:text-red-400">Home</Link>
            <Link href="/team" className="hover:text-red-400">Our Team</Link>
            <Link href="/pressrelease" className="hover:text-red-400">Press Release</Link>
            <Link href="/theme" className="hover:text-red-400">Theme</Link>
            <Link href="/collaborators" className="hover:text-red-400">Collaborators</Link>
            <Link href="/gallery" className="hover:bg-white hover:text-red-500 rounded">Gallery</Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-t flex flex-col py-2 px-6">
            <Link href="/" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/team" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
            <Link href="/pressrelease" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Press Release</Link>
            <Link href="/theme" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Theme</Link>
            <Link href="/collaborators" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Collaborators</Link>
            <Link href="/gallery" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
