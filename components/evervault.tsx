import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Example data array
const cardData = [
  {
    image: "/Next.png",
    hoverText: "Create a fullstack app with ease. ",
    link: "/next"
    
  },
  {
    image: "/JS.png",
    hoverText: "Learn the basics of JavaScript.",
    link: "/js"
    
  },
  {
    image: "/React.png",
    hoverText: "Build a React app from scratch.",
    link: "/react"
    
  }
  // Add more card objects here
];

export function Evervault() {
  return (
    <div className="justify-items-center">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
      {cardData.map((card, index) => (
        <div key={index} className="border border-white/[0.2] flex flex-col max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-slate-200" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-slate-200" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-slate-200" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-slate-200 " />

          <EvervaultCard image={card.image} />

          <h2 className="text-slate-200 mt-4 text-sm font-light">
            {card.hoverText}
          </h2>
          <Link href={card.link}>
            <Button variant="goldHover">
              Go to course
            </Button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
