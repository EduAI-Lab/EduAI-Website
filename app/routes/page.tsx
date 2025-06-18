import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { BookOpen, Users, Target, Lightbulb, ArrowRight, Brain, GraduationCap } from "lucide-react"
import { Link } from "react-router"
import { Navigation } from "../components/Navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <GraduationCap className="w-4 h-4 mr-2" />
              AI in Education Research Group
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Education with <span className="text-blue-600">Ethical AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Creating a practical framework for the ethical and effective use of Generative AI in educational settings
            through collaborative research and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="px-8">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <Card className="max-w-4xl mx-auto border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-gray-900">Ethical & Effective GenAI Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                To create a practical framework for the ethical and effective use of GenAI in educational settings
                through collaborative research, ensuring that AI technologies enhance learning while maintaining
                educational integrity and values.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Initial Objectives</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Framework Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Developing a core framework that offers AI-supported services to researchers, providing tools and
                  methodologies for effective AI integration in educational contexts.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Educational Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Research the application and effectiveness of AI tools within educational contexts, measuring impact
                  on student learning outcomes and instructor effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Participants Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Participants & Scope</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <Card className="max-w-4xl mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Collaborative Initiative</CardTitle>
              <CardDescription className="text-lg">
                Building a diverse community of researchers and learners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Faculty Supervisors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Honours Thesis Students</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Directed-Study Students</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Student Volunteers</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6 pt-6 border-t">
                All participants contribute to advancing our understanding of AI applications in educational settings
                and developing practical solutions for the academic community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Research Community?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Register today to access our AI-powered educational tools and contribute to cutting-edge research.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="px-8">
              Register Now
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/services" className="block text-gray-400 hover:text-white">
                  Services
                </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white">
                  About
                </Link>
                <Link to="/research" className="block text-gray-400 hover:text-white">
                  Research
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                For inquiries about our research or collaboration opportunities, please reach out through our contact
                form.
              </p>
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
