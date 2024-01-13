'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { BiLogoJavascript } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";
import { FaLaptop } from "react-icons/fa";


const coaching = [
  {
    title: "Deep Work",
    image: "/deepwork.svg",
    link: "/deepwork",
    subjects: [
      "Deep Work",
      "Flow State",
      "Focus",
      "Attention",
    ],
    description: "Learn how to focus and get into a flow state.",
  },
  {
    title: "Productivity",
    image: "/productivity.svg",
    link: "/productivity",
    subjects: [
      "Productivity",
      "Notion",
      "Todoist",
      "Evernote",
    ],
    description: "Learn how to be productive and use productivity tools.",
  },
  {
    title: "Full Learning Guide",
    image: "/learning.svg",
    link: "/full",
    subjects: [
      "Full Learning Guide",
      "Learning",
      "Productivity",
      "Deep Work",
    ],
    description: "Learn how to learn and be productive.",
  },
];


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
        <div className="text-center pb-5" data-aos='fade-left'>
            <h1 className="font-extrabold text-3xl md:text-5xl pt-3">1-on-1 Coaching</h1>
            <p className="text-lg md:text-xl pt-1">Get personal advice, mentorship, and guidance to learn code faster</p>

            {/* Separator*/}
            <div className='flex items-center justify-center'>
              <Separator className='w-20 h-1 rounded bg-slate-200 mt-3'/>
          </div>
        </div>

       

        {/* Coaching */}
        <div data-aos='fade-right' className="">

          {/* Cards */}
          <div data-aos='fade-left' className="flex items-center justify-center space-x-6">
            <div className="bg-slate-200 shadow-xl shadow-black h-[100px] w-[100px] rounded flex justify-center items-center">
              <BiLogoJavascript className="text-yellow-500 text-6xl" />
            </div>
            <div className="bg-slate-200 shadow-xl shadow-black h-[100px] w-[100px] rounded flex justify-center items-center">
              <FaLaptop className="text-black text-6xl" />
            </div>
            <div className="bg-slate-200 shadow-xl shadow-black h-[100px] w-[100px] rounded flex justify-center items-center">
              <TbBrandVscode className="text-blue-500 text-6xl" />
            </div>
          </div>

          {/* Coaching Description */}
          <div className="text-center pt-10">
            <h1 className="text-4xl font-extrabold">What will we cover?</h1>
            <p>We cover anything from programming concepts to building apps. Whatever you need, we can cover it.</p>

          </div>
          <div>
            <p className="text-center">Learn from my past mistakes rather than your future ones.</p>
            <div className="flex items-center justify-center">
              <Image 
                src="/me.png"
                alt="Nizabizaher"
                className="rounded-xl"
                width={360}
                height={360}
              />
            </div>
          </div>
          {/* Creds */}
          <div>
            <h1 className="text-center text-3xl font-extrabold">Credentials</h1>
            <p className="text-center">I understand what it's like to be in your position. Just a year ago, I was sturggling with basic concepts in coding. I even quit 3 times! However, using the tactics that we will talk about, I was able to learn, improve, and start businesses as a result of learning code. Here are some of them: </p>
            {/* Images */}
            <div className="relative w-[66] h-50 flex items-center justify-center p-5">
              <div className="relative w-60 h-60 m-2 hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl">
                <Link href='https://www.mymentorai.app'>
                  <Image 
                    src="/mentor.png"
                    alt="Nizabizaher"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl border-2 border-white"
                  />
                </Link>
              </div>
              <div className="relative w-60 h-60 m-2 hover:scale-105 transition-transform duration-500 ease-in-out videoBorderBlue rounded-xl">
                <Link href='https://voicescribe-ai.com/'>
                  <Image 
                    src="/voice.png"
                    alt="Nizabizaher"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl border-2 border-black"
                  />
                </Link>
              </div>
              <div className="relative w-60 h-60 m-2 hover:scale-105 transition-transform duration-500 ease-in-out videoBorderBlue rounded-xl">
                <Link href='https://nizzyabi-roadmap.com/landing'>
                  <Image 
                    src="/nizzyroadmap.png"
                    alt="Nizabizaher"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl border-2 border-white"
                  />
                </Link>
              </div>

            </div>
          </div>

          <div>
            <h1 className="text-center text-3xl font-extrabold">Results</h1>
            <p className="text-center">Talk about results </p>
          </div>

          <div>
            <h1 className="text-center text-3xl font-extrabold">Testimonials</h1>
            <p className="text-center">Nixon, Rohith, Leo, etc. </p>
          </div>


          {/* Link to coaching */}
          <div className="flex items-center justify-center">
            <Button className='hover:bg-violet-500 bg-violet-500 text-xl rounded mt-3 mb-6 shadow-xl shadow-black hover:scale-105 transition-transform hover:duration-500 lg:text-2xl lg:py-6 font-extrabold'>
            <Link href='https://calendly.com/nizabizaher/programming-coaching'>Sign Up For Coaching <AutoFixHighIcon className='ml-2 font-extrabold' /></Link></Button>
          </div>
          
        </div>
        
        
    </div>
  )
}
