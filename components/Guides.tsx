'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



export default function Guides() {

  const guides = [
    {
      title: "Deep Work",
      description: "Learn how to focus and get into the flow state.",
      image: "/deepwork.jpeg",
      link: "/deepwork",
    },
    {
      title: "Productivity",
      description: "Learn how to be productive and get more done.",
      image: "/notion.png",
      link: "/productivity",
    },
    {
      title: "Full Learning Guide",
      description: "Learn how to learn and master any skill.",
      image: "/nizar.png",
      link: "/full",
    },
  ];
  

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
    return (
      <div>
  
          {/*title*/}
          <div className="text-center">
              <h1 className="font-extrabold text-3xl md:text-5xl pt-3">Guides</h1>
              <p className="text-lg md:text-xl pt-1">learn how to learn through detailed & applicable videos.</p>
          </div>
          <div data-aos='fade-left' className="px-4 flex justify-center space-x-4 pt-4">
          {/* Reactjs */}
          <div className="flex flex-col items-center">
            <Link href='/deepwork' className="border border-gray-400 w-[200px] rounded-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
            <Image 
              src='/deepwork.jpeg' 
              width={290} 
              height={270} 
              alt='react'
              className="hover:opacity-70"
            />
          </Link>
          <h3 className="text-xl font-semibold text-center pt-3">Deep Work</h3>
          
          </div>
            
          {/* Nextjs */}
          <div className="flex flex-col items-center">
            <Link href='/productivity' className="border border-gray-400 w-[200px] rounded-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
            <Image 
              src='/notion.png' 
              width={170} 
              height={170} 
              alt='next'
              className="hover:opacity-70"
            />
          </Link>
          <h3 className="text-xl font-semibold text-center pt-3">Productivity</h3>
          
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <Link href='/full' className="border border-gray-400 w-[200px] rounded-xl hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center">
            <Image 
              src='/nizar.png' 
              width={170} 
              height={170} 
              alt='next'
              className="hover:opacity-70"
            />
          </Link>
          <h3 className="text-xl font-semibold text-center pt-3">Full Learning Guide</h3>
          
          </div>

          
        </div>
          
      </div>
    )
  }
  