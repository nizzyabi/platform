'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function Courses() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div data-aos='fade-left'>

        {/* Title */}
        <div className="text-center pb-5">
            <h1 className="font-extrabold text-3xl md:text-5xl pt-3">Courses</h1>
            <p className="text-lg md:text-xl pt-1">learn to code through fun & simple project based courses.</p>
        </div>

        {/* Cards */}

        <div className="px-4 flex justify-center space-x-4">
          {/* Reactjs */}
          <div className="flex flex-col items-center">
            <Link href='/react' className="border border-gray-400 w-[200px] rounded-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
            <Image 
              src='/react.png' 
              width={170} 
              height={170} 
              alt='react'
              className="hover:opacity-70"
            />
          </Link>
          <h3 className="text-xl font-semibold text-center pt-3">React</h3>
          
          </div>
            
          {/* Nextjs */}
          <div className="flex flex-col items-center">
            <Link href='/nextjs' className="border border-gray-400 w-[200px] rounded-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
            <Image 
              src='/next-js.svg' 
              width={170} 
              height={170} 
              alt='next'
              className="hover:opacity-70"
            />
          </Link>
          <h3 className="text-xl font-semibold text-center pt-3">NextJs</h3>
          
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <Link href='/javascript' className="border border-gray-400 w-[200px] rounded-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
            <Image 
              src='/JavaScript-logo.png' 
              width={170} 
              height={170} 
              alt='next'
              className="hover:opacity-70"
            />
          </Link>
          <h3 className="text-xl font-semibold text-center pt-3">JavaScript</h3>
          
          </div>

          
        </div>
        
        
    </div>
  )
}
