import { IconTypeMap } from "@mui/material";
import { Category } from "@prisma/client";
import { IconType } from "react-icons";
import { BiBook, BiCamera } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { CategoryItem } from "./category-item";
// Interface
interface CategoriesProps {
    items: Category[];
}

// Catgories 
const iconData: Record<Category["name"], IconType> = {
    "Tutorials": FcSettings,
    "Guides": BiBook,
    "Live Sessions": BiCamera
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