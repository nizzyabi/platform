'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCurrentUser } from "@/hooks/user-current-user"
import { zodResolver } from "@hookform/resolvers/zod"
import { Avatar } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";

interface CommunityProps {
    title: string;
    content: any;
}

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }),
    content: z.string().min(1, {
        message: "Content is required",
    }),
});


export const Community = () => {
  const session = useCurrentUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })
  const { watch, formState } = form;
  const { isSubmitting, isValid } = form.formState;

  const title = watch("title");
  const content = watch("content");

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    console.log(values)
    
  }

  
  return (
    <div className='landing pt-40'>
      <div className="flex items-center justify-center">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex items-center justify-center bg-slate-200 h-12 rounded-[5px] text-[#121212] pr-[100px] sm:pr-[200px] md:pr-80 pl-3 py-7 cursor-pointer">
                            <Avatar src={`${session?.image}`} className="mr-2"/>
                            <p className="font-medium no-wrap">Write something...</p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-200 text-[#191919] rounded-[5px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[600px]" >
                        <DialogHeader>
                            <DialogTitle>
                                <FormField 
                                    control={form.control}
                                    name='title'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Title" className="py-0 placeholder:text-3xl text-3xl bg-slate-200" 
                                                {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </DialogTitle>
                            <DialogDescription className="text-gray-400">
                                <FormField
                                    control={form.control}
                                    name='content'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea placeholder="Write something..." className="border-none text-[#191919] placeholder:text-gray-400 text-md placeholder:text-md"
                                                {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end">
                            <DialogClose>
                                <Button className="bg-transparent hover:text-[#191919] text-[#191919]/50 w-20">Cancel</Button>
                            </DialogClose>
                
                            <Button 
                                className="bg-[#191919] text-slate-100 hover:opacity-90 w-20" 
                                disabled={isSubmitting || !title || !content} type="submit">
                                    Post
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </form>
        </Form>
      </div>
    </div>
  )
}
