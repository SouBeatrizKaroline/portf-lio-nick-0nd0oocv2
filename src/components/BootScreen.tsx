import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface BootScreenProps {
  onComplete: () => void
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  const bootLines = [
    t('boot_line_1'),
    t('boot_line_2'),
    t('boot_line_3'),
    t('boot_line_4'),
    t('boot_line_5'),
  ]

  useEffect(() => {
    const interval = reduced ? 120 : 380
    let currentLine = 0
    const lineInterval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setLines((prev) => [...prev, bootLines[currentLine]])
        setProgress(Math.round(((currentLine + 1) / bootLines.length) * 100))
        currentLine++
      } else {
        clearInterval(lineInterval)
        setTimeout(onComplete, reduced ? 150 : 500)
      }
    }, interval)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onComplete()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      clearInterval(lineInterval)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onComplete, reduced])

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808] p-6 sm:p-8 text-[#EDEDED] font-mono select-none cursor-pointer holo-grid"
    >
      <div className="max-w-2xl space-y-2">
        <div className="text-xs text-purple-400 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 animate-pulse" />
          [BOOT SEQUENCE INITIATED]
        </div>
        {lines.map((line, idx) => (
          <div key={idx} className="text-sm flex items-center gap-2 animate-fade-in">
            <span className="text-cyan-400">&gt;</span>
            <span>{line}</span>
            <span className="text-green-400 ml-auto text-xs opacity-60">OK</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl mx-auto space-y-3">
        <div className="flex justify-between text-xs text-gray-400">
          <span>LOADING SYSTEM</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-[#141418] border border-[#1a1a22] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center text-xs text-gray-500 animate-pulse">{t('boot_skip')}</div>
      </div>
    </div>
  )
}
