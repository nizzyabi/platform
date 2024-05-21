'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import UserButton from '@/components/user-button'
import Search from '@/components/search'

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 25
      setHasScrolled(window.pageYOffset > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarChange = hasScrolled
    ? 'backdrop-blur border-b border-slate-100/20 bg-[#2e2e2e]/90'
    : 'bg-transparent border-b border-transparent'

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${navbarChange} transition select-none sm:pt-0 pt-1 `}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className='group text-lg md:text-2xl font-bold'>
              <span>nizzy</span>
              <span className='transition-all duration-300 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>
                abi
              </span>
            </h1>
          </Link>

          <div className="flex flex-wrap items-center">
            <div className="flex items-center font-medium text-[16px] sm:text-lg">
              <Link
                href="/roadmap"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-2 sm:px-4 rounded-lg py-2"
              >
                Roadmap
              </Link>
              <Link
                href="/courses"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-2 sm:px-4 rounded-lg py-2"
              >
                Courses
              </Link>
              
            </div>
            <div className="flex items-center md:gap-4">
              <Search />
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
