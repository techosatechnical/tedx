import React from 'react';
import Link from 'next/link';

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-black mb-6">Our Speakers</h1>
      <div className="w-16 h-[2px] bg-[#EA0028] mb-10"></div>
      <p className="text-xl text-gray-600 max-w-2xl text-center mb-10">
        We are currently curating an incredible lineup of speakers for our upcoming event. 
      </p>
      
      <Link href="/teamphotos" className="bg-[#EA0028] text-white px-8 py-3 rounded hover:bg-red-700 transition font-medium shadow-md">
        View 2024 Past Speakers
      </Link>
    </div>
  );
}
