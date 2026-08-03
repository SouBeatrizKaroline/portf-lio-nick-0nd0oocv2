import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getGameSystems, GameSystemRecord } from '@/services/game-systems'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { Gamepad2, Cpu, Swords, Bot, Zap, LayoutGrid } from 'lucide-react'

const iconMap: Record<string, any> = { Gamepad2, Cpu, Swords, Bot, Zap, LayoutGrid }

export function GameSystemsSection() {
  const { locale, t } = useLanguage()
  const [systems, setSystems] = useState<GameSystemRecord[]>([])

  useEffect(() => {
    getGameSystems()
      .then(setSystems)
      .catch(() => {})
  }, [])

  return (
    <section id="systems" className="py-20 px-6 bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_console')}
            subtitle={t('systems_subtitle')}
            title={t('systems_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {systems.map((sys) => {
              const title = sys[`title_${locale}` as keyof GameSystemRecord] || sys.title_pt
              const desc =
                sys[`description_${locale}` as keyof GameSystemRecord] || sys.description_pt
              const IconComponent = sys.icon && iconMap[sys.icon] ? iconMap[sys.icon] : Gamepad2
              return (
                <TechPanel key={sys.id} className="p-5 group">
                  <div className="w-10 h-10 bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-[#EDEDED] mb-2">{title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{desc}</p>
                </TechPanel>
              )
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
