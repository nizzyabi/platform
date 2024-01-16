'use client'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Avatar, CircularProgress } from "@mui/material"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { IoMdPerson } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { useCurrentUser } from "@/hooks/user-current-user"

const UserButton = () => {
    useEffect(() => {
        // Check if the user is coming from /auth/new-password
        const referrer = document.referrer;
        if (referrer.includes('/auth/new-password')) {
            setOpen(true);
        }
    }, []);
    // get user
    // if user is logged in, return logout button
    // if user is not logged in, return login button
    const session = useCurrentUser();   
    const [showRegister, setShowRegister] = useState(true);
    const isLoading = status === "loading";
    const [open, setOpen] = useState(false);
    const [showReset, setShowReset] = useState(false);
    
    // Toggle form of auth
    const toggleForm = () => {
        setShowRegister(!showRegister);
        setShowReset(false); // Hide reset form when showing register form
    };
    const handleShowReset = () => {
        setShowReset(!showReset);
        if (showReset) {
            setShowRegister(false); // Hide register form when showing reset form
        }
    };
    if (isLoading) {
         return <CircularProgress size={24} color="primary" />;
       }
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