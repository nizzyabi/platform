import { ShieldX } from 'lucide-react';


export default function NotFound() {
  return (
    <main className="flex items-center justify-center pt-72">
      <div className="flex flex-col items-center justify-center gap-2 relative">
        <ShieldX className="w-[500px] h-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-primary/10 -z-10" />
        <div className="text-6xl">
          <span>Error</span> <span className="text-primary font-bold">404</span>
        </div>
        <span className="text-4xl">Page not found!!!</span>
      </div>
    </main>
  )
}
