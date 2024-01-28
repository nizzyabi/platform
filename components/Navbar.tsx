'use client'
import Link from "next/link";
import { useState } from "react";
import "aos/dist/aos.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import UserButton from "./user-button";
import { motion } from "framer-motion";




export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-transparent">
        {/* Top of page subscribe */}
        
        <div className="w-full  flex justify-between items-center px-2 cursor-pointer hide-on-small-screens ">
            {/* App Logo */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <Link href='/' className="flex items-center ml-2 "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <motion.img 
                        src={isHovered ? '/chad.svg' : '/chad.svg'}
                        width={100}  // Base width
                        height={100}
                        alt='logos2'
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                    />
                </Link>
            </motion.div>
            {/* Navigation Buttons */}
            <div className="flex items-center gap-x-6 text-lg md:text-lg font-medium mr-2 navbar">
                <Link href="/roadmap">
                    <p 
                        className="hover:opacity-20"
                    >
                        roadmap
                    </p>
                </Link>
                <Link href="/courses">
                    <p 
                        className="hover:opacity-20"
                    >
                        courses
                    </p>
                </Link>
                <Link href="/coaching">
                    <p 
                        className="hover:opacity-20"
                    >
                        coaching
                    </p>
                </Link>
    
            {/* Auth Button */}
            <UserButton />
        </div>
        
    </div>
    </div>
  )
}
