import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

type ImageInfo = {
  src: string;
  alt: string;
  padding: string;
};

const imagesRow1: ImageInfo[] = [
  { src: '/next.png', alt: 'Nextjs', padding: 'p-8' },
  { src: '/JS.png', alt: 'JavaScript', padding: 'p-8' },
  { src: '/prisma.png', alt: 'Prisma', padding: 'p-8' },
  { src: '/C.png', alt: 'Nextjs', padding: 'p-[29px]' },
  { src: '/react.png', alt: 'JavaScript', padding: 'p-[41px]' },
  { src: '/TS.png', alt: 'React', padding: 'p-[35px]' },
];



const renderImages = (images: ImageInfo[]) => (
  <div className="grid grid-cols-3 gap-4 p-3">
    {images.map(({ src, alt, padding }) => (
      <BackgroundGradient className={`rounded-[22px] max-w-sm flex items-center justify-center ${padding} bg-[#131212]`} key={src}>
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
