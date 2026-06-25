import Image from 'next/image';
import vision1 from '../assets/vision1.png';
import logoBlack from '../assets/logo-black.png';

export default function VisionSection() {
  return (
    <section className="px-4 md:px-20 py-16 text-center bg-white overflow-hidden">
      <div className="flex justify-center items-center gap-1 mb-4">
        {/* Assuming vision1.png exists */}
        <Image alt="collaboration" loading="lazy" width={35} height={35} src={vision1} className="inline-block" />
        <span className="text-[#EB0028] md:text-5xl text-4xl font-sans md:mr-13 font-semibold tracking-wider">Vision</span>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 space-y-4 mb-12 mt-8">
        <p className="text-xl text-gray-700 leading-relaxed font-light">
          TEDxThaltejYouth is dedicated to amplifying the voices of the next generation. We believe in the power of youth to drive meaningful change, spark innovation, and challenge the status quo.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our platform serves as a catalyst for brilliant minds across diverse disciplines to share their unique perspectives. Whether it&#x27;s technology, arts, science, or social entrepreneurship, we bring together ideas that have the potential to shape our collective future.
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        <Image alt="TEDx Logo" loading="lazy" width={350} height={150} src={logoBlack} />
      </div>
    </section>
  );
}
