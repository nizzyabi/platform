"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "./ui/button";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var text-[#2e2e2e] shadow-lg bg-transparent shadow-purple-500">
      <CardBody className="bg-slate-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl  p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#2e2e2e] dark:text-white"
        >
          Learn NextJS 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/nextsquare.jpeg"
            height="500"
            width="500"
            className="h-600 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-8">
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
