"use client";
import { ClipLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/Card-Wrapper";

export const NewVerificationForm = () => {
    return (
        <CardWrapper
            headerTitle="Verify your email address"
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