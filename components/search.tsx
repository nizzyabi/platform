'use client'
import * as React from "react"
import Link from "next/link";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import SearchIcon from '@mui/icons-material/Search';
import { Book, Github, Home, LockIcon, Settings, Shapes, TrafficCone, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useRouter } from "next/navigation";



const commandInputs = [
    {
      course: "Authentication",
      link: '/courses/auth',
      icon: <LockIcon />
    },
    {
      course: "Courses",
      link: '/courses',
      icon: <Book />
    },
    {
      course: "Roadmap",
      link: '/roadmap',
      icon: <TrafficCone />
    },
    {
      course: "Tutoring",
      link: '/tutoring',
      icon: <Shapes />
    },
    {
      course: "Settings",
      link: '/settings',
      icon: <Settings />
    },
    {
      course: "Home",
      link: '/',
      icon: <Home />
    },
    {
      course: "Github",
      link: 'https://github.com/NizarAbiZaher',
      icon: <Github />
    },
    {
      course: "Youtube",
      link: 'https://www.youtube.com/@NizzyABI',
      icon: <Youtube />
    },
    {
      course: "Discord",
      link: '/roadmap',
      icon: <FaDiscord />
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

    const router = useRouter();
    const handleItemClick = (url:any) => {
      setOpen(false); // Close the dialog
      router.push(url); // Navigate programmatically
    };
  
    



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
                placeholder="Authentication Course" className="w-[400px] text-slate-100 placeholder:text-slate-100/50"/>
              
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup>
                  {commandInputs.map((item) => (
                    <div onClick={() => handleItemClick(item.link)} key={item.link} >
                      <CommandItem><p className="mr-4">{item.icon}</p>{item.course}</CommandItem>
                    </div>
                  ))}
                  
                </CommandGroup>
              </CommandList>
            </CommandDialog>
            
          </>
          </div>
    )
}