'use client'

import Link from 'next/link'
import CountdownTimer from './CountdownTimer'
import type { GamePhase } from '@/lib/games/memoryGrid/types'

interface GameHeaderProps {
  phase: GamePhase
  timeLeft: number
  attempts: number
}

export default function GameHeader({ phase, timeLeft, attempts }: GameHeaderProps) {
  const showTimer = phase === 'reveal'

  return (
    <div className="h-14 px-5 flex items-center justify-between">
      <Link
        href="/play"
        className="text-brand-pencil font-bold text-sm hover:text-brand-ink transition-colors"
      >
        ✕ Quit
      </Link>

      <div className="flex items-center gap-3">
        {showTimer && <CountdownTimer timeLeft={timeLeft} />}

        <div className="font-mono font-semibold text-[13px] text-brand-pencil">
          Attempt {attempts}
        </div>
      </div>
    </div>
  )
}
