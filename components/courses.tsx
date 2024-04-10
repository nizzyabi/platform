// Courses Page
'use client'
import * as React from 'react'
import Link from 'next/link'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useCurrentUser } from '@/hooks/user-current-user'
import { Button } from '@/components/ui/button'
import { Separator } from './ui/separator'

export default function Courses() {
  // AOS Effect

  const session = useCurrentUser()
  const nizzyuser = session?.id === 'clrulbr1h0000x3js9ldvplex'

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
