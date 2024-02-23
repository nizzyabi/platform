"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaDiscord } from "react-icons/fa";
import { Avatar } from "@mui/material";

export function ThreeD() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#191919] relative group/card border-slate-100/20 w-auto sm:w-[30rem] h-auto rounded-xl px-6 py-3 border  ">
        <div className="flex justify-between">
            <CardItem
                translateZ="50"
                className="text-xl font-bold text-slate-100 flex space-between items-center"
            >
                <p>Logo @Username</p> 
            </CardItem>
            <CardItem
                translateZ="50"
                className="text-xl font-bold text-slate-100 flex space-between items-center"
            >
                <p><FaDiscord className="text-blue-500 text-5xl"/></p>
            </CardItem>
        </div>
        
        <CardItem className="font-medium pt-4">
            <p>testimonial</p>
        </CardItem>
        
        
        
        
      </CardBody>
    </CardContainer>
  );
}
