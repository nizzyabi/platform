'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import UserButton from './user-button'
import { MobileSidebar } from '@/components/mobile-sidebar'
import Search from './search'

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
      className={`fixed top-0 w-full z-50 ${navbarChange} transition select-none`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/*<MobileSidebar />*/}

          <Link href="/" className="flex items-center">
            <h1 className='group text-2xl font-bold '>
              <span>
                nizzy
              </span>
              <span className='transition-all duration-300 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 '>
                abi
              </span>
            </h1>
          </Link>


          <div className=" flex h-[40px] items-center text-lg md:text-lg font-medium lg:gap-4 navbar transition-all">
            <div className="flex items-center  h-full xs:text-[17px] sm:text-lg">
              <Link
                href="/roadmap"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-4 xs:px-2 rounded-lg"
              >
                Roadmap
              </Link>
              <Link
                href="/courses"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-2 sm:px-4  rounded-lg"
              >
                Courses
              </Link>
              <Link
                href="http://discord.gg/nizar"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 xs:px-2 px-4  rounded-lg"
              >
                Discord
              </Link>
            </div>
            <div className="flex h-full md:gap-6">
              <Search />
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
