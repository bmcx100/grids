import type { GameState, TileVisualState } from './types'

export function getTileState(
  col: number,
  row: number,
  state: GameState
): TileVisualState {
  const { path, wrongTile, freshSteps, permanentSteps, phase, currentStep } = state

  if (wrongTile !== null && wrongTile.row === row && wrongTile.col === col) return 'wrong'

  // Find if this tile is on the path (and which step index)
  const stepIndex = path.findIndex((p) => p.row === row && p.col === col)

  if (stepIndex >= 0) {
    if (freshSteps.has(stepIndex)) return 'correct-fresh'
    if (permanentSteps.has(stepIndex)) return 'correct-permanent'
    if (phase === 'reveal') return 'revealed'
  }

  // Active = adjacent to current position during walk
  if (phase === 'walk') {
    const cur = path[currentStep]
    if (cur) {
      const dr = Math.abs(cur.row - row)
      const dc = Math.abs(cur.col - col)
      if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) return 'active'
    }
  }

  return 'default'
}
