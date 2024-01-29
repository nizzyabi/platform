"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";


export function GlowingStars() {
  return (
    <div className="flex py-20 items-center justify-center antialiased space-x-8 ">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>HTML & CSS</GlowingStarsTitle>
        <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Simple yet powerful.
              <span className="flex text-3xl"><FaHtml5 className="text-orange-500"/><FaCss3Alt className='text-blue-500'/></span>
            </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
          <Link href='/courses'>
              <Icon />
          </Link>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>JavaScript</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            The language of the web.
            <span className="text-yellow-500 text-3xl"><IoLogoJavascript /></span>
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Link href='/courses'>
              <Icon />
            </Link>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            Fullstack made simple.
            <span className="text-white text-3xl"><TbBrandNextjs /></span>
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Link href='/courses'>
              <Icon />
            </Link>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
