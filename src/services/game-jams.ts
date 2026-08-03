import pb from '@/lib/pocketbase/client'

export interface GameJamRecord {
  id: string
  title?: string
  year?: string
  description_pt?: string
  description_en?: string
  description_es?: string
  images?: string[]
  links?: Array<{ label: string; url: string }>
  order?: number
}

export const getGameJams = () =>
  pb.collection<GameJamRecord>('game_jam').getFullList({ sort: 'order' })
