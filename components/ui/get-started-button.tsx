import Link from 'next/link'

interface buttonProps {
  href: string
}

const GetStartedButton = ({ href }: buttonProps) => {
  return (
    <Link
      className="flex w-fit mx-auto justify-center text-xl items-center whitespace-nowrap transition duration-200 ease-in-out font-medium rounded px-8 py-2 text-zinc-900 bg-gradient-to-r bg-white group mt-4 mb-4 gap-2 hover:-translate-y-2 hover:shadow-lg !shadow-black"
      // href={session ? '/courses' : '/auth/register'}
      href={href}
    >
      Get Started{' '}
      {/* <ArrowRight className="w-4 h-4 tracking-normal text-primary-500 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" /> */}
    </Link>
  )
}

export default GetStartedButton
