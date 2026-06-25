'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'Registrations Open — TEDx Chinmaya Vidyalaya Attukal Youth 2026',
    date: '6/7/2026, 4:25:05 PM',
    content: `Write your message.Be part of an inspiring journey of ideas at TEDx Chinmaya Vidyalaya Attukal Youth 2026 on 25 June 2026 at Apple Global School Auditorium, Ahmedabad.

This year’s theme, “The Kaleidoscope of Perspectives,” celebrates diverse viewpoints, meaningful dialogue, and ideas that inspire change.

📍 Date: 25 June 2026
🕣 Reporting Time: 8:30 AM
🎤 Event Begins: 9:00 AM onwards
🎟 Audience Registration Fee: ₹1000

Only 30 audience seats are available and registrations are accepted on a first come, first served basis, subject to approval and payment verification.

Register now and join an unforgettable TEDx experience.

Registration Link: https://forms.gle/NJH9tCHshBbT9YWF8`
  },
  {
    id: 2,
    title: 'New Event Theme: Theme: The Kaleidoscope of Perspectives',
    date: '2/3/2026, 9:20:42 PM',
    content: `This theme, “The Kaleidoscope of Perspectives,” reflects the vibrant interplay of diverse voices, ideas, and experiences—reminding us that no single viewpoint holds the full picture of truth. Like a kaleidoscope, perspectives shift, blend, and refract, creating patterns that are constantly evolving and endlessly inspiring. It celebrates the power of diversity in thought and the beauty of understanding the world through many lenses.

In this edition, TEDx Chinmaya Vidyalaya Attukal Youth continues its pioneering journey as Gujarat’s first youth-led TEDx event to achieve both ISO 9001:2015 (Quality Management) and ISO 20121:2024 (Sustainable Event Management) certifications. These benchmarks uphold our dedication to curating ideas with excellence while executing our event with responsibility, innovation, and sustainability at its core.

Through the insights of visionaries, dreamers, disruptors, and changemakers, we aim to explore how embracing multiple perspectives fuels creativity, empathy, and collective progress. This is not just a stage—it is a youth-powered canvas where every voice becomes a prism, shaping a more inclusive and imaginative tomorrow.`
  },
  {
    id: 3,
    title: 'Speaker Applications Closed : Read More',
    date: '8/7/2025, 4:14:18 PM',
    content: `Speaker Applications for TEDx Chinmaya Vidyalaya Attukal Youth 2025 Are Now Closed

Thank you for your overwhelming enthusiasm and interest in being a part of the TEDx Chinmaya Vidyalaya Attukal Youth Speaker Line-Up 2025!

Our speaker application process began in September 2024 and officially concluded at the end of February 2025. After months of reviewing incredible ideas and stories, our final speaker lineup has been curated with great care.

We have put up this notice because recently, many individuals have been reaching out to the organizers requesting a spot. While we are truly grateful for the interest, accepting new applications at this stage would be unethical to all those who applied within the given timeframe.

The speaker selection involved a rigorous and transparent process:

First, applicants submitted a written application via Google Forms.
Then, shortlisted candidates were invited for a formal Google Meet interview.
Afterward, a second round of shortlisting was conducted.
Finally, selected candidates submitted a final written application, based on which the final speaker lineup was confirmed.

Each applicant was given a fair and equal opportunity through this multi-step process. Hence, we cannot accommodate any new requests at this point.

We truly appreciate your understanding and continued support for TEDx Chinmaya Vidyalaya Attukal Youth. Stay tuned for more updates as we gear up for an inspiring event in June 2025!

For any other queries, please reach out to us at tedxthaltejyouth@gmail.com.

— TEDx Chinmaya Vidyalaya Attukal Youth Team`
  },
  {
    id: 4,
    title: 'Sustainability Update for TEDx Chinmaya Vidyalaya Attukal Youth : Read More',
    date: '8/7/2025, 4:13:33 PM',
    content: `At TEDx Chinmaya Vidyalaya Attukal Youth, we’re embracing a sustainable future.

To minimize paper usage and reduce our environmental impact:

📄 The Flow of Event will be shared via QR codes projected at the venue and emailed to all attendees — no printed booklets!
🎟️ No physical ID cards this year! Your e-ticket will serve as your entry verification.

We thank you for supporting our green initiative and helping us make a difference. 🌍✨`
  }
];

export default function NotificationsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Notifications</h1>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-16 lg:px-24 pb-16 space-y-4 mt-7 max-w-6xl mx-auto text-black">
        <div className="border rounded-xl overflow-hidden divide-y">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-white">
              <button 
                onClick={() => toggleAccordion(notification.id)}
                className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition"
              >
                <div>
                  <h3 className="font-semibold text-lg">{notification.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
                </div>
                <div className="ml-4 flex-shrink-0 text-gray-400">
                  {openId === notification.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              
              {openId === notification.id && (
                <div className="p-4 bg-gray-50 text-gray-700 text-sm md:text-base border-t whitespace-pre-line">
                  {notification.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
