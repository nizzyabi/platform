'use client'
// Imports
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'
import { LanguageBackground } from './designs/language-background'
import { Bento } from './bento'
import { TestimonialCard } from './testimonials'
import Footer from './Footer'
import PrimaryButton from './ui/get-started-button'
import AvatarCircles from './ui/user-avatar-card'


export default function LandingPage() {
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
        className="extra landing py-20 mt-10 sm:mt-20 flex flex-col gap-52 px-6"
      >
        <section className="flex flex-col gap-12 justify-center items-center">
          <Link
            className="flex w-fit mx-auto px-3 py-1 text-sm font-medium items-center justify-center border border-primary/30 rounded-full text-white  transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-primary/30 before:rounded-full before:pointer-events-none"
            href="https://github.com/NizarAbiZaher/platform"
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
            <span className="flex flex-col text-5xl md:text-6xl lg:text-7xl font-bold header-landing text-center">
              Learn to
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
                {' '}
                Code
              </span>
            </span>
            <span className="pt-3 font-medium text-base xxs:text-xl text-primary/40 text-center">
              && have fun doing it
            </span>
          </div>
          <PrimaryButton
            href='/courses'
            className="bg-primary"
          />
          <Bento className="text-center select-none" />
        </section>

        <section className="flex flex-col items-center gap-8 text-center">
          <h1 className="sm:text-7xl text-3xl xxs:text-4xl xs:text-5xl text-primary text-center pt-3 font-semibold header-landing">
            Learn Modern Day
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 block ">
              {' '}
              Technologies
            </span>
          </h1>

          <LanguageBackground />
          <PrimaryButton
            href='/courses'
            className="bg-primary"
          >
            See Courses
          </PrimaryButton>
        </section>

        <section>
          <div className="flex flex-col items-center gap-8 text-center">
            <span className="flex flex-col w-fit sm:text-7xl text-4xl xs:text-5xl text-primary text-center pt-3 font-bold header-landing">
              Hear It From{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Others
              </span>
            </span>
            <AvatarCircles />
            <TestimonialCard />
            <PrimaryButton
              href="https://discord.gg/nizar"
              className="bg-primary"
              target="_blank"
            >
              Join Us
            </PrimaryButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
