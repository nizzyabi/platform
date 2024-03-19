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
    "text-slate-200/20",
    isActive && "text-slate-200",
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
        "flex items-center  text-slate-200/20 text-md font-semibold min-w-0 transition-all hover:text-slate-200 ",
        
        isActive && "text-slate-200",
        isCompleted && "text-slate-200/20 hover:text-slate-200",
      )}
    >
      <div className="flex items-center py-1">
        <Icon
          size={20}
          className={iconClassNames}
        />
          <span className="pr-20 no-wrap ml-3">{label}</span>
          <p>🔥</p>
      </div>
      <div className={cn(
        "h-full transition-all",
        isActive && "opacity-100",
        isCompleted && "border-emerald-500"
      )} />
    </button>
  )
}