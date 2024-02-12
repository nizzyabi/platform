'use client'

import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import "@mux/mux-player/themes/classic";

import { cn } from "@/lib/utils";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import Image from "next/image";

interface VideoPlayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
};


export const VideoPlayer = ({
    playbackId,
    courseId,
    chapterId,
    nextChapterId,
    isLocked,
    completeOnEnd,
    title,
}: VideoPlayerProps) => {
    const [isReady, setIsReady] = useState(false); 
  return (
    <div className="relative aspect-video h-full">
        {!isReady && !isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#191919]">
                <Loader2 className="mx-auto animate-spin text-slate-100 h-8 w-8" />
            </div>
        )}
        {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1f1e1e] flex-col gap-y-2 ">
                <p className="text-3xl font-bold border-double px-3 rounded text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Buy this course to unlock </p>
                <Image 
                    src="/gilbert_cool.png"
                    alt="lock"
                    width={100}
                    height={100}
                />
                {/*TODO: ADD LINK TO PAYMENT TO PAY FOR COURSE*/}
            </div>
        )}
        {!isLocked && (
            <div>
            <MuxPlayer
                className={cn(
                "h-auto sm:w-full md:w-[500px] lg:w-[700px] xl:w-[900px]",
                !isReady && "hidden"
                )}
                onCanPlay={() => setIsReady(true)}
                onEnded={() => {}}
                playbackId={playbackId}
                accent-color="#191919"
                theme="classic"
                
                
            />
            </div>
      )}
    </div>
  )
}

