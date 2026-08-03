import { Cpu, Wifi, Activity, Zap } from 'lucide-react'

export function HeroFloatingPanels() {
  return (
    <>
      <div
        className="hidden xl:block absolute left-2 top-1/2 -translate-y-1/2 space-y-3 animate-fade-in opacity-50"
        style={{ animationDelay: '0.3s', zIndex: 2 }}
      >
        <div className="glass-panel px-3 py-2.5 space-y-1.5 w-40 border-l-2 border-cyan-400/25">
          <div className="flex items-center justify-between text-[8px] font-mono">
            <span className="text-cyan-400/80 font-bold flex items-center gap-1">
              <Cpu className="w-2.5 h-2.5" /> CPU
            </span>
            <span className="text-emerald-400/80">3.8GHz</span>
          </div>
          <div className="h-0.5 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-cyan-500/50 to-cyan-300/50 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[8px] font-mono">
            <span className="text-purple-400/80 font-bold flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" /> GPU
            </span>
            <span className="text-emerald-400/80">ONLINE</span>
          </div>
          <div className="h-0.5 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-gradient-to-r from-purple-500/50 to-purple-300/50 rounded-full" />
          </div>
        </div>
      </div>

      <div
        className="hidden xl:block absolute right-2 top-1/2 -translate-y-1/2 space-y-3 animate-fade-in opacity-50"
        style={{ animationDelay: '0.5s', zIndex: 2 }}
      >
        <div className="glass-panel px-3 py-2.5 space-y-1.5 w-40 border-r-2 border-purple-400/25">
          <div className="flex items-center justify-between text-[8px] font-mono">
            <span className="text-emerald-400/80 font-bold flex items-center gap-1">
              <Wifi className="w-2.5 h-2.5" /> NET
            </span>
            <span className="text-emerald-400/80">ONLINE</span>
          </div>
          <div className="h-0.5 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500/50 to-emerald-300/50 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[8px] font-mono">
            <span className="text-cyan-400/80 font-bold flex items-center gap-1">
              <Activity className="w-2.5 h-2.5" /> LAT
            </span>
            <span className="text-cyan-400/80">12ms</span>
          </div>
          <div className="h-0.5 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[95%] bg-gradient-to-r from-cyan-500/50 to-cyan-300/50 rounded-full" />
          </div>
        </div>
      </div>
    </>
  )
}
