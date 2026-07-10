"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fenil from '../../assets/fenil-shah.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const speakers = [
  {
    id: 1,
    name: "Sri R Suresh Mohan",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: img1,
  },
  {
    id: 2,
    name: "Abhilash Sudheesh",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: img2,
  },
  {
    id: 3,
    name: "Nandhana Vinod",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: fenil,
  },
  {
    id: 4,
    name: "Ishan Kiran Mithra",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: img1,
  },
  {
    id: 5,
    name: "Aaryasree A A",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: img2,
  },
  {
    id: 6,
    name: "Aarushi Pramod B",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: fenil,
  },
  {
    id: 7,
    name: "Devangana A R",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: img1,
  },
  {
    id: 8,
    name: "Adithyan J V",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: img2,
  },
  {
    id: 9,
    name: "Jasmita Yasothamani Rukmoni",
    designation: "Speaker",
    bio: "Details coming soon...",
    fullBio: "Detailed biography coming soon...",
    image: fenil,
  }
];

const SpeakerCard = ({ speaker }: { speaker: { id: number; name: string; designation: string; bio: string; fullBio: string; image: import('next/image').StaticImageData } }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full relative">
      <div className="text-[#EB0028] mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>

      <div className="flex-grow mb-8">
        <p className="text-gray-600 leading-[1.7] text-sm md:text-base">
          {expanded ? speaker.fullBio : speaker.bio}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#EB0028] font-semibold mt-3 text-sm flex items-center hover:text-red-800 transition-colors"
        >
          {expanded ? "Read Less ↑" : "Read More ↓"}
        </button>
      </div>

      <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-[15px] font-bold text-gray-900">{speaker.name}</h3>
          <p className="text-xs text-gray-500 mt-1">{speaker.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default function SpeakersPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth : scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIdx = (idx: number) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth : scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: scrollAmount * idx, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const width = firstChild ? firstChild.offsetWidth : scrollRef.current.offsetWidth;
      if (width > 0) {
        const newIndex = Math.round(scrollPosition / width);
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Hero Section */}
      <div className="bg-[#EB0028] text-white py-28 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Inspiring Speakers</h1>
        <p className="text-xl md:text-2xl font-light opacity-95">
          Discover the brilliant minds behind the movement.
        </p>
      </div>

      {/* Speakers Grid Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 -mt-10 relative z-10">

        <div className="-mx-3 relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory pt-16 pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {speakers.map((speaker) => (
              <div key={speaker.id} className="snap-start flex-none w-full md:w-1/2 lg:w-1/3 px-3">
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (Absolute positioned outside the grid on desktop) */}
        <div
          onClick={() => scroll('left')}
          className="hidden lg:block absolute top-[55%] -left-4 -translate-y-1/2 cursor-pointer text-[#EB0028] hover:text-red-700 transition-colors"
        >
          <ChevronLeft strokeWidth={1.5} className="w-12 h-12" />
        </div>
        <div
          onClick={() => scroll('right')}
          className="hidden lg:block absolute top-[55%] -right-4 -translate-y-1/2 cursor-pointer text-[#EB0028] hover:text-red-700 transition-colors"
        >
          <ChevronRight strokeWidth={1.5} className="w-12 h-12" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          {speakers.map((_, idx) => (
            <div
              key={idx}
              onClick={() => scrollToIdx(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${idx === currentIndex ? 'bg-[#EB0028]' : 'bg-gray-300 hover:bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        ::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
