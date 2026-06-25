"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is TEDx Chinmaya Vidyalaya Attukal Youth?",
    answer: "TEDx Chinmaya Vidyalaya Attukal Youth is an independently organized TED event specifically focused on bringing together bright young minds in Thaltej and surrounding areas to share ideas that inspire and create impact."
  },
  {
    question: "Who can attend the event?",
    answer: "Our event is open to everyone! While the focus is on youth perspectives, we welcome attendees of all ages who are curious, open-minded, and eager to learn."
  },
  {
    question: "How can I become a speaker?",
    answer: "Speaker applications open several months before the event. You can check our 'Speakers' page or follow our social media channels for announcements on when the next application window opens."
  },
  {
    question: "Is this an official TED event?",
    answer: "This is a TEDx event. The 'x' means it is an independently organized event. While we operate under a license from TED, we are organized by a local team of volunteers."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-ted-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Frequently Asked <span className="text-ted-red">Questions</span>
          </h2>
          <div className="w-20 h-2 bg-ted-red mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-lg transition-colors duration-300 ${isOpen ? 'border-ted-red bg-red-50/30' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-ted-red' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-ted-red' : 'text-gray-400'}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
