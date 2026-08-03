import pb from '@/lib/pocketbase/client'

export interface GameSystemRecord {
  id: string
  title_pt?: string
  title_en?: string
  title_es?: string
  description_pt?: string
  description_en?: string
  description_es?: string
  icon?: string
  order?: number
}

export const getGameSystems = () =>
  pb.collection<GameSystemRecord>('game_systems').getFullList({ sort: 'order' })
