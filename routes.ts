// Public Routes
export const publicRoutes = [
  '/',
  '/api/webhook',
  '/coaching',
  '/courses',
  '/roadmap',
  '/auth/new-verification',
  '/api/uploadthing',
  ,
  '/tutoring',
  '/courses/:courseId/info'
]

// Private Routes (if you had a login page, you would protect it after the user has been logged in as you dont want them to access the login page after they have logged in)
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password'
]

// API Route that id given access all the time as it is an API that needs calling
// You may need to add other api calls for other APIs
export const apiAuthPrefix = '/api/auth'

// Default redirect path after login
export const DEFAULT_LOGIN_REDIRECT = '/'
