'use client'
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Features } from "./features";



export const Mentorship: React.FC = () => {
  return (
    <section className="landing pb-40 overflow-hidden">
      <div className=" px-4 mx-auto sm:px-6">
        <div>
          {/* Content */}
          <div className="text-center pb-5 pt-40">
            <h1 className="font-bold text-7xl mx-6"> 1-on-1 Tutoring</h1>
            <p className="text-md text-slate-100/40 pt-1">Get personal advice, mentorship, & guidance to learn code faster!</p> 
            <div className="flex items-center justify-center">
                <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
            </div>
        </div>
        <div className="text-center space-y-8 ">
          <Features />
          <div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-5xl font-bold">How do I register?</h1>
            <p className="text-lg text-zinc-400 pt-3 max-w-2xl mx-auto text-center">While most people accept everyone, we only accept 5 people at a time to tutor. In addition, we only accept those who fit the right criteria for teaching such as a certain skill level, want to learn, & availability.</p>
            <div className="flex items-center justify-center">
            <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4 mb-4"
                href='https://calendly.com/nizabizaher/programming-tutoring-consultation'
              >
                Register for tutoring{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
            </div>
          </div>
         
          <div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-300 text-5xl font-bold">What does a tutoring session look like?</h1>
            <p className="text-lg text-zinc-400 pt-3 max-w-2xl mx-auto text-center">Each session is 1 hour long and we will go over your code, debug it, and teach you how to code. We will also go over any questions you may have and help you with your projects.</p>
            <div className="flex items-center justify-center pt-3">
              <iframe src="https://player.vimeo.com/video/918976093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className="aspect-video sm:w-[600px] md:w-[900px] rounded-xl"></iframe>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </section>
  );
};