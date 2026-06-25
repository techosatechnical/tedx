import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-black mb-6">Terms & Conditions</h1>
        <div className="w-16 h-[2px] bg-[#EA0028] mb-10"></div>
        
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p className="font-semibold">Last updated: June 2026</p>
          <p>
            Welcome to TEDxThaltej Youth. By accessing our website and attending our event, you agree to be bound by the following terms and conditions.
          </p>
          <h2 className="text-2xl font-bold text-black mt-8">1. Event Guidelines</h2>
          <p>
            Attendees are expected to behave respectfully toward speakers, organizers, and other participants. We reserve the right to refuse entry or ask individuals to leave if they violate our code of conduct.
          </p>
          <h2 className="text-2xl font-bold text-black mt-8">2. Ticketing and Refunds</h2>
          <p>
            All ticket sales are final. Refunds will only be issued in the event of a total cancellation of TEDxThaltej Youth. Tickets are non-transferable unless explicit permission is granted by the organizing team.
          </p>
          <p className="italic text-gray-500 mt-10">
            This is a placeholder for the official TEDxThaltej Youth Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
