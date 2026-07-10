import React from 'react';
import Image from 'next/image';
import theme from '../../assets/theme.png';

export default function ThemePage() {
  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      {/* Top Section */}
      <section className="flex flex-col md:flex-row mb-10 bg-white">
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto min-h-[300px] overflow-hidden">
          {/* Using theme.png for the theme poster */}
          <Image
            src={theme}
            alt="Theme Poster"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 text-black flex flex-col justify-center border-l border-gray-100">
          <div className="space-y-5 font-sans">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 uppercase">Theme: <span className="text-red-600">Becoming</span></h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Becoming is not about arriving at a destination; it is about embracing the continuous journey of growth, discovery, and transformation. It reflects the idea that every individual is constantly evolving—shaped by experiences, ideas, challenges, relationships, and the choices they make.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              In a world defined by rapid change, Becoming invites us to pause and reflect on who we are, who we aspire to be, and the impact we seek to create. It encourages us to view learning as a lifelong pursuit, resilience as a catalyst for growth, and curiosity as the foundation of innovation. Every setback becomes an opportunity to learn, every conversation a chance to broaden perspective, and every action a step toward meaningful change.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              At TEDx Chinmaya Vidyalaya Attukal Youth, Becoming celebrates the courage to question, the humility to learn, and the determination to grow. It recognises that transformation is both personal and collective. As individuals evolve, so do the communities they influence and the world they help shape.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Rooted in enduring values while embracing new ideas, this theme reflects the spirit of young minds who are prepared to think independently, lead responsibly, and contribute with purpose. It is a celebration of potential—not as something waiting to be discovered, but as something realised through continuous learning, thoughtful action, and meaningful collaboration.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Through the stories shared, the conversations sparked, and the ideas exchanged on this stage, we invite every participant to reflect on their own journey of becoming. For it is through this ongoing process of growth that we unlock our greatest potential, inspire others, and create a future shaped by knowledge, compassion, creativity, and courage.
            </p>
            <div className="text-black font-semibold text-sm md:text-base leading-relaxed space-y-1 mt-6 pt-6 border-t border-gray-100">
              <p>Because becoming is not a moment. It is a mindset.</p>
              <p>It is not about perfection. It is about progress.</p>
              <p>It is not about who we are today, but who we choose to become tomorrow.</p>
            </div>
          </div>
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
