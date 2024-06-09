// User Button Avatar
'use client'
import { Button } from '@/components/ui/button'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/user-current-user'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Github, LogOut, LogOutIcon, Youtube } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import { Separator } from './ui/separator'

const UserButton = () => {
  const session = useCurrentUser()
  const router = useRouter()
  const Logout = async () => {
    signOut()
    router.push('/auth/login')
  }
  const style = {
    width: {
      xs: 35,
      md: 40
    },
    height: {
      xs: 35,
      md: 40
    }
  }
  

  return (
    <>
      {!session ? (
        <>
          <Link
            href="/auth/register"
            className="flex md:hidden items-center justify-center rounded-lg cursor-pointer transition duration-300 hover:bg-black/10 px-2 py-2 max-h-10"
          >
            <LogOut className="text-baseContent h-5.5 w-5 ml-1" />
          </Link>

          <Link
            href="/auth/register"
            type="submit"
            className="px-5 py-2 font-semibold rounded-[6px] bg-primary text-base100 h-full hidden md:flex"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className='ml-2 btn py-0 px-0 bg-transparent shadow-none border-none hover:bg-transparent'>
            
            <Avatar
              src={session.image ? session.image : ''}
              alt="logo"
              className="cursor-pointer bg-primary xs:mt-0.5 ml-0.5 md:my-0"
              sx={style}
            />  
          </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base100 rounded-box w-52">
              <li onClick={Logout} className=' cursor-pointer'>
                <a><LogOutIcon className='h-4 w-4'/> Logout</a>
              </li>
            </ul>
          </div>
      )}
    </>
  )
}

export default UserButton
