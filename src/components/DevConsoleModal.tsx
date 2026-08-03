import { useState } from 'react'
import { PixelNick } from './PixelNick'
import { X, Terminal } from 'lucide-react'

interface DevConsoleModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DevConsoleModal({ isOpen, onClose }: DevConsoleModalProps) {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState<string[]>([
    '🏆 ACHIEVEMENT UNLOCKED: Konami Master!',
    'DEVELOPER MODE ACTIVATED via Konami Code (↑↑↓↓←→←→BA)',
    "Welcome to Nick's Secret Dev Console!",
    'Type "help" for available easter egg commands.',
  ])

  if (!isOpen) return null

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = command.trim().toLowerCase()
    if (!cmd) return

    let response = ''
    if (cmd === 'help') {
      response = 'Available commands: cat, stats, cheat, clear'
    } else if (cmd === 'cat') {
      response = '🐈 The cat purrs softly and grants +10 Mana!'
    } else if (cmd === 'stats') {
      response = 'HP: 100% | MP: 100% | Unity: MAX | C#: MAX | Coffee Level: 99%'
    } else if (cmd === 'cheat') {
      response = 'God Mode: Enabled! All projects unlocked.'
    } else if (cmd === 'clear') {
      setHistory([])
      setCommand('')
      return
    } else {
      response = `Command not recognized: "${cmd}". Type "help".`
    }

    setHistory((prev) => [...prev, `> ${command}`, response])
    setCommand('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg border-2 border-purple-500/60 bg-[#0B0B0F] p-4 font-mono text-xs text-gray-200 shadow-[0_0_25px_rgba(139,92,246,0.4)]">
        <div className="flex items-center justify-between border-b border-[#1a1a22] pb-2 mb-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold">
            <Terminal className="w-4 h-4" />
            DEV_CONSOLE.EXE
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-[#EDEDED]">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="h-48 overflow-y-auto space-y-1 mb-3 pr-2 scrollbar-thin">
          {history.map((line, idx) => (
            <div key={idx} className={line.startsWith('>') ? 'text-cyan-400' : 'text-gray-300'}>
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleCommandSubmit} className="flex items-center gap-2">
          <PixelNick pose="achievement" scale={0.7} />
          <span className="text-purple-400">&gt;</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type command (e.g. stats, cat)..."
            className="flex-1 bg-[#101014] border border-[#1a1a22] px-2 py-1 text-[#EDEDED] focus:outline-none focus:border-purple-500 transition-colors"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}
