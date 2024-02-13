'use client'
// Imports 
import { Button } from '@/components/ui/button'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Link from 'next/link';
import { LanguageBackground } from './designs/bg-gradient';
import { BentoGridThirdDemo } from './bento';

const numRows = 8; // Total number of rows
const numCols = 21; // Avatars per row

const discordImages = [
  
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
    <div className='extra pt-40'>
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

        <div className='pt-60' data-aos='fade-right'>
          <div className='text-center pb-12'>
            <h1 className='text-7xl text-slate-100 font-semibold'>Join a <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>Community</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>Build cool stuff with people like you</p>
          </div>
          {/* TODO: Add hover with names and images from the discord*/}
          <div className='space-y-4'>
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <div className="flex space-x-4 px-20 items-center justify-center" key={`row-${rowIndex}`}>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <div className="w-10" key={`col-${colIndex}`}>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="rounded" alt="Avatar"/>
              </div>
            ))}
          </div>
          ))}
          <div className='flex items-center justify-center'>
           <Button variant='goldHover'>
              <Link href='/courses'>
                Let's Start
              </Link>
            </Button>
            </div>
          </div>

          
        </div>
      </div>
     </div>
  )
}
