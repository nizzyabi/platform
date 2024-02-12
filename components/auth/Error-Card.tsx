
import { BackButton } from "@/components/auth/Back-Button"
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card";


export const ErrorCard = () => {
    return (
        <Card 
            className="shadow-xl rounded w-[400px] ">
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