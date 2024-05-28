import { Chapter, Course, UserProgress } from "@prisma/client";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { CourseMobileSidebarContent } from "./course-mobile-sidebar-content";

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

export const CourseMobileSidebar = ({ 
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition xs:mx-3.5 sm:mx-5 mx-6 mb-5">
        <h1 className="rounded-[5px] bg-primary text-secondary hover:opacity-75 font-medium transition duration-300 px-8 py-2 text-sm ml-0">Chapters</h1>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 border-none w-80">
        <CourseMobileSidebarContent 
          course={course} 
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}