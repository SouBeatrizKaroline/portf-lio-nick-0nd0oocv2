import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { getProjects, ProjectRecord } from '@/services/projects'
import { getItchGames, ItchGameRecord } from '@/services/itch-games'
import { HudFrame } from './HudFrame'
import { TechPanel } from './TechPanel'
import { SectionReveal } from './SectionReveal'
import { Gamepad2, ExternalLink, Code2, ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  const { t, locale } = useLanguage()
  const [projects, setProjects] = useState<ProjectRecord[]>([])
  const [itchGames, setItchGames] = useState<ItchGameRecord[]>([])

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => {})
    getItchGames()
      .then(setItchGames)
      .catch(() => {})
  }, [])

  return (
    <section id="projects" className="py-20 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="PROJECT_DATABASE" status="ACTIVE">
            <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
              [{t('projects_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-8">
              {t('projects_title')}
            </h2>

            {/* Projects List Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((proj) => {
                const title =
                  locale === 'pt' ? proj.title_pt : locale === 'es' ? proj.title_es : proj.title_en
                const sub =
                  locale === 'pt'
                    ? proj.subtitle_pt
                    : locale === 'es'
                      ? proj.subtitle_es
                      : proj.subtitle_en

                return (
                  <TechPanel key={proj.id} className="p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                        <span>[MODULE: {proj.category.toUpperCase()}]</span>
                        <span>ORDER #{proj.order || 1}</span>
                      </div>
                      <h3 className="text-lg font-bold font-display text-[#EDEDED]">{title}</h3>
                      <p className="text-xs text-gray-400 font-sans line-clamp-2">{sub}</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to={`/project/${proj.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold"
                      >
                        {t('projects_view')}
                      </Link>

                      {proj.itch_url && (
                        <a
                          href={proj.itch_url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-gray-400 hover:text-purple-400 transition-colors"
                          title="Play on Itch.io"
                        >
                          <Gamepad2 className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </TechPanel>
                )
              })}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
