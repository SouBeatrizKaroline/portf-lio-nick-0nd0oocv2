import pb from '@/lib/pocketbase/client'

export interface TimelineRecord {
  id: string
  year?: string
  title_pt?: string
  title_en?: string
  title_es?: string
  description_pt?: string
  description_en?: string
  description_es?: string
  order?: number
}

export const getTimeline = () =>
  pb.collection<TimelineRecord>('timeline').getFullList({ sort: 'order' })
