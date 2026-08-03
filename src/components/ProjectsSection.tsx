import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { getProjects, ProjectRecord } from '@/services/projects'
import { HudFrame } from './HudFrame'
import { TechPanel } from './TechPanel'
import { SectionReveal } from './SectionReveal'
import { CyberDecal } from './CyberDecals'
import { Gamepad2, ExternalLink, Code2, ArrowRight, Sparkles } from 'lucide-react'

export function ProjectsSection() {
  const { t, locale } = useLanguage()
  const [projects, setProjects] = useState<ProjectRecord[]>([])

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => {})
  }, [])

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808] relative">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="DATA_MODULES // PROJECT_DATABASE" status="ACTIVE">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
                  [{t('projects_subtitle') || 'COMMERCIAL & INDIE WORK'}]
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED]">
                  {t('projects_title') || 'FEATURED PROJECTS'}
                </h2>
              </div>

              <CyberDecal variant="barcode" text="MODULE_COUNT // 004" />
            </div>

            {/* Projects Grid */}
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
                  <TechPanel
                    key={proj.id}
                    className="p-6 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                        <span className="px-2 py-0.5 bg-[#12121A] border border-cyan-500/30 uppercase font-bold">
                          [FILE_TYPE: {proj.category.toUpperCase()}]
                        </span>
                        <span className="text-gray-500">SYS_ID: 0x0{proj.order || 1}</span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-[#EDEDED] group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <span>{title}</span>
                        {proj.featured && (
                          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                        )}
                      </h3>

                      <p className="text-xs text-gray-300 font-sans leading-relaxed line-clamp-3">
                        {sub}
                      </p>

                      {/* Tech Chips */}
                      {proj.tech && Array.isArray(proj.tech) && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tech.map((tag: string) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono bg-[#111116] border border-[#232330] text-purple-300 px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#232330] flex items-center justify-between font-mono text-xs">
                      <Link
                        to={`/project/${proj.slug}`}
                        className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold group/link"
                      >
                        <span>INSPECT MODULE</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {proj.itch_url && (
                          <a
                            href={proj.itch_url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-purple-950/40 border border-purple-500/40 text-purple-300 hover:border-purple-400 hover:text-white transition-all"
                            title="Play on Itch.io"
                          >
                            <Gamepad2 className="w-4 h-4" />
                          </a>
                        )}

                        {proj.github_url && (
                          <a
                            href={proj.github_url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-[#121218] border border-[#2a2a38] text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                            title="GitHub Source"
                          >
                            <Code2 className="w-4 h-4" />
                          </a>
                        )}
                      </div>
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
