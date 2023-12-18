import Link from "next/link"


export default function Footer() {
  return (
    <div className="text-center pt-[40px] pb-8">
        Found a mistake? Let us know on the <Link href='https://github.com/NizarAbiZaher/platform'><span className="text-blue-500 underline">GitHub Page</span><span className="text-2xl">☺</span></Link>
    </div>
  )
}
