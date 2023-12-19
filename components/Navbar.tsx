'use client'
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { SignOutButton, SignUp, SignUpButton, UserButton, UserProfile, auth, useAuth } from "@clerk/nextjs";
import PersonIcon from '@mui/icons-material/Person';
import AuthBtn from "./AuthBtn";
import CircularProgress from '@mui/material/CircularProgress';



export default function Navbar() {
    const[isLoading, setIsLoading] = useState(true);
    
    const [isHovered, setIsHovered] = useState(false);
    const { userId, isLoaded } = useAuth();
    if (!isLoaded) {
        return (
            <div className="flex justify-center items-center"> {/* Center the spinner */}
                <CircularProgress /> {/* Loading spinner */}
            </div>
        );
    }
  return (
    <div className="w-full z-50 flex justify-between items-center px-2 cursor-pointer mt-3 mb-4">
        <Link href='/' className="flex items-center ml-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src={isHovered ? '/logo2.svg' : '/logo.svg'}
                width={50}  // Base width
                height={50}
                alt='logos2'
                className="responsive-image"
                
            />
        </Link>
        <div className="flex items-center gap-x-6 text-lg md:text-2xl font-extrabold mr-2 ">
            <Link href="/plus">
                <p 
                    className="text-white bg-blue-500 rounded px-2 py-0.5 hover:scale-105 transition-transform"
                >
                        pro <AutoAwesomeOutlinedIcon className="bg-transparent"/>
                </p>
            </Link>
            <Link href="/guides">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 transition-transform "
                >
                        guides
                </p>
            </Link>
            <Link href="/courses">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform"
                >
                        courses
                </p>
            </Link>
            <div>

            <AuthBtn />
            </div>
        </div>
        
    </div>
  )
}
