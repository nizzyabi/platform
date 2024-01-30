"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var text-[#2e2e2e] shadow-xl bg-transparent shadow-blue-500 rounded-xl">
      <CardBody className="bg-slate-100 relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
