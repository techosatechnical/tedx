"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/becoming.jpeg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/vedios/becoming.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
