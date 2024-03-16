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
import { ArrowRight } from 'lucide-react';




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
    <div data-aos="fade-up" className='extra landing'>
      
      <div className='pt-40'>
      </div>
      <div className='mb-20 font-extrabold '>
        <div className='flex-1 flex flex-col items-center justify-center mb-4'>
        
            <h1 className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 header-landing text-center'>Learn To<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'> Code</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>&& have fun doing it</p>
            <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4"
                href={session ? '/courses' : '/auth/register'}
              >
                Get Started{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
        </div>

        <div className='text-center'>
          <BentoGridThirdDemo />
        </div>

        <div className='pt-64'>
          <div className='text-center'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-semibold header-landing'>Learn Modern Day<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 block '> Languages</span></h1>
            <div className='flex items-center justify-center mb-8'>
            <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4"
                href={session ? '/courses' : '/auth/register'}
              >
                Get Started{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
            </div>
            <LanguageBackground />
            </div>
            
            
        </div>

        <div>
          <div className='text-center pt-64'>
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-semibold header-landing'>Hear It From<span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block'> Others</span></h1>
            <div className='flex items-center justify-center mb-'>
            <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4"
                href={session ? '/courses' : '/auth/register'}
              >
                Get Started{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
            </div>
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
