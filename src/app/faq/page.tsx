'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What is TEDx Chinmaya Vidyalaya Attukal Youth?",
    answer: "TEDx Chinmaya Vidyalaya Attukal Youth is an independently organized TEDx event designed to empower young minds by sharing inspiring ideas, innovative thinking, and impactful stories. The event brings together students, professionals, entrepreneurs, artists, and changemakers to spark meaningful conversations and inspire positive action."
  },
  {
    question: "Will I get a certificate for attending TEDx Chinmaya Vidyalaya Attukal Youth?",
    answer: "TEDx events do not provide participation certificates, as the experience is about learning and engagement rather than certification."
  },
  {
    question: "Is TEDx Chinmaya Vidyalaya Attukal Youth open to all age groups?",
    answer: "Yes! TEDx Chinmaya Vidyalaya Attukal Youth is designed for a diverse audience, including students, educators, professionals, and idea enthusiasts. Anyone eager to learn and engage in powerful discussions is welcome."
  },
  {
    question: "Can I apply to be a speaker for TEDx Chinmaya Vidyalaya Attukal Youth?",
    answer: "Applications for TEDx Chinmaya Vidyalaya Attukal Youth 2025 are now closed. However, we will open applications for TEDx Chinmaya Vidyalaya Attukal Youth 2026 in November 2025. Stay updated by subscribing to our mailing list."
  },
  {
    question: "How are speakers selected for TEDx Chinmaya Vidyalaya Attukal Youth?",
    answer: (
      <div className="space-y-2">
        <p>We open Speaker Applications, where individuals submit their ideas. The selection process includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Initial Idea Submission & AI Screening – Using tools like Turnitin for originality.</li>
          <li>First Interview – To evaluate idea depth and alignment with TEDx’s mission.</li>
          <li>Second Interview & Theme Alignment Check – Ensuring coherence with the event’s theme.</li>
          <li>Team Consultation & Voting – Our team collaborates to finalize the best 6 speakers.</li>
          <li>Official Speaker Announcement & Press Release.</li>
        </ul>
      </div>
    )
  },
  {
    question: "When and where is TEDx Chinmaya Vidyalaya Attukal Youth happening?",
    answer: "TEDx Chinmaya Vidyalaya Attukal Youth 2025 will take place on June 15, 2025, at Ahmedabad Management Association (AMA), Ahmedabad."
  },
  {
    question: "What is TEDx Chinmaya Vidyalaya Attukal Youth?",
    answer: "TEDx Chinmaya Vidyalaya Attukal Youth is an independently organized TEDx event dedicated to bringing \"ideas worth spreading\" to young minds. It is a platform for inspiring speakers, engaging discussions, and thought-provoking conversations aimed at shaping the future."
  },
  {
    question: "Can Speakers deliver their talk in other languages?",
    answer: (
      <div className="space-y-4">
        <p>TEDx events are designed to serve as a platform for sharing &quot;ideas worth spreading,&quot; and this naturally includes using languages that resonate most with your audience. Organizers are encouraged to embrace linguistic diversity as it can reflect and celebrate the multicultural makeup of a community. According to discussions and guidance from TEDx events, the language spoken on stage should ideally match the language spoken during breaks or informal parts of the event, promoting inclusivity and engagement.</p>
        <p>Accordingly, for TEDx Chinmaya Vidyalaya Attukal Youth, talks and on-stage presentations are permitted only in English and Hindi. Speakers are requested to deliver their talks exclusively in either of these approved languages to ensure accessibility, audience engagement, and consistency across the event experience.</p>
      </div>
    )
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">

      {/* Header Section */}
      <div className="pt-24 pb-12 flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#EA0028] mb-4 text-center tracking-wide">
          Frequently <span className="relative">
            Asked
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-[#EA0028] -mb-1"></span>
          </span> Questions
        </h1>
        <p className="text-gray-500 text-lg md:text-xl text-center mt-6">
          Find answers to the most common questions about our services
        </p>
      </div>

      {/* Accordion Section */}
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <span className="text-lg text-gray-800 font-medium pr-8">{faq.question}</span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#EA0028] flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-[#EA0028]' : ''}`}>
                <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-[#EA0028]'}`} />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-6 pt-2 text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Contact CTA */}
      <div className="mt-20 flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Still have questions?</h2>
        <Link
          href="/contact"
          className="bg-[#EA0028] hover:bg-black text-white px-8 py-3 rounded font-medium transition-colors shadow-md"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}
