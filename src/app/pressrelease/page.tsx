export const metadata = {
  title: 'Press Releases | TEDx Chinmaya Vidyalaya Attukal Youth',
  description: 'Stay up to date with the latest announcements and stories from TEDx Chinmaya Vidyalaya Attukal Youth.',
};

export default function PressReleasePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Block */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">Press Releases</h1>
          <p className="text-white text-lg opacity-90">Stay up to date with the latest announcements and stories.</p>
        </div>
      </section>

      {/* Empty State Section */}
      <section className="bg-gray-100 py-24 px-6 md:px-12 flex-1 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#EA0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">No Press Releases Yet</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Press releases will be published here as they become available. Check back soon for the latest announcements from TEDx Chinmaya Vidyalaya Attukal Youth.
          </p>
        </div>
      </section>
    </div>
  );
}
