import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  className?: string
  href: string
  children?: ReactNode
  withArrow?: boolean
}

const PrimaryButton = ({
  href,
  className,
  children,
  withArrow = true
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`flex w-fit mx-auto justify-center text-xl items-center whitespace-nowrap transition duration-200 ease-in-out font-medium rounded-lg px-8 py-2 group gap-2 hover:shadow-lg !shadow-black/40 overflow-hidden relative ${className}`}
    >
      {children ? (
        children
      ) : (
        <>
          <span>Get Started</span>
        </>
      )}
      {withArrow ? (
        <ArrowRight className="w-full h-5 aspect-square text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
      ) : (
        <></>
      )}
    </Link>
  )
}

export default PrimaryButton
