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
import { useDebounce } from "@/hooks/use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import qs from "query-string";


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
export default function Search() {
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState("");

    // const debouncedValue = useDebounce(value);
    // const searchParams = useSearchParams();
    // const router = useRouter();
    // const pathname = usePathname();

    {/*React.useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: debouncedValue
            }
        }, { skipEmptyString: true, skipNull: true });

        router.push(url)
    }, [debouncedValue, router, pathname])*/}

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
              
              <CommandInput 
                placeholder="JavaScript Course" className="border-slate-100/50 w-[400px] text-slate-100 placeholder:text-slate-100/50"/>
              {/* TODO: Get Course Data to diaply here.*/}
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup>
                  {commandInputs.map((item) => (
                    <Link href={item.link}>
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