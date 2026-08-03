import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug, ProjectRecord } from '@/services/projects'
import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from '@/components/HudFrame'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLanguage()
  const [project, setProject] = useState<ProjectRecord | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    getProjectBySlug(slug)
      .then(setProject)
      .catch(() => setProject(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center font-mono text-purple-400">
        LOADING PROJECT DATA...
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 max-w-4xl mx-auto text-center font-mono space-y-4">
        <h1 className="text-2xl text-red-400">PROJECT NOT FOUND</h1>
        <Link to="/" className="text-purple-400 hover:underline inline-block">
          ← Return to Home
        </Link>
      </div>
    )
  }

  const title = project[`title_${locale}` as keyof ProjectRecord] || project.title_pt
  const subtitle = project[`subtitle_${locale}` as keyof ProjectRecord] || project.subtitle_pt
  const content = project[`content_${locale}` as keyof ProjectRecord] || project.content_pt

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto bg-[#080808] min-h-screen">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> VOLTAR AO INÍCIO
      </Link>

      <HudFrame label={`PROJECT.${project.slug.toUpperCase()}`} className="p-8 sm:p-10 mb-8">
        <div className="aspect-video bg-[#141418] border border-[#1a1a22] mb-6 overflow-hidden">
          <img
            src={
              project.gallery?.[0] ||
              'https://img.usecurling.com/p/800/450?q=game%20gameplay&color=purple'
            }
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold font-mono text-white mb-2">{title}</h1>
        <div className="text-sm font-mono text-cyan-400 mb-6">{subtitle}</div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-[#141418] border border-purple-900/40 text-purple-300 px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none text-gray-300 font-sans leading-relaxed mb-8">
          <p>{content}</p>
        </div>

        <div className="flex flex-wrap gap-4 border-t border-[#2A2A2A] pt-6 font-mono text-xs">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="bg-[#101014] border border-[#1a1a22] hover:border-purple-500/50 text-[#EDEDED] px-4 py-2 flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" /> Repositório GitHub
            </a>
          )}

          {project.itch_url && (
            <a
              href={project.itch_url}
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-500 text-[#EDEDED] font-bold px-4 py-2 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Jogar no Itch.io
            </a>
          )}
        </div>
      </HudFrame>
    </div>
  )
}
