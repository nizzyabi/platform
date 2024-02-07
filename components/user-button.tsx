// User Button Avatar
'use client'
import { Button } from "@/components/ui/button"
import { Avatar } from "@mui/material"
import Link from "next/link"
import { IoMdPerson } from "react-icons/io";
import { useCurrentUser } from "@/hooks/user-current-user"

const UserButton = () => {
    // Get current user data
    const session = useCurrentUser();   
  return (
    <div>
        {/* If no user session, show register button, else show user image or boilerplate image*/}
        {!session ? (

            <Link href='/auth/register'>
                <Button variant='basic'>
                    <h1 className="text-md">Sign Up</h1>
                </Button>
            </Link>
           
        ): (
            <Link href='/settings'>
                {!session.image ? (
                    <Avatar alt='logo' className="shadow-xl shadow-black hover:scale-110 transition-transform duration-500  bg-gradient-to-r from-pink-500 to-purple-500" sx={{ width: 40, height: 40}}>
                    
            </Avatar>
                ): (
                    <Avatar alt='logo' src={session.image} className="shadow-md shadow-black border-2 border-transparent hover:border-blue-500/50" sx={{ width: 40, height: 40 }}/>
                )}
                
            </Link>
        )}

    </div>
  )
}

export default UserButton