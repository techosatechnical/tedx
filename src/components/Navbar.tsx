'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import logoBlack from '../assets/TEDx black.png';

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile accordion states
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileNotificationsOpen, setMobileNotificationsOpen] = useState(false);
  const [mobileSpeakersOpen, setMobileSpeakersOpen] = useState(false);
  const [mobilePolicyOpen, setMobilePolicyOpen] = useState(false);

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

          <button
            className="md:hidden text-gray-700"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
                <div className="absolute top-full mt-2 w-48 bg-black text-white rounded shadow-lg flex flex-col z-50">
                  {/* Notifications Sub-dropdown */}
                  <div className="relative group/notify">
                    <Link href="/notification" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800 flex items-center justify-between">
                      <span>Notifications</span>
                      <span className="text-gray-400 text-xs">{'>'}</span>
                    </Link>
                    <div className="absolute left-full top-0 hidden group-hover/notify:flex flex-col w-48 bg-black text-white rounded shadow-lg overflow-hidden">
                      <Link href="/verify" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">Documents Verifier</Link>
                      <Link href="/auditreports" className="px-4 py-3 hover:bg-gray-800 transition">Audit Reports</Link>
                    </div>
                  </div>

                  <Link href="/blog" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Blog
                  </Link>
                  <Link href="/theme" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Theme
                  </Link>
                  <Link href="/collaborators" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">
                    Collaborators
                  </Link>

                  {/* Speakers Sub-dropdown */}
                  <div className="relative group/speakers">
                    <Link href="/speakers" className="px-4 py-3 hover:bg-gray-800 transition flex items-center justify-between">
                      <span>Speakers</span>
                      <span className="text-gray-400 text-xs">{'>'}</span>
                    </Link>
                    <div className="absolute left-full top-0 hidden group-hover/speakers:flex flex-col w-48 bg-black text-white rounded shadow-lg overflow-hidden">
                      <Link href="/teasers" className="px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800">Teasers</Link>
                      <Link href="/application-status" className="px-4 py-3 hover:bg-gray-800 transition">Application status</Link>
                    </div>
                  </div>
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-t flex flex-col py-2 px-6">
            <Link href="/" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScj-rwj-N_e9VfMcRxP1ciCkLHSnnWoVWngFuQUSDDQU8WdZA/viewform" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Speaker Application</a>
            <Link href="/team" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
            <Link href="/pressrelease" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Press Release</Link>
            <Link href="https://www.tedxthaltejyouth.in/tedxassist-ai" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>TEDxAssist</Link>
            <Link href="/gallery" className="block py-3 border-b text-gray-800 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>

            {/* Mobile More Accordion */}
            <div className="border-b">
              <div
                className="flex items-center justify-between py-3 cursor-pointer text-gray-800 hover:text-red-500"
                onClick={() => {
                  setMobileMoreOpen(!mobileMoreOpen);
                  if (!mobileMoreOpen) setMobilePolicyOpen(false); // Accordion behavior
                }}
              >
                <Link href="/teamphotos" onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(false); }}>More</Link>
                <button type="button" aria-label="Toggle More"><ChevronDown className={`w-4 h-4 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} /></button>
              </div>

              {mobileMoreOpen && (
                <div className="pl-4 flex flex-col pb-2">

                  {/* Notifications Accordion inside More */}
                  <div>
                    <div
                      className="flex items-center justify-between py-2 cursor-pointer text-gray-700 hover:text-red-500"
                      onClick={() => {
                        setMobileNotificationsOpen(!mobileNotificationsOpen);
                        if (!mobileNotificationsOpen) setMobileSpeakersOpen(false); // Accordion behavior
                      }}
                    >
                      <Link href="/notification" onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(false); }}>Notifications</Link>
                      <button type="button"><ChevronDown className={`w-4 h-4 transition-transform ${mobileNotificationsOpen ? 'rotate-180' : ''}`} /></button>
                    </div>
                    {mobileNotificationsOpen && (
                      <div className="pl-4 flex flex-col py-1">
                        <Link href="/verify" className="py-2 text-gray-600 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Documents Verifier</Link>
                        <Link href="/auditreports" className="py-2 text-gray-600 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Audit Reports</Link>
                      </div>
                    )}
                  </div>

                  <Link href="/blog" className="py-2 text-gray-700 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                  <Link href="/theme" className="py-2 text-gray-700 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Theme</Link>
                  <Link href="/collaborators" className="py-2 text-gray-700 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Collaborators</Link>

                  {/* Speakers Accordion inside More */}
                  <div>
                    <div
                      className="flex items-center justify-between py-2 cursor-pointer text-gray-700 hover:text-red-500"
                      onClick={() => {
                        setMobileSpeakersOpen(!mobileSpeakersOpen);
                        if (!mobileSpeakersOpen) setMobileNotificationsOpen(false); // Accordion behavior
                      }}
                    >
                      <Link href="/speakers" onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(false); }}>Speakers</Link>
                      <button type="button"><ChevronDown className={`w-4 h-4 transition-transform ${mobileSpeakersOpen ? 'rotate-180' : ''}`} /></button>
                    </div>
                    {mobileSpeakersOpen && (
                      <div className="pl-4 flex flex-col py-1">
                        <Link href="/teasers" className="py-2 text-gray-600 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Teasers</Link>
                        <Link href="/application-status" className="py-2 text-gray-600 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Application status</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Policy Documents Accordion */}
            <div className="border-b">
              <div
                className="flex items-center justify-between py-3 cursor-pointer text-gray-800 hover:text-red-500"
                onClick={() => {
                  setMobilePolicyOpen(!mobilePolicyOpen);
                  if (!mobilePolicyOpen) setMobileMoreOpen(false); // Accordion behavior
                }}
              >
                <Link href="/policydocuments" onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(false); }}>Policy Documents</Link>
                <button type="button" aria-label="Toggle Policy"><ChevronDown className={`w-4 h-4 transition-transform ${mobilePolicyOpen ? 'rotate-180' : ''}`} /></button>
              </div>

              {mobilePolicyOpen && (
                <div className="pl-4 flex flex-col pb-2">
                  <Link href="/faq" className="py-2 text-gray-600 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                </div>
              )}
            </div>

          </div>
        )}
      </nav>
    </header>
  );
}
