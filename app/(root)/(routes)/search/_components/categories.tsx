"use client"

import { Category } from "@prisma/client"
import {
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTypescript,
    BiLogoPython,
    BiData,
    BiLogoHtml5,
    BiLogoCss3,
    BiBrain,
    BiWebcam
} from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb";

import { IconType } from "react-icons"
import { CategoryItem } from "./category-item";

// Interface
interface CategoriesProps {
    items: Category[];
}

// Catgories 
const iconData: Record<Category["name"], IconType> = {
    "JavaScript": BiLogoJavascript,
    "React": BiLogoReact,
    "NextJS": TbBrandNextjs,
    "TypeScript": BiLogoTypescript,
    "Python": BiLogoPython,
    "SQL": BiData,
    "HTML & CSS": BiWebcam,
    "HTML": BiLogoHtml5,
    "CSS": BiLogoCss3,
    "Study": BiBrain,
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