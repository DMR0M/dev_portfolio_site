import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Japanese Vocabulary Learning Portal",
      description:
        "A japanese learning website that allows users to study and practice reading common hiragana, katakana, and kanji characters. Quizzes and challenges are included in the website",
      image: "/japanese-vocabulary-learning.png?height=200&width=400",
      tags: ['Python', 'Django', 'Bootstrap5', 'Postgres'],
      demoUrl: "#",
      githubUrl: "https://github.com/DMR0M/kanji_and_kana_quiz_app",
    },
    {
      id: 2,
      title: "CodeCraft",
      description: "A website to manage code snippets. Add, save, update, and test your code snippets online.",
      image: "/codecraft.png?height=200&width=400",
      tags: ["Javascript", "React.js", "Node", "MongoDB"],
      demoUrl: "https://mycodecraft.netlify.app/",
      githubUrl: "https://github.com/DMR0M/codecraft",
    },
    {
      id: 3,
      title: "Pokemon Dashboard Website",
      description: "View the graphical charts about the stats of the Pokemon searched.\nBuilt with Dash and Plotly for chart displays utilizes Pandas to query data for charts.\nUses MongoDB database to store each Pokemon data.",
      image: "/pokemon_stats_viewer.png?height=200&width=400",
      tags: ['Python', 'Dash', 'Plotly', 'MongoDB'],
      demoUrl: "#",
      githubUrl: "https://github.com/DMR0M/dash_app_pkmn-stats-viewer",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and experience in full-stack development, utilizing multiple web libraries and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {
                  ![1, 3].includes(project.id) ? (
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  ) : null
                }
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/DMR0M" target="_blank" rel="noopener noreferrer">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
