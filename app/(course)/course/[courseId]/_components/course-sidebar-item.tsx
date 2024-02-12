"use client";

import { CheckCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";

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
  const Icon = isLocked ? FaLock : (isCompleted ? CheckCircle : FaRegCircleDot);
  const iconClassNames = cn(
    "text-slate-200/20",
    isActive && "text-slate-200",
    isCompleted && "text-emerald-700",
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
        "flex items-center gap-x-2 text-slate-200/20 text-lg font-semibold transition-all hover:text-slate-200 ",
        
        isActive && "text-slate-200",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isCompleted && isActive && "bg-emerald-200/20",
        
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={17}
          className={iconClassNames}
        />
        {label}
      </div>
      <div className={cn(
        "h-full transition-all",
        isActive && "opacity-100",
        isCompleted && "border-emerald-700"
      )} />
    </button>
  )
}