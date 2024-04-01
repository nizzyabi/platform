// Roadmap Page
"use client"

import Link from "next/link";
import { BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoYoutube, BiSolidSchool } from "react-icons/bi";
import { FaCode, FaFreeCodeCamp, FaGithub, FaNode, FaPaperclip, FaSquareShareNodes } from "react-icons/fa6";
import { FcCommandLine, FcGraduationCap, FcTreeStructure, FcFolder } from "react-icons/fc";

import { IoBuildOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { GiHammerNails } from "react-icons/gi";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Roadmap() {
    // Current User Data
    const { data: session } = useSession();
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
                    icon: <BiLogoYoutube className="text-red-500"/>
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
            description: 'It is time to learn the basics of web development using the building blocks of the web (HTML & CSS).',
            resources: [
                {
                    title: 'FCC',
                    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'Git',
                    link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                    icon: <BiLogoYoutube className="text-red-500"/>
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
            description: 'It is time to get functional! Learn JavaScript & how to use it to make your websites interactive.',
            resources: [
                {
                    title: 'FCC',
                    link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'JavaScript',
                    link: 'https://youtu.be/PkZNo7MFNFg?si=iYfLsiYjPP2h7DN5',
                    icon: <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVR4nO2WT0hVQRTGz/GZ7yEiRJJ/SsMiRaigUFwUhQgGouLChZS5Cmmj5c4kol1tRNoYLcJ0JRKUFYmUJi5EQSP/dEFxkUW4iQyUIMS+mHe5jtN7ihLeO8L54OPBmXmX+c2c+90hEolEIisFh2CTSQAcOQFIC+1GQbcM5CV2gt91SIw6we885EPm2GHarYJeMATACX7XIS3k/M+O8YZ7282xmT5CbTkjI42RGGJkHWbUVTJmX+4DgMFOQiSsx2iTkyMcHbcWYH2WkHtU18NJjILj7q9XKz7D+PPJUoCPz3U9IYEx/cKtLw4STmQzbl5jrExYfALDXbqu2uj3lJ7/64NlKRQP4MuQWa8uZXx+t9PnWQCgfPmC+eJGwozrNYz5/n0C8G2YcLYgNoFCIRdkddJyAGW1yNYGRkpyLMjpPMaPMcsBPH8fJdxvJqQfMiEar3KwACrvtwP4N+d/jlM0/7352Rk+AqgUqSphvH6kawsDJsCrDj3W/YBQeCo279tb9H+SDvgE0NNG0c+/lya36hkddwnnz5ktoe4+ar66/3i1kmLG1yG3vjxOuFSkx9TX2heAuTcaYCufPKavBg9bzZNhZhxJN68SyrcbfGyh908JqSnxF69a4e0Ts/fv3Nge+GJh/CjdMwDlpRFCUx0jJ9PNc3VNriljTD6LP3+sh3ClgpGf6+7+wVR34Y/vEdZmtkq1PQTwwyQAjpwAfG0hkUgkIj/0FxH0JVVHu8XgAAAAAElFTkSuQmCC" alt='hi' height={60} width={60}/>
                },
                {
                    title: 'Project',
                    link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                    icon: <FcCommandLine />
                },
            ]

        },
        {
            difficulty: '/gilbert.png',
            difficultyTitle: 'Intermediate',
            title: 'Frameworks',
            description: 'Learn how to use JavaScript frameworks to build better & faster websites.',
            resources: [
                {
                    title: 'React',
                    link: 'https://fullstackopen.com/en/',
                    icon: <BiLogoReact className="text-cyan-500" />
                },
                {
                    title: 'React Project',
                    link: "https://youtu.be/b9eMGE7QtTk?si=HPCbJHJaBkGZq3OS",
                    icon: <FcCommandLine />
                },
                {
                    title: 'Next',
                    link: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
                    icon: <TbBrandNextjs className="text-black"/>
                },
                {
                    title: 'Next Project',
                    link: "https://youtu.be/pUNSHPyVryU?si=pyuPmFD1qQVUcSs-",
                    icon: <FcCommandLine />
                },
               
            ]
        },
        {
            difficulty: '/gilbert.png',
            difficultyTitle: 'Intermediate',
            title: 'Backend | APIs',
            description: 'Make your websites dynamic by learning how to build servers, user profiles, APIs & more.',
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
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'Youtube',
                    link: 'https://youtu.be/Agw0LdW9xB4?si=3EUsRTSNq8-C3Z0w',
                    icon: <BiLogoYoutube className="text-red-500"/>
                },
                
                
            ]
        },
        {
            difficulty: '/gilbert.png',
            difficultyTitle: 'Intermediate',
            title: 'Full Stack Development',
            description: 'Learn how to connect the frontend & backend by creating functioning full stack applications!',
            resources: [
                {
                    title: 'MERN',
                    link: 'https://youtu.be/7CqJlxBYj-M?si=aUct4yVHR92-6GUf',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'MERN Project',
                    link: "https://youtu.be/0osXx2oJu44?si=jAgisHX-nI-TXNLw",
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
            description: 'Learn how software design, github, & other software principles work.',
            resources: [
                {
                    title: 'Software Design',
                    link: 'https://youtu.be/FLtqAi7WNBY?si=ZD843HSGgKlc9iBN',
                    icon: <BiLogoYoutube className="text-red-500"/>
                },
                {
                    title: 'software',
                    link: 'https://youtu.be/tv-_1er1mWI?si=ouX4gv8L3HHEXEqR',
                    icon: <FcCommandLine />
                },
                {
                    title: 'Github',
                    link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                    icon: <FaGithub className="text-black"/>
                }
            ]
        },
        {
            difficulty: '/chad.svg',
            difficultyTitle: 'Pro',
            title: 'Interview Prep',
            description: 'Learn how to prepare for interviews & get a job as a developer!',
            resources: [
                {
                    title: 'motivation',
                    link: 'https://youtu.be/Xg9ihH15Uto?si=NlXIMxIob79_9kh1',
                    icon: <BiLogoYoutube className="text-red-500"/>
                },
                {
                    title: 'Mock Interview',
                    link: 'https://youtu.be/1qw5ITr3k9E?si=DjqosIoiCZkP50xi',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
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
            {/* Roadmap Title */}
            <div>
                <h1 className="text-6xl text-center font-bold "> 
                    {!session ? (
                        <p>Roadmap</p>
                    ): (
                        <p>{session?.user.name}'s Roadmap</p>
                    )}
                </h1>
                <p className='pt-3 font-medium text-md text-slate-100/40 text-center'>Full roadmap to being a web developer</p>
                <div className="flex items-center justify-center">
                <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40" />
                </div>
            </div>

            {/* Resources */}
            <div className="space-y-20">
                {roadmapData.map((item, index) => (
                    <div key={index} className="mt-8 space-y-12 max-w-xl lg:max-w-3xl mx-auto p-6 rounded-xl bg-zinc-900">
                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl font-semibold p-2">{item.title}</h1>
                            <p className="text-zinc-400 text-3xl font-bold">0{index + 1}</p>
                        </div>

                        <p className="text-center font-medium text-slate-200 text-lg">{item.description}</p>
                        <div className="flex justify-center space-x-8">
                            {item.resources.map((resource, resIndex) => (
                                <Link key={resIndex} href={resource.link}>
                                    <p className="text-5xl bg-slate-200  hover:opacity-70 duration-500 h-[70px] w-[70px] flex justify-center items-center rounded">{resource.icon}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div> 
            
        </div>
    )
}

