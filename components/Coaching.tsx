'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { FaAccessibleIcon } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


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
            <p className="text-lg md:text-xl pt-1">get personal advice, mentorship, and guidance to learn code faster</p>

            {/* Separator*/}
            <div className='flex items-center justify-center'>
              <Separator className='w-20 h-2 rounded bg-slate-200 mt-3'/>
          </div>
        </div>

       

        {/* Coaching */}
        <div data-aos='fade-right' className="">

          {/* Cards */}
          <div data-aos='fade-left' className="flex items-center justify-center space-x-6">
            <div className="bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center hover:scale-105 transition-transform hover:duration-500">
              <IoChatboxEllipsesOutline className="text-black text-4xl" />
            </div>
            <div className="bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center hover:scale-105 transition-transform hover:duration-500">
              <IoChatboxEllipsesOutline className="text-black text-4xl" />
            </div>
            <div className="bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center hover:scale-105 transition-transform hover:duration-500">
              <IoChatboxEllipsesOutline className="text-black text-4xl" />
            </div>
          </div>

          {/* Coaching Description */}
          <div className="text-center pt-10">
            <h1 className="text-4xl font-extrabold">Who is this guy? 🧐</h1>
            <p>You may be asking what qualifications I have to teach you how to code...</p>

            <div className="relative w-[66] h-50 flex items-center justify-center p-5">
              <div className="relative w-60 h-60 m-2 hover:scale-105 transition-transform duration-300 ease-in-out videoBorderBlue rounded-xl">
                <p className="font-extrabold">First Site</p>
                <Image 
                  src="/zeina.png"
                  alt="Nizabizaher"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-60 h-60 m-2 hover:scale-105 transition-transform duration-300 ease-in-out videoBorderBlue rounded-xl">
                <Image 
                  src="/voice.png"
                  alt="Nizabizaher"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <p className="font-extrabold">Current Site</p>
              </div>

            </div>
          </div>
          <div>
            <p className="text-center">I was able to overcome the hurdles & teach myself how to code from beginning to end, from awful looking sites to full stack apps.</p>
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

          <div>
            <h1 className="text-center text-3xl font-extrabold">What will we cover? 🔐</h1>
            <p className="text-center">Whatever you want! A typical coaching session covers things such as roadmap advice, programming questions, & beginner level coding help. </p>
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
