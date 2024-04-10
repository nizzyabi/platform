const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute w-full h-screen overflow-y-hidden flex items-center justify-center">
      {children}
    </div>
  )
}

export default AuthLayout
