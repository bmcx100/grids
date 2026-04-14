export type Difficulty = 'easy' | 'hard'

export type GamePhase = 'idle' | 'reveal' | 'walk' | 'failure' | 'victory'

export type TileVisualState =
  | 'default'
  | 'revealed'
  | 'active'
  | 'correct-fresh'
  | 'correct-permanent'
  | 'wrong'

export type Position = { row: number; col: number }

export interface GameState {
  difficulty: Difficulty
  cols: number
  rows: number
  path: Position[]
  phase: GamePhase
  currentStep: number
  permanentSteps: Set<number>
  freshSteps: Set<number>
  wrongTile: { row: number; col: number } | null
  attempts: number
  startTime: number
}

export type GameAction =
  | { type: 'START_GAME'; difficulty: Difficulty; path: Position[] }
  | { type: 'END_REVEAL' }
  | { type: 'TAP_TILE'; row: number; col: number }
  | { type: 'NEW_ATTEMPT' }

export const GRID_CONFIG = {
  easy: { cols: 8, rows: 12, pathLength: 20 },
  hard: { cols: 8, rows: 23, pathLength: 45 },
} as const

export const REVEAL_DURATION = 10

export const FAILURE_DELAY = 800

export const initialGameState: GameState = {
  difficulty: 'easy',
  cols: 8,
  rows: 12,
  path: [],
  phase: 'idle',
  currentStep: 0,
  permanentSteps: new Set(),
  freshSteps: new Set(),
  wrongTile: null,
  attempts: 0,
  startTime: 0,
}
