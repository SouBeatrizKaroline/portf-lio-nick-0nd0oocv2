import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BootScreen } from './BootScreen'
import { CustomCursor } from './CustomCursor'
import { ScanlinesOverlay } from './ScanlinesOverlay'
import { DevConsoleModal } from './DevConsoleModal'
import { useKonami } from '@/hooks/use-konami'
import { useAchievements } from '@/hooks/use-achievements'
import { useLanguage } from '@/hooks/use-language'

export default function Layout() {
  const { t } = useLanguage()
  const { unlockAchievement } = useAchievements()
  const [booting, setBooting] = useState(() => {
    return !sessionStorage.getItem('portfolio_booted')
  })
  const [scanlines, setScanlines] = useState(true)
  const [devConsoleOpen, setDevConsoleOpen] = useState(false)

  const handleBootComplete = () => {
    setBooting(false)
    sessionStorage.setItem('portfolio_booted', 'true')
  }

  useKonami(() => {
    setDevConsoleOpen(true)
    unlockAchievement('konami_code', t('ach_title'), t('ach_dev_desc'))
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        unlockAchievement('quest_completed', t('ach_title'), t('ach_quest_desc'))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#090909] text-[#EDEDED] font-sans antialiased selection:bg-purple-500 selection:text-white relative">
      {booting && <BootScreen onComplete={handleBootComplete} />}
      <CustomCursor />
      <ScanlinesOverlay visible={scanlines} />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer
        scanlines={scanlines}
        onToggleScanlines={() => setScanlines(!scanlines)}
        onPressStart={() =>
          unlockAchievement('press_start', 'PRESS START', 'Retro Arcade Mode Activated!')
        }
      />

      <DevConsoleModal isOpen={devConsoleOpen} onClose={() => setDevConsoleOpen(false)} />
    </div>
  )
}
