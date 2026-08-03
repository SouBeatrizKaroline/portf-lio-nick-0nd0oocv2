import pb from '@/lib/pocketbase/client'

export interface ExperienceRecord {
  id: string
  role_pt: string
  role_en: string
  role_es: string
  company?: string
  period?: string
  description_pt?: string
  description_en?: string
  description_es?: string
  tags?: string[]
  order?: number
}

export const getExperience = () =>
  pb.collection<ExperienceRecord>('experience').getFullList({ sort: 'order' })
