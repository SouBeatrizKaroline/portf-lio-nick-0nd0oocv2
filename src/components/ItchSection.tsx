import { useLanguage } from '@/hooks/use-language'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { Gamepad2, Play } from 'lucide-react'

export function ItchSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_itch')}
            subtitle={t('itch_subtitle')}
            title={t('itch_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <TechPanel className="p-8 max-w-xl mx-auto flex flex-col items-center" hover={false}>
            <Gamepad2 className="w-12 h-12 text-purple-400 mb-4 animate-bounce" />
            <h3 className="text-lg font-bold font-display text-[#EDEDED] mb-2">
              Nicole Maira on Itch.io
            </h3>
            <p className="text-xs font-mono text-gray-400 mb-6">
              Explore and play games, mechanics prototypes, and Game Jam projects directly in your
              browser.
            </p>
            <a
              href="https://nicolemaira.itch.io"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-500 text-[#EDEDED] font-mono px-6 py-2.5 text-sm font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              {t('itch_play')}
            </a>
          </TechPanel>
        </SectionReveal>
      </div>
    </section>
  )
}
