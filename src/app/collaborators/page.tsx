"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import collab1 from '../../assets/collab1.webp';
import collab2 from '../../assets/collab2.png';
import collab3 from '../../assets/collab3.png';

export default function CollaboratorsPage() {
  const images = [img1, img2, img3];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full bg-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Text Section */}
            <div className="bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16 order-2 lg:order-1">
              <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center text-xs sm:text-sm text-gray-600 font-medium tracking-wider uppercase">
                    Empowering Young Visionaries
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-6 sm:mb-8 leading-tight">
                  Collaborate for the Future of Education
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed font-light">
                  At TEDx Chinmaya Vidyalaya Attukal Youth, we believe in the power of partnerships to ignite curiosity, drive innovation, and shape an inclusive future of learning. Join us in inspiring a generation of changemakers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#EB012A] text-white text-sm sm:text-base font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105">
                    <span className="mr-2 sm:mr-3">Start Partnership</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative h-64 sm:h-96 lg:h-[600px] order-1 lg:order-2 w-full mt-10 lg:mt-0">
              <div className="transform transition-all duration-1000 delay-300 h-full w-full translate-x-0 opacity-100">
                <div className="relative rounded-xl h-full w-full overflow-hidden">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <Image
                        src={img}
                        alt={`Collaboration ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  ))}
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-black/30 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-20">
                    {currentIdx + 1} / {images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 animate-bounce z-20">
          <div className="w-px h-6 sm:h-8 bg-gray-400"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1 sm:mt-2"></div>
        </div>
      </div>

      {/* Our Collaborators Section */}
      <div className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-16 sm:mb-20">Our Collaborators</h2>
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-300" style={{ top: '9rem', bottom: '2rem' }}></div>
        <div className="flex flex-col gap-12 md:gap-20 relative z-10">
          {[collab1, collab2, collab3].map((collabImg, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`md:w-1/2 flex justify-center ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 overflow-hidden rounded-xl shadow-lg bg-white p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 ring-1 ring-gray-100">
                  <Image
                    src={collabImg}
                    alt={`Collaborator ${idx + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-4 border-gray-200 z-20"></div>
              <div className={`md:w-1/2 flex flex-col justify-center text-center ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Collaborator {idx + 1}</h3>
                <p className="text-gray-600">
                  Partnering with TEDx Chinmaya Vidyalaya Attukal Youth to drive innovation and empower the next generation of visionary leaders.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
