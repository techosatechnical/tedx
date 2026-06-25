import React from 'react';
import Image from 'next/image';
import { Globe, Sparkles, MessageCircle, Users } from 'lucide-react';
import theme from '../../assets/theme.png';

export default function ThemePage() {
  const themeItems = [
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: 'The Power of Diverse Perspectives',
      description: 'Every individual sees the world through a unique lens. By embracing diverse viewpoints, we uncover new insights, challenge assumptions, and expand our understanding of complex issues.',
      bgClass: 'bg-white'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-red-600" />,
      title: 'A Kaleidoscope of Ideas',
      description: 'Just as a kaleidoscope creates ever-changing patterns from simple pieces, transformative ideas emerge when different experiences, disciplines, and perspectives come together.',
      bgClass: 'bg-gray-100'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-red-600" />,
      title: 'Building Empathy Through Dialogue',
      description: 'Meaningful conversations allow us to appreciate viewpoints beyond our own. Through dialogue and shared stories, we foster empathy, understanding, and stronger communities.',
      bgClass: 'bg-white'
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: 'Shaping Tomorrow Together',
      description: 'The future is built through collaboration across cultures, generations, and fields of expertise. TEDx Chinmaya Vidyalaya Attukal Youth 2026 celebrates the collective wisdom that emerges when perspectives unite to inspire positive change.',
      bgClass: 'bg-gray-100'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      {/* Top Section */}
      <section className="flex flex-col md:flex-row mb-10">
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto min-h-[300px] mb-6 md:mb-0 overflow-hidden">
          {/* Using theme.png for the theme poster */}
          <Image
            src={theme}
            alt="Theme Poster"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 mt-5 text-black">
          {themeItems.map((item, index) => (
            <div key={index} className={`p-6 sm:p-8 md:p-10 lg:p-14 flex items-start gap-4 ${item.bgClass} border-b border-gray-200`}>
              <div className="flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white text-black py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Experience the Journey <span className="text-red-500">Visually</span> in Action
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Witness how TEDx Chinmaya Vidyalaya Attukal Youth 2026 brings <strong>&#x27;A Light Towards Wisdom&#x27;</strong> to life — a powerful glimpse into stories of innovation, growth, and the reimagination of education.
            </p>
          </div>
          <div className="border-2 border-red-600 rounded-xl overflow-hidden shadow-lg">
            <video controls className="w-full h-auto rounded-lg">
              <source src="/Invite.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
