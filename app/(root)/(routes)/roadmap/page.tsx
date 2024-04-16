'use client'
import Link from 'next/link'
import { BiLogoMongodb, BiLogoReact, BiLogoYoutube } from 'react-icons/bi'
import { FaFreeCodeCamp, FaGithub, FaNode } from 'react-icons/fa6'
import {
  FcCommandLine,
  FcGraduationCap,
  FcTreeStructure,
  FcFolder
} from 'react-icons/fc'
import { TbBrandNextjs } from 'react-icons/tb'
import { useSession } from 'next-auth/react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function Roadmap() {
  // Current User Data
  const { data: session } = useSession()
  // Roadmap Display Data
  const roadmapData = [
    {
      difficulty: '/gilbert.svg',
      difficultyTitle: 'Beginner',
      title: <p>Basics</p>,
      description: 'Learn the basics of programming & how computers work',
      resources: [
        {
          title: <p>Basics</p>,
          link: 'https://youtu.be/zOjov-2OZ0E?si=7Y_LnQZ_mj10SfhG',
          icon: <BiLogoYoutube className="text-red-500" />
        },
        {
          title: 'cs50',
          link: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=642052609431&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC1knf9hYdaVMlE5mOdfTYfbbCW1kFNlkMka0vZ0XDe-kCGTsRW3HMRoCq9wQAvD_BwE',
          icon: <FcGraduationCap />
        }
      ]
    },
    {
      difficulty: '/gilbert.svg',
      difficultyTitle: 'Beginner',
      title: 'HTML & CSS',
      description:
        'It is time to learn the basics of web development using the building blocks of the web (HTML & CSS).',
      resources: [
        {
          title: 'Crash Course',
          link: 'https://youtu.be/qz0aGYrrlhU?si=MWq32KfthGCzYIE3',
          icon: <BiLogoYoutube className="text-red-500" />
        },
        {
          title: 'FCC',
          link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
          icon: <FaFreeCodeCamp className="text-green-800" />
        },
        {
          title: 'Project',
          link: 'https://youtu.be/p0bGHP-PXD4?si=s08EKVPT3caNgzxN/',
          icon: <FcCommandLine />
        }
      ]
    },
    {
      difficulty: '/gilbert.svg',
      difficultyTitle: 'Beginner',
      title: 'JavaScript | Data Structures',
      description:
        'It is time to get functional! Learn JavaScript & how to use it to make your websites interactive.',
      resources: [
        {
          title: 'FCC',
          link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
          icon: <FaFreeCodeCamp className="text-green-800" />
        },
        {
          title: 'JavaScript',
          link: 'https://youtu.be/PkZNo7MFNFg?si=iYfLsiYjPP2h7DN5',
          icon: (
            <Image
              src="data:image/png;base64,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"
              alt="hi"
              height={50}
              width={50}
            />
          )
        },
        {
          title: 'Project',
          link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
          icon: <FcCommandLine />
        }
      ]
    },
    {
      difficulty: '/gilbert.png',
      difficultyTitle: 'Intermediate',
      title: 'Frameworks',
      description:
        'Learn how to use JavaScript frameworks to build better & faster websites.',
      resources: [
        {
          title: 'React',
          link: 'https://fullstackopen.com/en/',
          icon: <BiLogoReact className="text-cyan-500" />
        },
        {
          title: 'React Project',
          link: 'https://youtu.be/b9eMGE7QtTk?si=HPCbJHJaBkGZq3OS',
          icon: <FcCommandLine />
        },
        {
          title: 'Next',
          link: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
          icon: <TbBrandNextjs className="text-black" />
        },
        {
          title: 'Next Project',
          link: 'https://youtu.be/pUNSHPyVryU?si=pyuPmFD1qQVUcSs-',
          icon: <FcCommandLine />
        }
      ]
    },
    {
      difficulty: '/gilbert.png',
      difficultyTitle: 'Intermediate',
      title: 'Backend | APIs',
      description:
        'Make your websites dynamic by learning how to build servers, user profiles, APIs & more.',
      resources: [
        {
          title: 'MongoDB',
          link: 'https://youtu.be/ofme2o29ngU?si=tN6vQG1kF_dlnd2h',
          icon: <BiLogoMongodb className="text-green-500" />
        },
        {
          title: 'Node',
          link: 'https://youtu.be/SccSCuHhOw0?si=8WinLJlJl0bpF-DA',
          icon: <FaNode className="text-green-600" />
        },
        {
          title: 'MongoDB, Node, Express',
          link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
          icon: <FaFreeCodeCamp className="text-green-800" />
        },
        {
          title: 'Youtube',
          link: 'https://youtu.be/Agw0LdW9xB4?si=3EUsRTSNq8-C3Z0w',
          icon: <BiLogoYoutube className="text-red-500" />
        }
      ]
    },
    {
      difficulty: '/gilbert.png',
      difficultyTitle: 'Intermediate',
      title: 'Full Stack Development',
      description:
        'Learn how to connect the frontend & backend by creating functioning full stack applications!',
      resources: [
        {
          title: 'MERN',
          link: 'https://youtu.be/7CqJlxBYj-M?si=aUct4yVHR92-6GUf',
          icon: <FaFreeCodeCamp className="text-green-800" />
        },
        {
          title: 'MERN Project',
          link: 'https://youtu.be/0osXx2oJu44?si=jAgisHX-nI-TXNLw',
          icon: <FcTreeStructure />
        },
        {
          title: 'MERN Stack Project',
          link: 'https://youtu.be/-42K44A1oMA?si=AQ6Tbf-1mfM20Qgb',
          icon: <FcCommandLine />
        }
      ]
    },
    {
      difficulty: '/chad.svg',
      difficultyTitle: 'Pro',
      title: 'Finishing Touches',
      description:
        'Learn how software design, github, & other software principles work.',
      resources: [
        {
          title: 'Software Design',
          link: 'https://youtu.be/FLtqAi7WNBY?si=ZD843HSGgKlc9iBN',
          icon: <BiLogoYoutube className="text-red-500" />
        },
        {
          title: 'software',
          link: 'https://youtu.be/tv-_1er1mWI?si=ouX4gv8L3HHEXEqR',
          icon: <FcCommandLine />
        },
        {
          title: 'Github',
          link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
          icon: <FaGithub className="text-black" />
        }
      ]
    },
    {
      difficulty: '/chad.svg',
      difficultyTitle: 'Pro',
      title: 'Interview Prep',
      description:
        'Learn how to prepare for interviews & get a job as a developer!',
      resources: [
        {
          title: 'motivation',
          link: 'https://youtu.be/Xg9ihH15Uto?si=NlXIMxIob79_9kh1',
          icon: <BiLogoYoutube className="text-red-500" />
        },
        {
          title: 'Mock Interview',
          link: 'https://youtu.be/1qw5ITr3k9E?si=DjqosIoiCZkP50xi',
          icon: <FaFreeCodeCamp className="text-green-800" />
        },
        {
          title: 'Interview Prep',
          link: 'https://youtu.be/5uhmS8nzxM4?si=LhHymrGRN3qPez_R',
          icon: <FcFolder />
        }
      ]
    }
  ]

  return (
    <div className="pt-40 pb-40 landing">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-6xl font-bold">
          {!session ? 'Roadmap' : `${session.user.name}'s Roadmap`}
        </span>
        <span className="font-medium text-md text-slate-100/40">
          Full roadmap to being a web developer
        </span>
        <div className="flex items-center justify-center">
          <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
        </div>
      </div>
      <div className="space-y-20 mx-2">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="mt-8 space-y-12 max-w-xl lg:max-w-3xl mx-auto p-6 rounded-xl bg-zinc-900 "
          >
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-semibold p-2">{item.title}</h1>
              <p className="text-zinc-400 text-3xl font-bold">0{index + 1}</p>
            </div>

            <p className="text-center font-medium text-slate-200 text-lg">
              {item.description}
            </p>
            <div className="flex justify-center space-x-8 ">
              {item.resources.map((resource, resIndex) => (
                <Link key={resIndex} href={resource.link} target="_blank">
                  <p className="text-5xl bg-slate-200  hover:opacity-70 duration-500 h-[70px] w-[70px] flex justify-center items-center rounded">
                    {resource.icon}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
