"use client";

import { ClipLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/Card-Wrapper";
import { newVerification } from "@/actions/new-verification";
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import { FormError } from "@/components/Form-Error";
import { FormSuccess } from "@/components/Form-Success";

export const NewVerificationForm = () => {
    // use state
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    // set search params & get token
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    // onSubmit wihtin a useCallBack
    const onSubmit = useCallback(() => {
        // if we have a success or error message, break the function
        if (success || error) return;
        
        // check if user has token
        if (!token) {
            setError("No token provided");
            return;
        }
        newVerification(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error)

            })
            .catch(() => {
                setError("Something went wrong");
            })
    }, [token, success, error]);
    // useEffect
    useEffect(() => {
        onSubmit();
}, [onSubmit])

    return (
        <CardWrapper
            headerTitle="verify your email 😏"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <ClipLoader color="white"/>
                )}
                <FormSuccess message={success} />
                {!success && (
                    <FormError message={error} />
                )}
            </div>

            <p className="text-center pt-6 hover:underline cursor-pointer">
                <a href="/">
                    Go Back
                </a>
            </p>
            
        </CardWrapper>
    )
}