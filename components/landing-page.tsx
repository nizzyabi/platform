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
