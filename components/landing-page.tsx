'use client'
// Imports 
import { Button } from '@/components/ui/button'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BiLogoHtml5, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { LanguageBackground } from './designs/bg-gradient';
import { GlowingStars } from './designs/course-cards';




const icons1 = [
  {
    name: "Discord",
    icon: <BsDiscord className='text-blue-500 text-4xl lg:text-5xl'/>
  },
  {
    name: "Youtube",
    icon: <BsYoutube className='text-red-500 text-4xl lg:text-5xl'/>
  },
  {
    name: "Github",
    icon: <BsGithub className='text-black text-4xl lg:text-5xl'/>
  },
]
const icons2 = [
  {
    name: "React",
    icon: <BiLogoReact className='text-cyan-500 text-5xl lg:text-6xl'/>
  },
  {
    name: "Javascript",
    icon: <BiLogoJavascript className='text-yellow-400 text-5xl lg:text-6xl'/>
  },
  {
    name: "HTML",
    icon: <BiLogoHtml5 className='text-orange-500 text-5xl lg:text-6xl'/>
  },
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
    
    <div className='pt-40 extra'>
      
      {/* Landing Page */}
      <div className='mb-20 font-extrabold '>
        {/* Text + Button */}
        <div data-aos="fade-left" className='flex-1 flex flex-col items-center justify-center mb-12'>
          
          
          {/* Sub text */}
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-bold header-landing'>Learn To<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'> Code</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>&& have fun doing it</p>
            
          {/* Button */}
          
            <Button variant='goldHover'>
              <Link href='/courses'>
                Let's Start
              </Link>
            </Button>
          
        </div>

        {/* Middle display for looks*/}
        <div data-aos='fade-right'>
        <LanguageBackground />
        </div>

        {/* Courses Display */}
        <div className='pt-60'>
          <h1 className='text-7xl text-slate-100 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300'>Courses</h1>

          {/* Courses */}
          <GlowingStars />
          
        </div>
        
        
     
      </div>

      {/* Testimonial */}
      <div className='pt-12'>
          <h1 className='text-7xl text-slate-100 text-center font-semibold text-transparent text-gradient'>Testimonials</h1>

          
      </div>

       
     </div>
   
    
  )
}
