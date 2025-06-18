import React from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Brain, MessageSquare, FileText, BarChart3, Users, BookOpen, ArrowRight, Lock } from "lucide-react"
import { Link } from "react-router"

export default function ServicesPage() {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Tutoring Assistant",
      description:
        "Personalized AI-powered tutoring that adapts to individual learning styles and provides instant feedback.",
      features: ["24/7 availability", "Adaptive learning", "Progress tracking"],
      status: "Available",
      href: "/services/tutoring",
    },
    {
      icon: FileText,
      title: "Research Paper Analyzer",
      description: "Advanced AI tools to help analyze research papers, extract key insights, and generate summaries.",
      features: ["Citation analysis", "Key concept extraction", "Summary generation"],
      status: "Available",
      href: "/services/research-analyzer",
    },
    {
      icon: BarChart3,
      title: "Learning Analytics Dashboard",
      description: "Comprehensive analytics to track student progress and identify areas for improvement.",
      features: ["Performance metrics", "Learning patterns", "Predictive insights"],
      status: "Beta",
      href: "/services/analytics",
    },
    {
      icon: Users,
      title: "Collaborative Learning Platform",
      description: "AI-enhanced collaborative spaces for group projects and peer learning.",
      features: ["Smart group formation", "Collaboration tools", "Peer assessment"],
      status: "Coming Soon",
      href: "/services/collaboration",
    },
    {
      icon: BookOpen,
      title: "Curriculum Generator",
      description: "AI-powered curriculum design tools for educators to create engaging learning experiences.",
      features: ["Learning objective alignment", "Content suggestions", "Assessment design"],
      status: "Development",
      href: "/services/curriculum",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI-Powered Educational Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our suite of AI tools designed to enhance learning experiences for both students and instructors in
            educational settings.
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2">
              <Lock className="w-4 h-4 mr-2" />
              Registration required for full access
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isAvailable = service.status === "Available"
              const isBeta = service.status === "Beta"

              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-10 h-10 text-blue-600" />
                      <Badge
                        variant={isAvailable ? "default" : isBeta ? "secondary" : "outline"}
                        className={isAvailable ? "bg-green-100 text-green-800" : ""}
                      >
                        {service.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={isAvailable || isBeta ? service.href : "/register"}>
                      <Button
                        className="w-full group-hover:bg-blue-700 transition-colors"
                        disabled={!isAvailable && !isBeta}
                      >
                        {isAvailable || isBeta ? "Access Service" : "Coming Soon"}
                        {(isAvailable || isBeta) && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Educational Experience?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our research community and get early access to cutting-edge AI educational tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="px-8">
                Register for Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Button>
            </Link>
          </div>
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
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                <Link to="/services/tutoring" className="block text-gray-400 hover:text-white">
                  AI Tutoring
                </Link>
                <Link to="/services/research-analyzer" className="block text-gray-400 hover:text-white">
                  Research Analyzer
                </Link>
                <Link to="/services/analytics" className="block text-gray-400 hover:text-white">
                  Learning Analytics
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-400 hover:text-white">
                  Help Center
                </Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white">
                  Contact Us
                </Link>
                <Link to="/feedback" className="block text-gray-400 hover:text-white">
                  Feedback
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