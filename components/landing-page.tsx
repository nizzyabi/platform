'use client'
// Imports 
import { Button } from '@/components/ui/button'
import Footer from './footer'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BiLogoHtml5, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { FaFireExtinguisher } from 'react-icons/fa';


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
    
    <div className='pt-5'>
      {/* Landing Page */}
      <div className='flex flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-4 mb-20 font-extrabold'>
        {/* Text + Button */}
        <div data-aos="fade-left" className='flex-1 flex flex-col items-center justify-center ml-4 lg:ml-12'>
          {/* Main text*/}
          <div className='flex items-center justify-center'>
            <h1 className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl text-center'>BECOME A <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>SOFTWARE</span> DEVELOPER</h1>
          </div>
          {/* Sub text */}
            <p className='text-2xl lg:text-2xl md:text-2xl sm:text-lg text-slate-300 text-center pt-3 font-light'>learn to <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600'>code</span> & have <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600'>fun</span> doing it.</p>
          {/* Button */}
          <div className='pt-4'>
            <Button variant='gold'>
              <Link href='/courses'>
                Let's Start <LocalFireDepartmentIcon className='ml-2 font-extrabold' />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Icon Display*/}
        <div className='flex-1 flex flex-col items-center justify-center' data-aos='fade-right'>
          <div className='px-6 py-6 lg:px-12 lg:py-12 shadow-2xl shadow-black rounded lg:mr-12 hover:shadow-slate-400 duration-500 bg-[#2e2e2e]'>
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

      {/* Sales Page */}
      <div className='text-center space-y-[200px] pt-[90px]'>

        {/* Problem */}
        <div className='space-y-12 pb-[90px]'>
          <div className=''>
          <h1 data-aos='fade-right' className='lg:text-6xl text-4xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Why do I suck at code?</span> 😞</h1>
          </div>
          <p data-aos='fade-up' className='text-bold lg:text-2xl text-xl text-slate-200/50'>most people fail because they aren't coding the right way</p>
          <p className='text-6xl finger'>⏬</p>
        </div>

        {/* Realization */}
        <div className='space-y-12 pb-[90px]'>
          <h1 data-aos='fade-right' className='lg:text-6xl text-4xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500'>Understand this...</span> 🫥</h1>
          <p data-aos='fade-up' className='text-bold lg:text-2xl text-xl text-slate-200/50'>how you learn code matters more than the code itself.</p>
          <p className='text-6xl finger'>⏬</p>
        </div>
        
        {/* Solution*/}
        <div className='space-y-12 pb-[90px]'>
          <h1 data-aos='fade-right' className='lg:text-6xl text-4xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500'>How do I solve this?</span> 🧐</h1>
          <p data-aos='fade-up' className='text-bold lg:text-2xl text-xl text-slate-200/50'>you fix this by building projects YOU want & having fun while coding</p>
          <p className='text-6xl finger'>⏬</p>
          {/* Video */}
          <div className='flex items-center justify-center '>
            <iframe className='sproutvideo-player rounded shadow-md shadow-black' src='https://videos.sproutvideo.com/embed/d390d1b61a1fe9ce5a/e56032fb0653d246' width='640' height='360' title='Video Player'></iframe>
          </div>
          {/* Button */}
          <div>
            <Button variant='gold'>Let's Start <LocalFireDepartmentIcon className='ml-2 font-extrabold' /></Button>
          </div>
        </div>
        
        

      </div>
    </div>
    
  )
}
