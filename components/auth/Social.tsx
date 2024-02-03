'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {

    const onClick = (provider: 'google' | 'github') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    }
    return (
        <div className="flex items-center w-full gap-x-2 pb-0">

            <Button
                size="lg"
                className='w-full border-none rounded bg-slate-200 hover:bg-slate-200'
                variant="outline"
                onClick={() => onClick('google')}
            >
                <FcGoogle className='h-9 w-9'/>
            </Button>

            <Button
                size="lg"
            className='w-full rounded bg-slate-200 hover:bg-slate-200'
                variant="outline"
                onClick={() => onClick('github')}
            >
                <FaGithub className="h-9 w-9 text-black"/>
            </Button>
        </div>
    )
}