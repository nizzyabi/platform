"use client"

import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
 } from "@/components/ui/card";
import { Header } from "@/components/auth/Header";
import { Social } from "@/components/auth/Social";
import { BackButton } from "@/components/auth/Back-Button";

// interface
interface CardWrapperProps {
    children: React.ReactNode;
    headerTitle: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    showSocial,
    backButtonLabel,
    backButtonHref,
    headerTitle,
}: CardWrapperProps) => {
    return (
        <Card className=" w-[500px] bg-[#131212] border border-slate-200/20  rounded-xl mx-20">

            <CardHeader>
                <Header title={headerTitle}/>
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>

            {/* If showSocial display it */}
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
            <BackButton 
                label={backButtonLabel}
                href={backButtonHref}
            />
            </CardFooter>

                 
            
        </Card>
    )
}