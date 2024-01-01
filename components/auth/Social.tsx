'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2 text-black">

            <Button
                size="lg"
                className='w-full rounded hover:scale-105 transition-transform duration-500 shadow-sm shadow-black border-2'
                variant="outline"
                onClick={() => {}}
            >
                <FcGoogle className='h-7 w-7'/>
            </Button>

            <Button
                size="lg"
            className='w-full rounded hover:scale-105 transition-transform duration-500 shadow shadow-black border-2'
                variant="outline"
                onClick={() => {}}
            >
                <FaGithub className="h-7 w-7"/>
            </Button>
        </div>
    )
}