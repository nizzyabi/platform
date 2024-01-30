"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Tweet } from "react-tweet";

const testimonials = [
    {
        id: "1752136479566884913?s=20",
    },
    {
        id: "1752049739137179718?s=20",
    },
    {
        id: "1751981775650222088?s=20",
    },
    {
        id: "1752028135069995404?s=20"
    }
    
]

export function Testimonials() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-12 space-y-12">
        {testimonials.map((tweet, index) => (
            <CardContainer key={index}>
                <CardItem>
                    <CardBody>
                        <Tweet id={tweet.id} />
                    </CardBody>
                </CardItem>
            </CardContainer>
        ))}
    </div>
  );
}
