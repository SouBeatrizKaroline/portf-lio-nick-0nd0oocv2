import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { Terminal, Shield, Cpu, Activity } from 'lucide-react'

interface BootScreenProps {
  onComplete: () => void
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  // Exact required sequence from acceptance criteria
  const bootLines = [
    t('boot_line_1'),
    t('boot_line_2'),
    t('boot_line_3'),
    t('boot_line_4'),
    t('boot_line_5'),
    t('boot_line_6'),
    t('boot_line_7'),
  ]

  useEffect(() => {
    const delay = reduced ? 100 : 250
    let currentLine = 0

    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setLines((prev) => [...prev, bootLines[currentLine]])
        setProgress(Math.round(((currentLine + 1) / bootLines.length) * 100))
        currentLine++
      } else {
        clearInterval(interval)
        setTimeout(onComplete, reduced ? 100 : 400)
      }
    }, delay)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onComplete()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onComplete, reduced])

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808] p-6 sm:p-10 text-[#EDEDED] font-mono select-none cursor-pointer holo-grid overflow-hidden border-2 border-cyan-500/20"
    >
      {/* HUD Header Telemetry */}
      <div className="flex items-center justify-between border-b border-[#1A1A20] pb-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-bold tracking-wider">NICK_OS // VER 3.2.0</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
          <span className="hidden sm:inline">MEM: 64MB OK</span>
          <span className="hidden sm:inline">CPU: 3.8GHZ</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            SYS_ONLINE
          </span>
        </div>
      </div>

      {/* Main Terminal Output */}
      <div className="max-w-3xl my-auto space-y-3 font-mono py-8">
        <div className="text-xs text-purple-400 mb-6 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>[SYSTEM INITIALIZATION IN PROGRESS]</span>
        </div>

        {lines.map((line, idx) => (
          <div
            key={idx}
            className="text-sm sm:text-base flex items-center gap-3 animate-fade-in text-[#EDEDED]"
          >
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span
              className={idx === lines.length - 1 ? 'text-cyan-300 font-bold' : 'text-gray-300'}
            >
              {line}
            </span>
            <span className="text-emerald-400 ml-auto text-xs font-semibold px-2 py-0.5 bg-emerald-950/40 border border-emerald-500/30 rounded">
              OK
            </span>
          </div>
        ))}
      </div>

      {/* Progress Footer */}
      <div className="w-full max-w-xl mx-auto space-y-3 pt-4">
        <div className="flex justify-between text-xs text-gray-400 font-mono">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Activity className="w-3.5 h-3.5 animate-spin" />
            COMPILING ASSETS
          </span>
          <span className="text-purple-400 font-bold">{progress}%</span>
        </div>
        <div className="h-2 w-full bg-[#111114] border border-[#2a2a35] rounded-none overflow-hidden relative p-0.5">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-emerald-400 transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center text-xs text-gray-500 font-mono animate-pulse">
          {t('boot_skip')}
        </div>
      </div>
    </div>
  )
}
