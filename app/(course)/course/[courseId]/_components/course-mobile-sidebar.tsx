import { Chapter, Course, UserProgress } from "@prisma/client";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

import { CourseSidebar } from "./course-sidebar";

import { Book } from "lucide-react";

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
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <h1 className="border-2 font-medium text-md rounded-full px-2 py-1 bg-[#2e2e2e] flex"><Book className="mr-1"/>Chapters</h1>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 bg-[#191919] w-90 border-none text-slate-200">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}