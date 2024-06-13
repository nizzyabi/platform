import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  className?: string
  href: string
  children?: ReactNode
  target?: string
}

const PrimaryButton = ({
  href,
  className,
  children,
  target = '_self'
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`btn border-none w-[250px] justify-center flex gap-1 items-center whitespace-nowrap transition duration-150 ease-in-out font-semibold text-md rounded-lg px-12 py-2.5 group select-none bg-primary text-base100 hover:bg-primary ${className}`}
      target={target}
    >
      {children ? children : 'Get Started'}
    </Link>
  )
}

export default PrimaryButton
