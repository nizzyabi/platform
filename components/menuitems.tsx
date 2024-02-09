"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const components: { title: any; href: string; description: string;}[] = [
  {
    title: "Lessons 📚",
    href: "/courses",
    description:
      "Learn through a series of fun lessons",
  },
  {
    title: "Applicable 📝" ,
    href: "/courses",
    description:
      "Apply your knowledge",
  },
  {
    title: "Collaboration 🤝",
    href: "https://discord.com/invite/BenP3YkbJT",
    description:
      "Have fun and learn with others"
  },
  {
    title: "Projects 🏗️",
    href: "/courses",
    description: "Build real world projects"
  },
  {
    title: "Community 🌎",
    href: "https://discord.com/invite/BenP3YkbJT",
    description:
      "Build connections with others",
  },
  {
    title: "Teaching 📖",
    href: "/courses",
    description:
      "Become a teacher here",
  },
]

export function Features() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg md:text-lg font-medium hover:opacity-20">Features</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#2e2e2e] border-transparent">
            <ul className="grid w-[200px] gap-1 p-3 md:w-[300px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild className="hover:bg-gray-100/10 bg-rounded">
        <a
          ref={ref}
          className={cn(
            "block select-none  rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 pt-3 text-sm leading-snug text-muted-foreground opacity-50">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
