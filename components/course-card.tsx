import Image from "next/image";
import Link from "next/link";
import { CourseProgress } from "@/components/course-progress";
import { auth } from "@/auth";
import { Course } from "@prisma/client";
import { IconBook2 } from "@tabler/icons-react";
interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    progress: number | null;
    description: string;
    course?: Course [];
    price?: number;
  };
export const CourseCard =  async ({
    id,
    title,
    imageUrl,
    chaptersLength,
    progress,
    description,
    course,
    price,
    
}: CourseCardProps) => {
   
    return (
        <Link href={`/courses/${id}/info`}>
        
            <div className="group hover:opacity-75 transition duration-300 overflow-hidden  h-full bg-zinc-900 rounded-xl">
                <div className="relative w-full aspect-video rounded-t overflow-hidden">
                    <Image
                        fill
                        className="object-cover" 
                        src={imageUrl}
                        alt={title}
                    />
                </div>
                <div className="flex flex-col px-3 space-y-6 pt-4">
                    <div className="text-2xl font-extrabold">
                        {title}
                    </div>

                    <div className="text-sm font-medium text-slate-100/50">
                        {description}
                    </div>
                    
                    <div className="flex items-center gap-x-2 text-md md:text-sm text-slate-200">
                        <div className="flex items-center gap-x-1 ">
                        <IconBook2 width={20} height={20}  />
                            <span className="mt-0.5 font-semibold text-slate-100 ml-1">
                                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
                            </span>
                        </div>
                    </div>
                    <div>
                        {progress !== null && (
                            <CourseProgress
                                variant={progress === 100 ? "success" : "default"}
                                size="sm"
                                value={progress}
                                
                            />
                        )}
                        {!price && (
                            <button className="bg-transparent text-slate-100 mb-3 px-4 py-1.5 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px] text-md">
                                Free
                            </button>
                        )}
                        </div>
                    </div>                
                </div>
        </Link>
    )
}