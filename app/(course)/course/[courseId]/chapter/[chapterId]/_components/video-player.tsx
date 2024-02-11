'use client'


import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { useConfettiStore } from "@/hooks/use-confetti-store";

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
    <div className="relative space-x-7 aspect-video ">
        {!isReady && !isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#191919]">
                <Loader2 className="mx-auto animate-spin text-slate-100 h-8 w-8" />
            </div>
        )}
        {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#191919] flex-col gap-y-2 text-slate-100">
                <Lock className="h-8 w-8" />
                <p>Buy this course to unlock</p>
            </div>
        )}
        {!isLocked && (
            <MuxPlayer
                className={cn(
                !isReady && "hidden"
                )}
                onCanPlay={() => setIsReady(true)}
                onEnded={() => {}}
                playbackId={playbackId}
                accent-color="#191919"
            />
      )}
    </div>
  )
}

