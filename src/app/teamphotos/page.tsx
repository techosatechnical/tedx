import React from 'react';
import Image from 'next/image';

const pastSpeakers = [
  { id: 1, name: "Dr. Darshak Dasadiya" },
  { id: 2, name: "Ms. Saumya Sheth" },
  { id: 3, name: "Ms. Hemanshi Agrawal" },
  { id: 4, name: "Mr. Apoorv Jha" },
  { id: 5, name: "Dr. Shivani Sharma" },
  { id: 6, name: "Dr. Kavita Sharma" }
];

export default function TeamPhotosPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-black pb-24">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Text */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <h1 className="text-[#EA0028] text-5xl font-extrabold tracking-tight">TEDx</h1>
            <h2 className="text-5xl font-bold tracking-tight">Thaltej Youth</h2>
          </div>

          <p className="text-xl text-gray-800">Presents</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            The Future of Education: A Light Towards Wisdom
          </h2>

          <p className="text-lg font-medium text-gray-800">
            शिक्षा का भविष्य: सोच से सृजन की ओर
          </p>

          <p className="text-gray-600 leading-relaxed max-w-2xl text-lg">
            Join us for an inspiring TEDxYouth event where innovative minds and passionate voices come together to explore how education can illuminate the path to a brighter tomorrow. Discover stories of creativity, resilience, and revolution in learning.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-transparent">
            <Image
              src="/teamphotos-brain.png"
              alt="Glowing AI Brain"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pastSpeakers.map((speaker) => (
          <div key={speaker.id} className="bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col group cursor-pointer border border-gray-800 hover:border-[#EA0028] transition-colors duration-300">

            {/* Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/teamphotos-brain.png"
                alt={`${speaker.name} Video Thumbnail`}
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlaid Theme Text on Thumbnail */}
              <div className="absolute top-4 left-0 right-0 flex justify-center items-center opacity-80">
                <span className="text-[#EA0028] font-bold text-sm tracking-wider">TEDx</span>
                <span className="text-white font-bold text-sm ml-1 tracking-wider">Thaltej Youth</span>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                {/* YouTube Play Button */}
                <svg className="w-16 h-16 text-[#EA0028] drop-shadow-lg group-hover:text-red-500 transition-colors duration-300" viewBox="0 0 68 48" fill="currentColor">
                  <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" />
                  <path d="M 45,24 27,14 27,34" fill="#fff" />
                </svg>
              </div>

              {/* TEDx Website Text at Bottom of Thumbnail */}
              <div className="absolute bottom-0 left-0 right-0 bg-white py-1 text-center">
                <p className="text-[#EA0028] text-[10px] font-bold">TEDxThaltej Youth Website: www.tedxthaltejyouth.in</p>
              </div>
            </div>

            {/* Speaker Name Bar */}
            <div className="bg-[#1f1f1f] px-6 py-4">
              <p className="text-white font-semibold text-sm">{speaker.name}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
