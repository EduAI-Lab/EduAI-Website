import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="relative bg-slate-800/80 backdrop-blur-sm shadow-lg border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={siteConfig.navigation.home}>
              <Image
                src={siteConfig.logo}
                alt="UBC Logo"
                width={200}
                height={60}
                className="h-12 w-auto cursor-pointer filter brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition-all duration-300"
              />
            </Link>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-white">{siteConfig.name}</h1>
            <p className="text-sm text-slate-300">{siteConfig.university}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
