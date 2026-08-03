import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getSkills, SkillRecord } from '@/services/skills'

export function SkillTreeSection() {
  const { locale, t } = useLanguage()
  const [skills, setSkills] = useState<SkillRecord[]>([])

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch(() => {})
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('skills_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('skills_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const name = skill[`name_${locale}` as keyof SkillRecord] || skill.name_pt
            const level = skill.level || 80

            return (
              <div key={skill.id} className="bg-[#181818] border border-[#2A2A2A] p-4 font-mono">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-200 font-bold">{name}</span>
                  <span className="text-purple-400">{level}%</span>
                </div>
                <div className="h-2 bg-[#090909] border border-[#2A2A2A] p-0.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
