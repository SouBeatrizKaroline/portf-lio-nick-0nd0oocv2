import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getGameJams, GameJamRecord } from '@/services/game-jams'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { LazyImage } from './LazyImage'
import { PixelCoin } from './PixelDetails'

export function GameJamsSection() {
  const { locale, t } = useLanguage()
  const [jams, setJams] = useState<GameJamRecord[]>([])

  useEffect(() => {
    getGameJams()
      .then(setJams)
      .catch(() => {})
  }, [])

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_gamejam')}
            subtitle={t('jam_subtitle')}
            title={t('jam_title')}
          />
          <div className="text-center text-xs font-mono text-cyan-400 italic mb-12 -mt-6">
            {t('jam_quote')}
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="grid md:grid-cols-2 gap-6">
            {jams.map((jam) => {
              const desc = jam[`description_${locale}` as keyof GameJamRecord] || jam.description_pt
              return (
                <TechPanel key={jam.id} className="p-5">
                  <LazyImage
                    src={
                      jam.images?.[0] ||
                      'https://img.usecurling.com/p/600/350?q=pixel%20game%20jam&color=purple'
                    }
                    alt={jam.title || 'Game jam project'}
                    className="border border-[#1a1a22] mb-4"
                    aspectRatio="3/2"
                  />
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1 flex items-center gap-1">
                    [{jam.year}] <PixelCoin className="opacity-60" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#EDEDED] mb-2">
                    {jam.title}
                  </h3>
                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">{desc}</p>
                  {jam.links && jam.links.length > 0 && (
                    <div className="flex gap-2 font-mono text-xs">
                      {jam.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-purple-400 hover:underline"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </TechPanel>
              )
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
