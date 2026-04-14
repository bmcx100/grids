import { GRID_CONFIG, initialGameState } from './types'
import type { GameState, GameAction } from './types'

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const config = GRID_CONFIG[action.difficulty]
      return {
        ...initialGameState,
        difficulty: action.difficulty,
        cols: config.cols,
        rows: config.rows,
        path: action.path,
        phase: 'reveal',
        attempts: 1,
        startTime: Date.now(),
        permanentRows: new Set(),
        freshRows: new Set(),
      }
    }

    case 'END_REVEAL':
      return { ...state, phase: 'walk', currentRow: 0 }

    case 'TAP_TILE': {
      if (state.phase !== 'walk') return state

      const correctCol = state.path[state.currentRow]

      if (action.col === correctCol) {
        const newFresh = new Set(state.freshRows)
        newFresh.add(state.currentRow)
        const nextRow = state.currentRow + 1

        if (nextRow >= state.rows) {
          return { ...state, freshRows: newFresh, currentRow: nextRow, phase: 'victory' }
        }

        return { ...state, freshRows: newFresh, currentRow: nextRow }
      }

      return {
        ...state,
        wrongTile: { row: state.currentRow, col: action.col },
        phase: 'failure',
      }
    }

    case 'NEW_ATTEMPT': {
      const newPermanent = new Set(state.permanentRows)
      state.freshRows.forEach((row) => newPermanent.add(row))

      return {
        ...state,
        phase: 'reveal',
        currentRow: 0,
        permanentRows: newPermanent,
        freshRows: new Set(),
        wrongTile: null,
        attempts: state.attempts + 1,
      }
    }

    default:
      return state
  }
}
