import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDx Chinmaya Vidyalaya Attukal Youth",
  description: "Independent TEDx event operated under license from TED.",
  icons: {
    icon: "/TedXCva.png",
  },
  openGraph: {
    title: "TEDx Chinmaya Vidyalaya Attukal Youth",
    description: "Independent TEDx event operated under license from TED.",
    url: "https://www.tedxchinmayavidyalayaattukalyouth.com",
    siteName: "TEDx Chinmaya Vidyalaya Attukal Youth",
    images: [
      {
        url: "https://www.tedxchinmayavidyalayaattukalyouth.com/TedXCva.png",
        width: 1200,
        height: 630,
        alt: "TEDx Chinmaya Vidyalaya Attukal Youth",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDx Chinmaya Vidyalaya Attukal Youth",
    description: "Independent TEDx event operated under license from TED.",
    images: ["https://www.tedxchinmayavidyalayaattukalyouth.com/TedXCva.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
