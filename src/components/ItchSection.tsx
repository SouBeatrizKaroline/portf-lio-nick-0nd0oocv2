import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { useRealtime } from '@/hooks/use-realtime'
import { getItchGames, getCoverUrl, ItchGameRecord } from '@/services/itch-games'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { Play, ExternalLink, Gamepad2 } from 'lucide-react'

export function ItchSection() {
  const { locale, t } = useLanguage()
  const [games, setGames] = useState<ItchGameRecord[]>([])

  const loadData = () => {
    getItchGames()
      .then(setGames)
      .catch(() => {})
  }

  useEffect(() => {
    loadData()
  }, [])

  useRealtime('itch_games', () => {
    loadData()
  })

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_itch')}
            subtitle={t('itch_games_subtitle')}
            title={t('itch_games_title')}
          />
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, idx) => {
            const desc =
              game[`description_${locale}` as keyof ItchGameRecord] || game.description_pt || ''
            const isInternalLink = game.project_url?.startsWith('/')
            return (
              <SectionReveal key={game.id} delay={idx * 80}>
                <TechPanel className="flex flex-col h-full group">
                  <div className="aspect-video bg-[#141418] border-b border-[#1a1a22] overflow-hidden relative">
                    <img
                      src={getCoverUrl(game, game.title || 'game')}
                      alt={game.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60" />
                    <span className="absolute top-3 left-3 bg-[#080808]/80 border border-purple-500/40 text-purple-300 text-[10px] font-mono px-2 py-0.5 uppercase backdrop-blur-sm">
                      [PLAYABLE]
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold font-display text-[#EDEDED] mb-2 group-hover:text-purple-400 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-xs text-gray-300 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {desc}
                    </p>

                    {game.tech && game.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {game.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono bg-[#141418] border border-[#1a1a22] text-gray-400 px-2 py-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2">
                      {game.itch_url && (
                        <a
                          href={game.itch_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 bg-purple-600 hover:bg-purple-500 text-[#EDEDED] font-mono text-xs font-bold px-3 py-2 transition-all flex items-center justify-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          {t('itch_play')}
                        </a>
                      )}
                      {game.project_url && isInternalLink && (
                        <Link
                          to={game.project_url}
                          className="flex-1 border border-purple-500/50 hover:bg-purple-950/40 text-purple-300 font-mono text-xs px-3 py-2 transition-all flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t('itch_view_project')}
                        </Link>
                      )}
                      {game.project_url && !isInternalLink && (
                        <a
                          href={game.project_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 border border-purple-500/50 hover:bg-purple-950/40 text-purple-300 font-mono text-xs px-3 py-2 transition-all flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t('itch_view_project')}
                        </a>
                      )}
                    </div>
                  </div>
                </TechPanel>
              </SectionReveal>
            )
          })}
        </div>

        <SectionReveal delay={200}>
          <div className="text-center mt-10">
            <a
              href="https://pls-nick.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-purple-500/50 hover:bg-purple-950/40 text-purple-300 font-mono text-sm px-6 py-2.5 transition-all"
            >
              <Gamepad2 className="w-4 h-4" />
              {t('itch_title')} →
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
