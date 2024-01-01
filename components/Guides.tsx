'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

const guides = [
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

export default function Guides() {

  
  

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
    return (
      <div >
  
          {/*title*/}
          <div className="text-center">
              <h1 className="font-extrabold text-3xl md:text-5xl pt-3">Guides</h1>
              <p className="text-lg md:text-xl pt-1">learn how to learn through detailed & applicable videos.</p>
          </div>

          {/* Guides */}

          <div data-aos='fade-left' className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pb-10 pt-8 xl:px-[350px] px-[50px] ">
            {guides.map((guide) => (
              <Card key={guide.title} className="rounded-xl cursor-pointer border border-gray-500 border-opacity-70 bg-gray shadow-2xl hover:scale-105 transition-transform duration-500">
                <Link href={`/guides${guide.link}`}>
                <CardHeader className="flex items-center justify-center text-center text-muted-foreground p-0 ">
                  <div className=" relative w-full h-[200px] ">
                    <Image 
                      src={guide.image}
                      alt={guide.title}
                      layout="fill"
                      className="rounded-t-xl object-cover"
                    />
                  </div>
                </CardHeader>

                <div className=" pt-2">

                <p className="font-extrabold text-center text-xl ">{guide.title}</p>

                <p className="font-semibold text-center px-2 pt-5 ">{guide.description}</p>
                
                <CardFooter className="flex items-center justify-between text-xs text-muted-foreground pt-12 ">
                  <p className="flex flex-wrap gap-2 justify-start mt-2 ">{guide.subjects.map((subject, index) => (
                    <span key={index} className="text-sm font-medium bg-gray-700 text-white rounded px-2 py-1">{subject}</span>
                  
                  ))}</p>
                </CardFooter>
                </div>
                </Link>
              </Card>
            ))}

          </div>
        
          
          
      </div>
    )
  }
  