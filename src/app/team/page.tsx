import TeamCarousel from '@/components/TeamCarousel';

export const metadata = {
  title: 'Our Team | TEDx Chinmaya Vidyalaya Attukal Youth',
  description: 'Meet the passionate individuals working behind the scenes to make TEDx Chinmaya Vidyalaya Attukal Youth an unforgettable experience.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header Block */}
      <div className="w-full bg-[#EA0028] text-white pt-40 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans tracking-wide">
          Meet Our Team
        </h1>
        <div className="w-16 h-[2px] bg-white mb-6"></div>
        <p className="text-lg tracking-widest font-medium">2025</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 flex justify-center">
        <TeamCarousel />
      </div>
    </div>
  );
}
