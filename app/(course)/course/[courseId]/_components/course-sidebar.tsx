import {auth} from "@/auth"
import { Chapter, Course, UserProgress } from "@prisma/client"
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { CourseProgress } from "@/components/course-progress";

import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseItem } from "./course-item";

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
      <div className="h-full  flex flex-col overflow-y-auto shadow-sm">
      <div className=" p-4 flex flex-col border-b">
        <h1 className="font-semibold">
          {course.title}
        </h1>
        {purchase && (
          <div className="mt-10">
            <CourseProgress
              variant="success"
              value={progressCount}
            />
          </div>
        )}
      </div>
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
    </div>
    )
  }