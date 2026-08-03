import { GameJamsSection } from '@/components/GameJamsSection'
import { ItchSection } from '@/components/ItchSection'

export default function GamesPage() {
  return (
    <div className="pt-24">
      <ItchSection />
      <GameJamsSection />
    </div>
  )
}
