'use client'
import React, {useEffect, useRef} from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SouthIcon from '@mui/icons-material/South';
import Footer from './Footer'
import MuxPlayer from "@mux/mux-player-react"; 


export default function LandingPage() {
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
                <Button className='font-extrabold border hover:border-black rounded hover:bg-white hover:text-black text-xl bg-purple-500 text-white mt-5 border-white slide-in-top'>
                Let's Start!
                </Button>
            </Link>

        </div>

        {/* Video */}
        <div className='w-full md:w-auto flex justify-center items-center mt-10 md:mt-0 slide-in-right'>
                <iframe width="520" height="300" src="https://streamable.com/e/s9j0r2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className=''></iframe>
        </div>
        

        </div>

        {/* Why? */}
        <div className='space-x-12 px-12'>
        

        <div className='flex items-center justify-center mt-[100px]'>
          <h1 className='border border-1 p-4 text-6xl font-extrabold bg-yellow-400 rounded text-[#191919] outline border-white hover:bg-white'>Why Am I Struggling?</h1>
        </div>

        <div>
          <h1 className='mt-[100px] text-center text-3xl font-extrabold pt-6'>Although it is the standard way to learn code, you only retain <span className='text-4xl text-purple-500'>5% - 10%</span> of what you read or watch, which is why you're struggling.</h1>
        </div>


        <div className='flex items-center justify-center mt-[100px]'>
          <h1 className='border border-1 p-4 text-6xl font-extrabold bg-pink-400 rounded text-[#191919] outline border-white hover:bg-white'>Reality Check...</h1>
        </div>

        <div className='mt-[100px] text-center font-extrabold'>
          <h1 className='text-3xl'>It is <span className='text-yellow-300'>IMPOSSIBLE</span> fully learn code by watching videos and assisted work </h1>
        </div>


        <div className='flex items-center justify-center mt-[100px]'>
          <h1 className='border border-1 p-4 text-6xl font-extrabold bg-red-600 rounded text-[#191919] outline border-white hover:bg-white'>How Do I Fix This?</h1>
        </div>

        <div>
          <h1 className='mt-[100px] text-center text-3xl font-extrabold pt-6'>The only way to learn code successfully is through <span className='text-4xl text-orange-500'>Project Based Learning</span> ( PBL). You retain 75% - 80% of what you learning using PBL. </h1>
        </div>

        <div className='text-center pt-[70px]'>
          <h1 className='text-3xl'>Learn More</h1>
          <SouthIcon className='text-3xl'/>  
        </div>  

        </div>
        <Footer />
    </div>
  )
}
