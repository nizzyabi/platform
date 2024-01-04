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
import { Separator } from './ui/separator';


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
            <Button className='bg-gradient-to-r from-yellow-500 to-orange-500 text-xl rounded mt-3 mb-6 shadow-xl shadow-black hover:scale-105 transition-transform hover:duration-500 lg:text-2xl lg:py-6 font-extrabold'>Let's Start <LocalFireDepartmentIcon className='ml-2 font-extrabold' /></Button>
          </div>
        </div>


        {/* Icon Display*/}
        <div className='flex-1 flex flex-col items-center justify-center'>
          <div className='px-6 py-6 lg:px-12 lg:py-12 shadow-2xl shadow-black rounded lg:mr-12'>
            {/*cards*/}
            <div className='flex space-x-10 mb-3 lg:mb-5'>
              {icons1.map((i, index) => (
                <div key={index} className='bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center hover:scale-105 transition-transform hover:duration-500'>{i.icon}</div>
              ))}

            </div>
            {/*cards 2*/}
            <div className='flex space-x-10'>
            <div className='flex space-x-10 mb-3 lg:mb-5'>
              {icons2.map((i, index) => (
                <div key={index} className='bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center hover:scale-105 transition-transform hover:duration-500'>{i.icon}</div>
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
          <h1 className='font-extrabold text-6xl  '>Why Am I Struggling? 😢</h1>
          <p  className='text-xl text-slate-300'>You only retain 5%-10% of what you learn by reading and watching others code.</p>
          <div className='flex items-center justify-center'>
            <Image alt='pyramid' src='/pyramid.svg' width={700} height={700} className='rounded-xl' />
          </div>
        </div>

        {/* Realization */}
        <div className='space-y-6'>
          <h1 className='font-extrabold text-6xl'>Realization 😮</h1>
          <p  className='text-xl text-slate-300'>Learning by doing is the best way to learn how to code.</p>
          <div className='flex items-center justify-center'>
            <Image alt='pyramid' src='/pyramidafter.svg' width={700} height={700} className='rounded-xl' />
          </div>
        </div>

        {/* Solution */}
        <div className='space-y-6'>
          <h1 className='font-extrabold text-6xl'>Solution 🤩</h1>
          <p  className='text-xl text-slate-300'>Learn by doing projects, not watching others.</p>
          <div   className='flex items-center justify-center'>
            <iframe width="650" height="415" src="https://www.youtube.com/embed/bJU5bg2gfoQ?si=2W3AI_Nh4r9H-PPX" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>

      {/* Guides Description */}
      <div>
        <h1 className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center pt-20'>Guides</h1>
        <p className='text-xl lg:text-xl md:text-xl sm:text-xl font-semi bold text-slate-300 text-center'>learn by doing projects, not watching others 🫥</p>

        <div className='flex items-center justify-center'>
          <Separator className='w-20 h-2 rounded bg-slate-200 mt-3'/>
        </div>

        {/* Guides Description */}
        <div className='flex items-center justify-center'>
          <Image alt='guides' src='/gary.svg' width={300} height={200} className='rounded-xl mt-12' />
        </div>

        <div className='text-center mx-[200px] text-3xl font-bold pt-5'>
          <h1>Our guides are designed to help new developers find their way through the complexity of learning how to code.</h1>
        </div>

      </div>

      {/*Arrow*/}
      <div className=' text-center finger pt-[90px]'>
        <p className='text-6xl'>⏬</p>
      </div>

      {/* Coaching Description */}
      <div>
        <h1 className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center pt-20'>Coaching</h1>
        <p className='text-xl lg:text-xl md:text-xl sm:text-xl font-semi bold text-slate-300 text-center'>Get 1-on-1 lessons & your questions answered!</p>

        <div className='flex items-center justify-center'>
          <Separator className='w-20 h-2 rounded bg-slate-200 mt-3'/>
        </div>

      </div>

      {/*Arrow*/}
      <div className=' text-center finger pt-[90px]'>
        <p className='text-6xl'>⏬</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
