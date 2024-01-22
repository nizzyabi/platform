// Coaching page
'use client'
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';


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

const testimonials = [
  {
    name: "John Doe",
    image: "/chad.svg",
    description: "'Nizar is cool'"
  },
  {
    name: "HIIII",
    image: "/nizar.png",
    description: "'Nizar sucks'"
  },
  {
    name: "HIIII",
    image: "/nizar.png",
    description: "'Nizar sucks'"
  },
  {
    name: "HIIII",
    image: "/nizar.png",
    description: "'Nizar sucks'"
  },
]


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
        <div data-aos='fade-right' className="space-y-20 pb-[200px] ">
          {/* Link to coaching */}
          <Link href='https://xpykzd2a2ce.typeform.com/to/r6Bjujqi' className="flex items-center justify-center">
            <Button className='hover:bg-violet-500 bg-violet-500 text-xl rounded mt-3 shadow-xl shadow-black hover:scale-105 transition-transform hover:duration-500 lg:text-2xl lg:py-6 font-extrabold'>Apply Now<HistoryEduIcon className="ml-1"/></Button>
          </Link>
        </div>

        
    </div>
  )
}
