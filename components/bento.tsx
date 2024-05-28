'use client'
import { cn } from '@/utils/cn'
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface props {
  className?: string
}

export function Bento({ className }: props) {
  return (
    <BentoGrid
      className={`max-w-4xl mx-auto md:auto-rows-[20rem] px-8 ${className}`}
    >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn('[&>p:text-lg]', item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]  [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-primary/[0.2] bg-primary"></div>
)

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }
  const variantsSecond = {
    initial: {
      x: 0
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-2 "
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-primary/20 p-2  items-center space-x-2 bg-secondary "
      >
        <Image
          src="/calc2.webp"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full w-8 object-fit aspect-square"
        />
        <div className="w-full bg-primary/10 h-4 rounded-full " />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-primary/20 p-2 items-center space-x-2 w-3/4 ml-auto bg-secondary"
      >
        <div className="w-full bg-primary/10 h-4 rounded-full " />
        <Image
          src="/nizar.png"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full w-8 object-fit aspect-square"
        />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-primary/20 p-2 items-center space-x-2 bg-secondary"
      >
        <Image
          src="/calc2.webp"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full w-8 object-fit aspect-square"
        />
        <div className="w-full bg-primary/10 h-4 rounded-full" />
      </motion.div>
    </motion.div>
  )
}
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2
      }
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2
      }
    }
  }
  const arr = new Array(6).fill(0)
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%'
          }}
          className="flex flex-row rounded-full border border-primary/20  p-2  items-center space-x-2 bg-secondary w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  )
}
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%'
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%']
    }
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      className="flex flex-1 rounded-md w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-2"
      style={{
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%'
      }}
    >
      <motion.div className="h-full w-full"></motion.div>
    </motion.div>
  )
}
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5
    },
    hover: {
      x: 0,
      rotate: 0
    }
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5
    },
    hover: {
      x: 0,
      rotate: 0
    }
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-secondary p-4 border border-primary/20 flex flex-col items-center justify-center"
      >
        <Image
          src="/testimonials/sven.webp"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-primary/80 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-secondary p-4 border border-primary/20 flex flex-col items-center justify-center">
        <Image
          src="/paulos.webp"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-primary/80 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-secondary p-4 border border-primary/20 flex flex-col items-center justify-center"
      >
        <Image
          src="/testimonials/tiernande.webp"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-primary/80 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  )
}
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }
  const variantsSecond = {
    initial: {
      x: 0
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-center rounded-full border border-primary/20 dark:border-white/[0.2] p-2 text-start space-x-2 bg-secondary "
      >
        <Image
          src="/nizar.png"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full h-10 w-10"
        />
        <p className="text-sm text-primary pt-1">
          What's the best framework?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-primary/20 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-secondary"
      >
        <p className="text-sm text-primary"> NextJS.</p>
        <Image
          src="/calc.webp"
          alt="avatar"
          height={9999}
          width={9999}
          className="rounded-full h-10 w-10"
        />
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: 'Get Personal Tutoring',
    description: (
      <span className="text-sm">
        Experience the power of coding with someone in real-time.
      </span>
    ),
    header: <SkeletonOne />,
    className: 'md:col-span-1',
    icon: <IconClipboardCopy className="h-4 w-4 text-primary" />
  },
  {
    title: 'Improve At Programming',
    description: (
      <span className="text-sm">
        Level up your skills with different languages &
        frameworks.
      </span>
    ),
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className="h-4 w-4 text-primary" />
  },
  {
    title: 'Beautiful Colors & Fonts',
    description: (
      <span className="text-sm">
        Build apps with the best modern day colors, tools, & fonts.
      </span>
    ),
    header: <SkeletonThree />,
    className: 'md:col-span-1',
    icon: <IconSignature className="h-4 w-4 text-primary" />
  },
  {
    // soemthing about the code app
    title: 'Have Fun Coding',
    description: (
      <span className="text-sm">
        Make coding fun with easy-to-follow tutorials & videos.
      </span>
    ),
    header: <SkeletonFour />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className="h-4 w-4 text-primary" />
  },

  {
    title: 'Talk To Others',
    description: (
      <span className="text-sm">
        Share your success & failures with others in the discord group.
      </span>
    ),
    header: <SkeletonFive />,
    className: 'md:col-span-1',
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-primary" />
  }
]
