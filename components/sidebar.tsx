'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { SheetClose } from '@/components/ui/sheet'
import { useSession } from 'next-auth/react'

const routes = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/roadmap',
    label: 'Roadmap'
  },
  {
    href: '/courses',
    label: 'Courses'
  },
  {
    href: '/tutoring',
    label: 'Tutoring'
  },
  {
    href: '/settings',
    label: 'Settings'
  },
  {
    href: 'https://github.com/NizarAbiZaher',
    label: 'Github'
  },
  {
    href: 'https://www.youtube.com/@NizzyABI',
    label: 'Youtube'
  },
  {
    href: 'https://discord.gg/nizar',
    label: 'Community'
  }
]

export const Sidebar = () => {
  const { data: session } = useSession()
  return (
    <div className="space-y-4 flex flex-col h-full text-primary mt-12 ">
      <div className="space-y-2">
        {!session && (
          <SheetClose asChild className="w-20">
            <Link
              href="/auth/register"
              className="flex border-b border-slate-100/70 w-full pb-3 "
            >
              <p className="mt-1 text-lg font-normal text-slate-100/40 hover:text-slate-100/90 duration-300">
                Sign In
              </p>
            </Link>
          </SheetClose>
        )}
        {routes.map((route) => (
          <SheetClose asChild className="w-20">
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-slate-100/40 text-sm group flex py-2 w-full justify-start font-light cursor-pointer rounded '
              )}
            >
              {/* Design & display icon & label */}
              <div className="flex border-b border-slate-100/70 w-full pb-3 ">
                <p className="mt-1 text-lg font-normal hover:text-slate-100/90 duration-300">
                  {route.label}
                </p>
              </div>
            </Link>
          </SheetClose>
        ))}
      </div>
    </div>
  )
}
