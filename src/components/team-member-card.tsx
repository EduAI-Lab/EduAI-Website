import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Database, GitBranch, Cpu } from "lucide-react"
import type { TeamMember } from "@/data/team-members"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const isReversed = index % 2 === 1

  return (
    <Card className="overflow-hidden bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-green-500/50">
      <CardContent className="p-0">
        <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Image */}
          <div className={`relative h-96 lg:h-auto ${isReversed ? "lg:col-start-2" : ""}`}>
            <Image
              src={member.image || "/placeholder.svg"}
              alt={`${member.name} - EduAI Research Team Member`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className={`p-8 lg:p-12 flex flex-col justify-center ${isReversed ? "lg:col-start-1" : ""}`}>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                {member.id === 1 ? `Student #${member.id}: ` : ""}
                {member.name}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Biography
                </h4>
                <p className="text-slate-300 leading-relaxed">{member.biography}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  Research Contribution
                </h4>
                <p className="text-slate-300 leading-relaxed">{member.contribution}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                  <Cpu className="mr-2 h-5 w-5" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 font-mono text-sm">
                  <div className="text-green-400 mb-1">{"// Code snippet"}</div>
                  <div className="text-slate-300">{member.codeSnippet}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
