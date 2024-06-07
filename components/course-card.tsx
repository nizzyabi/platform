'use client'
import Link from "next/link";
import { CourseProgress } from "@/components/course-progress";
import { Course } from "@prisma/client";
import { IconBook2 } from "@tabler/icons-react";
import { useState } from 'react';
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
export const CourseCard =  ({
    id,
    title,
    imageUrl,
    chaptersLength,
    progress,
    description,
    course,
    price,
    
}: CourseCardProps) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <Link href={`/courses/${id}/info`}>
            <div className="card bg-base100">
                <figure>
                    <img
                        src={imageUrl}
                        alt={title}
                    />
                </figure>
                <div className="card-body p-3">
                    <h2 className="p-0 card-title text-baseContent">{title}</h2>

                    <div className="text-sm font-medium text-baseContent/50">
                        {description}
                    </div>
                    
                    <div className="flex items-center gap-x-2 text-md md:text-sm text-baseContent/50">
                        <div className="flex items-center gap-x-1 ">
                        <IconBook2 width={20} height={20}  />
                            <span className="mt-0.5 font-semibold text-baseContent/50 ml-1">
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
                            <button className="text-white mb-3 px-4 py-1.5 font-semibold bg-primary rounded-[6px] text-md">
                                Free
                            </button>
                        )}
                        </div>
                    </div>                
                </div>
        </Link>
    )
}