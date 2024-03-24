'use client'

import { Button } from "@/components/ui/button"
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

    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(`/api/courses/${courseId}/checkout`);
            window.location.assign(response.data.url);
        } catch (error) {

            toast.error("An error occurred. Please try again.")

        } finally {

            setIsLoading(false);
        }
    }
    return (
          
        <Button onClick={onClick} className="px-8 py-3 text-md" >
            Purchase course for {formatPrice(price)}
        </Button>


        
    )
}