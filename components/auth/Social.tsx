'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react'

export const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="flex gap-2 mt-3">
      <Button
        size="lg"
        className="bg-black/5 dark:bg-white/5 rounded-[5px] border-none text-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <IconBrandGoogle className="mr-2" /> Google
      </Button>

      <Button
        size="lg"
        className="bg-black/5 dark:bg-white/5 rounded-[5px] border-none text-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <IconBrandGithub className="mr-2" /> <span>Github</span>
      </Button>
    </div>
  )
}
