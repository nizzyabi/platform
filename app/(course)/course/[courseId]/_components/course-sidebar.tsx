import {auth} from "@/auth"
import { Chapter, Course, UserProgress } from "@prisma/client"
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { CourseProgress } from "@/components/course-progress";

import { CourseSidebarItem } from "./course-sidebar-item";

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
  
    return (
      <div className="">
        {course.title}
      </div>
    )
  }