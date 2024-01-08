"use client";

import { ClipLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/Card-Wrapper";
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react";
export const NewVerificationForm = () => {
    // set search params & get token
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    // onSubmit wihtin a useCallBack
    const onSubmit = useCallback(() => {
        console.log(token);
    }, [token]);
    // useEffect
    useEffect(() => {
        onSubmit();
}, [onSubmit])

    return (
        <CardWrapper
            headerTitle="verify your email 😏"
        >
            <div className="flex items-center w-full justify-center">
                <ClipLoader color="white"/>
            </div>

            <p className="text-center pt-6 hover:underline cursor-pointer">
                <a href="/">
                    Go Back
                </a>
            </p>
            
        </CardWrapper>
    )
}