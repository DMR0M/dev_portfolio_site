'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Animated Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello my name is <strong>Rommel Rudolf Dela Merced</strong> and I am a
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-primary inline-flex items-center">Software Engineer</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I am passionate about crafting web applications that combine thoughtful frontend design and solid backend
            architecture to deliver seamless and intuitive user experiences. While I don’t label myself strictly as a
            full-stack developer, I thrive on bridging the gap between user needs and technical implementation to build
            reliable and engaging software.
          </motion.p>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/RommelRudolf_DelaMerced_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/DMR0M" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/rommel-rudolf-dela-merced-943970233/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:rommeldm87@gmail.com">
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Animated Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/profile.jpg?height=320&width=320"
              alt="Developer portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
