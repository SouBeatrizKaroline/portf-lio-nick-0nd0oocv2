import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { GITHUB_USERNAME, FALLBACK_REPOS, GithubRepo } from '@/config/github'
import { Star, GitFork, ExternalLink } from 'lucide-react'

export function GithubSection() {
  const { t } = useLanguage()
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`)
      ? fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`)
          .then((res) => {
            if (!res.ok) throw new Error('API Rate Limit')
            return res.json()
          })
          .then((data) => {
            if (Array.isArray(data) && data.length > 0) {
              setRepos(data)
            } else {
              setRepos(FALLBACK_REPOS)
            }
          })
          .catch(() => setRepos(FALLBACK_REPOS))
          .finally(() => setLoading(false))
      : setLoading(false)
  }, [])

  return (
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('github_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('github_title')}
          </h2>
        </div>

        {loading ? (
          <div className="text-center font-mono text-xs text-purple-400 animate-pulse py-8">
            {t('github_syncing')}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#181818] border border-[#2A2A2A] p-4 hover:border-purple-500 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-sm font-bold font-mono text-white mb-2 group-hover:text-purple-400 transition-colors">
                    <span className="truncate">{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 border-t border-[#2A2A2A] pt-2">
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
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
