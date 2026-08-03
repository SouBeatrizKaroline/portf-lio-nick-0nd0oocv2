import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { PixelNick, NickPose } from './PixelNick'
import { Terminal, Zap, Sparkles, Gamepad2, Code2, ShieldCheck } from 'lucide-react'

export function NickAvatarShowcase() {
  const { t } = useLanguage()
  const [currentPose, setCurrentPose] = useState<NickPose>('idle')
  const [activeTab, setActiveTab] = useState<'stats' | 'specs'>('stats')

  const poses: { id: NickPose; labelKey: string; icon: any }[] = [
    { id: 'idle', labelKey: 'pose_idle', icon: Sparkles },
    { id: 'coding', labelKey: 'pose_coding', icon: Code2 },
    { id: 'with-cat', labelKey: 'pose_with-cat', icon: Sparkles },
    { id: 'gaming', labelKey: 'pose_gaming', icon: Gamepad2 },
    { id: 'achievement', labelKey: 'pose_achievement', icon: ShieldCheck },
  ]

  const characterStats = [
    { label: 'C# / Unity Architecture', level: 95 },
    { label: 'Gameplay Systems & Mechanics', level: 92 },
    { label: 'Backend (ASP.NET & Java)', level: 88 },
    { label: 'Physics & Character Controllers', level: 90 },
    { label: 'Shaders & VFX Optimization', level: 82 },
  ]

  return (
    <div className="relative border border-[#2a2a35] bg-[#1A1A20]/90 backdrop-blur-md p-6 sm:p-8 hud-corners shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      {/* Sci-Fi Decal Tag */}
      <div className="flex items-center justify-between border-b border-[#2a2a35] pb-3 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2 text-cyan-400 font-bold">
          <Terminal className="w-4 h-4" />
          <span>DEVELOPER SPECIFICATIONS // NICK</span>
        </div>
        <div className="text-gray-400 text-[10px] font-mono">CLASS: GAME DEVELOPER</div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Pixel Avatar Persona Frame with Pose Switcher */}
        <div className="lg:col-span-5 relative flex flex-col items-center space-y-4">
          <div className="relative w-full max-w-xs aspect-square bg-[#0D0D14] border-2 border-purple-500/50 p-4 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.25)] rounded-none">
            {/* Pixel Character Persona */}
            <PixelNick pose={currentPose} scale={1.25} animated={true} showSpeechBubble={true} />

            <div className="mt-4 text-center space-y-1">
              <div className="text-sm font-bold font-display text-[#EDEDED] tracking-wider">
                NICOLE (NICK) SILVA
              </div>
              <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
                [{t(`pose_${currentPose}` as any)}]
              </div>
            </div>

            {/* Status Overlay Badge */}
            <div className="mt-2 flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 px-3 py-0.5 text-[10px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>READY FOR MISSION</span>
            </div>
          </div>

          {/* Pose Selector Buttons */}
          <div className="w-full max-w-xs flex flex-wrap justify-center gap-1.5 pt-1">
            {poses.map((p) => {
              const Icon = p.icon
              const isActive = currentPose === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setCurrentPose(p.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono transition-all border ${
                    isActive
                      ? 'bg-purple-600 border-purple-400 text-[#EDEDED] shadow-[0_0_10px_rgba(168,85,247,0.5)] font-bold'
                      : 'bg-[#111114] border-[#2a2a35] text-gray-400 hover:text-cyan-300 hover:border-cyan-500/50'
                  }`}
                  title={t(p.labelKey as any)}
                >
                  <Icon className="w-3 h-3" />
                  <span>{p.id.toUpperCase()}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Character Attributes & Stats Bars */}
        <div className="lg:col-span-7 space-y-6 font-mono">
          <div className="flex border-b border-[#2a2a35] text-xs">
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 uppercase tracking-wider font-bold transition-colors ${
                activeTab === 'stats'
                  ? 'border-b-2 border-cyan-400 text-cyan-400 bg-cyan-950/20'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              System Skills
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 uppercase tracking-wider font-bold transition-colors ${
                activeTab === 'specs'
                  ? 'border-b-2 border-purple-400 text-purple-400 bg-purple-950/20'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Hardware & Engine Specs
            </button>
          </div>

          {activeTab === 'stats' ? (
            <div className="space-y-4">
              {characterStats.map((stat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      {stat.label}
                    </span>
                    <span className="text-cyan-400 font-bold">{stat.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#111114] border border-[#2a2a35] p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-emerald-400 transition-all duration-500"
                      style={{ width: `${stat.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#111114] p-3 border border-[#2a2a35] space-y-1">
                <div className="text-cyan-400 font-bold">PRIMARY ENGINE</div>
                <div className="text-gray-300">Unity 6 / 2022 LTS</div>
              </div>
              <div className="bg-[#111114] p-3 border border-[#2a2a35] space-y-1">
                <div className="text-purple-400 font-bold">CORE LANGUAGE</div>
                <div className="text-gray-300">C# (.NET Core)</div>
              </div>
              <div className="bg-[#111114] p-3 border border-[#2a2a35] space-y-1">
                <div className="text-emerald-400 font-bold">BACKEND STACK</div>
                <div className="text-gray-300">ASP.NET / Java / PB</div>
              </div>
              <div className="bg-[#111114] p-3 border border-[#2a2a35] space-y-1">
                <div className="text-yellow-400 font-bold">SPECIALTY</div>
                <div className="text-gray-300">Gameplay Architecture</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
