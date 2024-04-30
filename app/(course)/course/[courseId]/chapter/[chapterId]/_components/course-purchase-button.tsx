'use client'

import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/format'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface CoursePurchaseButtonProps {
  price: number
  courseId: string
}
export const CoursePurchaseButton = ({
  price,
  courseId
}: CoursePurchaseButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const onClick = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post(`/api/courses/${courseId}/checkout`)
      window.location.assign(response.data.url)
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={onClick}
      className="p-[2px] font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500"
    >
      <div className="flex items-center px-5 lg:px-7 h-12 bg-zinc-800 rounded-md transition duration-300 text-white hover:bg-transparent text-base lg:text-lg">
        Purchase course for {formatPrice(price)}
      </div>
    </Button>
  )
}
