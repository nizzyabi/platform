// User Button Avatar
'use client'
import { Button } from '@/components/ui/button'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/user-current-user'
import { useRouter } from 'next/navigation'

const UserButton = () => {
  const session = useCurrentUser()
  const router = useRouter()
  const onClick = () => {
    router.push('/auth/register')
  }
  return (
    <div>
      {!session ? (
        <Button
          type="submit"
          onClick={onClick}
          className="p-[3px] relative font-semibold w-full bg-transparent"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[7.5px] w-full" />
          <div className="px-7 py-0.5  w-full bg-zinc-800 rounded-[5px]  relative group transition duration-200 text-white hover:bg-transparent text-lg">
            Sign Up
          </div>
        </Button>
      ) : (
        <Link href="/settings">
          {!session.image ? (
            <Avatar
              alt="logo"
              className="shadow-xl shadow-black hover:scale-110 transition-transform duration-300  bg-gradient-to-r from-pink-500 to-purple-500"
              sx={{ width: 40, height: 40 }}
            ></Avatar>
          ) : (
            <Avatar
              src={session.image}
              className="shadow-md shadow-black border-2 border-transparent hover:border-blue-500/50 duration-300"
              sx={{ width: 40, height: 40 }}
            />
          )}
        </Link>
      )}
    </div>
  )
}

export default UserButton
