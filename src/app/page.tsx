import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';

import ted1 from '../assets/ted.jpg';
import ted2 from '../assets/ted2.jpg';
import iso1 from '../assets/iso1.jpg';
import iso2 from '../assets/iso2.png';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />

      {/* Mission Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 pb-16 pt-6">
          <div className="text-center mb-12">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 mb-4">
              <span className="text-[#EA0028]">Mission</span>
            </h1>
            <p className="text-xl text-black">Shaping Tomorrow Through Ideas That Matter</p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Youth Empowerment",
                description: "At TEDx Thaltej Youth, our mission is to create a platform where ideas worth spreading are shared with young minds."
              },
              {
                title: "Inspiring Change",
                description: "We aim to bring together passionate thinkers, educators, and innovators who will challenge conventional perspectives, inspire curiosity, and ignite positive action in the realm of education."
              },
              {
                title: "Future Forward",
                description: "Through talks, discussions, and collaborations, we strive to spark a movement that drives the future of education—one that is inclusive, innovative, and accessible for all."
              }
            ].map((mission, i) => (
              <div key={i} className="bg-white rounded-2xl border-4 border-black p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-[#EB0028] font-bold text-xl">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{mission.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="bg-black py-16 px-4 md:px-20 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Watch Our <span className="text-[#EB0129]">Vision</span> in Action
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience the spirit of TEDxThaltej Youth through our latest highlight video.
          </p>
          <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border-4 border-red-600 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/3nWF4UE4RL4?si=VGh5DdTClTk13jqi"
              className="w-full h-full"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 mb-4">
              About <span className="text-[#EA0028]">TEDx</span>Thaltej Youth
            </h1>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {[
              {
                title: "Empowering Young Minds",
                description: "TEDxThaltej Youth is a student-organized TEDx event designed to empower young minds and foster transformative ideas within our community."
              },
              {
                title: "Shaping the Future of Education",
                description: "We bring together students, educators, and changemakers to share insights that shape the future of education."
              },
              {
                title: "Future Forward",
                description: "Through talks, discussions, and collaborations, we strive to spark a movement that drives the future of education—one that is inclusive, innovative, and accessible for all."
              },
              {
                title: "The Future of Education – A Light Towards Wisdom",
                description: "Our theme for 2025, “The Future of Education – A Light Towards Wisdom,” invites a new generation to explore innovative ideas and wisdom-driven paths that can illuminate and evolve the educational landscape."
              }
            ].map((about, i) => (
              <div key={i} className="bg-white rounded-2xl border-4 border-black p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-[#EB0028] font-bold text-xl">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{about.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{about.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What is TEDx Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-[#F9FAFB] p-4 rounded-lg mb-6">
                <h2 className="md:text-5xl text-3xl text-black text-center">
                  What is <span className="text-[#EA0028] font-bold">TEDx?</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#F9FAFB] p-6 rounded-lg">
                  <div className="text-3xl font-bold text-black mb-2">01.</div>
                  <h3 className="text-lg font-bold text-black mb-3">What is TEDx?</h3>
                  <p className="text-gray-700 text-sm">TEDx is a global initiative by TED to bring the spirit of TED&#x27;s mission, “Ideas Worth Spreading,” to local communities around the world. These independently organized events follow TED&#x27;s format and guidelines.</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-black mb-2">02.</div>
                  <h3 className="text-lg font-bold text-black mb-3">The Power of TEDx Talks</h3>
                  <p className="text-gray-700 text-sm">At TEDx events, speakers from diverse backgrounds—ranging from technology, entertainment, and design to science, education, and beyond—deliver short, impactful talks on topics they’re passionate about. These talks aim to spark conversations, challenge perspectives, and inspire action.</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-black mb-2">03.</div>
                  <h3 className="text-lg font-bold text-black mb-3">Community-Driven Events</h3>
                  <p className="text-gray-700 text-sm">Each TEDx event is independently organized by a dedicated team of volunteers who carefully curate the event&#x27;s theme, speakers, and activities to reflect the local spirit and interests.</p>
                </div>
                <div className="bg-[#F9FAFB] p-6 rounded-lg">
                  <div className="text-3xl font-bold text-black mb-2">04.</div>
                  <h3 className="text-lg font-bold text-black mb-3">Inspiring Connection and Change</h3>
                  <p className="text-gray-700 text-sm">TEDx events are designed not only to inspire audiences but also to foster meaningful connections and a sense of community, driving conversations that can lead to real-world impact.</p>
                </div>
              </div>
            </div>
            <div className="h-full">
              <Image alt="tedimage" loading="lazy" width={700} height={1600} className="rounded-lg" src={ted1} />
              <div>
                <Image alt="tedimage" loading="lazy" width={700} height={400} className="rounded-lg mt-5" src={ted2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Event Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl text-black leading-tight">
              What is a <span className="font-bold text-[#EA0027]">Youth</span> Event?
            </h1>
            <button className="mt-8 bg-[#EA0027] hover:bg-black hover:text-white text-white font-semibold py-3 px-6 rounded-md shadow transition">
              Enroll Now
            </button>
          </div>
          <div>
            <p className="text-black text-lg leading-relaxed">
              TEDx Youth events are independently organized TEDx events designed specifically for and by young people, giving them a platform to share ideas, inspire action, and spark meaningful conversations. These events provide a unique opportunity to showcase youth-driven innovation, creativity, and leadership. With a focus on empowering the next generation, TEDx Youth events feature inspiring talks from students, educators, and thought leaders, all aimed at shaping a better future. TEDxThaltej Youth is part of this global initiative, aiming to amplify the voices of young changemakers and create a ripple effect of ideas worth spreading.
            </p>
          </div>
        </div>
      </section>

      {/* Voices That Inspire Us Section */}
      <div className="bg-[#F7F7F7] py-16 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-200 rounded-full opacity-25"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute top-60 right-10 w-12 h-12 bg-red-400 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-black font-sans leading-tight">
              Voices That <span className="text-[#EA0027]">Inspire</span> Us
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 font-sans">
              <p className="text-gray-700 text-md leading-relaxed">
                <span className="text-black">TEDx events are designed to serve as a platform for sharing &quot;ideas worth spreading,&quot; and this naturally includes using languages that resonate most with your audience. Organizers are encouraged to embrace linguistic diversity as it can reflect and celebrate the multicultural makeup of a community.</span>
              </p>
              <p className="text-black text-md leading-relaxed">
                TEDxThaltej Youth is designed for a diverse audience, including students, educators, professionals, and idea enthusiasts. Anyone eager to learn and engage in powerful discussions is welcome.
              </p>
              <p className="text-black text-md leading-relaxed">
                Applications for TEDxThaltej Youth 2026 in November 2025. Stay updated by subscribing to our mailing list.
              </p>
            </div>
            <div className="relative h-full flex flex-col">
              <TestimonialCarousel />
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-black text-white hover:bg-red-500 border px-8 py-3 font-sans rounded-full font-semibold transition-colors duration-200 flex items-center">
              TALK TO AN EXPERT
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ISO Certifications Section */}
      <section className="bg-gray-100 py-16 md:p-10 p-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-black">
            ISO <span className="text-[#EB0129]">Certifications</span>
          </h2>
          <div className="relative max-w-6xl mx-auto px-6 py-12 rounded-2xl hover:bg-[#F3F4F6] shadow-2xl overflow-hidden transition-all duration-500">
            <div className="relative z-10">
              <p className="text-black">
                TEDxThaltej Youth is officially certified under two globally recognized ISO standards. These certifications reflect our commitment to high-quality event management and sustainability in everything we do.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-stretch gap-8 py-10 flex-wrap">
          <div className="flex flex-col items-center max-w-sm w-full">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg w-full border border-gray-100 flex-1 flex flex-col">
              <Image src={iso1} alt="ISO 20121:2024 Certification" width={300} height={300} className="rounded-lg  hover:scale-105 transition-transform duration-300 mb-6 object-contain" />
              <h3 className="font-bold text-xl text-black mb-2">ISO 20121:2024</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Event Sustainability Management System</p>
              <div className="text-sm text-gray-700 text-left space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p><strong className="text-black">Certificate No:</strong> ICI/1073892/25</p>
                <p><strong className="text-black">Issued Date:</strong> 21st April 2025</p>
                <p><strong className="text-black">Valid Until:</strong> 20th April 2028</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center max-w-sm w-full">

            <div className="text-center bg-white p-6 rounded-xl shadow-lg w-full border border-gray-100 flex-1 flex flex-col">
              <Image src={iso2} alt="ISO 9001:2015 Certification" width={300} height={300} className="rounded-lg  hover:scale-105 transition-transform duration-300 mb-6 object-contain" />
              <h3 className="font-bold text-xl text-black mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Quality Management System</p>
              <div className="text-sm text-gray-700 text-left space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p><strong className="text-black">Certificate No:</strong> QMS/230620/5564</p>
                <p><strong className="text-black">Issued Date:</strong> 21st April 2025</p>
                <p><strong className="text-black">Valid Until:</strong> 20th April 2028</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
