import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const HowToRegister: React.FC = () => {
    return (
        <div>
            <div className="space-y-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-5xl font-bold">How do I register?</h1>
            <p className="text-lg text-zinc-400 pt-3 max-w-2xl mx-auto text-center">While most people accept everyone, we only accept 5 people at a time to tutor. In addition, we only accept those who fit the right criteria for teaching such as a certain skill level, want to learn, & availability.</p>
            <div className="flex items-center justify-center">
            <Link
                className="w-50 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-4 mb-4"
                href='https://calendly.com/nizabizaher/programming-tutoring-consultation'
              >
                Register for tutoring{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
            </div>
          </div>
        </div>
    )
}