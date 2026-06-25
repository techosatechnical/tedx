import React from 'react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <div className="relative w-full h-[200px] sm:h-[280px] md:h-[420px] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 "></div>
      </div>
      <div className="container mx-auto px-4 pb-20">
        <div className="flex items-center gap-4 mb-6 sm:mb-8 mt-2">
          <div className="h-px flex-1 bg-gray-300"></div>
          <h1 className="text-[25px] font-bold tracking-[0.2em] uppercase text-gray-900">Latest Blog</h1>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        <div className="space-y-8">
          <div className="animate-pulse bg-gray-200 rounded-2xl w-full h-[300px] sm:h-[400px]"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="bg-gray-200 w-full h-52 sm:h-60"></div>
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-5 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/4 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
