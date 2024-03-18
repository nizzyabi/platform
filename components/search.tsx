'use client'
import * as React from "react"
import Link from "next/link";
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


const commandInputs = [
    {
      course: "NextJS",
      icon: <SiNextdotjs className='mr-2 text-slate-100'/>,
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
export default function Search() {
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
        <div className="flex items-center justify-center">
          <>
          <div className="flex items-center justify-center ">
            <div className="relative w-[200px] hover:opacity-50 transition duration-300">
              <div onClick={handleClick} className="flex items-center justify-between bg-zinc-900 rounded cursor-pointer px-2 py-1">
                <SearchIcon className="text-slate-100/50 h-5 w-5" />
                <p className="flex-1 text-slate-100 placeholder:text-slate-100/50 ml-2 font-medium text-md">Search</p>
                <div className="text-slate-100">
                  <span className=" bg-white/20 p-1 rounded bg-opacity-80 text-xs">⌘ K</span>
                </div>
              </div>
            </div>
          </div>
            
            <CommandDialog open={open} onOpenChange={setOpen}>
              
              <CommandInput 
                placeholder="Learn to code guide" className="w-[400px] text-slate-100 placeholder:text-slate-100/50"/>
              
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup>
                  {commandInputs.map((item) => (
                    <Link href={item.link} key={item.link} >
                      <CommandItem>{item.icon}{item.course}</CommandItem>
                    </Link>
                  ))}
                  
                </CommandGroup>
              </CommandList>
            </CommandDialog>
            
          </>
          </div>
    )
}