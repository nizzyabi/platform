// Courses Page
'use client'
import * as React from "react"
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useCurrentUser } from "@/hooks/user-current-user";
import { Button } from "@/components/ui/button";
import { SiNextdotjs } from "react-icons/si";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import SearchIcon from '@mui/icons-material/Search';
import { BiBrain, BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import Search from "./search";


const commandInputs = [
  {
    course: "NextJS",
    icon: <SiNextdotjs className='mr-2 text-black'/>,
    link: '/courses/nextjs'
  },
  {
    course: "React",
    icon: <BiLogoReact className="text-cyan-300 mr-2"/>,
    link: '/courses/react'
  },
  {
    course: "HTML & CSS",
    icon: <FaHtml5 className="text-orange-500 mr-2"/>,
    link: '/courses/html-css'
  },
  {
    course: "Focus & Deep Work",
    icon: <BiBrain className="text-pink-300 mr-2"/>,
    link: '/courses/focus-deep-work'
  },
  {
    course: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-500 mr-2"/>,
    link: '/courses/javascript'
  },
]

export default function Courses() {
  // AOS Effect
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
  const session = useCurrentUser();
  const nizzyuser = session?.id === 'clrulbr1h0000x3js9ldvplex';


    return (
      <div>
          {/* Title*/}
          <div className="text-center pt-40">
              <h1 className="font-bold text-7xl pt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Courses</h1>
              
          </div>
          {/* special create button */}
          {nizzyuser && 
            <Link href='/courses/add' className="flex items-center justify-center">
              <Button variant="goldHover">Create</Button>
            </Link>
          }

          <Search />
          
          
           
      </div>
    )
  }
  