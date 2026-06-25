import React from 'react';
import Link from 'next/link';

const policies = [
  "Conflict of authenticity Policy",
  "Data Privacy Policy",
  "Integrity & authenticity Policy",
  "ISO 20121_2014",
  "ISO 9001_2015",
  "ISO declaration",
  "ISO scope statement Policy",
  "No-refund Policy",
  "Quality Policy",
  "Sustainability Policy"
];

export default function PolicyDocumentsPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-24">
      {/* Header Block */}
      <div className="w-full bg-[#EA0028] text-white pt-40 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-wide">
          Policy Documents
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-10">Available Documents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-between border border-gray-100 min-h-[160px]">
              
              <div className="flex items-start gap-3 mb-6">
                {/* SVG PDF Icon */}
                <svg className="w-6 h-6 text-[#EA0028] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 className="text-[#1a202c] font-bold text-lg leading-tight">{policy}</h3>
              </div>
              
              <div>
                <Link 
                  href="#" 
                  className="inline-block bg-[#EA0028] text-white font-medium text-sm px-6 py-2 rounded shadow hover:bg-red-700 transition-colors"
                >
                  View PDF
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
