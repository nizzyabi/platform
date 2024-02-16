import { Chapter, Course, UserProgress } from "@prisma/client"

import { CourseMobileSidebar } from "./course-mobile-sidebar";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: any;
};

export const CourseNavbar = ({
  course,
  progressCount,
}: CourseNavbarProps) => {
  return (
    <div className=" flex items-center bg-[#1919191] shadow-sm">
      <CourseMobileSidebar
        course={course}
        progressCount={progressCount}
      />
          
    </div>
  )
}