"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function LanguageBackground() {
  return (
    <div className="flex items-center justify-center space-x-5">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-zinc-900">
        <Image
          src={`/TS.png`}
          alt="jordans"
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-5  bg-zinc-900">
        <Image
          src={`/react.png`}
          alt="react"
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-zinc-900">
        <Image
          src={`/prisma.png`}
          alt="Prisma"
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-zinc-900">
        <Image
          src={`/JS.png`}
          alt="JavaScript"
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-3  bg-zinc-900">
        <Image
          src={`/C.png`}
          alt="Next.js"
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-zinc-900">
        <Image
          src={`/next.png`}
          alt="Next.js"
          height="100"
          width="100"
          className="object-contain"
        />
      </BackgroundGradient>
    </div>
  );
}
