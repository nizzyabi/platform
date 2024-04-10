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
      className={`w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 group ${className}`}
    >
      {children ? (
        children
      ) : (
        <>
          <span>Get Started</span>
        </>
      )}
      {withArrow ? (
        <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
      ) : (
        <></>
      )}
    </Link>
  )
}

export default PrimaryButton
