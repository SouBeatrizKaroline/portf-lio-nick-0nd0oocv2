import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getGameSystems, GameSystemRecord } from '@/services/game-systems'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Cpu, Terminal, Shield, Crosshair } from 'lucide-react'

export function GameSystemsSection() {
  const { t, locale } = useLanguage()
  const [systems, setSystems] = useState<GameSystemRecord[]>([])

  useEffect(() => {
    getGameSystems()
      .then(setSystems)
      .catch(() => {})
  }, [])

  return (
    <section id="systems" className="py-20 px-6 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="GAMEPLAY_SYSTEMS" status="READY">
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
              [{t('systems_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-8">
              {t('systems_title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {systems.map((sys) => {
                const title =
                  locale === 'pt' ? sys.title_pt : locale === 'es' ? sys.title_es : sys.title_en
                const desc =
                  locale === 'pt'
                    ? sys.description_pt
                    : locale === 'es'
                      ? sys.description_es
                      : sys.description_en

                return (
                  <div
                    key={sys.id}
                    className="bg-[#111114] border border-[#2a2a35] p-5 space-y-2 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                      <Crosshair className="w-4 h-4" />
                      <span>{title}</span>
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
