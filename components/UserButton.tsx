'use client'
import { Button } from "@/components/ui/button"
import { Avatar } from "@mui/material"
import Link from "next/link"
import { IoMdPerson } from "react-icons/io";
import { useCurrentUser } from "@/hooks/user-current-user"

const UserButton = () => {
    const session = useCurrentUser();   
  return (
    <div>
        {!session ? (
            <Link href='/auth/register'>
                <Button variant="gold" className="mt-5" >
                    register
                </Button>
            </Link>

        ): (
            <Link href='/settings'>
                {!session.image ? (
                    <Avatar alt='logo' className="shadow-xl shadow-black hover:scale-110 transition-transform duration-500  bg-gradient-to-r from-blue-500/90 to-blue-700/90" sx={{ width: 45, height: 45}}>
                    <IoMdPerson className="text-2xl"/>
            </Avatar>
                ): (
                    <Avatar alt='logo' src={session.image} className="shadow-md shadow-black border-2 border-transparent hover:border-blue-500/50" sx={{ width: 45, height: 45 }}/>
                )}
                
            </Link>
        )}

    </div>
  )
}

export default UserButton