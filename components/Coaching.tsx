// Coaching page
'use client'
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";


export default function Coaching() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
        {/* Title */}
        <div className="text-center pb-5 pt-[200px]" data-aos='fade-left'>
            <h1 className="font-extrabold text-3xl md:text-5xl pt-3">1-on-1 Coaching</h1>
            <p className="text-lg md:text-xl pt-1">Get personal advice, mentorship, & guidance to learn code faster</p> 
        </div>

        {/* Coaching */}
        <div data-aos='fade-right' className="space-y-20 pb-[200px] flex items-center justify-center">
          {/* Link to coaching */}
          
            <Button variant='pinkHover'>
              <Link href='https://xpykzd2a2ce.typeform.com/to/r6Bjujqi' className="">
                Apply Now
              </Link>
            </Button>
          
        </div>

        
    </div>
  )
}
