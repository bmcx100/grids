'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ChunkyButtonState = 'default' | 'selected' | 'correct' | 'incorrect' | 'disabled'

interface ChunkyButtonProps {
  label: string
  letter: string
  state: ChunkyButtonState
  onPress?: () => void
}

const stateStyles: Record<ChunkyButtonState, string> = {
  default: 'bg-brand-parchment-warm border-brand-cream-dark text-brand-ink shadow-[0_3px_0_#DDD6CA]',
  selected: 'bg-brand-indigo border-brand-indigo-dark text-white shadow-[0_3px_0_#2E4563]',
  correct: 'bg-brand-success border-brand-success-dark text-white shadow-[0_3px_0_#3F5239]',
  incorrect: 'bg-brand-terracotta border-brand-terracotta-dark text-white shadow-[0_3px_0_#9A4C2D]',
  disabled: 'bg-brand-cream-dark border-brand-cream-muted text-brand-pencil cursor-not-allowed shadow-[0_3px_0_#C4B9A8]',
}

const badgeStyles: Record<ChunkyButtonState, string> = {
  default: 'bg-brand-parchment-dark text-brand-ink',
  selected: 'bg-white/20 text-white',
  correct: 'bg-white/20 text-white',
  incorrect: 'bg-white/20 text-white',
  disabled: 'bg-brand-cream-muted text-brand-pencil',
}

const springTransition = { type: 'spring' as const, stiffness: 500, damping: 30, mass: 0.5 }

export default function ChunkyButton({ label, letter, state, onPress }: ChunkyButtonProps) {
  const isDisabled = state === 'disabled'

  return (
    <motion.button
      className={cn(
        'w-full px-4 py-3.5 rounded-chunky border-[2.5px] flex items-center gap-3 font-body font-semibold text-[15px] cursor-pointer select-none',
        stateStyles[state]
      )}
      whileTap={isDisabled ? undefined : { y: 3 }}
      transition={springTransition}
      onClick={isDisabled ? undefined : onPress}
      disabled={isDisabled}
    >
      <span
        className={cn(
          'w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0',
          badgeStyles[state]
        )}
      >
        {letter}
      </span>
      {label}
    </motion.button>
  )
}
