'use client'

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"

interface CoursePurchaseButtonProps {
    price: number;
    courseId: string;
}
export const CoursePurchaseButton = ({
    price,
    courseId
}: CoursePurchaseButtonProps) => {
    return (
          
            <Button variant="basic" className="w-full md:w-auto">
                Purchase course for {formatPrice(price)}
            </Button>
        
    )
}