import React from "react";
import { Button } from "./ui/button"
import { Brain } from "lucide-react"
import { Link } from "react-router"

export function Navigation() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">EduAI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            {/* <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
} 