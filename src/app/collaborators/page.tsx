import React from 'react';

export default function CollaboratorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-black mb-6">Our Collaborators</h1>
      <div className="w-16 h-[2px] bg-[#EA0028] mb-10"></div>
      <p className="text-xl text-gray-600 max-w-2xl text-center mb-12">
        We are proud to partner with incredible organizations that make TEDxThaltej Youth possible.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Placeholder for Partners */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-lg h-48 flex items-center justify-center border border-gray-100">
            <span className="text-gray-400 font-semibold text-lg">Partner Logo {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
