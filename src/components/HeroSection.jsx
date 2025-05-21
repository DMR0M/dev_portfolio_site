import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-primary">Full-Stack</span> Developer
          </h1>
          <p className="text-xl text-muted-foreground">
            Building modern web applications with cutting-edge technologies. Passionate about creating seamless user
            experiences and robust backend systems.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
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
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <img
              src="/placeholder.svg?height=320&width=320"
              alt="Developer portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
