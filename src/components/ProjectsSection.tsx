import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { getProjects, ProjectRecord } from '@/services/projects'
import { useRealtime } from '@/hooks/use-realtime'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'

export function ProjectsSection() {
  const { locale, t } = useLanguage()
  const [projects, setProjects] = useState<ProjectRecord[]>([])
  const [filter, setFilter] = useState<string>('all')

  const loadData = () => {
    getProjects()
      .then(setProjects)
      .catch(() => {})
  }

  useEffect(() => {
    loadData()
  }, [])

  useRealtime('projects', () => {
    loadData()
  })

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 px-6 bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_archive')}
            subtitle={t('projects_subtitle')}
            title={t('projects_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="flex justify-center gap-2 font-mono text-xs mb-8">
            {[
              { id: 'all', label: t('projects_all') },
              { id: 'game', label: t('projects_games') },
              { id: 'backend', label: t('projects_backend') },
              { id: 'tool', label: t('projects_tools') },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3 py-1.5 border transition-all uppercase ${
                  filter === btn.id
                    ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-bold'
                    : 'border-[#1a1a22] bg-[#101014] text-gray-400 hover:text-[#EDEDED]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((proj, idx) => {
            const title = proj[`title_${locale}` as keyof ProjectRecord] || proj.title_pt
            const subtitle = proj[`subtitle_${locale}` as keyof ProjectRecord] || proj.subtitle_pt
            const desc = proj[`description_${locale}` as keyof ProjectRecord] || proj.description_pt
            return (
              <SectionReveal key={proj.id} delay={idx * 80}>
                <TechPanel className="flex flex-col justify-between h-full">
                  <div>
                    <div className="aspect-video bg-[#141418] border-b border-[#1a1a22] overflow-hidden relative">
                      <img
                        src={
                          proj.gallery?.[0] ||
                          'https://img.usecurling.com/p/800/450?q=game%20development&color=purple'
                        }
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#080808]/80 border border-purple-500/40 text-purple-300 text-[10px] font-mono px-2 py-0.5 uppercase">
                        [{proj.category}]
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-display text-[#EDEDED] mb-1">
                        {title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-400 mb-3">{subtitle}</div>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.tech?.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono bg-[#141418] border border-[#1a1a22] text-gray-400 px-2 py-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      to={`/project/${proj.slug}`}
                      className="inline-block text-xs font-mono text-purple-400 font-bold hover:text-purple-300 transition-colors"
                    >
                      {t('projects_view')}
                    </Link>
                  </div>
                </TechPanel>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
