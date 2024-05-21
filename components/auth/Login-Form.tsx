'use client'
import * as z from 'zod'
import { CardWrapper } from '@/components/auth/Card-Wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { login } from '@/actions/login'
import { useEffect, useRef, useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import toast from "react-hot-toast"

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider!'
      : ''
      
  const [isPending, startTransition] = useTransition()

  const hasDisplayedError = useRef(false)
  useEffect(() => {
    if (urlError && !hasDisplayedError.current) {
      toast.error(urlError)
      hasDisplayedError.current = true
    }
  }, [urlError])

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          toast.error(data.error)
        }
        if (data?.success) {
          toast.success(data.success)
          form.reset({ email: '', password: ''})
        }
      })
    })
  }

  return (
    <CardWrapper
      headerTitle="Login"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="tylerdurden@gmail.com"
                      disabled={isPending}
                      type="email"
                      className="bg-zinc-900 text-slate-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      {...field}
                      disabled={isPending}
                      type="password"
                      className="bg-zinc-900 text-slate-100"
                    />
                  </FormControl>
                  <Button
                    size="sm"
                    variant="link"
                    className="px-0 "
                    type="button"
                  >
                    <Link href="/auth/reset">Forgot Password?</Link>
                  </Button>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          
          <Button
            disabled={isPending}
            type="submit"
            className="p-[3px] relative font-semibold w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px] w-full" />
            <div className="px-8 py-2  w-full bg-zinc-800 rounded-[5px] relative group transition duration-200 text-white hover:bg-transparent text-lg">
              Login &rarr;
            </div>
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
