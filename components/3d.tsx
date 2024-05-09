'use client'

import React from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { FaDiscord } from 'react-icons/fa'
import { Avatar } from '@mui/material'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { AtSign } from 'lucide-react'

const testimonials = [
  {
    username: 'Paulos',
    avatar: '/testimonials/paulos.webp',
    message:
      "I have been learning to code for a while now, and I have to say that Nizar's channel has been a great help. The discord community is so helpful, and the content is top-notch :)."
  },
  {
    username: 'Solomon.chidera',
    avatar: '/testimonials/solomon.webp',
    message:
      "Discovered this server on YouTube, and it's been a pleasant surprise. The community here is so welcoming, and the content is genuinely helpful, unlike some others out there just looking to grab your attention and money."
  },
  {
    username: 'Liambrewster',
    avatar: '/testimonials/liam.webp',
    message:
      'Nizar’s breakdown of project building in live streams and videos is simply brilliant. His clear, easy-to-follow approach has made a significant impact on my understanding and confidence to get building! Highly recommended!'
  },
  {
    username: 'JonasDieNuss',
    avatar: '/testimonials/jonas.webp',
    message:
      'Nizar on YT has been a game-changer for me! His educational and entertaining videos really helped me get back into coding, improve my skills, and establish better routines. I owe a lot of my progress to his guidance and suggestions.'
  },
  {
    username: 'Tiernandefranco',
    avatar: '/testimonials/tiernande.webp',
    message:
      "Nizar's channel came into my recommended shortly after I had finished learning basic web development, and despite originally attempting to leverage my skills in a regular career, his videos showcasing him building his startup pulled me back into pursuing an idea I had semi-given up on."
  },
  {
    username: 'Paul',
    avatar: '/testimonials/paul.webp',
    message:
      "Nizar has built an extraordinary community that I'm proud to be a part of. Surrounded by individuals eager to learn and help each other in tech and business, it has become the ideal environment for developing startup ideas and advancing open-source projects."
  },
  {
    username: 'Amanbhujel',
    avatar: '/testimonials/aman.webp',
    message:
      "After watching Nizar's videos, I've been inspired to pursue my own business venture, and I'm confident he'll become a remarkable entrepreneur and influencer."
  },
  {
    username: 'Bacio001',
    avatar: '/testimonials/bacio.webp',
    message:
      'Nizar helped me keep motivation in my own startup, and his videos are also nice to listen to while coding by myself.'
  },
  {
    username: 'Svenplb',
    avatar: '/testimonials/dominik.webp',
    message:
      'Nizar and his videos have significantly improved my coding skills and helped me learn new things. The positive atmosphere of his Discord community is also enjoyable.'
  },

  {
    username: 'Calculuscoder',
    avatar: '/testimonials/calculus.webp',
    message:
      "Nizar has been a great friend, leader, and instructor in the software development field. I've closely followed his videos and YouTube channel for several months and his content is amazing."
  },
  {
    username: 'Gorlami',
    avatar: '/testimonials/mbdtf.webp',
    message:
      "Nizar's content consistently delivers valuable insights and entertainment in equal measure. Proud to be a part of your community!"
  },
  {
    username: '3.ba',
    avatar: '/testimonials/3ba.webp',
    message:
      "Nizar is the reason why i'm continue working on my project because of his motivate videos on his youtube channel"
  }
]

export function ThreeD() {
  return (
    <div className="w-fit mx-auto">
      <ResponsiveMasonry
        className="flex w-full mx-auto justify-start"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}
      >
        <Masonry gutter="1.5rem" className="masonry-grid">
          {testimonials.map((testimonial) => (
            <CardContainer
              className="flex h-full cursor-default"
              key={testimonial.username}
            >
              <CardBody className="bg-[#131212] relative group/card border-slate-100/20 h-full rounded-xl px-6 py-4 border ">
                <div className="flex justify-between">
                  <CardItem
                    translateZ="50"
                    className="text-base sm:text-xl font-bold text-slate-100 flex space-between items-center"
                  >
                    <div className="flex gap-2 items-center">
                      <Avatar
                        src={testimonial.avatar}
                        alt={`${testimonial.username}s Avatar`}
                      />
                      <span className="flex gap-0.5 items-center">
                        <AtSign className="w-5 h-5 text-zinc-500" />
                        {testimonial.username}
                      </span>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-slate-100 flex space-between items-center"
                  >
                    <FaDiscord className="text-indigo-400 text-4xl" />
                  </CardItem>
                </div>

                <CardItem className="font-medium pt-4 opacity-50">
                  <p>"{testimonial.message}"</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
