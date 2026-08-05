"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const speakers = [
  {
    id: 1,
    name: "Aaryasree A A",
    designation: "Speaker",
    bio: "Aaryasree A A is a 17-year-old student of Humanities, youth speaker, writer, and accomplished leader from India. A decorated Model United Nations delegate and debater, she is passionate about geopolitics, with a particular interest in economics and global affairs.",
    fullBio: "Aaryasree A A is a 17-year-old student of Humanities, youth speaker, writer, and accomplished leader from India. A decorated Model United Nations delegate and debater, she is passionate about geopolitics, with a particular interest in economics and global affairs.\n\nBeyond the debate floor, Aaryasree expresses her ideas through poetry and creative writing, using words to inspire reflection and meaningful dialogue. Driven by curiosity and a global outlook, she believes that informed conversations and diverse perspectives have the power to shape a more thoughtful and connected world.",
    image: "/Aaryasree A A.jpeg",
  },
  {
    id: 2,
    name: "Jasmita Yasothamani Rukmoni",
    designation: "Speaker",
    bio: "Jasmita is a curious learner with a passion for science, music, and uncovering the extraordinary in everyday life. She is fascinated by the power of words and believes that even something as simple as a name can shape identity, confidence, and purpose.",
    fullBio: "Jasmita is a curious learner with a passion for science, music, and uncovering the extraordinary in everyday life. She is fascinated by the power of words and believes that even something as simple as a name can shape identity, confidence, and purpose.\n\nDrawing from her own journey, Jasmita takes the TEDx stage to explore how names are more than labels—they carry stories, meaning, and the potential to influence who we become. Through her talk, she invites the audience to reflect on the significance of identity and embrace the unique story behind their own name.",
    image: "/Jasmita.jpeg",
  },
  {
    id: 3,
    name: "Nandhana Vinod",
    designation: "Speaker",
    bio: "Nandhana Vinod is a Class 10 student at Chinmaya Vidyalaya, Kollam, with a deep passion for writing, public speaking, and expressing ideas that inspire meaningful conversations. She believes that words have the power to challenge perspectives and spark positive change.",
    fullBio: "Nandhana Vinod is a Class 10 student at Chinmaya Vidyalaya, Kollam, with a deep passion for writing, public speaking, and expressing ideas that inspire meaningful conversations. She believes that words have the power to challenge perspectives and spark positive change.\n\nPassionate about feminism and gender equality, Nandhana hopes to encourage young people to embrace femininity with confidence and redefine it as a source of strength rather than limitation. Through her TEDx talk, she aims to inspire thoughtful dialogue and contribute, even in a small way, to building a society where every girl is proud of who she is.",
    image: "/Nandhana Vinod.jpeg",
  },
  {
    id: 4,
    name: "Ishaan Kiran Mithra",
    designation: "Speaker",
    bio: "An analytical high school student pursuing law, Ishaan Kiran Mithra loves finding the unexpected connections between technology, leadership, and human behavior. From coding to public speaking, they have always operated at the intersection of logic and structure.",
    fullBio: "An analytical high school student pursuing law, Ishaan Kiran Mithra loves finding the unexpected connections between technology, leadership, and human behavior. From coding to public speaking, they have always operated at the intersection of logic and structure. However, through their hands-on experiences managing school events and collaborative projects, they realized that true impact requires more than just a result-oriented mindset.\n\nTaking the stage at TEDx Chinmaya Vidyalaya Attukal Youth, Ishaan dives into the vital balance between technical management and human empathy. Their talk explores how embracing diverse passions allows us to navigate the tension between logic and emotion, ultimately helping the next generation lead with both clarity and compassion.",
    image: "/Ishaan Kiran Mithra.jpeg",
  },
  {
    id: 5,
    name: "Aarushi Pramod B",
    designation: "Speaker",
    bio: "Aarushi Pramod is a 14-year-old student of Class IX at Chinmaya Vidyalaya Vazhuthacaud who believes that the smallest moments often create the biggest changes. A creative thinker with a passion for painting, drawing, writing, reading and storytelling, she enjoys observing people and finding meaning in everyday experiences.",
    fullBio: "Aarushi Pramod is a 14-year-old student of Class IX at Chinmaya Vidyalaya Vazhuthacaud who believes that the smallest moments often create the biggest changes. A creative thinker with a passion for painting, drawing, writing, reading and storytelling, she enjoys observing people and finding meaning in everyday experiences.\n\nBeyond academics, Aarushi is a Kata Gold Medalist in Karate, a member of her school's Kho-Kho and Dance teams, and an enthusiastic participant in art, literary and exhibition events. Through her TEDxYouth talk, she hopes to remind audiences that a simple word of encouragement, thoughtful advice or small act of kindness can alter the course of a person's life in ways we may never fully realize.",
    image: "/Aarushi Pramod.jpeg",
  },
  {
    id: 6,
    name: "Devangana A R",
    designation: "Speaker",
    bio: "Devangana is a curious learner with a passion for classical dance, public speaking, and debate. She loves exploring new ideas and challenging perspectives, believing that every conversation has the power to transform the way we think.",
    fullBio: "Devangana is a curious learner with a passion for classical dance, public speaking, and debate. She loves exploring new ideas and challenging perspectives, believing that every conversation has the power to transform the way we think.\n\nDriven by a passion for trying new things, Devangana takes on a unique social experiment: swapping the scrolling habits of an addictive scroller and a passive scroller. Her talk explores how a single everyday behavior can quietly transform the way we think, feel, and live.",
    image: "/Devangana.jpeg",
  },
  {
    id: 7,
    name: "Adithyan J V",
    designation: "Speaker",
    bio: "Adithyan is a curious and driven higher secondary student who enjoys exploring ideas that challenge the way people think. While preparing for his board examinations, he also pursues his passion for music, digital content creation, and building realistic DIY models from scratch.",
    fullBio: "Adithyan is a curious and driven higher secondary student who enjoys exploring ideas that challenge the way people think. While preparing for his board examinations, he also pursues his passion for music, digital content creation, and building realistic DIY models from scratch. A firm believer in stepping beyond his comfort zone, he sees every new opportunity as a chance to learn and grow.\n\nTaking the TEDxChinmaya Vidyalaya Attukal Youth stage, Adithyan hopes to encourage honest conversations about emotions and resilience. His talk, \"The Hidden Cost of Being Strong,\" explores the pressure of always appearing strong and explains why true courage lies not in hiding our struggles, but in facing them with honesty, self-awareness, and conviction.",
    image: "/Adithyan.jpeg",
  }
];

