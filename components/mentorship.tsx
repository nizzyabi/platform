'use client'
import { Separator } from './ui/separator'
import Image from 'next/image'
import { AlertTriangle, Calendar, GitMerge, Rocket } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import PrimaryButton from './ui/get-started-button'

const features = [
  {
    icon: Rocket,
    name: 'Learn faster',
    description: 'Get the benefits of learning to code, without the mistakes'
  },
  {
    icon: AlertTriangle,
    name: 'Stay Focused',
    description:
      'Stay focused on what you need to learn and not get distracted by other things'
  },
  {
    icon: Calendar,
    name: 'Weekly Check-ins',
    description:
      "Get weekly check-ins to see how you're doing and what you need help with"
  },
  {
    icon: GitMerge,
    name: 'Build Projects Together',
    description:
      'Build projects (with me) to learn how to code and get real-world experience'
  }
]

export const Mentorship: React.FC = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic'
    })
  }, [])
  return (
    <div className="landing pb-40 overflow-hidden">
      <div className=" px-4 mx-auto sm:px-6">
        <div>
          <div className="text-center pb-5 pt-40" data-aos="fade-up">
            <h1 className="font-bold text-6xl mx-6"> 1-on-1 Tutoring</h1>
            <p className="text-md text-slate-100/40 pt-1">
              Get personal advice, mentorship, & guidance to learn code faster!
            </p>
            <div className="flex items-center justify-center">
              <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
            </div>
          </div>
          <div className="text-center space-y-40 pt-12">
            <section>
              <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
                <div>
                  <div>
                    {/* Section content */}
                    <div className="flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
                      <div
                        className="order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center"
                        data-aos="fade-right"
                      >
                        <h3 className="pb-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-pink-500">
                          Why Tutor With Nizar?
                        </h3>
                        <p className="mb-8 text-lg text-zinc-400">
                          If there's one thing I'm good at, it's coding. I've
                          been through it, have made mistakes, and have learnt
                          to code on my own and I feel that I can teach you how
                          to code much faster than I did as you won't make the
                          same mistakes as I did
                        </p>
                        <dl className="max-w-xl grid grid-cols-1 gap-4 lg:max-w-none">
                          {features.map((feature) => (
                            <div
                              key={feature.name}
                              className="px-2 py-1 rounded group hover:bg-zinc-100/20  transition duration-500 cursor-pointer"
                            >
                              <div className="flex items-center mb-1 space-x-2 ">
                                <feature.icon className="w-4 h-4 shrink-0 text-zinc-300" />
                                <h4 className="font-medium text-zinc-50">
                                  {feature.name}
                                </h4>
                              </div>
                              <p className="text-sm text-left text-zinc-300">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div className="flex max-w-2xl mx-auto mt-16 md:w-5/12 lg:w-1/2 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div
                          className="z-10 flex-none max-w-3xl sm:max-w-5xl lg:max-w-none"
                          data-aos="fade-left"
                        >
                          <Image
                            src="/voicescribe.svg"
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="w-[76rem] z-10 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="space-y-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-300 text-5xl font-bold">
                What does a tutoring session look like?
              </h1>
              <p className="text-lg text-zinc-400 pt-3 max-w-2xl mx-auto text-center">
                Each session is 1 hour long and we will go over your code, debug
                it, and teach you how to code. We will also go over any
                questions you may have and help you with your projects.
              </p>
              <div className="flex items-center justify-center pt-3">
                <iframe
                  src="https://player.vimeo.com/video/918976093?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  className="aspect-video sm:w-[600px] md:w-[900px] rounded-xl"
                ></iframe>
              </div>
            </section>
            <section className="space-y-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-yellow-300 text-5xl font-bold">
                How do I register?
              </h1>
              <p className="text-lg text-zinc-400 pt-3 max-w-2xl mx-auto text-center">
                While most people accept everyone, we only accept 5 people at a
                time to tutor. In addition, we only accept those who fit the
                right criteria for teaching such as a certain skill level, want
                to learn, & availability.
              </p>
              <PrimaryButton
                href="https://calendly.com/nizabizaher/programming-tutoring-consultation"
                className="bg-white text-zinc-900"
              >
                Register for tutoring here
              </PrimaryButton>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
