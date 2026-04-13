'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type CheckButtonState = 'disabled' | 'enabled' | 'continue'

interface CheckButtonProps {
  state: CheckButtonState
  onPress?: () => void
}

const stateStyles: Record<CheckButtonState, string> = {
  disabled: 'bg-brand-cream-dark text-brand-pencil shadow-[0_4px_0_#C4B9A8] cursor-not-allowed',
  enabled: 'bg-brand-terracotta text-white shadow-[0_4px_0_#9A4C2D] cursor-pointer',
  continue: 'bg-brand-success text-white shadow-[0_4px_0_#3F5239] cursor-pointer',
}

const springTransition = { type: 'spring' as const, stiffness: 500, damping: 30, mass: 0.5 }

export default function CheckButton({ state, onPress }: CheckButtonProps) {
  const isDisabled = state === 'disabled'
  const label = state === 'continue' ? 'CONTINUE' : 'CHECK'

  return (
    <motion.button
      className={cn(
        'w-full py-4 rounded-chunky border-none font-heading font-bold text-base uppercase tracking-wide',
        stateStyles[state]
      )}
      whileTap={isDisabled ? undefined : { y: 4 }}
      transition={springTransition}
      onClick={isDisabled ? undefined : onPress}
      disabled={isDisabled}
    >
      {label}
    </motion.button>
  )
}
