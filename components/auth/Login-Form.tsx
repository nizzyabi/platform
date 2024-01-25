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
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";



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
                                    <FormLabel className="font-bold text-gray-400">Email</FormLabel>
                                    <FormControl className="">
                                        <Input 
                                            {...field}
                                            placeholder="john@gmail.com"
                                            disabled={isPending}
                                            type='email'
                                            className="rounded shadow-sm text-md shadow-black"
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
                                    <FormLabel className="font-bold text-gray-400">Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="●●●●●●"
                                            {...field}
                                            disabled={isPending}
                                            type='password'
                                            className="rounded shadow-sm text-lg shadow-black"
                                        />
                                    </FormControl>
                                    <Button
                                        size="sm"
                                        variant="link"
                                        className="px-0 font-normal"
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
                    <Button 
                        disabled={isPending}
                        type="submit"
                        className="w-full text-white font-extrabold text-xl rounded bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform duration-500"
                    >
                        login
                    </Button>
                    
                    <h1 className="text-center">or</h1>
                </form>
                
            </Form>
        </CardWrapper>
    )
}
