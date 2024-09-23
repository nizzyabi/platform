'use client'
import Link from "next/link";
import { CourseProgress } from "@/components/course-progress";
import { Course } from "@prisma/client";
import { IconBook2 } from "@tabler/icons-react";
import { useEffect, useState } from 'react';
import { useCurrentUser } from "@/hooks/user-current-user";
import { Skeleton } from "./ui/skeleton";
interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    progress: number | null;
    description: string;
    course?: Course[];
    price?: number;
    createdAt: Date;
};

export const CourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    progress,
    description,
    course,
    price,
    createdAt
}: CourseCardProps) => {
    const [isNew, setIsNew] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const session = useCurrentUser();

    useEffect(() => {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        if (new Date(createdAt) >= oneMonthAgo) {
            setIsNew(true);
        }

        // Simulate loading delay
        setTimeout(() => setIsLoading(false), 1000);
    }, [createdAt]);

    if (isLoading) {
        return (
            <div className="card bg-base100  skeleton">
                <figure className="skeleton">
                    <div className="w-full h-48 "></div>
                </figure>
                <div className="card-body p-3">
                    <h2 className="p-0 card-title text-baseContent skeleton">
                        <div className="h-4  w-3/4"></div>
                    </h2>
                    <div className="text-sm font-medium text-baseContent/50 skeleton">
                        <div className="h-3  w-full"></div>
                        <div className="h-3  w-5/6 mt-2"></div>
                    </div>
                    <div className="flex items-center gap-x-2 text-md md:text-sm text-baseContent/50 skeleton">
                        <div className="flex items-center gap-x-1 ">
                            <div className="h-4 w-4  rounded-full"></div>
                            <span className="mt-0.5 font-semibold text-baseContent/50 ml-1">
                                <div className="h-3  w-1/2"></div>
                            </span>
                        </div>
                    </div>
                    <div className="skeleton">
                        <div className="h-8  w-1/4 mt-2"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link href={`/courses/${id}/info`}>
            <div className="card bg-base100 shadow-xl">
                <figure>
                    <img
                        src={imageUrl}
                        alt={title}
                    />
                </figure>
                <div className="card-body p-3">
                    <h2 className="p-0 card-title text-baseContent">
                        {title}
                        {isNew && (
                            <div className="badge text-base100 border-primary bg-primary">
                                New
                            </div>
                        )}
                    </h2>

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
                        {session && progress !== null && (
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
