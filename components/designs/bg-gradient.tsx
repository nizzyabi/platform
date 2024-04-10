import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient'
import Image from 'next/image'

type ImageInfo = {
  src: string
  alt: string
}

const imagesRow1: ImageInfo[] = [
  { src: '/next.png', alt: 'Nextjs' },
  { src: '/JS.png', alt: 'JavaScript' },
  { src: '/prisma.png', alt: 'Prisma' },
  { src: '/C.png', alt: 'Nextjs' },
  { src: '/react.png', alt: 'JavaScript' },
  { src: '/TS.png', alt: 'React' }
]

const renderImages = (images: ImageInfo[]) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {images.map(({ src, alt }) => (
      <BackgroundGradient
        className="rounded-[22px] min-w-28 sm:min-w-32 md:min-w-48 flex items-center justify-center aspect-square bg-[#131212] relative"
        key={src}
      >
        <Image
          src={src}
          alt={alt}
          height={9999}
          width={9999}
          className="absolute w-2/3 object-contain"
        />
      </BackgroundGradient>
    ))}
  </div>
)

export function LanguageBackground() {
  return (
    <div className="flex flex-col items-center space-y-5">
      {renderImages(imagesRow1)}
    </div>
  )
}
