import { AnimatedBackground } from "@/components/animated-background"
import { SiteHeader } from "@/components/site-header"
import { SiteNavigation } from "@/components/site-navigation"
import { SiteFooter } from "@/components/site-footer"
import { TeamMemberCard } from "@/components/team-member-card"
import { teamMembers } from "@/data/team-members"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <SiteHeader currentPage="team" />
      <SiteNavigation currentPage="team" />

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Research Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our dedicated team of undergraduate and graduate students is working alongside faculty to advance the field
            of Educational Artificial Intelligence, creating innovative solutions that enhance learning experiences for
            students worldwide.
          </p>
          <div className="mt-4 text-green-400 font-mono text-sm opacity-70">
            {"// Building the future of education with code and AI"}
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        <SiteFooter codeComment='team.commit("Building the future of education");' />
      </main>
    </div>
  )
}
