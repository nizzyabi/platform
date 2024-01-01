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
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-xl shadow-black rounded bg-slate-200">

            <CardHeader>
                <Header label={headerLabel}/>
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

            <CardFooter className="text-black">
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>       
            
        </Card>
    )
}