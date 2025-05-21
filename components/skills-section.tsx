"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Terminal, Wrench, Rocket } from "lucide-react"

const rocketVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function SkillsSection() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["HTML5/CSS3", "Javascript", "React JS", "Bootstrap5", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node JS", "Express", "Python", "FastAPI", "REST API Design"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      id: 4,
      title: "DevOps & Tools",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      skills: ["Git", "Gitlab", "Github", "Docker", "CI/CD"],
    },
    {
      id: 5,
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["Java", "Javascript", "Python", "Bash"],
    },
    {
      id: 6,
      title: "Web Technologies & Frameworks",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["React JS", "Express", "Django", "Firebase", "Supabase"],
    },
    {
      id: 7,
      title: "Command Line & Automation",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Bash Scripting", "PowerShell", "Task Automation", "Linux & Shell Commands"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50 relative">
      <div className="container">
        <div className="text-center mb-16 flex justify-center items-center gap-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          {/* Rocket icon animating next to title */}
          <motion.span
            variants={rocketVariants}
            initial="initial"
            animate="animate"
          >
            <Rocket className="text-primary w-6 h-6" />
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
