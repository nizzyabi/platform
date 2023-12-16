import React from 'react'
import Navbar from './Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div>
        <Navbar />
        <div className='text-center mt-[100px]'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-2'>
                BECOME A <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 '>PROGRAMMER</span> IN NO <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400'>TIME.</span>
            </h1>
            <h1 className='text-xl sm:text-base md:text-xl lg:text-2xl font-bold'>logos is the <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600'>ultimate</span> hub to learn to code on your own, fast.</h1>
            <Link href='/courses'>
                <Button className='font-extrabold border border-black rounded bg-white text-black text-xl hover:bg-purple-500 hover:text-white mt-5 hover:border-white'>
                Let's Start!
                </Button>
            </Link>
            <div className='flex justify-center items-center mt-10'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/w5K7Rl0g5B4?si=2MOU1MM2em9rIdK6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='animated-border-and-shadow'></iframe>
            </div>
        </div>
    </div>
  )
}
