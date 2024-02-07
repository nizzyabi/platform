import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Scroll from '@/components/scroll'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvder } from '@/components/providers/confetti-provider'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Ares Gang',
  description: 'Self taught developers',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  const session = await auth()
  return (   
   <SessionProvider session={session}>
    <html lang="en" className='body-background'>
      <body className={inter.className}>
        <Navbar />
        <Scroll />
        <ToastProvider />
        <ConfettiProvder />
          {children}
      </body>
    </html>
    </SessionProvider>
    
    
    
    
    
  )
}
