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
          <div className="text-center pt-40">
              <h1 className="font-bold text-7xl pt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Courses</h1>
              <p className="text-xl font-medium text-gray-200"></p>
          </div>

          {nizzyuser && 
            <Link href='/courses/add' className="flex items-center justify-center">
              <Button variant="goldHover">Create</Button>
            </Link>
          }

           
      </div>
    )
  }
  