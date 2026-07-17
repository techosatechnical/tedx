import Image from 'next/image';
import vision1 from '../assets/vision1.png';
import logoBlack from '../assets/TEDx black.png';

export default function VisionSection() {
  return (
    <section className="px-4 md:px-20 py-10 md:py-16 text-center bg-white overflow-hidden">
      <div className="flex justify-center items-center gap-1 mb-4">
        {/* Assuming vision1.png exists */}
        <Image alt="collaboration" loading="lazy" width={35} height={35} src={vision1} className="inline-block" />
        <span className="text-[#EB0028] text-3xl sm:text-4xl md:text-5xl font-sans font-semibold tracking-wider">Vision</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-4 mb-12 mt-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          At TEDx Chinmaya Vidyalaya Attukal Youth, we believe that life is a magnificent,
          continuous tapestry of Becoming—a sacred journey where ideas awaken the spirit and
          ignite deep personal transformation. Our vision is to create a sanctuary where the mind
          and intellect blossom in perfect harmony, deeply anchored in the fertile soil of our
          cultural roots yet soaring toward global horizons. True evolution is not solitary; it is the
          grace of aligning our individual growth with a profound love for our nation and a universal
          embrace of all humanity.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          TEDx Chinmaya Vidyalaya Attukal Youth stands as a radiant
          catalyst for this awakening, inviting our community to step into the light and gracefully
          become the visionary change-makers our world is waiting for.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 flex-wrap mt-8">
        <Image alt="TEDx Logo" loading="lazy" width={350} height={150} src={logoBlack} className="w-48 sm:w-64 md:w-80 lg:w-[350px] h-auto" />
        <p className="text-sm font-semibold text-black text-center px-4">This Independent TEDx event is operated under license from TED</p>
      </div>
    </section>
  );
}
