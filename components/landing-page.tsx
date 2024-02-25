'use client'
// Imports 
import { Button } from '@/components/ui/button'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Link from 'next/link';
import { LanguageBackground } from './designs/bg-gradient';
import { BentoGridThirdDemo } from './bento';
import { ThreeD } from './3d';

const testimonials = [
  {
    username: 'paulos',
    avatar: 'https://randomuser.me',
    message: "I have been learning to code for a while now, and I have to say that Nizar's channel has been a great help. The discord community is so helpful, and the content is top-notch :)."
  },
  {
    username: 'bacio001',
    avatar: 'https://randomuser.me',
    message: "Nizar helped me keep motivation in my own startup, and his videos are also nice to listen to while coding."
  },
  {
    username: 'liambrewster',
    avatar: 'https://randomuser.me',
    message: "Nizar’s breakdown of project building in live streams and videos is simply brilliant. His clear, easy-to-follow approach has made a significant impact on my understanding and confidence to get building! Highly recommended!"
  },
  {
    username: 'JonasDieNuss',
    avatar: 'https://randomuser.me',
    message: "Nizar on YT has been a game-changer for me! His educational and entertaining videos really helped me get back into coding, improve my skills, and establish better routines. I owe a lot of my progress to his guidance and suggestions."
  },
  {
    username: 'gorlami',
    avatar: 'https://randomuser.me',
    message: "Nizar's content consistently delivers valuable insights and entertainment in equal measure. Proud to be a part of your community!"
  },
  {
    username: 'amanbhujel',
    avatar: 'https://randomuser.me',
    message: "After watching Nizar's videos, I've been inspired to pursue my own business venture, and I'm confident he'll become a remarkable entrepreneur and influencer."
  },
  {
    username: 'Tiernan DeFranco',
    avatar: 'https://randomuser.me',
    message: "Nizar's channel came into my recommended shortly after I had finished learning basic web development, and despite originally attempting to leverage my skills in a regular career, his videos showcasing him building his startup pulled me back into pursuing an idea I had semi-given up on."
  },
  {
    username: 'Solomon.chidera',
    avatar: 'https://randomuser.me',
    message: "Discovered this server on YouTube, and it's been a pleasant surprise. The community here is so welcoming, and the content is genuinely helpful, unlike some others out there just looking to grab your attention and money."
  }
]

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='extra pt-40 landing'>
      <div className='mb-20 font-extrabold '>
        <div data-aos="fade-left" className='flex-1 flex flex-col items-center justify-center mb-4'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-bold header-landing'>Learn To<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'> Code</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>&& have fun doing it</p>
            <Button variant='goldHover'>
              <Link href='/courses'>
                Let's Start
              </Link>
            </Button>
        </div>

        <div className='text-center' data-aos='fade-right'>
          <BentoGridThirdDemo />
        </div>

        <div data-aos='fade-right' className='pt-64'>
          <div className='text-center'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-semibold header-landing'>Learn Modern Day<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 block pb-12'> Languages</span></h1>
            </div>
            <LanguageBackground />
        </div>

        <div>
          <div className='text-center pt-64'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-semibold header-landing'>Hear It From<span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block'> Others</span></h1>
          </div>
          <ThreeD />
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content text-center">
        <aside>
          <p>Copyright © 2024 - All right reserved by NizzyABI Corp.</p>
        </aside>
      </footer>
    </div>
  )
}
