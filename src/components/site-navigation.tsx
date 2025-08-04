import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, Code } from "lucide-react"
import { siteConfig } from "@/config/site"

interface SiteNavigationProps {
  currentPage: "home" | "team"
}

export function SiteNavigation({ currentPage }: SiteNavigationProps) {
  return (
    <nav className="relative bg-slate-800/60 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <Link href={siteConfig.navigation.home}>
            <Button
              variant={currentPage === "home" ? "default" : "ghost"}
              className={`mx-2 ${
                currentPage === "home"
                  ? "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              <Terminal className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href={siteConfig.navigation.team}>
            <Button
              variant={currentPage === "team" ? "default" : "ghost"}
              className={`mx-2 ${
                currentPage === "team"
                  ? "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              <Code className="mr-2 h-4 w-4" />
              Research Team
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
