'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { TileVisualState } from '@/lib/games/memoryGrid/types'

interface TileProps {
  state: TileVisualState
  interactive: boolean
  onClick: () => void
}

const stateStyles: Record<TileVisualState, string> = {
  default:
    'bg-brand-cream border-brand-cream-dark',
  revealed:
    'bg-brand-indigo/30 border-brand-indigo-light',
  active:
    'bg-brand-indigo/15 border-brand-indigo ring-2 ring-brand-indigo/30 animate-pulse-ring',
  'correct-fresh':
    'bg-brand-success border-brand-success-dark',
  'correct-permanent':
    'bg-brand-indigo border-brand-indigo-dark',
  wrong:
    'bg-brand-terracotta border-brand-terracotta-dark animate-shake',
}

const springTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.5,
}

export default function Tile({ state, interactive, onClick }: TileProps) {
  return (
    <motion.button
      className={cn(
        'aspect-square rounded-[6px] border-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2',
        stateStyles[state],
        interactive ? 'cursor-pointer' : 'cursor-default pointer-events-none'
      )}
      whileTap={interactive ? { scale: 0.9 } : undefined}
      transition={springTransition}
      onClick={interactive ? onClick : undefined}
      aria-label={`Tile ${state}`}
    />
  )
}
