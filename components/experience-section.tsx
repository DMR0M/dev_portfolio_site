"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
}

const titleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

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

export function ExperienceSection() {
  const [openModalId, setOpenModalId] = useState<number | null>(null)

  const experiences = [
    {
      id: 1,
      role: "Software Engineer II",
      company: "Tsukiden Global Solutions Inc.",
      period: "2022 - 2025",
      description:
        "From planning to deployment, I persevered through every phase of the software development lifecycle—designing scalable solutions, engineering core features, fixing critical bugs, and testing thoroughly to ensure product reliability. I take pride in the positive feedback and satisfaction received from clients who continue to trust the software I’ve helped build.",
      technologies: ["Java", "Python", "SQL", "PostgreSQL", "SpringBoot", "Hibernate", "Linux", "Shell Scripting"],
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Uplift Code Camp",
      period: "2024 - 2025",
      description:
        "Completed an immersive full-stack web development bootcamp where I honed my frontend and backend skills using modern web technologies. I built multiple projects using the MERN stack, applying best practices in coding, component design, and RESTful API development.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "REST APIs", "HTML/CSS", "Javascript", "Firebase"],
      hasCertificate: true,
      certificatePDF: "/RRADM_FSW_Certificate_of_Completion_2025.pdf",
    },
  ]

  return (
    <section id="experience" className="py-20 container relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center items-center gap-2">
          Professional Experience
          <motion.span
            variants={rocketVariants}
            initial="initial"
            animate="animate"
          >
            <Rocket className="text-primary w-6 h-6" />
          </motion.span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My career journey and the companies and programs that have shaped my engineering path.
        </p>
      </motion.div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative flex items-start md:justify-center"
          >
            <div className="absolute left-0 md:left-1/2 mt-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-primary bg-primary shadow-sm"></div>


            <Card className={`w-full md:w-[calc(50%-2.5rem)] border border-gray-200 shadow-sm ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {experience.hasCertificate && (
                  <Dialog
                    open={openModalId === experience.id}
                    onOpenChange={() => setOpenModalId(openModalId === experience.id ? null : experience.id)}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline">VIEW CERTIFICATE</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                      <DialogHeader>
                        <DialogTitle>Certificate of Completion (PDF)</DialogTitle>
                      </DialogHeader>
                      <div className="w-full h-[75vh]">
                        <iframe
                          src={experience.certificatePDF}
                          width="100%"
                          height="100%"
                          className="rounded-md"
                          title="Bootcamp Certificate"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
