'use client'

import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Header } from '@/components/auth/Header'
import { Social } from '@/components/auth/Social'
import { BackButton } from '@/components/auth/Back-Button'

// interface
interface CardWrapperProps {
  children: React.ReactNode
  headerTitle: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  showSocial,
  backButtonLabel,
  backButtonHref,
  headerTitle
}: CardWrapperProps) => {
  return (
    <Card className=" xs:w-[200px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[500px] bg-[#131212] border border-slate-200/20 rounded-xl">
      <CardHeader>
        <Header title={headerTitle} />
      </CardHeader>

      <CardContent>{children}</CardContent>

      {/* If showSocial display it */}
      {showSocial && (
        <CardFooter className="flex items-center justify-center">
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}
