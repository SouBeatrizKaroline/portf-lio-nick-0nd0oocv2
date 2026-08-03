import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getExperience, ExperienceRecord } from '@/services/experience'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Calendar, Briefcase, Zap, CheckCircle2 } from 'lucide-react'

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

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-purple-500/30 to-transparent" />

              <div className="space-y-6">
                {experiences.map((exp, idx) => {
                  const role =
                    locale === 'pt' ? exp.role_pt : locale === 'es' ? exp.role_es : exp.role_en
                  const desc =
                    locale === 'pt'
                      ? exp.description_pt
                      : locale === 'es'
                        ? exp.description_es
                        : exp.description_en

                  return (
                    <div key={exp.id} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 border-2 border-cyan-400 rotate-45 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
                      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-[#2a2a35]" />

                      <div className="bg-[#111114] border border-[#2a2a35] p-5 sm:p-6 space-y-3 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all group">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-cyan-400" />
                              <span className="font-bold text-sm text-[#EDEDED] group-hover:text-cyan-300 transition-colors">
                                {role}
                              </span>
                            </div>
                            <div className="text-xs font-mono text-purple-300 font-semibold flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-purple-500 rounded-full" />
                              {exp.company}
                            </div>
                          </div>
                          <span className="text-gray-400 flex items-center gap-1 text-[10px] font-mono bg-[#0D0D14] border border-[#232330] px-2 py-1">
                            <Calendar className="w-3 h-3 text-purple-400" />
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-xs text-gray-300 font-sans leading-relaxed">{desc}</p>

                        {exp.tags && exp.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1a1a22]">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-0.5 text-[9px] font-mono bg-[#0D0D14] border border-[#232330] text-gray-400 px-1.5 py-0.5"
                              >
                                <CheckCircle2 className="w-2 h-2 text-emerald-500/50" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1 text-[9px] font-mono text-gray-600">
                            <Zap className="w-2.5 h-2.5 text-cyan-500/50" />
                            <span>EXP_NODE_{String(idx + 1).padStart(2, '0')}</span>
                          </div>
                          <div className="text-[9px] font-mono text-emerald-500/50">
                            ◆ MILESTONE_LOGGED
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
