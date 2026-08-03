import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { getProjects, getProjectCoverUrl, ProjectRecord } from '@/services/projects'
import { HudFrame } from './HudFrame'
import { TechPanel } from './TechPanel'
import { SectionReveal } from './SectionReveal'
import { CyberDecal } from './CyberDecals'
import { LazyImage } from './LazyImage'
import { Gamepad2, Code2, ArrowRight, Sparkles, Trophy } from 'lucide-react'

export function ProjectsSection() {
  const { t, locale } = useLanguage()
  const [projects, setProjects] = useState<ProjectRecord[]>([])

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => {})
  }, [])

  const getLocalizedField = (proj: ProjectRecord, base: string) =>
    proj[`${base}_${locale}` as keyof ProjectRecord] as string | undefined

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
                const problem = getLocalizedField(proj, 'problem')
                const solution = getLocalizedField(proj, 'solution')

                return (
                  <TechPanel key={proj.id} className="flex flex-col group">
                    <LazyImage
                      src={getProjectCoverUrl(proj, title)}
                      alt={title}
                      aspectRatio="16/9"
                      className="border-b border-[#1a1a22]"
                      fallbackSrc={`https://img.usecurling.com/p/600/350?q=game%20development&color=purple`}
                    />
                    <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                          <span className="px-2 py-0.5 bg-[#12121A] border border-cyan-500/30 uppercase font-bold">
                            [FILE_TYPE: {proj.category.toUpperCase()}]
                          </span>
                          <div className="flex items-center gap-2">
                            {proj.awards && proj.awards.length > 0 && (
                              <span className="flex items-center gap-0.5 text-yellow-400">
                                <Trophy className="w-3 h-3" /> {proj.awards.length}
                              </span>
                            )}
                            <span className="text-gray-500">SYS_ID: 0x0{proj.order || 1}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold font-display text-[#EDEDED] group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          <span>{title}</span>
                          {proj.featured && (
                            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                          )}
                        </h3>

                        <p className="text-xs text-gray-300 font-sans leading-relaxed line-clamp-2">
                          {sub}
                        </p>

                        {(problem || solution) && (
                          <div className="space-y-1 pt-2 border-t border-[#1a1a22]/50">
                            {problem && (
                              <div className="flex gap-1.5 text-[10px] leading-tight">
                                <span className="text-rose-400/60 font-mono shrink-0">P:</span>
                                <span className="text-gray-500 line-clamp-1">{problem}</span>
                              </div>
                            )}
                            {solution && (
                              <div className="flex gap-1.5 text-[10px] leading-tight">
                                <span className="text-cyan-400/60 font-mono shrink-0">S:</span>
                                <span className="text-gray-500 line-clamp-1">{solution}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {proj.tech && Array.isArray(proj.tech) && (
                        <div className="flex flex-wrap gap-1.5">
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

                      <div className="pt-3 border-t border-[#232330] flex items-center justify-between font-mono text-xs">
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
