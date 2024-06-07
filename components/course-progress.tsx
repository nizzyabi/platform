import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success",
  size?: "default" | "sm";
};

const colorByVariant = {
  default: "text-primary/70 ",
  success: "text-primary/40",
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
}

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div className="pb-2 w-full">
      <p className={cn(
          "font-medium text-baseContent",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"],
        )}>
          {Math.round(value)}% Complete
        </p>
      <progress className="w-full progress-success progress bg-opacity/50" value={value} max={100}></progress>
       
    </div>
  )
}