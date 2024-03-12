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
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="TylerDurden@gmail.com"
                                            disabled={isPending}
                                            type='email'
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
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px] w-full" />
                        <div className="px-8 py-2  w-full bg-zinc-800 rounded-[5px]  relative group transition duration-200 text-white hover:bg-transparent text-lg">
                            Reset &rarr;
                        </div>
                    </Button>
                    
                </form>
            </Form>
        </CardWrapper>
    )
}
