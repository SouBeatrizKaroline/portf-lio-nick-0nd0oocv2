import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getTimeline, TimelineRecord } from '@/services/timeline'

export function TimelineSection() {
  const { locale, t } = useLanguage()
  const [items, setItems] = useState<TimelineRecord[]>([])

  useEffect(() => {
    getTimeline()
      .then(setItems)
      .catch(() => {})
  }, [])

  return (
    <section id="timeline" className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('timeline_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('timeline_title')}
          </h2>
        </div>

        <div className="relative border-l-2 border-purple-500/40 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {items.map((item) => {
            const title = item[`title_${locale}` as keyof TimelineRecord] || item.title_pt
            const desc =
              item[`description_${locale}` as keyof TimelineRecord] || item.description_pt

            return (
              <div key={item.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-purple-600 border-2 border-cyan-400 rotate-45 group-hover:scale-125 transition-transform" />
                <div className="bg-[#181818] border border-[#2A2A2A] p-4 sm:p-5 hover:border-purple-500 transition-colors">
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                    [{item.year}]
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-mono text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
