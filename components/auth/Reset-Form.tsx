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
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useState, useTransition } from "react";
import {reset} from "@/actions/reset";
export const ResetForm = () => {
    
    // Transition & pending state. Pending state is set when the inputs have been submitted so that they are disable.
    const [isPending, startTransition] = useTransition();

    // Error & Success State
    const [error, setError] = useState<string | undefined>("");

    const [success, setSuccess] = useState<string | undefined>("");

    // Form Hook
    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    })
    // onSubmit Function
    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        // reset fields when submitting form
        setError("");
        setSuccess("");

        console.log(values)

        
        startTransition(() => {
           reset(values)
              .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
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
                        {/* Email Input Form */}
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl className="bg-slate-200">
                                        <Input 
                                            {...field}
                                            placeholder="john@gmail.com"
                                            disabled={isPending}
                                            type='email'
                                            className="rounded shadow-sm text-sm text-[#191919] shadow-black placeholder:text-black/30"
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
                        Reset Email
                    </Button>
                    
                </form>
            </Form>
        </CardWrapper>
    )
}
