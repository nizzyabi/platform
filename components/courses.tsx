// Courses Page
'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { useCurrentUser } from "@/hooks/user-current-user";
import { Button } from "./ui/button";

// TODO: Remove this and replace with course creation data
const guides = [
  {
    title: "Deep Work Guide",
    image: "/comingsoon.svg",
    link: "",
    subjects: [
      "deep work",
      "flow State",
      "focus",
      "attention",
    ],
    description: "coming soon...",
  },
  {
    title: "Full Learn to Coding Guide",
    image: "/gary.svg",
    link: "/fullcoderguide",
    subjects: [
      "productivity",
      "code",
      "guide",
      "deep work",
    ],
    description: "From a beginner to a pro, you'll learn everything you need to become a coder.",
  },
  {
    title: "Frontend Development Course",
    image: "/comingsoon.svg",
    link: "",
    subjects: [
      "react",
      "html",
      "css",
    ],
    description: "coming soon...",
  },
];


export default function Courses() {
  // AOS Effect
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
  const session = useCurrentUser();
  const nizzyuser = session?.id === 'clrulbr1h0000x3js9ldvplex';

    return (
      <div >
          {/* Title*/}
          <div className="text-center">
              <h1 className="font-extrabold text-3xl md:text-5xl pt-3">Courses</h1>
              <p className="text-lg md:text-xl pt-1">learn how to learn through detailed & applicable videos.</p>
          </div>

          {nizzyuser && 
            <Link href='/courses/add' className="flex items-center justify-center">
              <Button variant="gold">Create</Button>
            </Link>
          }

          {/* Courses */}
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
  