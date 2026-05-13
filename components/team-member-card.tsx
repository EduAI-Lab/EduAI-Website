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
    <Card className="overflow-hidden bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 hover:border-green-500/50">
      <CardContent className="p-0">
        <div
          className={`flex flex-col lg:h-[560px] ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Image */}
          <div className="relative h-48 lg:h-full lg:w-[280px] lg:flex-shrink-0">
            <Image
              src={member.image}
              alt={`${member.name} - EduAI Lab Research Team Member`}
              fill
              className={`object-cover ${member.imagePosition ?? "object-top"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-5 lg:p-6 flex flex-col justify-center overflow-hidden lg:flex-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-green-400 mb-1 flex items-center uppercase tracking-wide">
                  <Database className="mr-1.5 h-4 w-4" />
                  Biography
                </h4>
                <p className="text-base text-slate-300 leading-snug line-clamp-5">{member.biography}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-blue-400 mb-1 flex items-center uppercase tracking-wide">
                  <GitBranch className="mr-1.5 h-4 w-4" />
                  Contribution
                </h4>
                <p className="text-base text-slate-300 leading-snug line-clamp-3">{member.contribution}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-purple-400 mb-1 flex items-center uppercase tracking-wide">
                  <Cpu className="mr-1.5 h-4 w-4" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1 mb-2">
                  {member.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded p-2 font-mono text-sm">
                  <div className="text-green-400 mb-0.5">{"// Code snippet"}</div>
                  <div className="text-slate-300 truncate">{member.codeSnippet}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
