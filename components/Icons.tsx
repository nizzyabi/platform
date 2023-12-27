import { BiConversation,  BiBook, BiBrain, BiCode } from 'react-icons/bi';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';





export default function Icons() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div data-aos='fade-down' className=" space-y-4 pt-[60px]">
        <div className='text-4xl font-extrabold text-center'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 '>Our Values</h1>
        </div>
        
                

                <div className='flex justify-center items-center space-x-12 text-8xl'>

                  <div>
                    <Dialog>
                      <DialogTrigger className='hover:scale-105 transition-transform'>
                        <BiBook />
                        <p className='text-center text-xl'>learn</p>
                      </DialogTrigger>
                      <DialogContent className='bg-[#191919] shadow-lg shadow-orange-500 border-none'>
                        <h1 className='flex items-center justify-center font-extrabold text-3xl'>learn <BiBook className='ml-2'/></h1>
                        <p className='text-center'>
                          Learning is at the core of everything we do and learning to code is no exception 🤯. Successful programmers are life long learners and we want to help you become one. 
                        </p>
                      </DialogContent>
                    </Dialog>
                  </div>
                  

                  <div>
                  <Dialog>
                      <DialogTrigger className='hover:scale-105 transition-transform'>
                        <BiCode />
                        <p className='text-center text-xl'>apply</p>
                      </DialogTrigger>
                      <DialogContent className='bg-[#191919] shadow-lg shadow-orange-500 border-none'>
                        <h1 className='flex items-center justify-center font-extrabold text-3xl'>apply <BiCode className='ml-2'/></h1>
                        <p className='text-center'>
                          We believe that learning by doing is the best way to learn 😎. That's why we focus on building projects and applying your knowledge to real world problems. 
                        </p>
                      </DialogContent>
                  </Dialog>
                  </div>

                  <div>
                  <Dialog>
                      <DialogTrigger className='hover:scale-105 transition-transform'>
                        <BiBrain />
                        <p className='text-center text-xl'>patience</p>
                      </DialogTrigger>
                      <DialogContent className='bg-[#191919] shadow-lg shadow-orange-500 border-none'>
                      <h1 className='flex items-center justify-center font-extrabold text-3xl'>patience <BiBrain className='ml-2'/></h1>
                        <p className='text-center'>
                          To learn code, you must be willing to wait. There's is no such thing as learning code quick (sorry coding gurus😜). 
                        </p>
                      </DialogContent>
                  </Dialog>
                  </div>

                  <div>
                  <Dialog>
                      <DialogTrigger className='hover:scale-105 transition-transform'>
                        <BiConversation />
                        <p className='text-center text-xl'>community</p>
                      </DialogTrigger>
                      <DialogContent className='bg-[#191919] shadow-lg shadow-orange-500 border-none'>
                      <h1 className='flex items-center justify-center font-extrabold text-3xl'>communtiy <BiConversation className='ml-2'/></h1>
                        <p className='text-center'>
                          Learning to code is a lonley route, especially if you're self taught 🙁. Support & a sense of a community is always important, which is why we have a discord group where you can connect & talk to other students and mentors.  
                        </p>
                      </DialogContent>
                  </Dialog>
                  </div>
                  
                </div>
                
    </div>
  )
}
