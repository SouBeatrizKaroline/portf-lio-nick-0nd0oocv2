import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { TimelineSection } from '@/components/TimelineSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { SkillTreeSection } from '@/components/SkillTreeSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { GameSystemsSection } from '@/components/GameSystemsSection'
import { GameJamsSection } from '@/components/GameJamsSection'
import { CertificatesSection } from '@/components/CertificatesSection'
import { TechTreeSection } from '@/components/TechTreeSection'
import { GithubSection } from '@/components/GithubSection'
import { ItchSection } from '@/components/ItchSection'
import { ContactSection } from '@/components/ContactSection'

export default function Index() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ExperienceSection />
      <SkillTreeSection />
      <ProjectsSection />
      <GameSystemsSection />
      <GameJamsSection />
      <CertificatesSection />
      <TechTreeSection />
      <GithubSection />
      <ItchSection />
      <ContactSection />
    </div>
  )
}
