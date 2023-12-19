'use client'
import React, {useEffect, useRef} from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from './Footer'
import Lottie from 'lottie-react';
import arrow from '../public/arrow.json'
import { useInView } from 'react-intersection-observer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
export default function LandingPage() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref7, inView7] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref8, inView8] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref9, inView9] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
    
      
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-start mx-8 md:mt-[50px] md:mx-12'>
        {/* Intro Text */}
        <div className='text-center mt-[100px] md:mt-0 md:pr-10 w-full md:max-w-xl lg:max-w-2xl md:self-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-2 slide-in-top'>
                BECOME A <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 '>PROGRAMMER</span>
            </h1>
            <h1 className='slide-in-top text-xl sm:text-base md:text-xl lg:text-2xl font-bold'>logos is the <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600'>ultimate</span> hub to learn to code on your own, fast.</h1>

            <Link href='/courses'>
                <Button className='font-extrabold rounded hover:bg-purple-500 hover:scale-105 transition-transform text-xl bg-purple-500 text-white mt-[20px]'>
                Let's Start <LocalFireDepartmentIcon className='bg-transparent ml-2'/>
                </Button>
            </Link>

        </div>

        {/* Video */}
        <div className='w-full md:w-auto flex justify-center items-center mt-10 md:mt-0 slide-in-right'>
          <iframe className='rounded-xl sproutvideo-player' src='https://videos.sproutvideo.com/embed/d390d1b61a1fe9ce5a/e56032fb0653d246' width='640' height='360'></iframe>
        </div>
        

        </div>

        <div ref={ref7} className={`transition-all duration-100 ${inView7 ? 'slide-in-bottom' : 'opacity-0'} flex items-center justify-center pt-[150px]`}>
          <p className='text-6xl arrowDown'>⏬</p>
        </div>

        

        {/* Why? */}
        <div className='space-x-12 px-12 pt-[80px]'>
        

        <div ref={ref1} className={`transition-all duration-500 ${inView1 ? 'slide-in-top' : 'opacity-0'} flex items-center justify-center mt-[250px]`}>
          <h1 className='rounded px-2 py-1.5 outline-dashed outline-red-500 font-extrabold text-6xl text-red-500 text-center'>Why Am I Struggling 😣</h1>
        </div>

        

        <div ref={ref4} className={`transition-all duration-500 ${inView4 ? 'slide-in-left' : 'opacity-0'} flex items-center justify-center`}>
          <h1 className='mt-[100px] text-center text-3xl font-extrabold '>You only retain <span className='text-5xl text-purple-500'>5% - 10%</span> of what you read or watch, which is why you're struggling...</h1>
        </div>

        <div ref={ref8} className={`transition-all duration-100 ${inView8 ? 'slide-in-bottom' : 'opacity-0'} flex items-center justify-center pt-[100px]`}>
          <p className='text-6xl arrowDown'>⏬</p>
        </div>

        <div ref={ref2} className={`transition-all duration-500 ${inView2 ? 'slide-in-top' : 'opacity-0'} flex items-center justify-center mt-[250px]`}>
          <h1 className='rounded px-2 py-1.5 outline-dashed outline-blue-500 font-extrabold text-6xl text-blue-500 text-center'>Reality Check 😬</h1>
        </div>

        
        

        <div ref={ref5} className={`transition-all duration-500 ${inView5 ? 'slide-in-left' : 'opacity-0'} flex items-center justify-center`}>
          <h1 className='mt-[100px] text-center text-3xl font-extrabold'>It is <span className='text-orange-500 text-5xl'>IMPOSSIBLE</span> to learn code by watching videos and assisted work </h1>
        </div>


        <div ref={ref9} className={`transition-all duration-100 ${inView9 ? 'slide-in-bottom' : 'opacity-0'} flex items-center justify-center pt-[100px]`}>
          <p className='text-6xl arrowDown'>⏬</p>
        </div>


        <div ref={ref3} className={`transition-all duration-500 ${inView3 ? 'slide-in-top' : 'opacity-0'} flex items-center justify-center mt-[250px]`}>
          <h1 className='rounded px-2 py-1.5 outline-dashed outline-purple-500 font-extrabold text-6xl text-purple-500 text-center'>Answer 🧑‍💻</h1>
        </div>

        <div ref={ref6} className={`transition-all duration-500 ${inView6 ? 'slide-in-left' : 'opacity-0'} flex items-center justify-center`}>
          <h1 className='mt-[100px] text-center text-3xl font-bold pt-6'>The only way to learn code successfully is through <span className='text-5xl text-pink-500'>Project Based Learning</span> ( PBL). You retain 75% - 80% of what you learning using PBL. </h1>
        </div>

        <div className='flex items-center justify-center pt-[20px] ml-[90px]'>
        <Lottie animationData={arrow} className='w-[250px] h-[250px]'/>
        </div>


        

        <div className='flex items-center justify-center'>
          <Link href='/courses'>
                <Button className='font-extrabold rounded hover:bg-purple-500 hover:scale-105 transition-transform text-3xl bg-purple-500 text-white mt-[20px]'>
                Let's Start <LocalFireDepartmentIcon className='bg-transparent ml-2'/>
                </Button>
          </Link>
        </div>
        
        </div>
        
        <Footer />
    </div>
  )
}
