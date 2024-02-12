import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

type ImageInfo = {
  src: string;
  alt: string;
  padding: string;
};

const imagesRow1: ImageInfo[] = [
  { src: '/Next.png', alt: 'JavaScript', padding: 'p-7' },
  { src: '/JS.png', alt: 'JavaScript', padding: 'p-7' },
  { src: '/prisma.png', alt: 'Prisma', padding: 'p-7' },
];

const imagesRow2: ImageInfo[] = [
  { src: '/JS.png', alt: 'JavaScript', padding: 'p-7' },
  { src: '/C.png', alt: 'C', padding: 'p-6' },
  { src: '/next.png', alt: 'Next.js', padding: 'p-7' },
];

const renderImages = (images: ImageInfo[]) => (
  <div className="flex justify-center space-x-7">
    {images.map(({ src, alt, padding }) => (
      <BackgroundGradient className={`rounded-[22px] max-w-sm flex items-center justify-center ${padding} bg-zinc-900`} key={src}>
        <Image
          src={src}
          alt={alt}
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
    ))}
  </div>
);

export function LanguageBackground() {
  return (
    <div className="flex flex-col items-center space-y-5">
      {renderImages(imagesRow1)}
      
    </div>
  );
}
