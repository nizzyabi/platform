'use client'
// Imports 
import { Button } from '@/components/ui/button'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Link from 'next/link';
import { LanguageBackground } from './designs/bg-gradient';
import { BentoGridThirdDemo } from './bento';



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
      
      {/* Landing Page */}
      <div className='mb-20 font-extrabold '>
        {/* Text + Button */}
        <div data-aos="fade-left" className='flex-1 flex flex-col items-center justify-center mb-4'>
          
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

        <div className='text-center' data-aos='fade-right'>
          <BentoGridThirdDemo />
        </div>

        {/* Middle display for looks*/}
        <div data-aos='fade-right' className='pt-64'>
          <div className='text-center'>
          <h1 className='text-7xl text-slate-100 text-center pt-3 font-bold header-landing'>Learn modern day<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 block pb-12'> Languages</span></h1>
          </div>
          <LanguageBackground />
        </div>

        {/* Courses Display */}
        <div className='pt-60' data-aos='fade-right'>
          <div className='text-center pb-12'>
            <h1><span className='text-7xl text-slate-100 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>Courses</span></h1>
            <p className='font-medium text-xl text-gray-200'>Build projects that matter</p>
          </div>
          {/* Courses */}
          
        </div>
        
        
     
      </div>

      {/* Testimonial */}
      

       
     </div>
   
    
  )
}
