import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { GITHUB_USERNAME, FALLBACK_REPOS, GithubRepo } from '@/config/github'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { Star, GitFork, ExternalLink } from 'lucide-react'

export function GithubSection() {
  const { t } = useLanguage()
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limit')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setRepos(data)
        else setRepos(FALLBACK_REPOS)
      })
      .catch(() => setRepos(FALLBACK_REPOS))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_github')}
            subtitle={t('github_subtitle')}
            title={t('github_title')}
          />
        </SectionReveal>

        {loading ? (
          <div className="text-center font-mono text-xs text-purple-400 animate-pulse py-8">
            {t('github_syncing')}
          </div>
        ) : (
          <SectionReveal delay={100}>
            <div className="grid md:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <TechPanel key={repo.id} className="p-4 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between text-sm font-bold font-mono text-[#EDEDED] mb-2 group-hover:text-purple-400 transition-colors">
                      <span className="truncate">{repo.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                      {repo.description || 'No description provided.'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 border-t border-[#1a1a22] pt-2">
                    <span className="text-cyan-400">{repo.language || 'Code'}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </TechPanel>
              ))}
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  )
}
