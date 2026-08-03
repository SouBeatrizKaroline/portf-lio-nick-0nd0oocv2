import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getSkills, SkillRecord } from '@/services/skills'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'

export function SkillTreeSection() {
  const { locale, t } = useLanguage()
  const [skills, setSkills] = useState<SkillRecord[]>([])

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch(() => {})
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_skills')}
            subtitle={t('skills_subtitle')}
            title={t('skills_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill) => {
              const name = skill[`name_${locale}` as keyof SkillRecord] || skill.name_pt
              const level = skill.level || 80
              return (
                <TechPanel key={skill.id} className="p-4 font-mono">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-gray-200 font-bold">{name}</span>
                    <span className="text-purple-400">{level}%</span>
                  </div>
                  <div className="h-2 bg-[#080808] border border-[#1a1a22] p-0.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </TechPanel>
              )
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
