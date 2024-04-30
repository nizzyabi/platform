'use client'

import axios from 'axios'
import { CheckCircle, XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { useConfettiStore } from '@/hooks/use-confetti-store'

interface CourseProgressButtonProps {
  chapterId: string
  courseId: string
  isCompleted?: boolean
  nextChapterId?: string
}

export const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId
}: CourseProgressButtonProps) => {
  const router = useRouter()
  const confetti = useConfettiStore()
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    try {
      setIsLoading(true)

      await axios.put(
        `/api/courses/${courseId}/chapters/${chapterId}/progress`,
        {
          isCompleted: !isCompleted
        }
      )

      if (!isCompleted && !nextChapterId) {
        confetti.onOpen()
      }

      if (!isCompleted && nextChapterId) {
        router.push(`/course/${courseId}/chapter/${nextChapterId}`)
      }

      toast.success('Progress updated')
      router.refresh()
    } catch {
      toast.error('Sign up to track progress')
    } finally {
      setIsLoading(false)
    }
  }

  const Icon = isCompleted ? XCircle : CheckCircle

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4 mb-4"
    >
      {isCompleted ? 'Not completed' : 'Mark as complete'}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  )
}
