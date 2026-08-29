'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  thumb?: string;
  label?: string;
};

const galleryItems: MediaItem[] = [
  // Videos
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-16 at 2.17.03 PM (1).mp4',
    label: 'TEDx Moment 1',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-16 at 2.17.03 PM.mp4',
    label: 'TEDx Moment 2',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-16 at 2.17.04 PM.mp4',
    label: 'TEDx Moment 3',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-16 at 2.17.07 PM.mp4',
    label: 'TEDx Moment 4',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-17 at 2.11.08 PM.mp4',
    label: 'TEDx Moment 5',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-18 at 8.53.46 AM.mp4',
    label: 'TEDx Moment 6',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-21 at 11.16.29 AM.mp4',
    label: 'TEDx Moment 7',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-21 at 11.16.29 AM (1).mp4',
    label: 'TEDx Moment 8',
  },
  {
    type: 'video',
    src: '/gallery/WhatsApp Video 2026-07-27 at 4.42.56 PM.mp4',
    label: 'TEDx Moment 9',
  },
  {
    type: 'video',
    src: '/gallery/CVA ARYASREE TED X RL HQ.mp4',
    label: 'TEDx Moment 10',
  },
  {
    type: 'video',
    src: '/gallery/CVA JASMITHA TED X RL HQ.mp4',
    label: 'TEDx Moment 11',
  },
  {
    type: 'video',
    src: '/gallery/CVK ISHAAN TEDX HQ.mp4',
    label: 'TEDx Moment 12',
  },
  {
    type: 'video',
    src: '/gallery/CVKAT DEVANGANA TEDX CUTOUT HQ.mp4',
    label: 'TEDx Moment 13',
  },
  {
    type: 'video',
    src: '/gallery/CVKLM NANDANA TED X RL HQ.mp4',
    label: 'TEDx Moment 14',
  },
  {
    type: 'video',
    src: '/gallery/CVV AARUSHI TEDX CUTOUT HQ.mp4',
    label: 'TEDx Moment 15',
  },
  {
    type: 'video',
    src: '/gallery/CVN TEDX ADHITHYAN CUTOUT REEL HQ.mp4',
    label: 'TEDx Moment 16',
  },
];

function VideoCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      // If not playing yet, start playing so sound works
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group bg-black cursor-pointer"
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onMouseEnter={() => { videoRef.current?.play(); setIsPlaying(true); }}
        onMouseLeave={() => {
          if (isMuted) {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
            setIsPlaying(false);
          }
        }}
      />
      {/* Play icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          // Muted icon
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          // Unmuted icon
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
      {/* Label */}
      {item.label && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-medium">{item.label}</p>
        </div>
      )}
    </div>
  );
}

function LightboxModal({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(err => {
        console.log("Playback prevented or failed:", err);
      });
    }
  }, [item]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            src={item.src}
            controls
            playsInline
            className="w-full h-full max-h-[85vh] object-contain bg-black"
          />
        ) : (
          <div className="relative w-full aspect-[4/3]">
            <Image src={item.src} alt={item.label || 'Gallery image'} fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const textToType = 'Moments of Becoming ';
  const [typedText, setTypedText] = useState('');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  useEffect(() => {
    let index = 0;
    let direction = 1;
    const interval = setInterval(() => {
      setTypedText(textToType.substring(0, Math.max(0, index)));
      if (direction === 1) {
        if (index > textToType.length + 20) { direction = -1; index = textToType.length; }
        else { index++; }
      } else {
        if (index < -5) { direction = 1; index = 0; }
        else { index -= 2; }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#e6e9ee]">

      {/* Header Section */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center bg-[#f4f5f7] overflow-hidden">
        <svg className="absolute bottom-0 right-0 w-full h-full pointer-events-none" viewBox="0 0 1440 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0V500H0C400 480 900 350 1440 0Z" fill="#EA0028" />
          <path d="M1440 50V500H200C600 480 1000 380 1440 50Z" fill="#B3001E" />
        </svg>
        <div className="relative z-10 text-center px-4 pt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-sans h-[60px] sm:h-[72px]">
            {typedText}<span className="animate-pulse">|</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 px-4">
            Relive the conversations, connections, and inspiring moments that made TEDxChinmayaVidyalayaAttukalYouth unforgettable.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="flex-1 w-full py-16 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">

          {/* Videos Section */}
          {galleryItems.some(i => i.type === 'video') && (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-[#EA0028] rounded-full" />
                <h2 className="text-2xl font-bold text-gray-800"> Before The Red Dot</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-14">
                {galleryItems.filter(i => i.type === 'video').map((item, idx) => (
                  <VideoCard key={idx} item={item} onClick={() => setSelectedItem(item)} />
                ))}
              </div>
            </>
          )}

          {/* Images Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-[#EA0028] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Beyond The Red Dot</h2>
          </div>
          {galleryItems.some(i => i.type === 'image') ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.filter(i => i.type === 'image').map((item, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group bg-white cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.label || `Gallery Image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-12 bg-white/50 rounded-2xl border border-gray-200 border-dashed">
              <p className="text-gray-500 text-lg">Images coming soon...</p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
