'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

const courses = [
  {
    title: "JavaScript",
    image: "/javascript.svg",
    link: "/javascript",
    subjects: [
      "Course",
      "JavaScript",
      "Project",
      "App",
    ],
    description: "Learn JavaScript from scratch by building an app",
  },
  {
    title: "React",
    image: "/react.svg",
    link: "/react",
    subjects: [
      "React",
      "Projects",
      "App",
      "Lessons",
    ],
    description: "Build an app with the most popular JavaScript framework.",
  },
  {
    title: "HTML & CSS",
    image: "/htmlcss.svg",
    link: "/html-css",
    subjects: [
      "HTML",
      "CSS",
      "Tutorial",
      "Design",
      "Frontend"
    ],
    description: "Learn the basics of frontend development by building a simple website",
  },
];

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

        <div data-aos='fade-left' className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-5 pb-10 pt-8 xl:px-[350px] px-[50px] ">
            {courses.map((course) => (
              <Card key={course.title} className="rounded-xl cursor-pointer border border-gray-500 border-opacity-70 bg-gray shadow-2xl hover:scale-105 transition-transform duration-500">
                <Link href={`/guides${course.link}`}>
                <CardHeader className="flex items-center justify-center text-center text-muted-foreground p-0 ">
                  <div className=" relative w-full h-[200px] ">
                    <Image 
                      src={course.image}
                      alt={course.title}
                      layout="fill"
                      className="rounded-t-xl object-cover"
                    />
                  </div>
                </CardHeader>

                <div className=" pt-2">

                <p className="font-extrabold text-center text-xl ">{course.title}</p>

                <p className="font-semibold text-center px-2 pt-5 ">{course.description}</p>
                
                <CardFooter className="flex items-center justify-between text-xs text-muted-foreground pt-12 ">
                  <p className="flex flex-wrap gap-2 justify-start mt-2 ">{course.subjects.map((subject, index) => (
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
