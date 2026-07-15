'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    title: "",
    quote: `With 18 years of experience as an educator, he has been instrumental in nurturing young minds while actively leading and coordinating a wide range of programmes at the Vidyalaya level. Passionate about creating meaningful learning experiences beyond the classroom, he brings strong organizational skills, attention to detail, and a collaborative spirit to TEDxChinmayaVidyalayaAttukalYouth, ensuring a seamless and inspiring event for speakers, participants, and the audience.`,
    name: "Abhilash GS",
    role: "Organizer",
    image: "/abilash organiser.jpeg"
  },
  {
    title: "",
    quote: "With 28 years of dedicated service in the Chinmaya Mission educational system, our Academic Coordinator brings a wealth of experience in academic leadership and institution building. Having served as the Principal of a Chinmaya ISC School, she has played a pivotal role in fostering academic excellence, value-based education, and holistic student development.She also served as the Convener of the ISC Board Examinations for five years, demonstrating exceptional organizational ability, leadership, and commitment to maintaining the highest standards of academic administration.As the Co-Organizer of TEDxChinmayaVidyalayaAttukalYouth, she guides the event with the same spirit of excellence and purpose, helping create a platform where meaningful ideas inspire young minds to think, grow, and become their best selves.",
    name: "Smt. Shobha Rani S",
    role: "Co organizer",
    image: "/coorganiser shobana rani.jpeg"
  },
  {
    title: "",
    quote: "With over 20 years of experience in education, she brings a strong foundation in academic leadership, institutional development, and values-based education. After serving as Vice Principal for seven years, she now leads as Principal, guiding students and educators with a vision that blends excellence, innovation, and character. As the Executive Producer of TEDxChinmayaVidyalayaAttukalYouth, she provides the strategic direction and leadership behind the event, ensuring every aspect reflects the TEDx spirit of ideas worth spreading while staying rooted in the timeless values of Chinmaya Mission. Her commitment is to create a platform where young voices are empowered, meaningful conversations flourish, and ideas inspire lasting impact. ",
    name: "Smt. Indu Vikraman J",
    role: "Executive Producer",
    image: "/indu vikraman executive producer.jpeg"
  }
];

export default function TeamCarousel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto h-full">
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
            <div className="flex flex-col items-center text-center h-full min-h-[300px]">

              {/* Photo at the top */}
              <div className="mb-6 flex flex-col items-center border-b border-gray-100 pb-6 w-full">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden bg-white border border-gray-100 shadow-sm">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-black font-bold text-xl">{t.name}</h4>
                <p className="text-gray-500 text-base">{t.role}</p>
              </div>

              {/* Text content below */}
              <div className="flex flex-col items-center flex-1 max-w-2xl mx-auto">
                <FaQuoteLeft className="text-[#EA0028] text-3xl mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.title}</h3>
                <p className="text-gray-700 italic text-md sm:text-lg leading-relaxed whitespace-pre-line">{t.quote}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
