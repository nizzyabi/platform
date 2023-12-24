import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

export default function Page() {
  return (
  <div className="flex items-center justify-center">

        <SignIn 
  appearance={{
    baseTheme: neobrutalism,
    elements: {
      
        
        formButtonPrimary:
          "bg-purple-500 hover:bg-white hover:text-black text-sm normal-case font-extrabold",
         socialButtonsBlockButton: "hover:bg-[#191919] hover:scale-105 transition-transform duration-300 ease-in-out",
         headerSubtitle: "text-white",
         footerActionText: "text-white",
         footerActionLink: "text-purple-500",
      },
  }}/>   
  </div>
  )
}