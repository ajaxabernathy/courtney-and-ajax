"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHOTOS = Array.from(
  { length: 12 },
  (_, i) => `/images/home-hero/Photo${String(i).padStart(2, "0")}.webp`,
);

const INTERVAL_MS = 4000;

export const HeroFrame = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHOTOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[1090px] aspect-[2000/1288] md:-mr-[76px] md:scale-none scale-[1.1] -ml-8 md:ml-0">
      <Image
        src={PHOTOS[index]}
        alt="Courtney and Ajax"
        fill
        className="object-cover"
        priority
      />
      <Image
        src="/images/home-hero/home-hero-frame.webp"
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
    </div>
  );
};
