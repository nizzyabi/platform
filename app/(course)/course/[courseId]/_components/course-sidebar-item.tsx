"use client";

import { CheckCircle, Lock, Circle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scrollbar";

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

  const Icon = isLocked ? Lock : (isCompleted ? CheckCircle : Circle);
  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/course/${courseId}/chapter/${id}`);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-200/20 text-lg font-semibold transition-all hover:text-slate-200 ",
        
        isActive && "text-slate-200 font-bold",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isCompleted && isActive && "bg-emerald-200/20",
        
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={15}
          className={cn(
            "text-slate-200/20",
            isActive && "",
            isCompleted && "text-emerald-700"
          )}
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