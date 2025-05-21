import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="font-bold text-xl">
              <span className="text-primary">Dev</span>Portfolio
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              {" • "}
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
