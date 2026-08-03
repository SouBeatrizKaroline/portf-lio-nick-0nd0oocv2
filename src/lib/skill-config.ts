import {
  Boxes,
  Code2,
  Database,
  Server,
  Cpu,
  GitBranch,
  User,
  Swords,
  Film,
  Video,
  Sparkles,
  Layers,
  Atom,
  Network,
  Globe,
  Smartphone,
  Lock,
  Save,
  Clock,
  ArrowUp,
  CornerUpRight,
  ArrowDown,
  Zap,
  Gamepad,
  Gamepad2,
  Heart,
  Bot,
  Camera,
  Target,
  Flag,
  Palette,
  Coffee,
  FileCode2,
  Link,
  Shield,
  Cloud,
  Box,
  HardDrive,
  Code,
  Github,
  LayoutGrid,
  Package,
  type LucideIcon,
} from 'lucide-react'
import type { Locale } from '@/i18n/translations'

export const skillIconMap: Record<string, LucideIcon> = {
  unity: Boxes,
  gameplay: Gamepad,
  architecture: Cpu,
  'state-machine': GitBranch,
  controller: User,
  combat: Swords,
  animation: Film,
  animator: Film,
  cinemachine: Video,
  particles: Sparkles,
  urp: Layers,
  physics: Atom,
  netcode: Network,
  webgl: Globe,
  mobile: Smartphone,
  auth: Lock,
  'cloud-save': Save,
  coyote: Clock,
  'jump-buffer': ArrowUp,
  'wall-jump': CornerUpRight,
  'wall-slide': ArrowDown,
  dash: Zap,
  input: Gamepad2,
  'game-feel': Heart,
  'enemy-ai': Bot,
  camera: Camera,
  collision: Target,
  checkpoint: Flag,
  csharp: Code2,
  sql: Database,
  html: Code,
  css: Palette,
  java: Coffee,
  javascript: FileCode2,
  aspnet: Server,
  dotnet: Box,
  ef: Database,
  'sql-server': HardDrive,
  rest: Link,
  'auth-systems': Shield,
  'cloud-services': Cloud,
  unreal: Boxes,
  godot: Boxes,
  vs: Code2,
  vscode: Code2,
  git: GitBranch,
  github: Github,
  'unity-hub': LayoutGrid,
  upm: Package,
}

export const skillConnections: Record<string, string[]> = {
  'Unity Engine (2D/3D)': [
    'C#',
    'Cinemachine',
    'Universal Render Pipeline (URP)',
    'Netcode for GameObjects',
  ],
  'ASP.NET MVC': ['Entity Framework'],
  'Entity Framework': ['SQL Server'],
  'C#': ['Gameplay Programming'],
  'Gameplay Programming': ['State Machines', 'Combat Systems', 'Character Controller'],
}

export function getConnectedSet(skillName: string | null): Set<string> | null {
  if (!skillName) return null
  const direct = skillConnections[skillName] || []
  const reverse = Object.entries(skillConnections)
    .filter(([, targets]) => targets.includes(skillName))
    .map(([source]) => source)
  return new Set([skillName, ...direct, ...reverse])
}

export interface CategoryConfig {
  id: string
  labels: Record<Locale, string>
}

export const skillCategories: CategoryConfig[] = [
  { id: 'all', labels: { pt: 'TODAS', en: 'ALL', es: 'TODAS' } },
  { id: 'game_dev', labels: { pt: 'GAME DEV', en: 'GAME DEV', es: 'JUEGOS' } },
  { id: 'gameplay', labels: { pt: 'GAMEPLAY', en: 'GAMEPLAY', es: 'GAMEPLAY' } },
  { id: 'languages', labels: { pt: 'LINGUAGENS', en: 'LANGUAGES', es: 'LENGUAJES' } },
  { id: 'backend', labels: { pt: 'BACKEND', en: 'BACKEND', es: 'BACKEND' } },
  { id: 'engines', labels: { pt: 'ENGINES', en: 'ENGINES', es: 'MOTORES' } },
  { id: 'frameworks', labels: { pt: 'FRAMEWORKS', en: 'FRAMEWORKS', es: 'FRAMEWORKS' } },
  { id: 'tools', labels: { pt: 'FERRAMENTAS', en: 'TOOLS', es: 'HERRAMIENTAS' } },
]

export const levelMeta: Record<
  number,
  { key: string; color: string; dot: string; border: string }
> = {
  1: {
    key: 'level_beginner',
    color: 'text-gray-400',
    dot: 'bg-gray-400',
    border: 'border-gray-500/40',
  },
  2: {
    key: 'level_intermediate',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400',
    border: 'border-cyan-500/40',
  },
  3: {
    key: 'level_advanced',
    color: 'text-purple-400',
    dot: 'bg-purple-400',
    border: 'border-purple-500/40',
  },
}

export function normalizeLevel(level: number): 1 | 2 | 3 {
  if (level <= 3) return level as 1 | 2 | 3
  if (level >= 80) return 3
  if (level >= 50) return 2
  return 1
}

export function getCategories(categories: unknown, category: string): string[] {
  if (Array.isArray(categories)) return categories as string[]
  if (typeof categories === 'string') {
    try {
      return JSON.parse(categories)
    } catch {
      return [category]
    }
  }
  return category ? [category] : []
}
