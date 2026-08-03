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

  const categoryOrder: Array<SkillRecord['category']> = [
    'game_development',
    'languages',
    'backend',
    'engines',
    'tools',
  ]

  const categoryLabels: Record<string, string> = {
    game_development: t('skills_cat_game_dev'),
    languages: t('skills_cat_languages'),
    backend: t('skills_cat_backend'),
    engines: t('skills_cat_engines'),
    tools: t('skills_cat_tools'),
  }

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

        <div className="space-y-8">
          {categoryOrder.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat)
            if (catSkills.length === 0) return null
            return (
              <SectionReveal key={cat} delay={catIdx * 80}>
                <div>
                  <h3 className="text-sm font-bold font-mono text-purple-400 mb-4 uppercase tracking-wider">
                    // {categoryLabels[cat] || cat}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {catSkills.map((skill) => {
                      const name =
                        skill[`name_${locale}` as keyof SkillRecord] || skill.name_pt || ''
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
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
