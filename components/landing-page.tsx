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
import { useCurrentUser } from '@/hooks/user-current-user';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function LandingPage() {
  const session = useCurrentUser();

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='extra landing'>
      
      <div className='pt-40'>
      </div>
      <div className='mb-20 font-extrabold '>
        <div data-aos="fade-up" className='flex-1 flex flex-col items-center justify-center mb-4'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-bold header-landing'>Learn To<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'> Code</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>&& have fun doing it</p>
            <Button variant='brand' size='brand' className='mt-3'>
              <Link href={session ? '/courses' : '/auth/register'}>
                Let's Start
              </Link>
            </Button>
        </div>

        <div className='text-center'>
          <BentoGridThirdDemo />
        </div>

        <div className='pt-64'>
          <div className='text-center'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-semibold header-landing'>Learn Modern Day<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 block '> Languages</span></h1>
            <Button variant='brand' size='brand' className='mt-5 mb-8'>
              <Link href={session ? '/courses' : '/auth/register'}>
                Let's Start
              </Link>
            </Button>
            <LanguageBackground />
            

            </div>
            
            
        </div>

        <div>
          <div className='text-center pt-64'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-semibold header-landing'>Hear It From<span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block'> Others</span></h1>
            <Button variant='brand' size='brand' className='mt-5 '>
              <Link href={session ? '/courses' : '/auth/register'}>
                Let's Start
              </Link>
            </Button>
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
