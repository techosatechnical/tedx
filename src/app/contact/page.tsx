import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 pb-24 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#EC0029]">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* Left Column */}
          <div className="space-y-8 sm:space-y-10">

            {/* Get In Touch */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Get In Touch</h2>
              <div className="space-y-4 sm:space-y-6">

                {/* Email */}
                <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EC0029] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm">cvatedx@gmail.com</p>
                  </div>
                </div>



                {/* Location */}
                <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EC0029] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Location</h3>
                    <p className="text-gray-600 text-sm">Attukal, Thiruvananthapuram, Kerala</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EC0029] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Office Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Follow Us</h2>
              <div className="flex space-x-3 sm:space-x-4">

                {/* TED Icon */}
                <Link href="https://www.ted.com/tedx/events/69493" className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition transform hover:scale-110 hover:rotate-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-[10px] sm:text-xs">TED</span>
                  </div>
                </Link>

                {/* Instagram Icon */}
                <Link href="https://www.instagram.com/tedxthaltejyouth?igsh=MTNyeGZ6NGxzcHMxNA==" className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition transform hover:scale-110 hover:rotate-3">
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </Link>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-10 border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            <form className="space-y-6">

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EC0029] focus:border-transparent transition-shadow text-gray-900"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EC0029] focus:border-transparent transition-shadow text-gray-900"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EC0029] focus:border-transparent transition-shadow text-gray-900"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EC0029] focus:border-transparent transition-shadow text-gray-900 resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-[#EC0029] text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors shadow-md mt-2"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
