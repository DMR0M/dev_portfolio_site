import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">RR Dela Merced</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              © {new Date().getFullYear()} Rommel Dela Merced. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/DMR0M" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/rommel-rudolf-dela-merced-943970233/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rommeldm87@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              {" • "}
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
