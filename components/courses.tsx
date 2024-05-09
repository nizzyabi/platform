// Courses Page
'use client'
import * as React from 'react'
import { Separator } from './ui/separator'

export default function Courses() {
  return (
    <div className="flex flex-col gap-2 items-center pt-40">
      <span className="text-6xl font-bold">Courses</span>
      <span className="font-medium text-md text-slate-100/40">
        Checkout our free & paid courses below!
      </span>
      <div className="flex items-center justify-center">
        <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
      </div>
    </div>
  )
}
