import {auth} from "@/auth"
import { Chapter, Course, UserProgress } from "@prisma/client"
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { CourseProgress } from "@/components/course-progress";

import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseItem } from "./course-item";

import { ScrollArea } from "@/components/ui/scrollbar";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[]
  };
  progressCount: any;
};

  export const CourseSidebar = async ({
    course,
    progressCount,
  }: CourseSidebarProps) => {
    const session = await auth();
  
    if (!session) {
      return redirect("/");
    }

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: course.id,
        }
      }
    });
  
    return (
      <div className="max-w-7xl mx-auto pt-8">
      <div className="flex flex-col">
        {purchase && (
          <div className="mt-10">
            <CourseProgress
              variant="success"
              value={progressCount}
            />
          </div>
        )}
      </div>
     <ScrollArea className="h-72 w-[290px] rounded">
      <div className="flex flex-col w-full">
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
      </div>
      </ScrollArea>
      
    </div>
    )
  }