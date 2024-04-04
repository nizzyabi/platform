'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCurrentUser } from "@/hooks/user-current-user"
import { Avatar } from "@mui/material"


export default function page() {
  const session = useCurrentUser()
  return (
    <div className='landing pt-40'>
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center justify-center bg-slate-100 h-12 rounded-[5px] text-[#121212] pr-40 pl-3 py-7">
              <Avatar src={`${session?.image}`} className="mr-2"/>
              <p className="font-medium">Write something...</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a post</DialogTitle>
              <DialogDescription>
                Share your thoughts with the community
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
