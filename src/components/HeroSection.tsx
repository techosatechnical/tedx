"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

export default function HeroSection() {
  const [titleText] = useState("Inspiring the Next Generation");
  const [descText] = useState("To inspire and empower the youth of today to become the visionary leaders of tomorrow by fostering a culture of learning, innovation, and transformative change in education.");

  const slides = [img1, img2, img3];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 bg-black text-white px-6 md:px-16 py-16 md:py-12 items-center min-h-[80vh]">
      <div className="container mx-auto order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl md:ml-14 font-bold leading-tight mb-4 md:mb-6 transition-all duration-500">
          {titleText}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 md:ml-14 max-w-xl transition-all duration-500">
          {descText}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:ml-14">
          <button className="bg-[#EB0028] text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition rounded w-full sm:w-auto">
            Let&#x27;s Talk!
          </button>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="bg-white w-full sm:w-auto justify-center cursor-pointer text-black px-6 py-3 font-semibold flex items-center gap-2 rounded hover:bg-[#EB0028] hover:text-white transition">
              Contact Us <span>→</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2 rounded-xl overflow-hidden border md:mr-15 border-white aspect-video w-full bg-gray-900 flex items-center justify-center relative shadow-lg">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
