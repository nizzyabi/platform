// Coaching page
'use client'
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";


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
            <h1 className="font-bold text-7xl md:text-5xl pt-3">Mentorship</h1>
            <p className="text-lg md:text-xl pt-1">Get personal advice, mentorship, & guidance to learn code faster!</p> 
        </div>

        
        <div data-aos='fade-right' className="space-y-20 pb-[200px] grid grid-cols-3 px-8 pt-5">
          {/* Link to coaching */}
          
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>Get personal advice on a monthly basis through live sessions, calls, and texts</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="goldHover">
                  Register
                </Button>
              </CardFooter>
            </Card>
          
        </div>

        
    </div>
  )
}
