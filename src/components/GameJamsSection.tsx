import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getGameJams, GameJamRecord } from '@/services/game-jams'

export function GameJamsSection() {
  const { locale, t } = useLanguage()
  const [jams, setJams] = useState<GameJamRecord[]>([])

  useEffect(() => {
    getGameJams()
      .then(setJams)
      .catch(() => {})
  }, [])

  return (
    <section className="py-20 px-6 bg-[#090909]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('jam_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED] mb-2">
            {t('jam_title')}
          </h2>
          <div className="text-xs font-mono text-cyan-400 italic">{t('jam_quote')}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jams.map((jam) => {
            const desc = jam[`description_${locale}` as keyof GameJamRecord] || jam.description_pt

            return (
              <div
                key={jam.id}
                className="bg-[#101010] border border-[#2A2A2A] p-5 hover:border-purple-500 transition-colors"
              >
                <img
                  src={
                    jam.images?.[0] ||
                    'https://img.usecurling.com/p/600/350?q=pixel%20game%20jam&color=purple'
                  }
                  alt={jam.title}
                  className="w-full h-40 object-cover border border-[#2A2A2A] mb-4"
                />
                <div className="text-xs font-mono text-cyan-400 font-bold mb-1">[{jam.year}]</div>
                <h3 className="text-lg font-bold font-mono text-white mb-2">{jam.title}</h3>
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
