import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-black mb-6">Privacy Policy</h1>
        <div className="w-16 h-[2px] bg-[#EA0028] mb-10"></div>
        
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p className="font-semibold">Last updated: June 2026</p>
          <p>
            At TEDx Chinmaya Vidyalaya Attukal Youth, we are committed to protecting your privacy. This policy outlines how we handle your personal information when you visit our website, register for our event, or interact with our community.
          </p>
          <h2 className="text-2xl font-bold text-black mt-8">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and phone number when you voluntarily submit it to us through our forms.
          </p>
          <h2 className="text-2xl font-bold text-black mt-8">2. How We Use Your Information</h2>
          <p>
            The information you provide is used strictly for event communication, registration processing, and improving our attendees&apos; experience. We do not sell or share your data with third parties without your explicit consent.
          </p>
          <p className="italic text-gray-500 mt-10">
            This is a placeholder for the official TEDx Chinmaya Vidyalaya Attukal Youth Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
