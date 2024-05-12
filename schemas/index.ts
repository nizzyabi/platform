import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required'
  })
})

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: 'Minimum 6 characters'
    })
    .refine(
      (value: string) => {
        !value.includes(' ')
      },
      {
        message: 'No spaces allowed'
      }
    ),
  name: z.string().min(1, {
    message: 'Name is required'
  })
})

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  })
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters'
  })
})