const guidingVoices = [
  {
    id: 1,
    name: "Sri R Suresh Mohan",
    designation: "Speaker",
    bio: `Suresh Mohan is a Chartered Accountant, professional leader and educationist with over four decades of experience across finance, corporate leadership and governance. For more than 20 years, he has been closely associated with Chinmaya Mission's educational movement, working with schools and young people.

His own journey—from Physics and Mathematics to Chartered Accountancy, professional practice and education—has been anything but linear, shaping his curiosity about how choices, values and unexpected turns influence who we become.

Drawing from a career shaped as much by unexpected turns as by deliberate choices, his TEDx talk, "Becoming Without a Blueprint," explores why an inner compass may matter more than a perfect plan in navigating an uncertain and rapidly changing world.`,
    image: "/suresh mohan.jpeg",
  },
  {
    id: 2,
    name: "Sri Abhilash Sudheesh",
    designation: "Speaker",
    bio: `Abhilash Sudheesh is a filmmaker, storyteller, and a creative strategist whose work explores the intersection of storytelling, branding, and human behaviour.

He is the Founder and Creative Head of 11th Hour Productions — a Kerala-based media production house. Throughout his career, he has led creative teams working with some of the country's leading brands, multinational companies, and institutions, crafting stories that connect with audiences. He is also a member of the Board of Management of Chinmaya Vidyalayas across Trivandrum & Kollam, contributing to educational and strategic initiatives across the institution.

Across films, brands, and communication campaigns, Abhilash has spent years exploring the power of stories to shape human thought and behaviour. His TEDx talk continues that exploration, inviting audiences to rethink one of life's biggest questions—not how we succeed, but how we become.`,
    image: "/Abhilash Sudheesh.jpeg",
  },
];

const featuredVoice = [
  {
    id: 1,
    name: "Air Commodore Prasanth Balakrishnan Nair",
    designation: "Featured Voice",
    bio: `Air Commodore Prasanth Balakrishnan Nair, known by his fighter-pilot call sign “PapaNair,” is a distinguished Indian Air Force officer, experimental test pilot and ISRO Gaganyatri. A recipient of the Kirti Chakra, India’s second-highest peacetime gallantry award, he has commanded a frontline Sukhoi Su-30MKI squadron and has nearly 3,000 hours of flying experience.

An alumnus of the National Defence Academy and Air Force Academy, he received the President’s Plaque and Sword of Honour. He is a Category A Flying Instructor, a graduate of the Air Force Test Pilots School and the Yuri Gagarin Cosmonaut Training Centre, and has trained with NASA, SpaceX, ESA and JAXA as the backup astronaut for the Axiom-4 mission.

He holds advanced degrees in strategic studies and aeronautics, including an MTech (Research) from IISc Bengaluru. His journey reflects courage, discipline, scholarship and a relentless drive to explore new frontiers.`,
    image: "/PRASANT SIR.jpeg",
  },
];

