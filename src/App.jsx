import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { SkillsSection } from "./components/SkillsSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import "./styles/globals.css"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme-preference">
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
