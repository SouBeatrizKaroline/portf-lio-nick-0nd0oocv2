export const GITHUB_USERNAME = 'nicolemaira'

export interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  pushed_at: string
}

export const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 1,
    name: 'metroidvania-2d',
    description:
      'Unity 2D Metroidvania prototype featuring Coyote Time, State Machine and URP Lighting.',
    html_url: 'https://github.com/nicolemaira/metroidvania-2d',
    stargazers_count: 24,
    forks_count: 5,
    language: 'C#',
    pushed_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'aspnet-management',
    description: 'Enterprise Web System in ASP.NET Core MVC with Entity Framework and SQL Server.',
    html_url: 'https://github.com/nicolemaira/aspnet-management',
    stargazers_count: 18,
    forks_count: 3,
    language: 'C#',
    pushed_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'csharp-interpreter',
    description: 'Custom lexical and syntactic parser tool written in C# .NET.',
    html_url: 'https://github.com/nicolemaira/csharp-interpreter',
    stargazers_count: 12,
    forks_count: 2,
    language: 'C#',
    pushed_at: new Date().toISOString(),
  },
]
