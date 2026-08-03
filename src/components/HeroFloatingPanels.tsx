import { Cpu, Wifi, Activity, Zap } from 'lucide-react'

export function HeroFloatingPanels() {
  return (
    <>
      <div
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 space-y-3 animate-fade-in"
        style={{ animationDelay: '0.3s', zIndex: 5 }}
      >
        <div className="glass-panel px-4 py-3 space-y-2 w-44 border-l-2 border-cyan-400/40">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <Cpu className="w-3 h-3" /> CPU
            </span>
            <span className="text-emerald-400">3.8GHz</span>
          </div>
          <div className="h-1 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="text-purple-400 font-bold flex items-center gap-1">
              <Zap className="w-3 h-3" /> GPU
            </span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div className="h-1 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-gradient-to-r from-purple-500 to-purple-300 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono pt-1 border-t border-[#2a2a35]">
            <span className="text-gray-500">FPS</span>
            <span className="text-yellow-400 font-bold">120</span>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 space-y-3 animate-fade-in"
        style={{ animationDelay: '0.5s', zIndex: 5 }}
      >
        <div className="glass-panel px-4 py-3 space-y-2 w-44 border-r-2 border-purple-400/40">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Wifi className="w-3 h-3" /> NET
            </span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div className="h-1 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full animate-pulse" />
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <Activity className="w-3 h-3" /> LAT
            </span>
            <span className="text-cyan-400">12ms</span>
          </div>
          <div className="h-1 bg-[#1a1a24] rounded-full overflow-hidden">
            <div className="h-full w-[95%] bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono pt-1 border-t border-[#2a2a35]">
            <span className="text-gray-500">SYNC</span>
            <span className="text-emerald-400 font-bold">OK</span>
          </div>
        </div>
      </div>

      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <line
          x1="18%"
          y1="50%"
          x2="35%"
          y2="50%"
          stroke="rgba(0,240,255,0.06)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-16"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="82%"
          y1="50%"
          x2="65%"
          y2="50%"
          stroke="rgba(168,85,247,0.06)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-16"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </>
  )
}
