"use client";

import { db } from "@/lib/db";
import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
}

export default function AvatarCircles({
  numPeople,
  className,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      <img
        className="h-11 w-11 rounded-full border-2 border-secondary"
        src="/testimonials/solomon.webp"
        alt=""
      />
      <img
        className="h-11 w-11 rounded-full border-2 border-secondary"
        src="/testimonials/paulos.webp"
        alt=""
      />
      <img
        className="h-11 w-11 rounded-full border-2 border-secondary"
        src="/testimonials/sven.webp"
        alt=""
      />
      <img
        className="h-11 w-11 rounded-full border-2 border-secondary"
        src="/testimonials/tiernande.webp"
        alt=""
      />
      <img
        className="h-11 w-11 rounded-full border-2 border-secondary"
        src="/testimonials/liam.webp"
        alt=""
      />
    </div>
  );
}
