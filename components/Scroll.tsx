// Scroll Animation
"use client"
import { useEffect, useState } from "react"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
    }
    
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}>
        <ArrowCircleUpIcon fontSize="large" className="opacity-70"/>
    </button>
  )
}

export default Scroll
