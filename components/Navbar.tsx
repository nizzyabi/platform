'use client'

import Image from "next/image";
import Link from "next/link";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {Sparkle} from 'lucide-react';
import { SignInButton, SignOutButton } from "./SignInButton";

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full z-50 flex justify-between items-center px-2 cursor-pointer mt-3 mb-4">
        <div className="flex items-center ml-2 hover:scale-105 transition-transform duration-300 ease-in-out"
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
        </div>
        <div className="flex items-center gap-x-6 text-lg md:text-2xl font-extrabold mr-2 ">
            <Link href="/plus">
                <p 
                    className="text-blue-500 border-blue-500 hover:text-purple-500 hover:border-purple-500 border rounded p-0.5 px-2"
                >
                        plus
                </p>
            </Link>
            <Link href="/guides">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                        guides
                </p>
            </Link>
            <Link href="/courses">
                <p 
                    className="text-white font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                        courses
                </p>
            </Link>
            <Link href='/'>
            
                <VpnKeyIcon className="mb-1 small-screen text-white" />
                <SignInButton />
                <SignOutButton />
                
                
            </Link>
        </div>
        
    </div>
  )
}
