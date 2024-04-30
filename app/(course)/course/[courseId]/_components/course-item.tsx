'use client'

import { cn } from '@/lib/utils'
import { CheckCircle, Lock, PlayCircle } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface CourseItemProps {
  label: string
  id: string
  isCompleted: boolean
  courseId: string
  isLocked: boolean
}

export const CourseItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked
}: CourseItemProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle
  const isActive = pathname?.includes(id)
  const onClick = () => {
    router.push(`/course/${courseId}/chapters/${id}`)
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-slate-200 text-sm font-bold transition-all',
        isActive && 'text-red-500',
        isCompleted && 'text-blue-700',
        isCompleted && isActive && 'bg-blue-200/20'
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            'text-slate-200',
            isActive && 'text-red-500',
            isCompleted && 'text-blue-700'
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-slate-700 h-full transition-all',
          isActive && 'opacity-100',
          isCompleted && 'border-blue-700'
        )}
      />
    </button>
  )
}
