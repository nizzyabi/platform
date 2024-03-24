'use client'
// Imports 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Link from 'next/link';
import { LanguageBackground } from './designs/bg-gradient';
import { BentoGridThirdDemo } from './bento';
import { ThreeD } from './3d';
import { useCurrentUser } from '@/hooks/user-current-user';
import { ArrowRight } from 'lucide-react';
import Footer from "./footer";




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
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <div className="relative inline-flex before:absolute before:inset-0 ">
            <Link
              className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-slate-100/30 rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
              href="https://github.com/NizarAbiZaher"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                What is this? {" "}
                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className='mb-20 font-extrabold '>
        <div className='flex-1 flex flex-col items-center justify-center mb-4'>
            <h1 className='text-7xl font-bold header-landing text-center'>Learn To<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'> Code</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>&& have fun doing it</p>
            <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4 mb-4"
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
      
      <Footer />
      
    </div>
  )
}
