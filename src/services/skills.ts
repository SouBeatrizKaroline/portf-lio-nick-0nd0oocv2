import pb from '@/lib/pocketbase/client'

export interface SkillRecord {
  id: string
  category: 'gameplay' | 'backend' | 'languages' | 'engines' | 'frameworks' | 'tools' | 'versioning'
  name_pt?: string
  name_en?: string
  name_es?: string
  level?: number
  order?: number
}

export const getSkills = () => pb.collection<SkillRecord>('skills').getFullList({ sort: 'order' })
