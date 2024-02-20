'use client';
import * as z from "zod";
import { CardWrapper } from "@/components/auth/Card-Wrapper"
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
                                    <FormControl className="bg-slate-200">
                                        <Input 
                                            {...field}
                                            placeholder="●●●●●●"
                                            disabled={isPending}
                                            type='password'
                                            className="rounded shadow-sm text-sm text-[#191919] shadow-black placeholder:text-black/35"
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
                        variant="goldHover"
                        className="w-full text-lg font-bold"
                    >
                        Reset
                    </Button>
                    
                </form>
                
            </Form>
        </CardWrapper>
    )
}
