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
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:hidden">
        <label htmlFor="my-drawer" className="btn bg-primary hover:bg-primary border-primary hover:border-primary text-base100 drawer-button m-4">Chapters</label>
      </div> 
      <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

      <CourseMobileSidebarContent 
          course={course} 
          progressCount={progressCount}
        />
      </div>
    </div>
  )
}