"use client";

import { Circle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
};

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked,
}: CourseSidebarItemProps) => {

  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname?.includes(id);
  const Icon = isLocked ? FaLock : (isCompleted ? FaCheckCircle : Circle);

  const iconClassNames = cn(
    "text-primary/70",
    isActive && "text-primary/60",
    isCompleted && "text-green-500",
    isLocked && "text-red-500"
  );
  
  const onClick = () => {
    router.push(`/course/${courseId}/chapter/${id}`);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center text-primary/30 text-md  font-semibold min-w-0 transition-all hover:text-primary/70 pb-8 ",
        
        isActive && "text-primary",
        isCompleted && "text-primary/30 hover:text-primary/70",
      )}
    >
      <div className="flex items-center py-1">
        <Icon
          size={20}
          className={iconClassNames}
        />
          <span className="pr-20 md:pr-8 lg:pr-20 no-wrap ml-3">{label}</span>
          
      </div>
      <div className={cn(
        "h-full transition-all",
        isActive && "opacity-100",
        isCompleted && "border-emerald-500"
      )} />
    </button>
  )
}