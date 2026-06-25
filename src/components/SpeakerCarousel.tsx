import Image from 'next/image';
import React from 'react';

const speakers = [
  {
    name: "John Doe",
    title: "Innovator & Entrepreneur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Pioneering the future of sustainable tech in urban environments."
  },
  {
    name: "Jane Smith",
    title: "AI Researcher",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Exploring the intersection of artificial intelligence and human creativity."
  },
  {
    name: "Alex Johnson",
    title: "Climate Activist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Leading youth movements for global climate policy reform."
  },
  {
    name: "Sarah Williams",
    title: "Artist & Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Using visual arts to communicate complex social issues."
  }
];

export default function SpeakerCarousel() {
  return (
    <section className="py-24 bg-ted-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Meet Our <span className="text-ted-red">Speakers</span>
          </h2>
          <div className="w-20 h-2 bg-ted-red mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {speakers.map((speaker, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[350px] snap-center group relative overflow-hidden rounded-xl bg-gray-900 border border-white/10 transition-transform duration-500 hover:-translate-y-2">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-ted-red font-medium text-sm uppercase tracking-wider mb-3">{speaker.title}</p>
                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gray-300 text-sm leading-relaxed">{speaker.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
}
