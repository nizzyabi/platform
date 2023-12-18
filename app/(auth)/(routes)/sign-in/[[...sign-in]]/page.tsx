import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
  <div className="flex items-center justify-center">

        <SignIn 
  appearance={{
    baseTheme: dark,
    elements: {
        formButtonPrimary:
          "bg-purple-500 hover:bg-white hover:text-black text-sm normal-case",
          GoogleButton: "bg-yellow-500",
      },
      
  }}/>   
  </div>
  )
}