'use client'

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
        <div className="flex gap-2 mt-3">
            <Button
                size="lg"
                className='rounded-[5px] border-none text-md'
                variant="outline"
                onClick={() => onClick('google')}
            >
                <IconBrandGoogle className='mr-2'/> Google
            </Button>

            <Button
                size="lg"
                className='rounded-[5px] border-none text-md hover:'
                variant="outline"
                onClick={() => onClick('github')}
            >
                <IconBrandGithub className="mr-2"/> <span>Github</span>
            </Button>
        </div>
    )
}
