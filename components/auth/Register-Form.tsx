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
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/Form-Error";
import { FormSuccess } from "@/components/Form-Success";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";


export const RegisterForm = () => {
    // Transition & pending state. Pending state is set when the inputs have been submitted so that they are disable.
    const [isPending, startTransition] = useTransition();

    // Error & Success State
    const [error, setError] = useState<string | undefined>("");

    const [success, setSuccess] = useState<string | undefined>("");

    // Form Hook
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    })
    // onSubmit Function
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        // reset fields when submitting form
        setError("");
        setSuccess("");

        // import login from @/actions/login
        startTransition(() => {
            register(values)
              .then((data) => {
                setError(data.error);
                setSuccess(data.success);
             })
        })
    }


    return (
        <CardWrapper
            headerTitle="Register"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">

                        {/* Name Input Form */}
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Joe Mama"
                                            {...field}
                                            disabled={isPending}
                                            type='name'
                                            className="rounded shadow-sm text-md shadow-black"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                        {/* Email Input Form */}
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Email</FormLabel>
                                    <FormControl className="">
                                        <Input 
                                            {...field}
                                            placeholder="john@gmail.com"
                                            disabled={isPending}
                                            type='email'
                                            className="rounded shadow-sm text-md shadow-black"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        {/* Password Input Form */}
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="●●●●●●"
                                            {...field}
                                            disabled={isPending}
                                            type='password'
                                            className="rounded shadow-sm text-lg shadow-black"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                    </div>
                    {/* Form Error */}
                    <FormError message={error} />
                    {/* Form Success */}
                    <FormSuccess message={success} />

                    {/* Submit Button */}
                    <Button 
                        disabled={isPending}
                        type="submit"
                        className="w-full bg-purple-600 text-white font-extrabold text-xl rounded hover:bg-purple-600 hover:scale-105 transition-transform duration-500"
                    >
                        resgister
                    </Button>
                    <h1 className="text-center">or</h1>
                </form>
            </Form>
        </CardWrapper>
    )
}
