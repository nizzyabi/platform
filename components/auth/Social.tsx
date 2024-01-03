'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export const Social = () => {
    return (
        

        <div className="flex items-center w-full gap-x-2">

            <Button
                size="lg"
                className='w-full rounded bg-slate-200 hover:bg-slate-200'
                variant="outline"
                onClick={() => {}}
            >
                <FcGoogle className='h-9 w-9'/>
            </Button>

            <Button
                size="lg"
            className='w-full rounded bg-slate-200 hover:bg-slate-200'
                variant="outline"
                onClick={() => {}}
            >
                <FaGithub className="h-9 w-9 text-black"/>
            </Button>
        </div>
    )
}