import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getExperience, ExperienceRecord } from '@/services/experience'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Briefcase, Calendar } from 'lucide-react'

export function ExperienceSection() {
  const { t, locale } = useLanguage()
  const [experiences, setExperience] = useState<ExperienceRecord[]>([])

  useEffect(() => {
    getExperience()
      .then(setExperience)
      .catch(() => {})
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="EXPERIENCE_LOG" status="ONLINE">
            <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
              [{t('exp_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-8">
              {t('exp_title')}
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => {
                const role =
                  locale === 'pt' ? exp.role_pt : locale === 'es' ? exp.role_es : exp.role_en
                const desc =
                  locale === 'pt'
                    ? exp.description_pt
                    : locale === 'es'
                      ? exp.description_es
                      : exp.description_en

                return (
                  <div
                    key={exp.id}
                    className="bg-[#111114] border border-[#2a2a35] p-6 space-y-3 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex flex-wrap justify-between items-center text-xs font-mono text-cyan-400">
                      <span className="font-bold text-sm text-[#EDEDED]">{role}</span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-purple-300 font-semibold">
                      {exp.company}
                    </div>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">{desc}</p>
                  </div>
                )
              })}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
