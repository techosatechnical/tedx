'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import t1 from '../assets/testimonial1.png';
import t2 from '../assets/testimonial2.jpg';
import t3 from '../assets/testimonial3.png';

const testimonials = [
  {
    quote: "TEDxThaltej Youth is more than an event, it is a platform where ideas, curiosity, and meaningful conversations come together to inspire action. Our goal is to create an experience that empowers young minds to think differently, learn deeply, and contribute positively to society.",
    name: "Fenil Pritesh Shah",
    role: "Organizer, TEDxThaltej Youth",
    image: t1
  },
  {
    quote: "TEDxThaltej Youth 2025 was a remarkable journey of ideas, learning, and meaningful conversations. Watching young speakers share their experiences and perspectives with such confidence reinforced the importance of creating platforms where youth voices are heard and celebrated. The event brought together curious minds, passionate changemakers, and a community committed to lifelong learning. I am proud to have been part of an initiative that encouraged dialogue, inspired action, and demonstrated the transformative power of ideas worth spreading.",
    name: "Bindu Raphael",
    role: "Co-Organizer, TEDxThaltej Youth 2025",
    image: t2
  },
  {
    quote: "TEDxThaltej Youth 2025 was a celebration of curiosity, innovation, and the limitless potential of young minds. It was inspiring to witness speakers, performers, volunteers, and attendees come together to create an environment where ideas could flourish and meaningful dialogue could take place. The event reflected the power of collaboration, thoughtful planning, and a shared commitment to learning. Being part of this journey reinforced my belief that when young people are given the right platform, they can inspire positive change and shape a brighter future for their communities and beyond.",
    name: "Ms. Archana Damani",
    role: "Program Director, TEDxThaltej Youth 2025",
    image: t3
  }
];

export default function TestimonialCarousel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl mx-auto h-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
        style={{
          "--swiper-pagination-color": "#EA0028",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        } as React.CSSProperties}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="pb-12">
            <div className="flex flex-col justify-between h-full min-h-[300px]">
              <div className="mb-6 flex-1">
                <FaQuoteLeft className="text-[#EA0028] text-4xl mb-4" />
                <p className="text-gray-700 italic text-md leading-relaxed">{t.quote}</p>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-auto flex items-center gap-4">
                <Image src={t.image} alt={t.name} width={50} height={50} className="rounded-full object-cover w-[50px] h-[50px]" />
                <div>
                  <h4 className="text-black font-bold text-lg">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
