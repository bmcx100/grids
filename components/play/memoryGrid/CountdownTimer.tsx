'use client'

import { motion } from 'framer-motion'
import { REVEAL_DURATION } from '@/lib/games/memoryGrid/types'

interface CountdownTimerProps {
  timeLeft: number
}

const RADIUS = 16
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function CountdownTimer({ timeLeft }: CountdownTimerProps) {
  const progress = timeLeft / REVEAL_DURATION
  const offset = CIRCUMFERENCE * (1 - progress)

  return (
    <div className="relative w-12 h-12">
      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
        <circle
          cx="18"
          cy="18"
          r={RADIUS}
          fill="none"
          stroke="#EDE8DF"
          strokeWidth="3"
        />
        <motion.circle
          cx="18"
          cy="18"
          r={RADIUS}
          fill="none"
          stroke="#3D5A80"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm text-brand-ink">
        {timeLeft}
      </span>
    </div>
  )
}