const GuidingVoiceCard = ({ speaker }: { speaker: typeof guidingVoices[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const shortBio = speaker.bio.split('\n\n')[0];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:-translate-y-1 transition-transform duration-300">
      <div className="relative w-full md:w-56 flex-shrink-0 min-h-[200px] sm:min-h-[220px] md:min-h-0">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-between p-6 md:p-8 flex-1">
        <div>
          <div className="flex items-start gap-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EB0028" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 opacity-90">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
              {expanded ? speaker.bio : shortBio}
            </p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#EB0028] font-semibold mt-2 text-sm flex items-center hover:text-red-800 transition-colors"
          >
            {expanded ? "Read Less ↑" : "Read More ↓"}
          </button>
        </div>
        <div className="border-t border-gray-100 pt-5 mt-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative ring-2 ring-[#EB0028]/20">
            <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">{speaker.name}</h3>
            <p className="text-xs text-[#EB0028] font-medium mt-0.5">{speaker.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerCard = ({ speaker }: { speaker: { id: number; name: string; designation: string; bio: string; fullBio: string; image: string } }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col h-full overflow-hidden border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
      {/* Full-bleed portrait image */}
      <div className="relative w-full h-72 flex-shrink-0">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover object-top"
        />
        {/* Red accent bar at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EB0028]" />
      </div>

      {/* Name & role */}
      <div className="px-5 pt-4 pb-3">
        <h3 className="text-base font-bold text-gray-900 leading-tight">{speaker.name}</h3>
        <p className="text-xs text-[#EB0028] font-semibold uppercase tracking-wide mt-1">{speaker.designation}</p>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-100" />

      {/* Bio */}
      <div className="px-5 py-4 flex flex-col flex-grow">
        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
          {expanded ? speaker.fullBio : speaker.bio}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#EB0028] font-semibold mt-3 text-sm hover:text-red-800 transition-colors self-start"
        >
          {expanded ? "Read Less ↑" : "Read More ↓"}
        </button>
      </div>
    </div>
  );
};

export default function SpeakersPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth : scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIdx = (idx: number) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth : scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: scrollAmount * idx, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const firstChild = scrollRef.current.firstElementChild as HTMLElement;
      const width = firstChild ? firstChild.offsetWidth : scrollRef.current.offsetWidth;
      if (width > 0) {
        const newIndex = Math.round(scrollPosition / width);
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">

      <div className="bg-[#EB0028] text-white py-16 sm:py-20 md:py-28 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Voices of Becoming</h1>
      </div>

      {/* Guiding Voices Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Guiding <span className="text-[#EB0028]">Voices</span>
          </h2>
          <div className="w-16 h-1 bg-[#EB0028] mx-auto rounded-full" />
        </div>
        <div className="flex flex-col gap-8">
          {guidingVoices.map((speaker) => (
            <GuidingVoiceCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>

      {/* Emerging Voices (Youth Speakers) Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-20 relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Emerging <span className="text-[#EB0028]">Voices</span>
          </h2>
          <div className="w-16 h-1 bg-[#EB0028] mx-auto rounded-full" />
        </div>

        <div className="-mx-3 relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {speakers.map((speaker) => (
              <div key={speaker.id} className="snap-start flex-none w-full md:w-1/2 lg:w-1/3 px-3">
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div
          onClick={() => scroll('left')}
          className="hidden lg:block absolute top-[55%] -left-4 -translate-y-1/2 cursor-pointer text-[#EB0028] hover:text-red-700 transition-colors"
        >
          <ChevronLeft strokeWidth={1.5} className="w-12 h-12" />
        </div>
        <div
          onClick={() => scroll('right')}
          className="hidden lg:block absolute top-[55%] -right-4 -translate-y-1/2 cursor-pointer text-[#EB0028] hover:text-red-700 transition-colors"
        >
          <ChevronRight strokeWidth={1.5} className="w-12 h-12" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          {speakers.map((_, idx) => (
            <div
              key={idx}
              onClick={() => scrollToIdx(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${idx === currentIndex ? 'bg-[#EB0028]' : 'bg-gray-300 hover:bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="bg-[#EB0028] text-white py-16 sm:py-20 md:py-28 px-4 text-center mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Featured Voice</h1>
      </div>

      {/* Featured Voice Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col gap-8">
          {featuredVoice.map((speaker) => (
            <GuidingVoiceCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        ::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
