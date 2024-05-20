import {auth} from "@/auth"
import { Chapter, Course, UserProgress } from "@prisma/client"
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { CourseProgress } from "@/components/course-progress";

import { CourseSidebarItem } from "./course-sidebar-item";
import { ScrollArea } from "@/components/ui/scrollbar";
import Scroll from "@/components/Scroll";


interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[]
  };
  progressCount: number;
};

  export const CourseSidebar = async ({
    course,
    progressCount,
  }: CourseSidebarProps) => {
    const session = await auth();
  
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: session?.user.id ?? '',
          courseId: course.id,
        }
      }
    });
  
    return (
      <div className="hidden lg:flex ml-8">
     <div>
     {session && (
        <div>
          
          <CourseProgress
            variant="default"
            value={progressCount}
          />
        </div>
      )}
      <ScrollArea className="flex flex-col h-[500px] w-30 w-full overflow-x-auto">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !purchase}
          />
          
        ))}
      </ScrollArea>
      </div>
    </div>
    )
  }