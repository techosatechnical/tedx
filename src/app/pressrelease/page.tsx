export const metadata = {
  title: 'Press Releases | TEDxThaltej Youth',
  description: 'Stay up to date with the latest announcements and stories from TEDxThaltej Youth.',
};

const pressReleases = [
  {
    _id: "6889f0a95ba857f1dd0589b0",
    title: "FOR IMMEDIATE RELEASE",
    pdfUrl: "/uploads/1753870504999-Press Release 2.pdf",
    date: "21 january 2025"
  },
  {
    _id: "6889f05b5ba857f1dd0589ad",
    title: "FOR IMMEDIATE RELEASE",
    pdfUrl: "/uploads/1753870427083-Press Release.pdf",
    date: "16 november 2024"
  },
  {
    _id: "6889eff45ba857f1dd0589aa",
    title: "FOR IMMEDIATE RELEASE",
    pdfUrl: "/uploads/1753870324739-1may.pdf",
    date: "1 may 2025"
  },
  {
    _id: "6889ef9a5ba857f1dd0589a7",
    title: "PUBLIC NOTICE – VENUE CHANGE",
    pdfUrl: "/uploads/1753870234474-pressrelease1.pdf",
    date: "11 june 2025"
  }
];

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

      {/* Grid Section */}
      <section className="bg-gray-200 py-16 px-6 md:px-12 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((pr) => (
              <div 
                key={pr._id} 
                className="bg-[#f5f5f5] rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-3">TEDxThaltej</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{pr.title}</h3>
                <p className="text-sm text-gray-500 mb-8 capitalize">{pr.date}</p>
                
                <div className="mt-auto">
                  <a 
                    href={pr.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#EA0028] font-bold text-sm inline-flex items-center group"
                  >
                    View PDF 
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
