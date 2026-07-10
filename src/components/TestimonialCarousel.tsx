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
    title: "The Vision Behind Becoming",
    quote: "It is with immense pride and a deep sense of responsibility that we present this edition of TEDxChinmayaVidyalayaAttukal Youth, centred on the theme \"Becoming.\" More than an event, TEDx is a platform where ideas inspire action, curiosity sparks dialogue, and young minds discover new possibilities.\n\nBecoming reflects the continuous journey of growth, learning, and transformation. It reminds us that every individual is shaped not only by achievements but also by the questions we ask, the values we uphold, and the choices we make. Through this platform, we seek to create meaningful conversations that encourage our youth to think critically, act courageously, and contribute purposefully to society.\n\nAt Chinmaya Vidyalaya Attukal, we believe that true education nurtures both intellectual excellence and strength of character. Rooted in enduring values while embracing contemporary thought, we aspire to cultivate leaders who are compassionate, innovative, and socially responsible.\n\nWe hope the ideas shared on this stage challenge assumptions, broaden perspectives, and inspire every participant to embrace their own journey of becoming.\n\nThank you for being part of this remarkable experience.",
    name: "Fenil Pritesh Shah",
    role: "Organizer",
    image: t1
  },
  {
    title: "Building a Platform for Meaningful Ideas",
    quote: "TEDx Chinmaya Vidyalaya Attukal Youth is the result of collective vision, thoughtful collaboration, and a shared commitment to empowering young voices.\n\nOur theme, \"Becoming,\" celebrates the transformative process through which individuals grow into thoughtful leaders, responsible citizens, and lifelong learners. Every aspect of this event has been carefully designed to create an environment where diverse ideas can be explored, meaningful conversations can flourish, and innovation can meet purpose.\n\nThis journey has reaffirmed the power of collaboration and the importance of creating spaces where different perspectives are welcomed with openness and respect. We believe that the exchange of ideas has the potential not only to inspire individuals but also to strengthen communities and shape a better future.\n\nIt is our sincere hope that the conversations initiated today will continue well beyond this stage, encouraging each of us to reflect, learn, and contribute meaningfully to the world around us.\n\nThank you for joining us in celebrating the power of ideas worth spreading.",
    name: "Bindu Raphael",
    role: "Co organizer",
    image: t2
  },
  {
    title: "Education, Values, and the Journey of Becoming",
    quote: "TEDx Chinmaya Vidyalaya Attukal Youth reflects our enduring commitment to providing an education that develops intellectual curiosity, ethical leadership, and a strong sense of purpose.\n\nThe theme \"Becoming\" captures the essence of lifelong learning and personal growth. It acknowledges that leadership is not defined by a destination but by a continuous commitment to self-discovery, resilience, and meaningful contribution.\n\nAt Chinmaya Vidyalaya Attukal, we strive to prepare young people to engage confidently with an ever-changing world while remaining firmly grounded in the timeless values of integrity, compassion, and service. We believe that when knowledge is guided by character, education becomes a powerful force for positive change.\n\nMay this gathering inspire thoughtful dialogue, encourage bold ideas, and reaffirm our collective responsibility to shape a future defined by wisdom, empathy, and innovation.\n\nI extend my sincere appreciation to our speakers, partners, volunteers, and every participant for making this event possible. Together, let us celebrate the transformative power of ideas and the limitless potential of our youth.",
    name: "Ms. Archana Damani",
    role: "Executive Producer",
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-700 italic text-md leading-relaxed whitespace-pre-line">{t.quote}</p>
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
