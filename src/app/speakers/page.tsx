"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fenil from '../../assets/fenil-shah.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const speakers = [
  {
    id: 1,
    name: "Mr. Shabd Shaurya",
    designation: "Youngest TEDx Speaker",
    bio: "Shabd Shaurya is a 4-year-old Guinness World Record holder for being the youngest TEDx speaker in the world. He delivered his talk, “The Power of Stories for Children,” at TEDxVBIT at just 4 years and 31 days, earning widespread recognition for this milestone. He is also a published author of the book The Great Shabd Safari, available on Amazon and Flipkart. His journey has been featured in 25+ newspapers, including The Indian Express, Dainik...",
    fullBio: "Shabd Shaurya is a 4-year-old Guinness World Record holder for being the youngest TEDx speaker in the world. He delivered his talk, “The Power of Stories for Children,” at TEDxVBIT at just 4 years and 31 days, earning widespread recognition for this milestone. He is also a published author of the book The Great Shabd Safari, available on Amazon and Flipkart. His journey has been featured in 25+ newspapers, including The Indian Express, Dainik Bhaskar, and more.",
    image: img1,
  },
  {
    id: 2,
    name: "Dr CA Achyut Dani",
    designation: "Provost & Director General, JG University",
    bio: "Dr. CA Achyut Dani is a distinguished entrepreneur, educator, and strategic management mentor with over 25 years of experience in advanced education. As the Director General & Provost (Vice Chancellor) of JG University and Chairman of Braincraft Eduserve and Vector Infrastructure, he has played a key role in shaping academic and entrepreneurial ecosystems. A practicing Chartered Accountant since 2003 with a PhD in Management and Commerce, Dr. ...",
    fullBio: "Dr. CA Achyut Dani is a distinguished entrepreneur, educator, and strategic management mentor with over 25 years of experience in advanced education. As the Director General & Provost (Vice Chancellor) of JG University and Chairman of Braincraft Eduserve and Vector Infrastructure, he has played a key role in shaping academic and entrepreneurial ecosystems. A practicing Chartered Accountant since 2003 with a PhD in Management and Commerce, Dr. Dani brings unparalleled expertise to the table.",
    image: img2,
  },
  {
    id: 3,
    name: "Mr. Falgun Rathod",
    designation: "Founder & Managing Director of Cyber Octet Pvt. Ltd",
    bio: "Falgun Rathod is a distinguished Cyber Security Expert, Ethical Hacker, Author, and Entrepreneur with over 17 years of experience in cybersecurity, cybercrime investigation, and digital risk management. As the Founder & Managing Director of Cyber Octet Pvt. Ltd., he has trained and mentored 65,000+ students, professionals, and industry participants through cybersecurity awareness programs and career-focused training across India and beyond. He...",
    fullBio: "Falgun Rathod is a distinguished Cyber Security Expert, Ethical Hacker, Author, and Entrepreneur with over 17 years of experience in cybersecurity, cybercrime investigation, and digital risk management. As the Founder & Managing Director of Cyber Octet Pvt. Ltd., he has trained and mentored 65,000+ students, professionals, and industry participants through cybersecurity awareness programs and career-focused training across India and beyond. He continues to inspire the youth.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* Navigation Arrows (Absolute positioned outside the grid on desktop) */}
        <div className="hidden lg:block absolute top-[55%] -left-4 -translate-y-1/2 cursor-pointer text-[#EB0028] hover:text-red-700 transition-colors">
          <ChevronLeft strokeWidth={1.5} className="w-12 h-12" />
        </div>
        <div className="hidden lg:block absolute top-[55%] -right-4 -translate-y-1/2 cursor-pointer text-[#EB0028] hover:text-red-700 transition-colors">
          <ChevronRight strokeWidth={1.5} className="w-12 h-12" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#EB0028]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors"></div>
        </div>
      </div>
    </div>
  );
}
