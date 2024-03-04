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
          
        <Button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] hover:opacity-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#191919] px-3 py-1 text-md font-bold text-white backdrop-blur-3xl">
        Purchase course for {formatPrice(price)}
        </span>
        </Button>


        
    )
}