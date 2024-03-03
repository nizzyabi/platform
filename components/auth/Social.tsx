'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react';

export const Social = () => {

    const onClick = (provider: 'google' | 'github') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    }
    return (
        <div className="flex items-center justify-center   space-x-3 pr-12 pt-7">

            <Button
                size="lg"
                className='px-[65px] rounded-xl border-none  bg-zinc-800 text-md'
                variant="outline"
                onClick={() => onClick('google')}
            >
                <IconBrandGoogle className='h-6 w-6 mr-2'/> Google
            </Button>

            <Button
                size="lg"
                className='px-[68px] font-medium rounded-xl border-none text-md bg-zinc-800'
                variant="outline"
                onClick={() => onClick('github')}
            >
                <IconBrandGithub className="h-6 w-6 mr-2"/> <span>Github</span>
                <BottomGradient />
            </Button>
        </div>
    )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };