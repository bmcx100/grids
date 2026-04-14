'use client'

import { useRef, useState, useEffect, memo } from 'react'
import Tile from './Tile'
import { getTileState } from '@/lib/games/memoryGrid/getTileState'
import type { GameState } from '@/lib/games/memoryGrid/types'

interface GridProps {
  state: GameState
  onTapTile: (col: number) => void
}

const MemoTile = memo(Tile)

export default function Grid({ state, onTapTile }: GridProps) {
  const { cols, rows, phase, currentRow, difficulty } = state
  const gridRef = useRef<HTMLDivElement>(null)
  const [gridNaturalHeight, setGridNaturalHeight] = useState(0)

  const isHard = difficulty === 'hard'
  const isReveal = phase === 'reveal'
  const isWalk = phase === 'walk'
  const gap = 4 // px

  // Measure natural grid height for hard mode scaling
  useEffect(() => {
    if (isHard && gridRef.current) {
      setGridNaturalHeight(gridRef.current.scrollHeight)
    }
  }, [isHard, rows])

  // Calculate hard-mode transforms
  const containerMaxHeight = 500
  const revealScale =
    gridNaturalHeight > 0
      ? Math.min(1, containerMaxHeight / gridNaturalHeight)
      : 0.4

  // Walk phase: compute scroll offset to keep active row visible
  // Visual row index (top = 0) for the active game row
  const activeVisualRow = rows - 1 - currentRow
  const tileApproxSize = gridNaturalHeight > 0 ? gridNaturalHeight / rows : 48
  const walkWindowHeight = 4 * tileApproxSize
  // Position active row ~2 rows from bottom of window
  const targetOffset = activeVisualRow * tileApproxSize - walkWindowHeight + 2 * tileApproxSize
  const clampedOffset = Math.max(0, Math.min(targetOffset, gridNaturalHeight - walkWindowHeight))

  const gridTransform = isHard
    ? isReveal || phase === 'idle'
      ? `scale(${revealScale})`
      : `translateY(-${clampedOffset}px)`
    : 'none'

  const gridOrigin = isHard && isReveal ? 'top center' : 'top center'

  // Render tiles: visual row 0 = top of screen = game row (rows-1)
  const tiles = []
  for (let visualRow = 0; visualRow < rows; visualRow++) {
    const gameRow = rows - 1 - visualRow
    for (let col = 0; col < cols; col++) {
      const tileState = getTileState(col, gameRow, state)
      const interactive = isWalk && gameRow === currentRow
      tiles.push(
        <MemoTile
          key={`${gameRow}-${col}`}
          state={tileState}
          interactive={interactive}
          onClick={() => onTapTile(col)}
        />
      )
    }
  }

  const gridElement = (
    <div
      ref={gridRef}
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {tiles}
    </div>
  )

  if (isHard) {
    return (
      <div
        className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] mx-5"
        style={{
          height: isReveal || phase === 'idle' ? `${containerMaxHeight}px` : `${walkWindowHeight}px`,
        }}
      >
        <div
          className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: gridTransform,
            transformOrigin: gridOrigin,
          }}
        >
          {gridElement}
        </div>
      </div>
    )
  }

  return <div className="mx-5">{gridElement}</div>
}
