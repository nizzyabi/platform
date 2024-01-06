import { Header } from "@/components/auth/Header"
import { BackButton } from "@/components/auth/Back-Button"
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { CardWrapper } from "./Card-Wrapper";

export const ErrorCard = () => {
    return (
        <Card 
            className="w-[400px] shadow-xl rounded">
            <CardHeader>
                <p className="font-bold text-center text-2xl">Something went wrong 🧐</p>
            </CardHeader>
            <CardFooter>
                <BackButton 
                    label="Return back to login"
                    href="/auth/login"
                />
            </CardFooter>
        </Card>
    )
}