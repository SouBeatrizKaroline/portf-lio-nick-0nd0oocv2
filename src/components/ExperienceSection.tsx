import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getExperience, ExperienceRecord } from '@/services/experience'

export function ExperienceSection() {
  const { locale, t } = useLanguage()
  const [list, setList] = useState<ExperienceRecord[]>([])

  useEffect(() => {
    getExperience()
      .then(setList)
      .catch(() => {})
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-[#090909]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('exp_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('exp_title')}
          </h2>
        </div>

        <div className="grid gap-6">
          {list.map((item) => {
            const role = item[`role_${locale}` as keyof ExperienceRecord] || item.role_pt
            const desc =
              item[`description_${locale}` as keyof ExperienceRecord] || item.description_pt

            return (
              <div
                key={item.id}
                className="bg-[#101010] border border-[#2A2A2A] p-6 hover:border-purple-500 transition-colors relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold font-mono text-white">{role}</h3>
                    <div className="text-xs font-mono text-purple-400">{item.company}</div>
                  </div>
                  <span className="text-xs font-mono bg-[#181818] border border-[#2A2A2A] px-2.5 py-1 text-cyan-400 self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono bg-[#181818] border border-purple-900/50 text-purple-300 px-2 py-0.5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
