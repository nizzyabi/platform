'use client'
import * as React from 'react'
import Link from 'next/link'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import SearchIcon from '@mui/icons-material/Search'
import {
  Book,
  Globe,
  Github,
  Home,
  LockIcon,
  Settings,
  Shapes,
  TrafficCone,
  Youtube
} from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const commandInputs = [
  {
    title: 'Authentication Course',
    link: '/courses/auth',
    icon: <LockIcon />
  },
  {
    title: 'Courses',
    link: '/courses',
    icon: <Book />
  },
  {
    title: 'Roadmap',
    link: '/roadmap',
    icon: <TrafficCone />
  },
  {
    title: 'Tutoring',
    link: '/tutoring',
    icon: <Shapes />
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: <Settings />
  },
  {
    title: 'Home',
    link: '/',
    icon: <Home />
  },
  {
    title: 'Github',
    link: 'https://github.com/NizarAbiZaher',
    icon: <Github />
  },
  {
    title: 'Youtube',
    link: 'https://www.youtube.com/@NizzyABI',
    icon: <Youtube />
  },
  {
    title: 'Discord',
    link: '/roadmap',
    icon: <FaDiscord />
  }
]
export default function Search() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleClick = () => {
    setOpen(true)
  }

  const router = useRouter()
  const handleItemClick = (url: any) => {
    setOpen(false) // Close the dialog
    router.push(url) // Navigate programmatically
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="hidden lg:flex w-[200px] h-full items-center justify-between bg-black/70 hover:bg-zinc-900/60 group rounded-lg cursor-pointer px-2.5 transition duration-300"
      >
        <SearchIcon className="text-slate-100/50 h-5 w-5" />
        <p className="flex-1 text-slate-100/75 group-hover:text-slate-100 ml-2 font-medium text-md transition duration-300">
          Search
        </p>
        <div className="text-slate-100">
          <span className=" bg-white/20 py-1 px-1.5 rounded bg-opacity-80 text-xs">
            ⌘ K
          </span>
        </div>
      </div>

      <div
        onClick={handleClick}
        className="h-full flex lg:hidden items-center justify-center group rounded-lg cursor-pointer aspect-square hover:bg-white/5 transition duration-300"
      >
        <SearchIcon className="text-slate-100 h-full aspect-square" />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Authentication Course"
          className="w-[400px] text-slate-100 placeholder:text-slate-100/50"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {commandInputs.map((item) => (
              <div onClick={() => handleItemClick(item.link)} key={item.link}>
                <CommandItem>
                  <p className="mr-4">{item.icon}</p>
                  {item.title}
                </CommandItem>
              </div>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
