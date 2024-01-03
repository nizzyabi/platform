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
import { FormError } from "@/components/Form-Error";
import { FormSuccess } from "@/components/Form-Success";
import { login } from "@/actions/login";

export const LoginForm = () => {
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
        // import login from @/actions/login
        login(values);
    }


    return (
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 text-black"
                >
                    <div className="space-y-4">
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
                                            {...field}
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
                    <FormError message="" />
                    {/* Form Success */}
                    <FormSuccess message="" />

                    {/* Submit Button */}
                    <Button 
                        type="submit"
                        className="w-full bg-purple-600 text-white font-extrabold text-xl rounded hover:bg-purple-600 hover:scale-105 transition-transform duration-500"
                    >
                        login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
