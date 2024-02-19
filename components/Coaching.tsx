// Coaching page
'use client'
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

import { FcAbout, FcCalendar, FcTwoSmartphones, FcVideoCall, FcCommandLine, FcWorkflow, FcGlobe, FcSurvey, FcTemplate } from "react-icons/fc";


const coaching = [
  {
    title: "Passive 📱",
    description: "Get the benefits of personal advice and help but on the low",
    price: "$99",
    includes: [
      <p className="flex"><FcVideoCall className='mr-2 mt-1'/>Weekly Live Lessons</p>,
      <p className="flex"><FcCalendar className='mr-2 mt-1'/>Weekly Check-ins</p>,
      <p className="flex"><FcTwoSmartphones className='mr-2 mt-1'/>Unlimited Texts</p>,
      <p className="line-through opacity-50 flex"><FcTemplate className="mr-2 mt-1" />Build Projects Together</p>,
      <p className="line-through opacity-50 flex"><FcAbout className="mr-2 mt-1" />Private Community</p>,
      <p className="line-through opacity-50 flex"><FcWorkflow className="mr-2 mt-1" />Personal Learning Plan</p>,
      <p className="line-through opacity-50 flex"><FcCommandLine className="mr-2 mt-1" />Code Review Sessions</p>,
      <p className="line-through opacity-50 flex"><FcGlobe className="mr-2 mt-1" />Lifetime Free Access To Courses</p>,
      <p className="line-through opacity-50 flex"><FcSurvey className="mr-2 mt-1" />Job Search Help</p>,
    ]
  },
  {
    title: "Active 💪🏽",
    description: "Speed up the process with more live lessons and help",
    price: "$199",
    includes: [
      <p className="flex"><FcVideoCall className='mr-2 mt-1'/>Weekly Live Lessons</p>,
      <p className="flex"><FcCalendar className='mr-2 mt-1'/>Weekly Check-ins</p>,
      <p className="flex"><FcTwoSmartphones className='mr-2 mt-1'/>Unlimited Texts</p>,
      <p className="flex"><FcTemplate className="mr-2 mt-1" />Build Projects Together</p>,
      <p className="flex"><FcAbout className="mr-2 mt-1" />Private Community</p>,
      <p className="flex"><FcWorkflow className="mr-2 mt-1" />Personal Learning Plan</p>,
      <p className="line-through opacity-50 flex"><FcCommandLine className="mr-2 mt-1" />Code Review Sessions</p>,
      <p className="line-through opacity-50 flex"><FcGlobe className="mr-2 mt-1" />Lifetime Free Access To Courses</p>,
      <p className="line-through opacity-50 flex"><FcSurvey className="mr-2 mt-1" />Job Search Help</p>,
    ]
  },
  {
    title: "Ultra 🚀",
    description: "Get the most out of coding with unlimited help & assitance!",
    price: "$399",
    includes: [
      <p className="flex"><FcVideoCall className='mr-2 mt-1'/>Live Lessons 3x a Week</p>,
      <p className="flex"><FcCalendar className='mr-2 mt-1'/>Weekly Check-ins</p>,
      <p className="flex"><FcTwoSmartphones className='mr-2 mt-1'/>Unlimited Texts</p>,
      <p className="flex"><FcTemplate className="mr-2 mt-1" />Build Projects Together</p>,
      <p className="flex"><FcAbout className="mr-2 mt-1" />Private Community</p>,
      <p className="flex"><FcWorkflow className="mr-2 mt-1" />Personal Learning Plan</p>,
      <p className="flex"><FcCommandLine className="mr-2 mt-1" />Code Review Sessions</p>,
      <p className="flex"><FcGlobe className="mr-2 mt-1" />Lifetime Free Access To Courses</p>,
      <p className="flex"><FcSurvey className="mr-2 mt-1" />Job Search Help</p>,
    ]
  }
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
        <div className="text-center pb-5 pt-[200px]">
            <h1 className="font-bold text-7xl md:text-5xl pt-3">Coaching</h1>
            <p className="text-lg md:text-xl pt-1">Get personal advice, mentorship, & guidance to learn code faster!</p> 
        </div>

        
        <div className="  flex items-center justify-center space-x-3 px-8 pt-5">
          {/* Link to coaching */}
          {coaching.map((item, index) => (
            <Card key={index} className="w-[450px]">
              <CardHeader className="space-y-4">
                <div className="flex justify-between">
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                </div>
                <CardDescription className="font-medium text-lg">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h1 className="font-semibold text-xl">Includes:</h1>
                <ul className="pt-3 space-y-2 text-lg font-medium">
                  {item.includes.map((include, index) => (
                    <li key={index} className="flex">{include}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between mt-2">
                <Button variant="goldHover">
                  Register
                </Button>
                <p className="text-lg font-medium">{item.price} USD / Month</p>
              </CardFooter>
            </Card>
          
          ))}
        </div>

        
    </div>
  )
}
