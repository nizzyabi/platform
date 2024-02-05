"use client"

import { Category } from "@prisma/client"
import {
    FcCamera,
    FcConferenceCall,
    FcTemplate
} from "react-icons/fc"
import { IconType } from "react-icons"
import { CategoryItem } from "./category-item";

// Interface
interface CategoriesProps {
    items: Category[];
}

// Catgories 
const iconData: Record<Category["name"], IconType> = {
    "Tutorials": FcConferenceCall,
    "Courses": FcTemplate,
    "Live Lessons": FcCamera
} 

// Display Categories

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem 
                    key={item.id}
                    label={item.name}
                    value={item.id}
                    icon={iconData[item.name]}
                />
            ))}
        </div>
    )
}