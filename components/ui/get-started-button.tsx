import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  className?: string
  href: string
  children?: ReactNode
  withArrow?: boolean
  target?: string
}

const PrimaryButton = ({
  href,
  className,
  children,
  withArrow = true,
  target = '_self'
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`w-50 justify-center flex gap-1 items-center whitespace-nowrap transition duration-150 ease-in-out font-medium text-black text-lg rounded-md px-5 py-1.5 group select-none ${className}`}
      target={target}
    >
      {children ? children : 'Get Started'}
      {withArrow ? (
        <ArrowRight className="w-full h-3.5 aspect-square text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
      ) : null}
    </Link>
  )
}

export default PrimaryButton
