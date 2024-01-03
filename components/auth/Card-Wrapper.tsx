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
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    headerTitle: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
    headerTitle,
}: CardWrapperProps) => {
    return (
        <Card className="w-[500px] rounded bg-[#191919] border-none px-5">

            <CardHeader>
                <Header label={headerLabel} title={headerTitle}/>
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

                 
            
        </Card>
    )
}