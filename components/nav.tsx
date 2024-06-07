'use client'

import Link from 'next/link'
import UserButton from '@/components/user-button'
import Search from '@/components/search'

export default function Navbar() {

  return (
    <nav className={`top-0 w-full z-50 transition p-5`}>
      <div className=" mx-auto text-baseContent">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="group text-2xl font-bold " >
              <span>NizzyABI</span>
            </h1>
          </Link>

          <div className="flex flex-wrap items-center">
            <div className="flex items-center font-medium text-[17px]">
              <Link
                href="/courses"
                className="flex items-center hover:bg-black/10 h-full transition duration-300 px-2 sm:px-4 rounded-lg py-2 font-semibold"
              >
                Courses
              </Link>
            </div>
            <div className="flex items-center gap-1 md:gap-4">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
