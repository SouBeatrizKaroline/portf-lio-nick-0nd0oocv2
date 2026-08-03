import pb from '@/lib/pocketbase/client'

export interface ItchGameRecord {
  id: string
  title?: string
  description_pt?: string
  description_en?: string
  description_es?: string
  cover_image?: string
  itch_url?: string
  project_url?: string
  tech?: string[]
  order?: number
}

export const getItchGames = () =>
  pb.collection<ItchGameRecord>('itch_games').getFullList({ sort: 'order' })

export const getCoverUrl = (game: ItchGameRecord, fallbackQuery: string) => {
  if (game.cover_image) {
    return `${import.meta.env.VITE_POCKETBASE_URL}/api/files/itch_games/${game.id}/${game.cover_image}`
  }
  return `https://img.usecurling.com/p/600/350?q=${encodeURIComponent(fallbackQuery)}&color=purple`
}
