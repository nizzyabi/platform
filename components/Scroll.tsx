// Scroll Animation
'use client'
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollThreshold = 250
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      })
  }

  return (
    <button
      className={`fixed flex items-start justify-center bottom-6 right-6 rounded-full border border-primary/20 outline-none duration-200 z-50 p-2 bg-secondary hover:opacity-90 transition-all ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <div className="">
        <ChevronUp className="h-6 w-6" />
      </div>
    </button>
  )
}

export default Scroll
