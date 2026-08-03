import { cn } from '@/lib/utils'

const ALL_DETAILS = [
  'SYS://CONNECTED',
  'NODE_ACTIVE',
  'ACCESS_GRANTED',
  'MODULE_READY',
  'SYNC_COMPLETE',
  'NETWORK_STATUS',
  'AI_ASSISTED',
  'UNITY_ENGINE',
  'BUILD_SUCCESS',
  'FPS:144',
  'LATENCY:12ms',
  'GPU:ONLINE',
  'CAT_CORE ACTIVE',
  'PURRFORMANCE: OPTIMAL',
  'PHYSICS ONLINE',
  'STATE MACHINE READY',
  'MEMORY STABLE',
  'NETWORK SECURE',
  'RENDER COMPLETE',
  'AI SUPPORT ENABLED',
  'SCENE LOADED',
  'INSPECTOR READY',
  'HIERARCHY SYNCED',
  'PREFAB INSTANTIATED',
  'GAMEOBJECT ACTIVE',
  'TRANSFORM UPDATED',
  'ANIMATOR RUNNING',
  'CINEMACHINE LIVE',
  'URP PIPELINE OK',
  'COYOTE_TIME: ENABLED',
  'JUMP_BUFFER: SET',
  'HITBOX: ARMED',
  'HURTBOX: MONITORING',
  'BEHAVIOR_TREE: OK',
]

interface CyberMicroDetailsProps {
  className?: string
  count?: number
  offset?: number
}

export function CyberMicroDetails({ className, count = 4, offset = 0 }: CyberMicroDetailsProps) {
  const details: string[] = []
  for (let i = 0; i < count; i++) {
    details.push(ALL_DETAILS[(offset + i) % ALL_DETAILS.length])
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[9px] text-gray-600 tracking-wider select-none',
        className,
      )}
    >
      {details.map((detail, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-cyan-500/30 rounded-full" />
          <span className="transition-colors hover:text-cyan-400/50">{detail}</span>
        </span>
      ))}
    </div>
  )
}
