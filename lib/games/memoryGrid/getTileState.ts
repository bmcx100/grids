import type { GameState, TileVisualState } from './types'

export function getTileState(
  col: number,
  row: number,
  state: GameState
): TileVisualState {
  const isOnPath = state.path[row] === col
  const isWrong =
    state.wrongTile !== null &&
    state.wrongTile.row === row &&
    state.wrongTile.col === col

  if (isWrong) return 'wrong'
  if (state.freshRows.has(row) && isOnPath) return 'correct-fresh'
  if (state.permanentRows.has(row) && isOnPath) return 'correct-permanent'
  if (state.phase === 'reveal' && isOnPath) return 'revealed'
  if (state.phase === 'walk' && row === state.currentRow) return 'active'

  return 'default'
}
