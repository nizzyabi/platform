import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvder } from '@/components/providers/confetti-provider'
import Scroll from '@/components/Scroll'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/nav'
const geist = GeistSans

export const metadata: Metadata = {
  metadataBase: new URL("https://nizzyabi.com"),
  title: {
    default: 'Nizzyabi',
    template: `%s | Nizzyabi`
  },
  openGraph: {
    description: 'Learn to code && have fun doing it.'
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en" className="landing" >
        <body className={geist.className}>
          <Navbar />
          <Scroll />
          <ToastProvider />
          <ConfettiProvder />
          {children}
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  )
}
