import { createContext, useContext, useState, ReactNode } from 'react'
import { toast } from '@/components/ui/use-toast'
import { Trophy } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
}

interface AchievementContextType {
  unlocked: string[]
  unlockAchievement: (id: string, title: string, description: string) => void
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined)

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('unlocked_achievements')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const unlockAchievement = (id: string, title: string, description: string) => {
    if (unlocked.includes(id)) return
    const next = [...unlocked, id]
    setUnlocked(next)
    localStorage.setItem('unlocked_achievements', JSON.stringify(next))

    toast({
      title: `🏆 ${title}`,
      description: description,
      className:
        'bg-[#181818] border-2 border-purple-500 text-[#EDEDED] font-mono shadow-[0_0_15px_rgba(139,92,246,0.3)]',
    })
  }

  return (
    <AchievementContext.Provider value={{ unlocked, unlockAchievement }}>
      {children}
    </AchievementContext.Provider>
  )
}

export function useAchievements() {
  const context = useContext(AchievementContext)
  if (!context) throw new Error('useAchievements must be used within AchievementProvider')
  return context
}
