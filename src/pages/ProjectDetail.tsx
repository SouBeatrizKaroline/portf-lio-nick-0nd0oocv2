import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug, ProjectRecord } from '@/services/projects'
import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from '@/components/HudFrame'
import { ArrowLeft, Github, ExternalLink, Play, Monitor } from 'lucide-react'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, t } = useLanguage()
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
  const contentParagraphs = (content || '').split('\n\n').filter((p) => p.trim())

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto bg-[#080808] min-h-screen">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> {t('nav_home')}
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

        <div className="flex items-center gap-2 mb-4">
          <span className="bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[10px] font-mono px-2 py-0.5 uppercase">
            [{project.category}]
          </span>
          {project.featured && (
            <span className="bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono px-2 py-0.5 uppercase">
              ★ Featured
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold font-mono text-white mb-2">{title}</h1>
        <div className="text-sm font-mono text-cyan-400 mb-6">{subtitle}</div>

        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-[#141418] border border-purple-900/40 text-purple-300 px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert max-w-none text-gray-300 font-sans leading-relaxed mb-8">
          {contentParagraphs.map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))}
        </div>

        {project.video_url && (
          <div className="mb-8">
            <div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider">
              // Video
            </div>
            <div className="aspect-video bg-[#141418] border border-[#1a1a22] overflow-hidden">
              <iframe
                src={project.video_url}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {project.gallery && project.gallery.length > 1 && (
          <div className="mb-8">
            <div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider">
              // Gallery
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${title} screenshot ${idx + 2}`}
                  loading="lazy"
                  className="w-full h-40 object-cover border border-[#1a1a22]"
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4 border-t border-[#1a1a22] pt-6 font-mono text-xs">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="bg-[#101014] border border-[#1a1a22] hover:border-purple-500/50 text-[#EDEDED] px-4 py-2 flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}
          {project.itch_url && (
            <a
              href={project.itch_url}
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-500 text-[#EDEDED] font-bold px-4 py-2 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" /> Itch.io
            </a>
          )}
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noreferrer"
              className="bg-[#101014] border border-[#1a1a22] hover:border-cyan-500/50 text-cyan-300 px-4 py-2 flex items-center gap-2 transition-colors"
            >
              <Monitor className="w-4 h-4" /> Demo
            </a>
          )}
        </div>
      </HudFrame>
    </div>
  )
}
