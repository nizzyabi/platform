"use client";

import { useRouter } from "next/navigation";

// imports


// interface
interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean,
}

export const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {
    const router = useRouter();


    // onClick Functionality
    const onClick = () => {
        router.push("/auth/login")
    };

    // If specific mode, display something
    if (mode === "modal") {
        return (
            <span>
                working on it...
            </span>
        )
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
        {children}
        </span>
    )
}