"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Reusable motion link
  const MotionLink = motion(Link)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">RR Dela Merced</span>
        </Link>

        {/* Custom animated hamburger menu */}
        <motion.button
          className="relative w-10 h-10 flex flex-col justify-center items-center md:hidden"
          onClick={toggleMenu}
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block absolute h-0.5 w-6 bg-foreground rounded"
            variants={{
              closed: { rotate: 0, y: -6 },
              open: { rotate: 45, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block absolute h-0.5 w-6 bg-foreground rounded"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block absolute h-0.5 w-6 bg-foreground rounded"
            variants={{
              closed: { rotate: 0, y: 6 },
              open: { rotate: -45, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {["home", "projects", "experience", "skills", "contact"].map((item) => (
            <MotionLink
              key={item}
              href={`#${item}`}
              className="text-sm font-medium hover:text-primary transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MotionLink>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              {["home", "projects", "experience", "skills", "contact"].map((item) => (
                <MotionLink
                  key={item}
                  href={`#${item}`}
                  className="py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </MotionLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
