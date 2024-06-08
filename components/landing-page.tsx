// Imports
import { db } from '@/lib/db'
import PrimaryButton from './ui/get-started-button'
import AvatarCircles from './ui/user-avatar-card'
import { TestimonialCard } from './testimonials'
import Faq from './faq'

export default async function LandingPage() {
  const users = await db.user.count()
  const cardData = [
    {
      imgSrc: "/dashboard.png",
      title: "Full Stack Analytics Dashboard",
      badge: "NEW",
      description: "Build a functional dashboard to track your apps user information, payments, and more!",
      tags: ["NextJS", "Typescript"],
    },
    {
      imgSrc: "/dashboard.png",
      title: "Stripe Payment Integration",
      badge: "NEW",
      description: "Recieve payments from your users by building & connecting to stripe to your software.",
      tags: ["NextJS", "Typescript", "Stripe"],
    },
    {
      imgSrc: "/dashboard.png",
      title: "Functional Backend & Database",
      badge: "NEW",
      description: "Learn the basics of backend developement by connecting to & storing user data in a database!",
      tags: ["Prisma", "Postgres", "NeonDB"],
    },
  ];
  
  return (
    <div className='pt-20 space-y-80'>
      
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="flex flex-col justify-center text-center lg:text-left ">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className=" flex flex-col text-5xl md:text-5xl lg:text-6xl font-bold header-landing text-baseContent">
              Learn To Code
              <span>
                {' '}
                && <span className='underline decoration-wavy decoration-primary underline-offset-8'>Have Fun</span> Doing It
              </span>
            </span>
            <span className="pt-[16px] font-medium text-xl text-baseContentSecondary ">
              Build beautiful apps & websites with easy to follow tutorials
            </span>
            <div className='flex items-center justify-center lg:justify-start'>
              <PrimaryButton href="/courses" className='mt-[25px]'/>
            </div>
            <div className='pt-4'>
              <AvatarCircles className='flex items-center justify-center lg:flex lg:justify-start '/>
              <p className='font-semibold text-baseContent mt-2 lg:ml-2'>Join <span className='font-extrabold'>{users}</span> improved developers!</p>
            </div>
          </div>
          {/*<Bento className="text-center select-none" />*/}
          </div>
          <div className="flex items-center justify-center md:h-full">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PHI7F9AQhBI?si=ueaPGvDQM6GDL-ne" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
      </div>

      <div className='space-y-8 bg-[#dddee2] py-12'>
        <h1 className='text-baseContent text-5xl md:text-5xl lg:text-6xl font-bold text-center '>Tutorials That Actually <span className='bg-primary px-4 text-base100'>Help</span></h1>
        <p className='text-lg font-semibold text-baseContentSecondary text-center pb-7 '>Our courses include a mix of building & learning. The perfect mix for anyone trying to learn! </p>
     
      
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 items-center'>
      {cardData.map((card, index) => (
        <div key={index} className="card w-96 md:w-full bg-base100 text-baseContent shadow-xl mx-8">
          <figure><img src={card.imgSrc} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {card.title}
              <div className="badge badge-secondary bg-primary text-base100 border-primary">{card.badge}</div>
            </h2>
            <p className='text-baseSecondary'>{card.description}</p>
            <div className="card-actions justify-end">
              {card.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="badge badge-outline">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>

      </div>


      {/* Description of yourself and why people should buy from you (and also a video of you and the courses)*/}
      <div>
        <h1></h1>
      </div>

      <div className='text-center space-y-8'>
        <h1 className='text-baseContent text-5xl md:text-5xl lg:text-6xl font-bold'>Hear it from over {users} developers</h1>
        <p className='text-lg font-semibold text-baseContentSecondary'>They used the courses to build apps & improve at coding</p>
        <TestimonialCard />
      </div>

      <Faq />
    </div>
  )
}
