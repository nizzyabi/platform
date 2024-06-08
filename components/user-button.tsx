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
import { Github, LogOut, Youtube } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa'
import { useEffect } from 'react'
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
          <div tabIndex={0} role="button" className=" m-1">
            <Avatar
              src={session.image ? session.image : ''}
              alt="logo"
              className="cursor-pointer bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 xs:mt-0.5 ml-0.5 md:my-0"
              sx={style}
            />  
          </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base100 rounded-box w-52 p-4">
              <a>{session?.name}</a>
              <a className='border-b pb-2'>{session?.email}</a>
              
              <div onClick={Logout} className='py-2 cursor-pointer'>Logout</div>
            </ul>
          </div>
      )}
    </>
  )
}

export default UserButton
