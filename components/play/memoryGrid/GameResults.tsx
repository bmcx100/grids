'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Difficulty } from '@/lib/games/memoryGrid/types'

interface GameResultsProps {
  attempts: number
  elapsedMs: number
  difficulty: Difficulty
  rows: number
  cols: number
  onPlayAgain: () => void
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const springTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.5,
}

export default function GameResults({
  attempts,
  elapsedMs,
  difficulty,
  rows,
  cols,
  onPlayAgain,
}: GameResultsProps) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-8 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="text-[56px] mb-4">🎉</div>

      <h1 className="font-heading font-extrabold text-2xl text-brand-ink mb-1">
        Path Complete!
      </h1>

      <p className="text-sm text-brand-pencil font-semibold mb-6">
        You walked the entire grid from memory
      </p>

      <div className="w-full max-w-[280px] space-y-3 mb-8">
        <div className="flex items-center justify-between bg-brand-cream rounded-chunky px-4 py-3">
          <span className="text-sm font-semibold text-brand-pencil">Attempts</span>
          <span className="font-mono font-bold text-lg text-brand-ink">{attempts}</span>
        </div>

        <div className="flex items-center justify-between bg-brand-cream rounded-chunky px-4 py-3">
          <span className="text-sm font-semibold text-brand-pencil">Total Time</span>
          <span className="font-mono font-bold text-lg text-brand-ink">
            {formatTime(elapsedMs)}
          </span>
        </div>

        <div className="flex items-center justify-between bg-brand-cream rounded-chunky px-4 py-3">
          <span className="text-sm font-semibold text-brand-pencil">Difficulty</span>
          <span className="font-mono font-bold text-lg text-brand-ink capitalize">
            {difficulty} ({cols}×{rows})
          </span>
        </div>
      </div>

      <div className="w-full space-y-3">
        <motion.button
          className="w-full py-4 rounded-chunky bg-brand-indigo text-white font-heading font-bold text-base shadow-[0_4px_0_#2E4563] cursor-pointer"
          whileTap={{ y: 4 }}
          transition={springTransition}
          onClick={onPlayAgain}
        >
          PLAY AGAIN
        </motion.button>

        <Link
          href="/play"
          className="block w-full py-3.5 rounded-chunky border-[2.5px] border-brand-cream-dark bg-transparent font-heading font-bold text-[15px] text-brand-ink shadow-[0_3px_0_#DDD6CA] text-center"
        >
          Back to Games
        </Link>
      </div>
    </motion.div>
  )
}
