// Courses Page
'use client'
import * as React from 'react'
import { Separator } from './ui/separator'

export default function Courses() {
  return (
    <div className="flex flex-col gap-2 items-center pt-20">
      <span className="text-6xl font-bold text-baseContent">Courses</span>
      <span className="font-medium text-md text-baseContentSecondary">
        Checkout our free & paid courses below!
      </span>
      
    </div>
  )
}
