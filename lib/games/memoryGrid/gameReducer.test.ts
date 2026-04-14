import { describe, it, expect } from 'vitest'
import { gameReducer } from './gameReducer'
import { initialGameState } from './types'
import type { GameState, Position } from './types'

const testPath: Position[] = [
  { row: 0, col: 3 },
  { row: 0, col: 4 },
  { row: 1, col: 4 },
  { row: 1, col: 5 },
]

function makeStartedState(overrides?: Partial<GameState>): GameState {
  return {
    ...initialGameState,
    difficulty: 'easy',
    cols: 8,
    rows: 4,
    path: testPath,
    phase: 'walk',
    currentStep: 0,
    permanentSteps: new Set(),
    freshSteps: new Set([0]),
    wrongTile: null,
    attempts: 1,
    startTime: 1000,
    ...overrides,
  }
}

describe('gameReducer', () => {
  describe('START_GAME', () => {
    it('initializes state with difficulty and path', () => {
      const state = gameReducer(initialGameState, {
        type: 'START_GAME',
        difficulty: 'hard',
        path: testPath,
      })
      expect(state.difficulty).toBe('hard')
      expect(state.cols).toBe(8)
      expect(state.rows).toBe(23)
      expect(state.path).toEqual(testPath)
      expect(state.phase).toBe('reveal')
      expect(state.attempts).toBe(1)
      expect(state.currentStep).toBe(0)
      expect(state.permanentSteps.size).toBe(0)
      expect(state.freshSteps.size).toBe(0)
      expect(state.wrongTile).toBeNull()
      expect(state.startTime).toBeGreaterThan(0)
    })
  })

  describe('END_REVEAL', () => {
    it('transitions to walk phase and auto-gives starting tile', () => {
      const state = makeStartedState({ phase: 'reveal', freshSteps: new Set() })
      const next = gameReducer(state, { type: 'END_REVEAL' })
      expect(next.phase).toBe('walk')
      expect(next.currentStep).toBe(0)
      expect(next.freshSteps.has(0)).toBe(true)
    })
  })

  describe('TAP_TILE — correct', () => {
    it('advances currentStep and adds to freshSteps', () => {
      const state = makeStartedState({ currentStep: 0 })
      // Next step is path[1] = {row:0, col:4}
      const next = gameReducer(state, { type: 'TAP_TILE', row: 0, col: 4 })
      expect(next.currentStep).toBe(1)
      expect(next.freshSteps.has(1)).toBe(true)
      expect(next.phase).toBe('walk')
    })

    it('triggers victory when last step is completed', () => {
      const state = makeStartedState({ currentStep: 2, freshSteps: new Set([0, 1, 2]) })
      // Next step is path[3] = {row:1, col:5}
      const next = gameReducer(state, { type: 'TAP_TILE', row: 1, col: 5 })
      expect(next.phase).toBe('victory')
      expect(next.freshSteps.has(3)).toBe(true)
    })
  })

  describe('TAP_TILE — incorrect', () => {
    it('sets phase to failure and records wrong tile', () => {
      const state = makeStartedState({ currentStep: 0 })
      const next = gameReducer(state, { type: 'TAP_TILE', row: 0, col: 7 })
      expect(next.phase).toBe('failure')
      expect(next.wrongTile).toEqual({ row: 0, col: 7 })
    })
  })

  describe('TAP_TILE — ignored when not walking', () => {
    it('returns same state during reveal phase', () => {
      const state = makeStartedState({ phase: 'reveal' })
      const next = gameReducer(state, { type: 'TAP_TILE', row: 0, col: 4 })
      expect(next).toBe(state)
    })
  })

  describe('NEW_ATTEMPT', () => {
    it('merges freshSteps into permanentSteps', () => {
      const state = makeStartedState({
        phase: 'failure',
        freshSteps: new Set([0, 1]),
        permanentSteps: new Set(),
      })
      const next = gameReducer(state, { type: 'NEW_ATTEMPT' })
      expect(next.permanentSteps.has(0)).toBe(true)
      expect(next.permanentSteps.has(1)).toBe(true)
      expect(next.freshSteps.size).toBe(0)
    })

    it('increments attempts and resets for new reveal', () => {
      const state = makeStartedState({
        phase: 'failure',
        attempts: 2,
        currentStep: 2,
        wrongTile: { row: 1, col: 7 },
      })
      const next = gameReducer(state, { type: 'NEW_ATTEMPT' })
      expect(next.attempts).toBe(3)
      expect(next.currentStep).toBe(0)
      expect(next.wrongTile).toBeNull()
      expect(next.phase).toBe('reveal')
    })

    it('preserves existing permanent steps', () => {
      const state = makeStartedState({
        phase: 'failure',
        permanentSteps: new Set([0]),
        freshSteps: new Set([1, 2]),
      })
      const next = gameReducer(state, { type: 'NEW_ATTEMPT' })
      expect(next.permanentSteps.has(0)).toBe(true)
      expect(next.permanentSteps.has(1)).toBe(true)
      expect(next.permanentSteps.has(2)).toBe(true)
    })
  })
})
