import React from 'react';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Notifications</h1>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-16 lg:px-24 pb-16 space-y-4 mt-7 max-w-6xl mx-auto">
        <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">No notifications available.</p>
      </div>
    </div>
  );
}
