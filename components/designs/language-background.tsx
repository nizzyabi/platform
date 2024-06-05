import React from 'react'
import Image from 'next/image'

type ImageInfo = {
  src: string
  alt: string
}

const imagesRow1: ImageInfo[] = [
  { src: '/next.png', alt: 'Nextjs' },
  { src: '/JS.png', alt: 'JavaScript' },
  { src: '/prisma.png', alt: 'Prisma' },
  { src: '/C.png', alt: 'C' },
  { src: '/react.png', alt: 'React' },
  { src: '/TS.png', alt: 'TypeScript' }
]

const renderImages = (images: ImageInfo[]) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 ">
    {images.map(({ src, alt }) => (
      <div
        className="rounded-[22px] min-w-28 sm:min-w-32 md:min-w-48 flex items-center justify-center aspect-square bg-secondary border border-primary/20 relative select-none"
        key={src}
      >
        <Image
          src={src}
          alt={alt}
          height={9999}
          width={9999}
          className={`absolute w-3/5 object-contain rounded-xl ${
            alt === 'Nextjs' ? 'brightness-0 dark:brightness-100' : ''
          }`}
        />
      </div>
    ))}
  </div>
)

export function LanguageBackground() {
  return (
    <div className="flex flex-col items-center">{renderImages(imagesRow1)}</div>
  )
}
