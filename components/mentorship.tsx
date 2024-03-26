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
import { HowToRegister } from "./how-to-register";
import { TutoringSession } from "./tutoring-session";



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
          <HowToRegister />
          <TutoringSession />
        </div>
        </div>
      </div>
    </section>
  );
};