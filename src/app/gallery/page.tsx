'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  "/gallery/1780830563737-54591417325_d91e773417_b.jpg",
  "/gallery/1753877652319-54591334058_58deb9a56b_c.jpg",
  "/gallery/1753877629542-54591324203_0d4d3eaf9a_c.jpg",
  "/gallery/1753877615769-54591320923_d9b7fb9cb7_c.jpg",
  "/gallery/1753877600888-54591103251_31c24551cc_c.jpg",
  "/gallery/1753877583759-54591313008_9395442186_c.jpg",
  "/gallery/1753877566751-54591295034_4573ee0e56_c.jpg",
  "/gallery/1753877538865-54591101656_d1c7985f64_c.jpg",
  "/gallery/1753877522550-54590222992_a9e8081b3c_c.jpg",
  "/gallery/1753877466441-54591414100_4ba46a1ab3_c (1).jpg",
  "/gallery/1753877448377-54591292509_7b05d26b24_c.jpg"
];

export default function GalleryPage() {
  const textToType = "Welcome to Our Photo Gallery";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    let direction = 1; // 1 for typing, -1 for deleting
    const interval = setInterval(() => {
      // Only slice if index >= 0 to avoid errors, although substring handles negative as 0
      setTypedText(textToType.substring(0, Math.max(0, index)));

      if (direction === 1) {
        if (index > textToType.length + 20) { // Pause at the end for 2 seconds
          direction = -1;
          index = textToType.length;
        } else {
          index++;
        }
      } else {
        if (index < -5) { // Pause before re-typing for 0.5 seconds
          direction = 1;
          index = 0;
        } else {
          // delete faster by subtracting more or just 1
          index -= 2;
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#e6e9ee]">

      {/* Header Section */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center bg-[#f4f5f7] overflow-hidden">

        {/* Decorative Wave Graphics */}
        <svg className="absolute bottom-0 right-0 w-full h-full pointer-events-none" viewBox="0 0 1440 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Red Wave */}
          <path d="M1440 0V500H0C400 480 900 350 1440 0Z" fill="#EA0028" />
          {/* Darker Red Highlight */}
          <path d="M1440 50V500H200C600 480 1000 380 1440 50Z" fill="#B3001E" />
        </svg>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-10">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 font-sans h-[72px]">
            {typedText}<span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Discover highlights from our events, moments, and memories.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex-1 w-full py-16 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1f2937]">Our Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group bg-white cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
