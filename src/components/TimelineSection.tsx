import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getTimeline, TimelineRecord } from '@/services/timeline'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'

export function TimelineSection() {
  const { locale, t } = useLanguage()
  const [items, setItems] = useState<TimelineRecord[]>([])

  useEffect(() => {
    getTimeline()
      .then(setItems)
      .catch(() => {})
  }, [])

  return (
    <section id="timeline" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_mission')}
            subtitle={t('timeline_subtitle')}
            title={t('timeline_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
            {items.map((item) => {
              const title = item[`title_${locale}` as keyof TimelineRecord] || item.title_pt
              const desc =
                item[`description_${locale}` as keyof TimelineRecord] || item.description_pt
              return (
                <div key={item.id} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-purple-600 border-2 border-cyan-400 rotate-45 group-hover:scale-125 transition-transform" />
                  <TechPanel className="p-4 sm:p-5">
                    <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                      [{item.year}]
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#EDEDED] mb-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{desc}</p>
                  </TechPanel>
                </div>
              )
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
