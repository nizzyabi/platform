'use client'

// Imports 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from './Footer'
import Lottie from 'lottie-react';
import arrow from '../public/arrow.json'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Icons from './Icons';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from 'next/image';



export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <div className='mt-12'>

      {/* Landing */}
      <div>
        {/* Text + Button */}
        <div>
          {/* Main text*/}
          <div>
            <h1>Become a Software Developer</h1>
          </div>
          {/* Sub text */}
          <div>
            <p>Learn to code and have fun doing it.</p>
          </div>

          {/* Button */}
          <div>
            <Button>Let's Start</Button>
          </div>
        </div>
        {/* Icon Display*/}
        <div>
          <div>
            {/*cards*/}
            <div className=''></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>


      {/* Description */}


       
        
        {/* Footer */}
        <Footer />
    </div>
  )
}
