import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getGameSystems, GameSystemRecord } from '@/services/game-systems'
import { Gamepad2, Cpu, Swords, Bot, Zap, LayoutGrid } from 'lucide-react'

const iconMap: Record<string, any> = {
  Gamepad2,
  Cpu,
  Swords,
  Bot,
  Zap,
  LayoutGrid,
}

export function GameSystemsSection() {
  const { locale, t } = useLanguage()
  const [systems, setSystems] = useState<GameSystemRecord[]>([])

  useEffect(() => {
    getGameSystems()
      .then(setSystems)
      .catch(() => {})
  }, [])

  return (
    <section id="systems" className="py-20 px-6 bg-[#101010]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('systems_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('systems_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {systems.map((sys) => {
            const title = sys[`title_${locale}` as keyof GameSystemRecord] || sys.title_pt
            const desc =
              sys[`description_${locale}` as keyof GameSystemRecord] || sys.description_pt
            const IconComponent = sys.icon && iconMap[sys.icon] ? iconMap[sys.icon] : Gamepad2

            return (
              <div
                key={sys.id}
                className="bg-[#181818] border border-[#2A2A2A] p-5 hover:border-cyan-400 transition-all group"
              >
                <div className="w-10 h-10 bg-purple-950/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-4 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-mono text-white mb-2">{title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
