"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-bold text-xl">
          <span className="text-primary">RR</span>Portfolio
        </a>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <a
                href="#home"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#projects"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a
                href="#skills"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
