import { Card, CardContent } from "./ui/card"
import { Code, Database, Globe, Layout, Server, Terminal, Smartphone, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API Design"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQL"],
    },
    {
      id: 4,
      title: "DevOps & Tools",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Jest", "Cypress"],
    },
    {
      id: 5,
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      skills: ["React Native", "Expo", "Flutter", "Mobile-First Design", "App Performance"],
    },
    {
      id: 6,
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "Python", "Java", "C#", "PHP", "Bash"],
    },
    {
      id: 7,
      title: "Web Technologies",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["Progressive Web Apps", "WebSockets", "SEO", "Web Performance", "Accessibility"],
    },
    {
      id: 8,
      title: "Command Line & Automation",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Bash Scripting", "PowerShell", "Task Automation", "Cron Jobs", "Shell Commands"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies, tools, and languages I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <ul className="space-y-1">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
