import { useState } from 'react'
import { PixelNick, NickPose } from './PixelNick'
import { HudFrame } from './HudFrame'
import { Sparkles, Code, Cat, Gamepad2, Trophy, Eye, Headphones } from 'lucide-react'

export function NickAvatarShowcase() {
  const [pose, setPose] = useState<NickPose>('idle')
  const [hasGlasses, setHasGlasses] = useState(true)
  const [hasHeadset, setHasHeadset] = useState(true)

  const poses: { id: NickPose; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'idle',
      label: 'Idle / Gamer Dev',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      desc: 'Hero Section & General Pose',
    },
    {
      id: 'coding',
      label: 'Programming',
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      desc: 'Focused at Laptop with Stickers',
    },
    {
      id: 'with-cat',
      label: 'With Cat Mascot',
      icon: <Cat className="w-4 h-4 text-pink-400" />,
      desc: 'Nick & Her Pixel Cat Companion',
    },
    {
      id: 'gaming',
      label: 'Playing Game',
      icon: <Gamepad2 className="w-4 h-4 text-green-400" />,
      desc: 'Holding Retro Controller',
    },
    {
      id: 'achievement',
      label: 'Achievement',
      icon: <Trophy className="w-4 h-4 text-yellow-400" />,
      desc: 'Victory Star & Konami Mode',
    },
  ]

  return (
    <HudFrame label="AVATAR_SYSTEM.NICK_V2" className="p-6 bg-[#0B0B0F]/90">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center justify-center p-6 bg-[#101014] border border-purple-500/30 rounded relative min-w-[220px] w-full lg:w-auto">
          <div className="absolute top-2 left-2 text-[10px] font-mono text-purple-400/60">
            NICK_PIXEL_32BIT
          </div>
          <PixelNick
            pose={pose}
            hasGlasses={hasGlasses}
            hasHeadset={hasHeadset}
            scale={1.5}
            showSpeechBubble
          />
          <div className="mt-4 text-center">
            <span className="text-xs font-mono font-bold text-cyan-400 block uppercase tracking-wider">
              {poses.find((p) => p.id === pose)?.label}
            </span>
            <span className="text-[11px] font-mono text-gray-400">
              {poses.find((p) => p.id === pose)?.desc}
            </span>
          </div>
        </div>

        <div className="flex-1 w-full space-y-4">
          <div>
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
              SELECT CHARACTER POSE:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {poses.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPose(p.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-mono border transition-all text-left ${
                    pose === p.id
                      ? 'border-purple-500 bg-purple-950/50 text-[#EDEDED] shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                      : 'border-[#1a1a22] bg-[#101014] text-gray-400 hover:border-purple-500/40 hover:text-[#EDEDED]'
                  }`}
                >
                  {p.icon}
                  <span className="truncate">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#1a1a22] pt-3">
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
              EQUIPMENT & ACCESSORIES:
            </h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setHasGlasses(!hasGlasses)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono border transition-all ${
                  hasGlasses
                    ? 'border-cyan-500 bg-cyan-950/30 text-cyan-300'
                    : 'border-[#1a1a22] bg-[#101014] text-gray-500'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Dev Glasses: {hasGlasses ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={() => setHasHeadset(!hasHeadset)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono border transition-all ${
                  hasHeadset
                    ? 'border-purple-500 bg-purple-950/30 text-purple-300'
                    : 'border-[#1a1a22] bg-[#101014] text-gray-500'
                }`}
              >
                <Headphones className="w-3.5 h-3.5" />
                Gamer Headset: {hasHeadset ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </HudFrame>
  )
}
