'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCurrentUser } from "@/hooks/user-current-user"
import { zodResolver } from "@hookform/resolvers/zod"
import { Avatar } from "@mui/material"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { PostCreationRequest, PostValidator } from "@/lib/post"
import { toast } from "react-hot-toast"

  


interface PostProps {
    title: string;
    content: any;
}

export const CreatePost = () => {
  const session = useCurrentUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<PostCreationRequest>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
        title: '',
        content: '',
    }
  })

  // Get the user so that we can show who posted.

  const watchedTitle = watch('title');
  const watchedContent = watch('content');

  const onSubmit = (data:any) => {
    data.preventDefault()

    console.log("Title", data.title, "Content", data.content)
    toast.success('Post created')

    reset({
        title: '', // Reset title to empty string
        content: '' // Reset content to empty string
      });
  }

  return (
    <div className='landing pt-40'>
      <div className="flex items-center justify-center">
            <form id='post' onSubmit={onSubmit}>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex items-center justify-center bg-slate-200 h-12 rounded-[5px] text-[#121212]/80 pr-[100px] sm:pr-[200px] md:pr-80 pl-3 py-7 cursor-pointer">
                            <Avatar src={`${session?.image}`} className="mr-2"/>
                            <p className="font-normal no-wrap">Write something...</p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-200 text-[#191919] rounded-[5px] w-[300px] sm:w-[400px] md:w-[400px] lg:w-[600px]" >
                        <DialogHeader>
                            <DialogTitle>
                                <Input placeholder="Title" className="py-0 placeholder:text-3xl text-3xl bg-slate-200"
                                {...register('title')}
                                />
                            </DialogTitle>
                            <DialogDescription className="text-gray-400">
                                <Textarea placeholder="Content" className="border-none text-[#191919] placeholder:text-gray-400 text-md placeholder:text-md"
                                {...register('content')}
                                />
                            </DialogDescription>
                        </DialogHeader>
                        
                        <div className="flex justify-end">
                            <DialogClose>
                                <Button className="bg-transparent hover:text-[#191919] text-[#191919]/50 w-20">Cancel</Button>
                            </DialogClose>
                            <DialogClose>
                                <Button 
                                    className="bg-[#191919] text-slate-100 hover:opacity-90 w-20" 
                                    type="submit" form="post" disabled={!watchedTitle || !watchedContent}>
                                    Post
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </form>
           
                  
      </div>
    </div>
  )
}
