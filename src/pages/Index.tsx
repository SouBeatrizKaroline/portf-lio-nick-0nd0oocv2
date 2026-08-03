import { useState } from 'react'
import { BootScreen } from '@/components/BootScreen'
import { AtmosphericBackground } from '@/components/AtmosphericBackground'
import { CustomCursor } from '@/components/CustomCursor'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { TimelineSection } from '@/components/TimelineSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { GameSystemsSection } from '@/components/GameSystemsSection'
import { GameJamsSection } from '@/components/GameJamsSection'
import { CertificatesSection } from '@/components/CertificatesSection'
import { TechTreeSection } from '@/components/TechTreeSection'
import { GithubSection } from '@/components/GithubSection'
import { ItchSection } from '@/components/ItchSection'
import { ContactSection } from '@/components/ContactSection'

export default function Index() {
  const [bootCompleted, setBootCompleted] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#EDEDED]">
      {!bootCompleted && <BootScreen onComplete={() => setBootCompleted(true)} />}

      <AtmosphericBackground />
      <CustomCursor />

      <div className="relative z-10 space-y-4">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ExperienceSection />
        <ProjectsSection />
        <GameSystemsSection />
        <GameJamsSection />
        <CertificatesSection />
        <TechTreeSection />
        <GithubSection />
        <ItchSection />
        <ContactSection />
      </div>
    </div>
  )
}
