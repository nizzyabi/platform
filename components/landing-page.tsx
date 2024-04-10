'use client'
// Imports
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'
import { LanguageBackground } from './designs/bg-gradient'
import { Bento } from './bento'
import { ThreeD } from './3d'
import { useCurrentUser } from '@/hooks/user-current-user'
import { ArrowRight } from 'lucide-react'
import Footer from './Footer'
import GetStartedButton from './ui/get-started-button'

export default function LandingPage() {
  const session = useCurrentUser()

  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <>
      <main
        data-aos="fade-up"
        className="extra landing py-20 mt-20 flex flex-col gap-52"
      >
        <section className="flex flex-col gap-12 justify-center items-center">
          <Link
            className="flex w-fit mx-auto px-3 py-1 text-sm font-medium items-center justify-center border border-slate-100/30 rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
            href="https://github.com/NizarAbiZaher"
            target="_blank"
          >
            <span className="relative inline-flex items-center gap-2">
              Github repository{' '}
              <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                -&gt;
              </span>
            </span>
          </Link>
          <div className="flex flex-col gap-2 w-fit">
            <span className="text-7xl font-bold header-landing text-center">
              Learn To
              <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">
                {' '}
                Code
              </b>
            </span>
            <span className="text-6xl font-bold">while having fun!</span>
          </div>
          <GetStartedButton
            href={session ? '/courses' : '/auth/register'}
            className="bg-white text-zinc-900"
          />
          <Bento className="text-center" />
        </section>

        <section className="flex flex-col gap-12 justify-center items-center">
          <span className="flex flex-col gap-2 items-center text-7xl font-bold header-landing">
            Learn Modern Day
            <b className="w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-500 block ">
              {' '}
              Technologies
            </b>
          </span>
          <LanguageBackground />
          <GetStartedButton
            href={session ? '/courses' : '/auth/register'}
            className="bg-cyan-500 text-white"
          >
            See Courses
          </GetStartedButton>
        </section>

        <section>
          <div className="flex flex-col items-center gap-8 text-center">
            <span className="flex flex-col w-fit text-7xl text-slate-100 text-center pt-3 font-bold header-landing">
              Hear It From{' '}
              <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Others
              </b>
            </span>
            <ThreeD />
            <GetStartedButton
              href="https://discord.gg/nizar"
              className="bg-indigo-400 text-white"
            >
              Join Us
            </GetStartedButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
