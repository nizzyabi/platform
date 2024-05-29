'use client';
import * as z from "zod";
import { CardWrapper } from "@/components/auth/Card-Wrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/Form-Error";
import { FormSuccess } from "@/components/Form-Success";
import { useState, useTransition } from "react";
import {reset} from "@/actions/reset";
import toast from "react-hot-toast";
export const ResetForm = () => {
    
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    })
    
    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        startTransition(() => {
           reset(values)
              .then((data) => {
                if (data?.error) {
                    toast.error(data.error)
                  }
                  if (data?.success) {
                    toast.success(data.success)
                    form.reset({ email: '' })
                  }
             })
        })
    }


    return (
        <CardWrapper
            headerTitle="Password Reset"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
            
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="tylerdurden@gmail.com"
                                            disabled={isPending}
                                            type='email'
                                            className="bg-secondary border-primary/20"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="p-[3px] bg-primary relative font-semibold w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px] w-full" />
                        <div className="px-8 py-2  w-full bg-secondary rounded-[5px] relative group transition duration-200 text-primary hover:bg-transparent text-lg">
                            Reset
                        </div>
                    </Button>   
                </form>
            </Form>
        </CardWrapper>
    )
}
