import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Performers - TEDx Chinmaya Vidyalaya Attukal Youth',
  description: 'Meet the performers for our event: Rhythms of Becoming.',
};

const performers = [
  {
    name: 'Sri. Rajesh Cherthala',
    image: '/performers/Sri .Rajesh Cherthala.jpeg',
    bio: `Rajesh Cherthala is one of India's acclaimed flautists and a celebrated musician from Cherthala, Kerala. Renowned for his soulful artistry and dynamic stage presence, he has contributed to the soundtracks of over 300 Indian films and has performed on more than 1,000 songs, leaving an enduring mark on the Indian music industry.

Known for seamlessly blending Carnatic, Hindustani, and Western musical traditions, Rajesh has captivated audiences worldwide through his distinctive fusion performances that transcend cultural and musical boundaries.

His musical journey began under the guidance of his first teacher, Sunbright of Cherthala. He later became a disciple of the legendary Pandit Hariprasad Chaurasia, continuing his advanced training at the renowned Vrindavan Gurukul.`
  },
  {
    name: 'Sri Niranjan Babu',
    image: '/performers/Sri Niranjan Babu.jpeg',
    bio: `Niranjan Babu is a freelance Indo-Western violinist from Thiruvananthapuram, Kerala, with strong fluency in Carnatic violin and nearly a decade of teaching experience. He has achieved recognition in Kerala University Kalotsavam for 3 consecutive years for stringed instrument (violin) western category and continues to build his career through performance and teaching.`
  }
];

export default function PerformersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-red-600 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Rhythms of Becoming</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-24">
            {performers.map((performer, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12">
                  <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={performer.image}
                      alt={performer.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-full md:w-7/12 space-y-6 px-4 md:px-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{performer.name}</h2>
                  <div className="w-20 h-1 bg-[#EB0028]"></div>
                  <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                    {performer.bio.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
