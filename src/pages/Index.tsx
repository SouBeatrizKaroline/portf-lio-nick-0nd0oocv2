import { AtmosphericBackground } from '@/components/AtmosphericBackground'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { TimelineSection } from '@/components/TimelineSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { GameSystemsSection } from '@/components/GameSystemsSection'
import { GameJamsSection } from '@/components/GameJamsSection'
import { CertificatesSection } from '@/components/CertificatesSection'
import { SkillRegistrySection } from '@/components/SkillRegistrySection'
import { GithubSection } from '@/components/GithubSection'
import { ItchSection } from '@/components/ItchSection'
import { ContactSection } from '@/components/ContactSection'
import { EndScreen } from '@/components/EndScreen'

export default function Index() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#EDEDED]">
      <AtmosphericBackground />

      <div className="relative z-10 space-y-4">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ExperienceSection />
        <ProjectsSection />
        <GameSystemsSection />
        <GameJamsSection />
        <CertificatesSection />
        <GithubSection />
        <ItchSection />
        <SkillRegistrySection />
        <ContactSection />
        <EndScreen />
      </div>
    </div>
  )
}
