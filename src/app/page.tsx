import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';




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
                title: "Nurturing the Whole Being",
                description: "To serve as a sacred crucible of intellectual and spiritual awakening, where powerful ideas inspire individuals to look within and embrace the profound journey of Becoming. We miss no opportunity to cultivate a sanctuary where the mind, intellect, and heart expand in perfect harmony, empowering our community to shed limitations, realize their highest potential, and step forth as compassionate, resilient architects of a luminous tomorrow."
              },
              {
                title: "Anchored in Heritage, Soaring Globally",
                description: "To illuminate a stage where the timeless wisdom of our cultural heritage gracefully meets the expansive horizons of tomorrow's world. Our mission is to ensure that the beautiful process of Becoming remains deeply rooted in the fertile, value-rich soil of our traditions, giving our youth the inner stability to wingspan global heights and view the entire world as one interconnected family."
              },
              {
                title: "Evolution and Sacred Service",
                description: "To ignite a spark of conscious self-evolution that transforms personal growth into a sacred offering for the world. We are dedicated to sharing ideas that inspire an inner alignment—where individual excellence naturally blossoms into patriotic devotion and universal service—guiding each soul in becoming a mindful leader who uplifts society and walks the earth with grace, purpose, and dignity."
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
            Experience the spirit of TEDx Chinmaya Vidyalaya Attukal Youth through our latest highlight video.
          </p>
          <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border-4 border-red-600 shadow-lg bg-gray-900">
            <video
              className="w-full h-full"
              controls
              playsInline
            >
              <source src="/vedios/TedX%20-2%20.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 mb-4">
              About <span className="text-[#EA0028]">TEDx</span>Chinmaya Vidyalaya Attukal Youth
            </h1>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {[
              {
                title: "The Awakening: Who We Are",
                description: "Welcome to TEDxChinmaya Vidyalaya Attukal Youth, a luminous arena where the boundless energy of young minds converges with the quiet grace of timeless wisdom. Our event serves as a magnificent canvas where conventional boundaries fade, creating a celebratory space where curiosity is honored, raw potential is kindled, and fresh perspectives are given wings to fly."
              },
              {
                title: "The Crucible: Embracing 'Becoming'",
                description: "In perfect alignment with our theme, we recognize that youth is not a mere waiting room for tomorrow, but a sacred, active dawn of self-discovery. We believe that the young spirit possesses a rare, unblemished clarity—an instinctive capacity to question the old and imagine the unwritten. Our stage is a sanctuary for this evolution, transforming fleeting sparks of inspiration into an enduring flame of conscious personal growth."
              },
              {
                title: "The Anchor: Rooted in Heritage, Soaring Globally",
                description: "We champion a journey of excellence where a sharp, modern intellect walks hand-in hand with a deeply compassionate heart. By grounding our vibrant youth in the rich, elegant soil of our cultural identity, we provide them with the inner stability needed to navigate a complex world. From these deep roots, our vision stretches outward, empowering young minds to soar toward global horizons and view the universe as one interconnected family."
              },
              {
                title: "The Destiny: Catalysts for Tomorrow",
                description: "TEDxChinmayaVidyalayaAttukal Youth is ultimately an invitation to witness the extraordinary. We gather to share ideas that bridge individual brilliance with a grander purpose—the uplifting of our society and our nation. This is where tomorrow's leaders gather to shatter limitations, bridge generations, and gracefully step into the light, beautifully becoming the visionary change-makers our world awaits."
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-4">
              <div className="bg-[#F9FAFB] p-4 rounded-lg mb-6">
                <h2 className="md:text-5xl text-3xl text-black text-center">
                  What is <span className="text-[#EA0028] font-bold">TEDx?</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-[#F9FAFB] p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl font-bold text-black">01.</div>
                    <h3 className="text-lg font-bold text-black">In TEDx, x = independently organized event</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl font-bold text-black">02.</div>
                    <h3 className="text-lg font-bold text-black">About TED</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.</p>
                    <p className="text-gray-700 text-sm leading-relaxed">TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world&#x27;s most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED’s many programs and initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col gap-4">
              <div className="relative flex-1 rounded-lg overflow-hidden min-h-[300px]">
                <Image alt="TEDx Chinmaya Vidyalaya" loading="lazy" fill className="object-cover" src="/CHINMAYA%20VIDYALAYA%20ATTUKAL%20YOUTH.png" />
              </div>
              <div className="relative flex-1 rounded-lg overflow-hidden min-h-[300px]">
                <Image alt="TEDx Stage" loading="lazy" fill className="object-cover" src="/TedXCva.png" />
              </div>
            </div>
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
            <h1 className="text-3xl md:text-4xl font-bold text-black font-sans leading-tight uppercase">
              Our Theme: <span className="text-[#EA0027]">Becoming</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 font-sans">
              <p className="text-gray-700 text-md leading-relaxed">
                Becoming is not about arriving at a destination; it is about embracing the continuous journey of growth, discovery, and transformation. It reflects the idea that every individual is constantly evolving—shaped by experiences, ideas, challenges, relationships, and the choices they make.
              </p>
              <p className="text-gray-700 text-md leading-relaxed">
                In a world defined by rapid change, Becoming invites us to pause and reflect on who we are, who we aspire to be, and the impact we seek to create. It encourages us to view learning as a lifelong pursuit, resilience as a catalyst for growth, and curiosity as the foundation of innovation. Every setback becomes an opportunity to learn, every conversation a chance to broaden perspective, and every action a step toward meaningful change.
              </p>
              <p className="text-gray-700 text-md leading-relaxed">
                At TEDx Chinmaya Vidyalaya Attukal Youth, Becoming celebrates the courage to question, the humility to learn, and the determination to grow. It recognises that transformation is both personal and collective. As individuals evolve, so do the communities they influence and the world they help shape.
              </p>
              <p className="text-gray-700 text-md leading-relaxed">
                Rooted in enduring values while embracing new ideas, this theme reflects the spirit of young minds who are prepared to think independently, lead responsibly, and contribute with purpose. It is a celebration of potential—not as something waiting to be discovered, but as something realised through continuous learning, thoughtful action, and meaningful collaboration.
              </p>
              <p className="text-gray-700 text-md leading-relaxed">
                Through the stories shared, the conversations sparked, and the ideas exchanged on this stage, we invite every participant to reflect on their own journey of becoming. For it is through this ongoing process of growth that we unlock our greatest potential, inspire others, and create a future shaped by knowledge, compassion, creativity, and courage.
              </p>
              <div className="text-black font-semibold text-md leading-relaxed space-y-1 mt-4">
                <p>Because becoming is not a moment. It is a mindset.</p>
                <p>It is not about perfection. It is about progress.</p>
                <p>It is not about who we are today, but who we choose to become tomorrow.</p>
              </div>
            </div>
            <div className="relative h-full flex flex-col">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
