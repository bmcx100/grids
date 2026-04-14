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
        permanentSteps: new Set(),
        freshSteps: new Set(),
      }
    }

    case 'END_REVEAL':
      return {
        ...state,
        phase: 'walk',
        currentStep: 0,
        freshSteps: new Set([0]),
      }

    case 'TAP_TILE': {
      if (state.phase !== 'walk') return state

      const nextStep = state.currentStep + 1
      if (nextStep >= state.path.length) return state

      const target = state.path[nextStep]

      if (action.row === target.row && action.col === target.col) {
        const newFresh = new Set(state.freshSteps)
        newFresh.add(nextStep)

        if (nextStep >= state.path.length - 1) {
          return { ...state, freshSteps: newFresh, currentStep: nextStep, phase: 'victory' }
        }

        return { ...state, freshSteps: newFresh, currentStep: nextStep }
      }

      return {
        ...state,
        wrongTile: { row: action.row, col: action.col },
        phase: 'failure',
      }
    }

    case 'NEW_ATTEMPT': {
      const newPermanent = new Set(state.permanentSteps)
      state.freshSteps.forEach((step) => newPermanent.add(step))

      return {
        ...state,
        phase: 'reveal',
        currentStep: 0,
        permanentSteps: newPermanent,
        freshSteps: new Set(),
        wrongTile: null,
        attempts: state.attempts + 1,
      }
    }

    default:
      return state
  }
}
