'use client'

// Imports 
import { Button } from '@/components/ui/button'

import Footer from './Footer'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from 'next/image';
import { BiLogoDiscord, BiLogoHtml5, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsYoutube } from 'react-icons/bs';
import GitHubCalendar from 'react-github-calendar';

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
    <div className='mt-12'>

      {/* Landing */}
      <div className='flex flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-4'>
        {/* Text + Button */}
        <div className='flex-1 flex flex-col items-center justify-center ml-4 lg:ml-12'>
          {/* Main text*/}
          <div className='flex items-center justify-center'>
            <h1 className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center'>BECOME A <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>SOFTWARE</span> DEVELOPER</h1>
          </div>
          {/* Sub text */}
          <div>
            <p className='text-2xl lg:text-2xl md:text-2xl sm:text-lg font-semi bold text-slate-300 text-center font-semibold pt-3'>Learn to <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600'>code</span> & have <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600'>fun</span> doing it.</p>
          </div>

          {/* Button */}
          <div className='pt-4'>
            <Button variant='gold'>Let's Start <LocalFireDepartmentIcon className='ml-2 font-extrabold' /></Button>
          </div>
        </div>


        {/* Icon Display*/}
        <div className='flex-1 flex flex-col items-center justify-center'>
          <div className='px-6 py-6 lg:px-12 lg:py-12 shadow-2xl shadow-black rounded lg:mr-12 hover:shadow-slate-400 duration-500'>
            {/*cards*/}
            <div 
            className='flex space-x-10 mb-3 lg:mb-5'>
              {icons1.map((i, index) => (
                <div key={index} className='bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center'>{i.icon}</div>
              ))}

            </div>
            {/*cards 2*/}
            <div className='flex space-x-10'>
            <div className='flex space-x-10 mb-3 lg:mb-5'>
              {icons2.map((i, index) => (
                <div key={index} className='bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center'>{i.icon}</div>
              ))}

            </div>



             
            </div>
          </div>
        </div>
      </div>

      {/*Arrow*/}
      <div className=' text-center finger pt-[90px]'>
        <p className='text-6xl'>⏬</p>
      </div>

      {/* Sales Pitch */}
      <div className='pt-12 text-center space-y-[300px]'>
        {/* Why Am I Struggling*/}
        <div className='space-y-6'>
          <h1 className='font-extrabold text-6xl '>WHY AM I STRUGGLING? 😢</h1>
          <p  className='text-xl text-slate-300'>You only retain 5%-10% of what you learn by reading and watching others code.</p>
          <div className='flex items-center justify-center'>
            <Image alt='pyramid' src='/pyramid.svg' width={700} height={700} className='rounded-xl' />
          </div>
        </div>

        {/* Realization */}
        <div className='space-y-6'>
          <h1 className='font-extrabold text-6xl'>REALIZATION 😮</h1>
          <p  className='text-xl text-slate-300'>Learning by doing is the best way to learn how to code.</p>
          <div className='flex items-center justify-center'>
            <Image alt='pyramid' src='/pyramidafter.svg' width={700} height={700} className='rounded-xl' />
          </div>
        </div>

        {/* Solution */}
        <div className='space-y-6'>
          <h1 className='font-extrabold text-6xl'>SOLUTION 🤩</h1>
          <p  className='text-xl text-slate-300'>Learn by doing projects, not watching others.</p>
          <div className='flex items-center justify-center'>
            <Image alt='pyramid' src='/git.png' width={700} height={700} className='rounded-xl' />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
