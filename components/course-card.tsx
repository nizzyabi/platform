import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";
import { CourseProgress } from "@/components/course-progress";
import { formatPrice } from "@/lib/format";
interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    price: number;
    progress: number | null;
    category: string;
    description: string;
  };
export const CourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    price,
    progress,
    description,
    
}: CourseCardProps) => {
    return (
        <Link href={`courses/${id}`}>
            <div className="group hover:scale-105 duration-500 transition overflow-hidden rounded h-full bg-[#191919]">
                <div className="relative w-full aspect-video rounded-t overflow-hidden">
                    <Image
                        fill
                        className="object-cover" 
                        src={imageUrl}
                        alt={title}
                    />
                </div>
                <div className="flex flex-col px-3 space-y-8 pt-4">
                    <div className="text-2xl font-extrabold">
                        {title}
                    </div>

                    <div className="text-md font-semibold">
                        {description}
                    </div>
                    
                    <div className="flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                        <IconBadge size="sm" icon={BookOpen} />
                            <span>
                                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
                            </span>
                        </div>
                    </div>
                        {progress !== null ? (
                            <CourseProgress
                                variant={progress === 100 ? "success" : "default"}
                                size="sm"
                                value={progress}
                            />
                        ) : (
                            <div>

                            </div>
                        )}
                    </div>
                    
                </div>
        </Link>
    )
}