'use client';
import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper"
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
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";
FormError
export const LoginForm = () => {
    // Search Params
    const searchParams = useSearchParams();
    // If we get the url param of OAuthAccountNotLinked, we set the error message to be displayed
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider!" : "";

    // Transition & pending state. Pending state is set when the inputs have been submitted so that they are disable.
    const [isPending, startTransition] = useTransition();
    // Error & Success State
    const [error, setError] = useState<string | undefined>("");

    const [success, setSuccess] = useState<string | undefined>("");

    // Form Hook
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    // onSubmit Function
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        // reset fields when submitting form
        setError("");
        setSuccess("");

        // import login from @/actions/login
        startTransition(() => {
            login(values)
              .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
             })
        })
    }


    return (
        <CardWrapper
            headerTitle="Login"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4">
                
                    <div className="space-y-2">
                        {/* Email Input Form */}
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="TylerDurden@gmail.com"
                                            disabled={isPending}
                                            type='email'
                                        />
                                    </FormControl>
                                    
                                </FormItem>
                            )}
                        />

                        {/* Password Input Form */}
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="••••••••"
                                            {...field}
                                            disabled={isPending}
                                            type='password'
                                            
                                            />
                                    </FormControl>
                                    <Button
                                        size="sm"
                                        variant="link"
                                        className="px-0 "
                                        type="button"
                                    >
                                       <Link href='/auth/reset'>
                                        Forgot Password?
                                       </Link>
                                    </Button>
                                    <FormMessage className="text-red-500" />
                            
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* Form Error */}
                    <FormError message={error || urlError} />
                    {/* Form Success */}
                    <FormSuccess message={success} />
                    

                    {/* Submit Button */}
                    <Button  disabled={isPending}
                        type="submit" className="p-[3px] relative font-semibold w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl w-full" />
                        <div className="px-8 py-2  w-full bg-zinc-800 rounded-xl  relative group transition duration-200 text-white hover:bg-transparent text-lg">
                            Login &rarr;
                        </div>
                    </Button>
                    
                    
                </form>
                
            </Form>
        </CardWrapper>
    )
}
