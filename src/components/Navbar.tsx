'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import logoBlack from '../assets/logo-black.png';

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
      if (policyRef.current && !policyRef.current.contains(event.target as Node)) {
        setIsPolicyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
          
          <button className="md:hidden text-gray-700" aria-label="Toggle mobile menu">
            <Menu className="w-7 h-7" />
          </button>
          
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-md font-light text-black items-center">
            <Link href="/" className="hover:text-red-400">Home</Link>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScj-rwj-N_e9VfMcRxP1ciCkLHSnnWoVWngFuQUSDDQU8WdZA/viewform" className="hover:text-red-400">Speaker Application</a>
            <Link href="/team" className="hover:text-red-400">Our Team</Link>
            <Link href="/pressrelease" className="hover:text-red-400">Press Release</Link>
            <Link href="https://www.tedxthaltejyouth.in/tedxassist-ai" className="hover:text-red-500 rounded">TEDxAssist</Link>
            <Link href="/gallery" className="hover:bg-white hover:text-red-500 rounded">Gallery</Link>
            
            <div className="relative group cursor-pointer" ref={moreRef}>
              <div 
                className="flex items-center gap-1"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                <Link href="/teamphotos" className="hover:text-red-400">More</Link>
                <button type="button" className="hover:text-red-400" aria-label="Toggle more dropdown">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isMoreOpen && (
                <div className="absolute top-full mt-2 w-48 bg-black text-white rounded shadow-lg overflow-hidden flex flex-col z-50">
                  <Link href="/notifications" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800 flex items-center justify-between">
                    <span>Notifications</span>
                    <span className="text-gray-400 text-xs">{'>'}</span>
                  </Link>
                  <Link href="/blog" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Blog
                  </Link>
                  <Link href="/team" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Our Team
                  </Link>
                  <Link href="/theme" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Theme
                  </Link>
                  <Link href="/collaborators" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Collaborators
                  </Link>
                  <Link href="/speakers" className="px-4 py-3 hover:bg-gray-800 transition flex items-center justify-between">
                    <span>Speakers</span>
                    <span className="text-gray-400 text-xs">{'>'}</span>
                  </Link>
                </div>
              )}
            </div>
            
            <div className="relative group cursor-pointer" ref={policyRef}>
              <div 
                className="flex items-center gap-1"
                onClick={() => setIsPolicyOpen(!isPolicyOpen)}
              >
                <Link href="/policydocuments" className="hover:text-red-400">Policy Documents</Link>
                <button type="button" className="hover:text-red-400" aria-label="Toggle Policy Documents dropdown">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              {/* Policy Dropdown Menu */}
              {isPolicyOpen && (
                <div className="absolute top-full mt-2 w-48 bg-black text-white rounded shadow-lg overflow-hidden flex flex-col z-50">
                  <Link href="/faq" className="px-4 py-3 hover:bg-gray-800 transition text-sm">
                    FAQ
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
