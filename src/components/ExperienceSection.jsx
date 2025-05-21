import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead developer for the company's flagship product. Architected and implemented new features, mentored junior developers, and improved application performance.",
      technologies: ["React", "Node.js", "JavaScript", "AWS"],
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client projects. Collaborated with design and product teams to deliver high-quality web applications.",
      technologies: ["Angular", "Express", "MongoDB", "Docker"],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description:
        "Created responsive and interactive user interfaces for various client websites. Worked closely with designers to implement pixel-perfect designs.",
      technologies: ["JavaScript", "HTML/CSS", "jQuery", "Sass"],
    },
  ]

  return (
    <section id="experience" className="py-20 container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My career journey and the companies I've had the privilege to work with.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative flex items-start md:justify-center">
            <div className="absolute left-0 md:left-1/2 mt-1.5 h-3 w-3 -translate-x-1/2 rounded-full border bg-primary"></div>

            <Card className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{experience.role}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{experience.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
