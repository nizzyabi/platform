'use client';
import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { NewPasswordSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/Form-Error";
import { FormSuccess } from "@/components/Form-Success";
import { useState, useTransition } from "react";
import { newPassword } from "@/actions/new-password";
import Link from "next/link";
export const NewPasswordForm = () => {
    // set params & get it. It is '.get(token) because we are getting the token from the url which has token={token}
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    
    // Transition & pending state. Pending state is set when the inputs have been submitted so that they are disable.
    const [isPending, startTransition] = useTransition();

    // Error & Success State
    const [error, setError] = useState<string | undefined>("");

    const [success, setSuccess] = useState<string | undefined>("");

    // Form Hook
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    })
    // onSubmit Function
    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        // reset fields when submitting form
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token)
              .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
             })
        })
    }


    return (
        <CardWrapper
            headerTitle="Reset Password"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div className="space-y-4">
                        {/* Email Input Form */}
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="●●●●●●"
                                            disabled={isPending}
                                            type='password'
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
                    <Button  disabled={isPending}
                        type="submit" className="p-[3px] relative font-semibold w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl w-full" />
                        <div className="px-8 py-2  w-full bg-zinc-800 rounded-xl  relative group transition duration-200 text-white hover:bg-transparent text-lg">
                            Reset &rarr;
                        </div>
                    </Button>
                    
                </form>
                
            </Form>
        </CardWrapper>
    )
}
