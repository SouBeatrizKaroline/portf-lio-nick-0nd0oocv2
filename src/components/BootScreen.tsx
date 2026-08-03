import { useState, useEffect, useMemo } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { Terminal, Cpu, ShieldCheck } from 'lucide-react'

interface BootScreenProps {
  onComplete: () => void
}

const BOOT_VARIANTS = [
  [
    'INITIALIZING INTERFACE',
    'AUTHENTICATING DEVELOPER',
    'LOADING GAME SYSTEMS',
    'COMPILING GAMEPLAY MODULES',
    'SYNCING PROJECT DATABASE',
    'ESTABLISHING NETWORK',
  ],
  [
    'INITIALIZING NICK_OS',
    'SYNCHRONIZING DATA',
    'BUILDING EXPERIENCE',
    'LOADING INTERACTIVE MODULES',
    'CONNECTING TO PROJECT DATABASE',
    'VERIFYING SYSTEM INTEGRITY',
    'RENDERING USER INTERFACE',
    'PREPARING GAMEPLAY SYSTEMS',
  ],
]

const FINAL_LINES = ['WELCOME, USER.', 'ACCESS GRANTED.']

export function BootScreen({ onComplete }: BootScreenProps) {
  const reduced = useReducedMotion()
  const variant = useMemo(() => BOOT_VARIANTS[Math.floor(Math.random() * BOOT_VARIANTS.length)], [])
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [showFinal, setShowFinal] = useState(false)
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const lineDelay = reduced ? 80 : 160
    let idx = 0
    const interval = setInterval(() => {
      if (idx < variant.length) {
        setVisibleLines((prev) => [...prev, variant[idx]])
        setProgress(Math.round(((idx + 1) / variant.length) * 100))
        idx++
      } else {
        clearInterval(interval)
        setShowFinal(true)
        setProgress(100)
        setTimeout(() => setFading(true), reduced ? 200 : 500)
        setTimeout(onComplete, reduced ? 400 : 900)
      }
    }, lineDelay)
    return () => clearInterval(interval)
  }, [onComplete, reduced, variant])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#080808] holo-grid overflow-hidden transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-8 left-8 flex items-center gap-2 text-xs font-mono">
        <Terminal className="w-4 h-4 text-cyan-400" />
        <span className="text-cyan-400 font-bold tracking-wider">NICK_OS v2.5</span>
        <span className="text-gray-600">/</span>
        <span className="text-purple-400">BOOT SEQUENCE</span>
      </div>
      <div className="absolute top-8 right-8 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        SYS_ONLINE
      </div>

      <div className="max-w-md w-full px-6 space-y-1.5 font-mono">
        <div className="text-[10px] text-purple-400 mb-4 flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 animate-pulse" />
          <span>SYSTEM INITIALIZATION</span>
        </div>

        {visibleLines.map((line, idx) => (
          <div key={idx} className="text-xs flex items-center gap-2 animate-fade-in text-gray-300">
            <span className="text-cyan-400">{'>'}</span>
            <span>{line}</span>
            <span className="ml-auto text-emerald-400 text-[9px] px-1.5 py-0.5 bg-emerald-950/40 border border-emerald-500/20">
              OK
            </span>
          </div>
        ))}

        {showFinal && (
          <div className="pt-4 space-y-1 animate-fade-in">
            {FINAL_LINES.map((line, idx) => (
              <div key={idx} className="text-sm flex items-center gap-2 text-cyan-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-glow-cyan">{line}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-8 max-w-md w-full px-6 space-y-2">
        <div className="flex justify-between text-[9px] font-mono text-gray-500">
          <span>COMPILING ASSETS</span>
          <span className="text-purple-400 font-bold">{progress}%</span>
        </div>
        <div className="h-1 w-full bg-[#111114] border border-[#2a2a35] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-emerald-400 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
