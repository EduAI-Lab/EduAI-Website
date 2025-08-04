import { Card, CardContent } from "@/components/ui/card"
import { Target, Brain, BookOpen } from "lucide-react"
import { projectInfo } from "@/config/site"

const iconMap = {
  green: Target,
  blue: Brain,
  purple: BookOpen,
}

const colorMap = {
  green: {
    bg: "bg-green-500/20",
    border: "border-green-500/30",
    text: "text-green-400",
    hover: "hover:border-green-500/50",
  },
  blue: {
    bg: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:border-blue-500/50",
  },
  purple: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:border-purple-500/50",
  },
}

export function ProjectGoals() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Research Goals</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're working towards specific objectives that will reshape how students learn and educators teach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectInfo.goals.map((goal, index) => {
            const Icon = iconMap[goal.color as keyof typeof iconMap]
            const colors = colorMap[goal.color as keyof typeof colorMap]

            return (
              <Card
                key={index}
                className={`bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${colors.hover}`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`${colors.bg} border ${colors.border} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}
                  >
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{goal.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{goal.description}</p>
                  <div className={`${colors.text} font-mono text-xs opacity-70`}>{goal.code}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
