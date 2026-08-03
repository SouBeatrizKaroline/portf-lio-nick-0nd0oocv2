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

export const getProjectBySlug = (slug: string) =>
  pb.collection<ProjectRecord>('projects').getFirstListItem(`slug="${slug}"`)
