import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getExperience, ExperienceRecord } from '@/services/experience'
import { PixelNick } from './PixelNick'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'

export function ExperienceSection() {
  const { locale, t } = useLanguage()
  const [list, setList] = useState<ExperienceRecord[]>([])

  useEffect(() => {
    getExperience()
      .then(setList)
      .catch(() => {})
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <div className="mb-3">
              <PixelNick pose="coding" scale={0.9} />
            </div>
            <ModuleHeader
              moduleLabel={t('module_experience')}
              subtitle={t('exp_subtitle')}
              title={t('exp_title')}
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="grid gap-6">
            {list.map((item) => {
              const role = item[`role_${locale}` as keyof ExperienceRecord] || item.role_pt
              const desc =
                item[`description_${locale}` as keyof ExperienceRecord] || item.description_pt
              return (
                <TechPanel key={item.id} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold font-display text-[#EDEDED]">{role}</h3>
                      <div className="text-xs font-mono text-purple-400">{item.company}</div>
                    </div>
                    <span className="text-xs font-mono bg-[#141418] border border-[#1a1a22] px-2.5 py-1 text-cyan-400 self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono bg-[#141418] border border-purple-900/40 text-purple-300 px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
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
