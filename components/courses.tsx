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
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import SearchIcon from '@mui/icons-material/Search';
import { BiBrain, BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


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
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
 
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  const handleClick = () => {
    setOpen(true);
  }

    return (
      <div >
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

          <div className="flex items-center justify-center pt-5">
          <>
          <div className="flex items-center justify-center pt-5">
            <div className="relative w-96">
            
              <div onClick={handleClick} className="flex items-center justify-between bg-white rounded cursor-pointer border border-black p-2">
                <SearchIcon className="text-black/50 h-4 w-4" />
                <span className="flex-1 text-black/50 placeholder:text-black/50 ml-2">Search for a course</span>
                <div className="text-black">
                  <span className=" bg-black/20 p-1 rounded bg-opacity-80 text-xs">⌘ K</span>
                </div>
              </div>
            </div>
          </div>
            
            <CommandDialog open={open} onOpenChange={setOpen}>
              
              <CommandInput placeholder="NextJS Full Stack" className="border-slate-100/50 w-[400px] text-black/80 placeholder:text-black/50"/>
              {/* TODO: Get Course Data to diaply here.*/}
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="All Courses" className="text-black/80">
                  <CommandItem>NextJS <SiNextdotjs className='ml-2 text-black'/></CommandItem>
                  <CommandItem>React <BiLogoReact className="text-cyan-300 ml-2"/></CommandItem>
                  <CommandItem>HTML & CSS <FaHtml5 className="text-orange-500 ml-2"/><FaCss3Alt className="text-blue-500"/></CommandItem>
                  <CommandItem>Focus & Deep Work <BiBrain className="text-pink-300 ml-2"/></CommandItem>

                  <CommandItem>JavaScript <BiLogoJavascript className="text-yellow-500 ml-2"/></CommandItem>

                </CommandGroup>
              </CommandList>
            </CommandDialog>
            
          </>
          </div>
          
          
           
      </div>
    )
  }
  