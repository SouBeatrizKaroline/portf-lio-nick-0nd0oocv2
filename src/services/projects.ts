import pb from '@/lib/pocketbase/client'

export interface ProjectRecord {
  id: string
  slug: string
  title_pt: string
  title_en: string
  title_es: string
  subtitle_pt?: string
  subtitle_en?: string
  subtitle_es?: string
  description_pt?: string
  description_en?: string
  description_es?: string
  content_pt?: string
  content_en?: string
  content_es?: string
  problem_pt?: string
  problem_en?: string
  problem_es?: string
  solution_pt?: string
  solution_en?: string
  solution_es?: string
  project_role_pt?: string
  project_role_en?: string
  project_role_es?: string
  impact_pt?: string
  impact_en?: string
  impact_es?: string
  awards?: string[]
  client?: string
  duration?: string
  team_size?: string
  category: 'game' | 'backend' | 'tool' | 'experiment'
  tech?: string[]
  cover_image?: string
  gallery?: string[]
  video_url?: string
  github_url?: string
  itch_url?: string
  demo_url?: string
  featured?: boolean
  order?: number
}

export const getProjects = () =>
  pb.collection<ProjectRecord>('projects').getFullList({ sort: 'order' })

export const getFeaturedProjects = () =>
  pb.collection<ProjectRecord>('projects').getFullList({
    sort: 'order',
    filter: 'featured = true',
  })

export const getProjectBySlug = (slug: string) =>
  pb.collection<ProjectRecord>('projects').getFirstListItem(`slug="${slug}"`)

export const getProjectCoverUrl = (project: ProjectRecord, fallbackQuery: string) => {
  if (project.cover_image) {
    return `${import.meta.env.VITE_POCKETBASE_URL}/api/files/projects/${project.id}/${project.cover_image}`
  }
  return `https://img.usecurling.com/p/800/450?q=${encodeURIComponent(fallbackQuery)}&color=purple`
}
