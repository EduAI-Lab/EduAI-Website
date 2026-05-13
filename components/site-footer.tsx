import Image from "next/image"
import { siteConfig } from "@/config/site"

interface SiteFooterProps {
  codeComment?: string
}

export function SiteFooter({
  codeComment = 'console.log("Building the future of education with AI");',
}: SiteFooterProps) {
  return (
    <footer className="relative bg-slate-800/80 backdrop-blur-sm border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src={siteConfig.logo}
              alt="UBC Logo"
              width={150}
              height={40}
              className="h-8 w-auto filter brightness-0 invert opacity-60 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:opacity-80 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
            />
          </div>
          <p className="text-slate-400 text-sm mb-2">
            © {siteConfig.year} University of British Columbia Okanagan Campus - {siteConfig.name}
          </p>
          <p className="text-slate-500 text-xs mb-4">{siteConfig.tagline}</p>
          <div className="text-green-400 font-mono text-xs opacity-50">{codeComment}</div>
        </div>
      </div>
    </footer>
  )
}
