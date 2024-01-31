// Courses Page
'use client'
import * as React from "react"
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useCurrentUser } from "@/hooks/user-current-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
              <p className="text-xl font-medium text-gray-200"></p>
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
            
              <div onClick={handleClick} className="flex items-center justify-between bg-[#2e2e2e] rounded cursor-pointer border border-slate-100/50 p-2">
                <SearchIcon className="text-white/50" />
                <span className="flex-1 text-white/50 placeholder:text-white/50 ml-2">Search for a course</span>
                <div className="text-black">
                  <span className="text-sm bg-slate-100/70 p-1 rounded bg-opacity-80">⌘K</span>
                </div>
              </div>
            </div>
          </div>
            
            <CommandDialog open={open} onOpenChange={setOpen}>
              
              <CommandInput placeholder="NextJS Full Stack" className="border-slate-100/50 w-[400px]  placeholder:text-white/50"/>

              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="All Courses">
                  <CommandItem>NextJS</CommandItem>
                  <CommandItem>Focus & Deep Work</CommandItem>
                  <CommandItem>JavaScript</CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
            
          </>
          </div>
          
          
           
      </div>
    )
  }
  