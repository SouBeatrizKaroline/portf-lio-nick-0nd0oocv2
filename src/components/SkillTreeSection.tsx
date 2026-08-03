import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getSkills, SkillRecord } from '@/services/skills'
import { getStack, StackRecord } from '@/services/stack'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Cpu, Code, Layers, Wrench, Terminal, Database } from 'lucide-react'

export function SkillTreeSection() {
  const { t } = useLanguage()
  const [skills, setSkills] = useState<SkillRecord[]>([])
  const [stack, setStack] = useState<StackRecord[]>([])

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch(() => {})
    getStack()
      .then(setStack)
      .catch(() => {})
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="SKILL_MATRIX" status="SYNCED">
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
              [{t('skills_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-8">
              {t('skills_title')}
            </h2>

            {/* Skills grid display */}
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-[#111114] border border-[#2a2a35] p-4 space-y-2 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-200 font-bold">
                      {skill.name_pt || skill.name_en}
                    </span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#080808] border border-[#2a2a35] p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
