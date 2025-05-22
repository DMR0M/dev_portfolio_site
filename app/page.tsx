import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { StarsBackground } from "@/components/stars-background";
import { DayBackground } from "@/components/day-background";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background changes based on ThemeProvider day and night setting */}
      <StarsBackground />
      <DayBackground />

      {/* Content Stack */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
