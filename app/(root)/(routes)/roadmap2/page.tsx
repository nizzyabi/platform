'use client';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { roadmapData } from '@/roadmap';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/user-current-user';
import { Separator } from '@/components/ui/separator';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const RoadmapPage2 = () => {
    const session = useCurrentUser();
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 500,
          easing: "ease-out-cubic",
        });
      }, []);
    
  return (
    <div>
        <h1 className='text-center text-5xl font-extrabold'>{session?.name}'s Roadmap</h1>
        <div className='flex items-center justify-center mb-4'>
            <Separator className='w-20 h-0.5 rounded bg-slate-200 mt-3'/>
        </div>
        <Timeline position="alternate">
            {roadmapData.map((item, index) => (
            <TimelineItem key={index} className='w-full'>
                <TimelineSeparator className='text-slate-100'>
                <TimelineDot className='bg-slate-100'/>
                <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent data-aos={`${index % 2 ? "fade-right" : "fade-left"}`} className="mt-8 space-y-6 lg:space-y-12 shadow-md shadow-black rounded hover:duration-1000 py-12 w-12">
                    <div className=''>
                        <h1 className="text-center text-4xl lg:text-5xl font-extrabold">{item.title}</h1> 
                    </div>
                    <p className="text-center font-semibold text-gray-300/90 text-lg lg:text-xl">{item.description}</p>
                    <div className="flex justify-center space-x-8">
                        {item.resources.map((resource, resIndex) => (
                            <Link key={resIndex} href={resource.link}>
                                
                                    <p className="text-5xl bg-slate-300  hover:scale-105 transition-transform duration-500 h-[70px] w-[70px] flex justify-center items-center rounded">{resource.icon}</p>
            
                            </Link>
                        ))}
                    </div>
                </TimelineContent>
            </TimelineItem>
            ))}
        </Timeline>
    </div>
    
    
  )
}

export default RoadmapPage2