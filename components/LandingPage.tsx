'use client'

// Imports 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from './Footer'
import Lottie from 'lottie-react';
import arrow from '../public/arrow.json'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Icons from './Icons';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from 'next/image';
import { BiLogoDiscord, BiLogoHtml5, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsYoutube } from 'react-icons/bs';
import { Separator } from './ui/separator';
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

const courses = [
  {
    title: "React",
    image: "/landingreact.svg",
    link: "/react",
    
  },
  {
    title: "Full Coding Guide",
    image: "/fullguide.svg",
    link: "/fullguide",
    
  },
  {
    title: "HTML & CSS",
    image: "/landinghtmlcss.svg",
    link: "/html-css",
  },
];


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
        <div className='flex-1 flex flex-col items-center justify-center ml-4'>
          {/* Main text*/}
          <div className='flex items-center justify-center'>
            <h1 className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center'>Become a Software Developer</h1>
          </div>
          {/* Sub text */}
          <div>
            <p className='text-2xl lg:text-2xl md:text-2xl sm:text-lg font-semi bold text-slate-300 text-center font-semibold'>Learn to code and have fun doing it.</p>
          </div>

          {/* Button */}
          <div>
            <Button className='hover:bg-violet-500 bg-violet-500 text-xl rounded mt-3 mb-6'>Let's Start <LocalFireDepartmentIcon /></Button>
          </div>
        </div>


        {/* Icon Display*/}
        <div className='flex-1 flex flex-col items-center justify-center'>
          <div className='px-6 py-6 shadow-lg shadow-white'>
            {/*cards*/}
            <div className='flex space-x-10 mb-3'>
              <div className='bg-slate-200 shadow-lg shadow-blue-500 h-[80px] w-[80px] rounded flex justify-center items-center'><BsDiscord className='text-blue-500 text-4xl'/></div>
              <div className='bg-slate-200 shadow-lg shadow-red-500 h-[80px] w-[80px] rounded flex justify-center items-center'><BsYoutube className='text-red-500 text-4xl'/></div>
              <div className='bg-slate-200 shadow-lg shadow-black h-[80px] w-[80px] rounded flex justify-center items-center'><BsGithub className='text-black text-4xl'/></div>
            </div>
            {/*cards 2*/}
            <div className='flex space-x-10'>
              <div className='bg-slate-200 shadow-lg shadow-cyan-500 h-[80px] w-[80px] rounded flex justify-center items-center'><BiLogoReact className='text-cyan-500 text-5xl'/></div>
              <div className='bg-slate-200 shadow-lg shadow-yellow-500 h-[80px] w-[80px] rounded flex justify-center items-center'><BiLogoJavascript className='text-yellow-400 text-5xl'/></div>
              <div className='bg-slate-200 shadow-lg shadow-orange-500 h-[80px] w-[80px] rounded flex justify-center items-center'><BiLogoHtml5 className='text-orange-500 text-5xl'/></div>
            </div>
          </div>
        </div>
      </div>

      {/*Arrow*/}
      <div className=' text-center finger pt-[90px]'>
        <p className='text-6xl'>⏬</p>
      </div>

      {/* Description */}
      <div>
        <h1 className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center pt-20'>Guides</h1>
        <p className='text-xl lg:text-xl md:text-xl sm:text-xl font-semi bold text-slate-300 text-center'>Learn to code and have fun doing it.</p>

        <div className='flex items-center justify-center'>
          <Separator className='w-20 h-2 rounded bg-slate-200 mt-3'/>
        </div>

      </div>

      {/* Cards */}
      <div data-aos='fade-left' className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pb-10 pt-8 xl:px-[350px] px-[50px] ">
            {courses.map((course) => (
              <Card key={course.title} className="rounded-xl cursor-pointer border border-gray-500 border-opacity-70 bg-gray shadow-2xl hover:scale-105 transition-transform duration-500">
                <Link href={`/guides${course.link}`}>
                <CardHeader className="flex items-center justify-center text-center text-muted-foreground p-0 ">
                  <div className=" relative ">
                    <Image 
                      src={course.image}
                      alt={course.title}
                      height={500}
                      width={500}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </CardHeader>
                </Link>
              </Card>
            ))}

          </div>


       
        
        {/* Footer */}
        <Footer />
    </div>
  )
}
