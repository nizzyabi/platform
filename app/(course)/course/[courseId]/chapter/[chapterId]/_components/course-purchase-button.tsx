'use client'

import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/hooks/user-current-user";
import { formatPrice } from "@/lib/format"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CoursePurchaseButtonProps {
    price: number;
    courseId: string;
}
export const CoursePurchaseButton = ({
    price,
    courseId
}: CoursePurchaseButtonProps) => {
    const session = useCurrentUser()
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        if (!session) {
            toast.error('Sign in to purchase!');
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post(`/api/courses/${courseId}/checkout`);
            window.location.assign(response.data.url);
        } catch (error) {
            toast.error('An error occurred, please try again');
        } finally {
            setIsLoading(false);
        }
    };
   
    return (
          
        <Button onClick={onClick} className="btn border-none w-full justify-center flex gap-1 items-center whitespace-nowrap transition duration-150 ease-in-out font-semibold text-md rounded-lg px-12 py-2.5 group select-none bg-primary text-base100 hover:bg-primary">
            Purchase course for {formatPrice(price)}
        </Button>
    )
}