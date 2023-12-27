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



export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <div>
    
      {/* Intro Bar */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-start mx-8 mt-[10px] md:mx-[120px] bg-transparent'>
        {/* Intro Text */}
        <div className='text-center mt-8 md:mt-0 md:pr-10 w-full md:max-w-xl lg:max-w-2xl md:self-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-2' data-aos="fade-right">
                BECOME A <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 '>PROGRAMMER</span>
            </h1>
            <h1 data-aos="fade-right" className='text-xl sm:text-base md:text-xl lg:text-2xl font-bold text-'>learn to <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600'>code</span> & have <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500'>fun</span> doing it.</h1>
          
            {/* Start Button */}
            <Link href='/courses'>
                <Button className='font-extrabold rounded hover:bg-purple-500 hover:scale-105 transition-transform text-xl bg-purple-500 text-white mt-[20px]' data-aos="fade-right">
                Let's Start <LocalFireDepartmentIcon className='bg-transparent ml-2'/>
                </Button>
            </Link>
        </div>

        {/* Video */}
        <div className='w-full md:w-auto flex mr-12 justify-center items-center mt-10'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KngzC93n19Q?si=RLTb9Crp21_htsEy" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className=' shadow-lg shadow-violet-500' data-aos="fade-left"></iframe>
        </div>
      
        </div>
          
          {/* Icons */}
        <div>
          <Icons data-aos='fade-up'/>
        </div>
        
        {/* Arrow ref={ref7}*/}
        <div className={`transition-all duration-100 flex items-center justify-center pt-[50px]`}>
          <p data-aos="fade-right" className='text-6xl arrowDown'>⏬</p>
        </div>

        {/* Questions & Answers */}
        <div className='space-x-12 px-12 pt-[80px]'>
          
        {/* 1 */}
        <div>
          <div className='flex items-center justify-center mt-[250px]'>
            <h1 className='rounded px-2 py-1.5 outline-dashed outline-red-500 font-extrabold text-6xl text-red-500 text-center' data-aos='fade-right' >Why Am I Struggling 😣</h1>
          </div>
          <div className='flex items-center justify-center'>
            <h1 className='mt-[100px] text-center text-3xl font-extrabold' data-aos='fade-left'>You only retain <span className='text-5xl text-purple-500'>5% - 10%</span> of what you read or watch, which is why you're struggling...</h1>
          </div>
          <div className='flex items-center justify-center pt-[100px]'>
            <p data-aos='fade-up'className='text-6xl arrowDown'>⏬</p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div className='flex items-center justify-center mt-[250px]'>
            <h1 data-aos='fade-right' className='rounded px-2 py-1.5 outline-dashed outline-blue-500 font-extrabold text-6xl text-blue-500 text-center'>Reality Check 😬</h1>
          </div>
          <div className='flex items-center justify-center'>
            <h1 data-aos='fade-left' className='mt-[100px] text-center text-3xl font-extrabold'>It is <span className='text-orange-500 text-5xl'>IMPOSSIBLE</span> to learn code by watching videos and assisted work </h1>
          </div>
          <div className='transition-all duration-100 flex items-center justify-center pt-[100px]'>
            <p data-aos='fade-up' className='text-6xl arrowDown'>⏬</p>
          </div>
        </div>
          
        {/* 3 */}
        <div>
          <div className='transition-all duration-500 flex items-center justify-center mt-[250px]'>
            <h1 data-aos='fade-right' className='rounded px-2 py-1.5 outline-dashed outline-purple-500 font-extrabold text-6xl text-purple-500 text-center'>The Answer 🧑‍💻</h1>
          </div>
          <div className='transition-all duration-500 flex items-center justify-center'>
            <h1 data-aos='fade-left' className='mt-[100px] text-center text-3xl font-bold pt-6'>The only way to learn code successfully is through <span className='text-5xl text-pink-500'>Project Based Learning</span> ( PBL). You retain 75% - 80% of what you learning using PBL. </h1>
          </div>
          <div className='flex items-center justify-center pt-[30px] ml-[20px]'>
            <Lottie animationData={arrow} className='w-[250px] h-[250px]'/>
         </div>
        </div>

        {/* Button */}
        <div className='flex items-center justify-center'>
          <Link href='/courses'>
                <Button className='font-extrabold rounded hover:bg-purple-500 hover:scale-105 transition-transform text-xl bg-purple-500 text-white mt-[20px]'>
                Let's Start <LocalFireDepartmentIcon className='bg-transparent ml-2'/>
                </Button>
            </Link>
        </div>
        
        </div>
        
        {/* Footer */}
        <Footer />
    </div>
  )
}
