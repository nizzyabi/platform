"use client";
import React from "react";
import { PinContainer } from "@/components/ui/pin-container";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div>
    <div className="h-[40rem] w-full flex items-center justify-center space-x-12 ">
      <PinContainer
        title="react course"
        href="/react"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h1 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100 text-center pt-10">
            React Course
          </h1>
          
          <div className="flex items-center justify-center mt-8">
          <Image
            src="/react.png"
            alt="Picture of the author"
            width={200}
            height={200}
            />
            </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      
    </div>
    
    </div>
  );
}
