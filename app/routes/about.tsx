import React from "react";
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Brain, Users, Target, BookOpen, Lightbulb, Award, ArrowRight } from "lucide-react"
import { Link } from "react-router"

export default function AboutPage() {
  const teamMembers = [
    {
      role: "Faculty Supervisors",
      description:
        "Leading researchers in AI and education, providing guidance and oversight for all research initiatives.",
      icon: Award,
    },
    {
      role: "Honours Thesis Students",
      description: "Advanced undergraduate students conducting original research in AI applications for education.",
      icon: BookOpen,
    },
    {
      role: "Directed-Study Students",
      description: "Students pursuing focused research projects under faculty supervision.",
      icon: Target,
    },
    {
      role: "Student Volunteers",
      description: "Dedicated volunteers contributing to research activities and platform development.",
      icon: Users,
    },
  ]

  const researchAreas = [
    {
      title: "Ethical AI Implementation",
      description: "Developing guidelines and frameworks for responsible AI use in educational settings.",
    },
    {
      title: "Learning Effectiveness",
      description: "Measuring and improving the impact of AI tools on student learning outcomes.",
    },
    {
      title: "Instructor Support",
      description: "Creating AI-powered tools to enhance teaching effectiveness and reduce workload.",
    },
    {
      title: "Accessibility & Inclusion",
      description: "Ensuring AI educational tools are accessible to all learners regardless of background or ability.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            About Our Research Group
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pioneering the Future of <span className="text-blue-600">AI in Education</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a collaborative research initiative dedicated to developing ethical, effective, and practical AI
            solutions for educational environments.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To create a practical framework for the ethical and effective use of Generative AI in educational
                settings through collaborative research, ensuring that AI technologies enhance learning while
                maintaining educational integrity and values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Develop AI-supported services for researchers and educators</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Research the effectiveness of AI tools in educational contexts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Promote ethical and responsible AI implementation</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <Brain className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A future where AI seamlessly integrates into educational environments, empowering both students and
                instructors while maintaining the human elements that make education meaningful and transformative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our research spans multiple domains to ensure comprehensive understanding and practical application of AI
              in educational settings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collaborative Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together expertise from various academic levels and backgrounds to drive
              innovation in AI education research.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Icon className="w-10 h-10 text-blue-600" />
                      <CardTitle className="text-xl text-gray-900">{member.role}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact & Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Making a Real Impact</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our research aims to bridge the gap between AI technology and practical educational applications, creating
            tools that truly benefit the learning community.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Research Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-blue-100">Learning Opportunities</div>
            </div>
          </div>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="px-8">
              Join Our Research Community
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6" />
                <span className="text-lg font-semibold">AI-Ed Research</span>
              </div>
              <p className="text-gray-400">
                Advancing education through ethical AI research and practical applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Research</h3>
              <div className="space-y-2">
                <Link to="/research/publications" className="block text-gray-400 hover:text-white">
                  Publications
                </Link>
                <Link to="/research/projects" className="block text-gray-400 hover:text-white">
                  Current Projects
                </Link>
                <Link to="/research/collaborate" className="block text-gray-400 hover:text-white">
                  Collaborate
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-gray-400 hover:text-white">
                  Contact Us
                </Link>
                <Link to="/news" className="block text-gray-400 hover:text-white">
                  News & Updates
                </Link>
                <Link to="/events" className="block text-gray-400 hover:text-white">
                  Events
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI-Ed Research Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 