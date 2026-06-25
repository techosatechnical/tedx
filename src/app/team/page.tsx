import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import fenilImage from '@/assets/fenil-shah.jpg';

export const metadata = {
  title: 'Our Team | TEDx Chinmaya Vidyalaya Attukal Youth',
  description: 'Meet the passionate individuals working behind the scenes to make TEDx Chinmaya Vidyalaya Attukal Youth an unforgettable experience.',
};

const teamMembers = [
  {
    _id: "696b891b22591a89f66121a7",
    name: "Fenil Shah",
    position: "Organizer & Licensee",
    about: "Fenil Pritesh Shah is a student, writer, and institution builder with a passion for learning, leadership, and creating meaningful impact. He is currently pursuing a Bachelor of Science in Management (Business Analytics) at Ahmedabad University. Apart from serving as the Organizer of TEDx Chinmaya Vidyalaya Attukal Youth, Fenil leads and contributes to several initiatives focused on research, publishing, education, and youth engagement. He is committed to building platforms that encourage knowledge creation, intellectual dialogue, and long-term social development. Fenil is also an author and TED Translator.",
    image: fenilImage,
    socials: {
      linkedin: "https://www.linkedin.com/in/fenil-shah-729822271/"
    }
  }
];

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

      <div className="max-w-6xl mx-auto px-6 mt-20">
        {teamMembers.length > 0 ? (
          <div className="flex flex-col gap-24">
            {teamMembers.map((member: typeof teamMembers[0]) => (
              <div key={member._id} className="flex flex-col md:flex-row items-start gap-12 group">

                {/* Image Section */}
                <div className="relative w-full md:w-[320px] flex-shrink-0 mt-4 mx-auto md:mx-0">
                  {/* Decorative Dots */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#EA0028] rounded-full z-10"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-black rounded-full z-10"></div>

                  <div className="relative w-full aspect-[4/4.5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col flex-1 pt-4">
                  <h3 className="text-4xl font-extrabold text-black mb-2">{member.name}</h3>
                  <p className="text-[#EA0028] font-bold text-md mb-6">{member.position}</p>

                  <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                    {member.about}
                  </p>

                  {member.socials?.linkedin && member.socials.linkedin.trim() !== '' && (
                    <div className="mt-auto">
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors mb-3"
                      >
                        <FaLinkedinIn className="text-sm" />
                      </a>
                      {/* Decorative bottom line */}
                      <div className="flex">
                        <div className="w-4 h-[2px] bg-[#EA0028]"></div>
                        <div className="w-8 h-[2px] bg-black"></div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-4"></div>
            <p className="text-gray-500">Loading team members...</p>
          </div>
        )}
      </div>
    </div>
  );
}
