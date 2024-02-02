import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md mt-3 mb-6 shadow-xl shadow-black hover:scale-105 transition-transform hover:duration-500 lg:text-2xl lg:py-6 font-extrabold",
        goldHover: "border-2 border-white rounded-full my-3 bg-slate-100 text-black hover:text-slate-100 hover:bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 font-medium hover: border-none",
        basic: 'bg-slate-100 text-black border border-[#2e2e2e] hover:text-slate-100 hover:bg-[#2e2e2e] hover:text-slate-100 hover:border hover:border-slate-100 px-3 py-0.5 rounded-full',
        pinkHover:"border-2 border-white rounded-full my-3 bg-slate-100 text-black hover:text-slate-100 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 font-medium hover: border-none",
        blueHover:"border-2 border-white rounded-full my-3 bg-slate-100 text-black hover:text-slate-100 hover:bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 font-medium hover: border-none",
        
        

      },
      size: {
        default: "px-4 py-1.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
