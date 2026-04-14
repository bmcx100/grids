import { describe, it, expect } from 'vitest'
import { gameReducer } from './gameReducer'
import { initialGameState } from './types'
import type { GameState } from './types'

function makeStartedState(overrides?: Partial<GameState>): GameState {
  return {
    ...initialGameState,
    difficulty: 'easy',
    cols: 8,
    rows: 4,
    path: [3, 4, 4, 5],
    phase: 'walk',
    currentRow: 0,
    permanentRows: new Set(),
    freshRows: new Set(),
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
        path: [1, 2, 3],
      })
      expect(state.difficulty).toBe('hard')
      expect(state.cols).toBe(8)
      expect(state.rows).toBe(23)
      expect(state.path).toEqual([1, 2, 3])
      expect(state.phase).toBe('reveal')
      expect(state.attempts).toBe(1)
      expect(state.currentRow).toBe(0)
      expect(state.permanentRows.size).toBe(0)
      expect(state.freshRows.size).toBe(0)
      expect(state.wrongTile).toBeNull()
      expect(state.startTime).toBeGreaterThan(0)
    })
  })

  describe('END_REVEAL', () => {
    it('transitions from reveal to walk phase', () => {
      const state = makeStartedState({ phase: 'reveal' })
      const next = gameReducer(state, { type: 'END_REVEAL' })
      expect(next.phase).toBe('walk')
      expect(next.currentRow).toBe(0)
    })
  })

  describe('TAP_TILE — correct', () => {
    it('advances currentRow and adds to freshRows', () => {
      const state = makeStartedState({ currentRow: 0 })
      const next = gameReducer(state, { type: 'TAP_TILE', col: 3 })
      expect(next.currentRow).toBe(1)
      expect(next.freshRows.has(0)).toBe(true)
      expect(next.phase).toBe('walk')
    })

    it('triggers victory when last row is completed', () => {
      const state = makeStartedState({ currentRow: 3 })
      const next = gameReducer(state, { type: 'TAP_TILE', col: 5 })
      expect(next.phase).toBe('victory')
      expect(next.freshRows.has(3)).toBe(true)
    })
  })

  describe('TAP_TILE — incorrect', () => {
    it('sets phase to failure and records wrong tile', () => {
      const state = makeStartedState({ currentRow: 0 })
      const next = gameReducer(state, { type: 'TAP_TILE', col: 7 })
      expect(next.phase).toBe('failure')
      expect(next.wrongTile).toEqual({ row: 0, col: 7 })
    })
  })

  describe('TAP_TILE — ignored when not walking', () => {
    it('returns same state during reveal phase', () => {
      const state = makeStartedState({ phase: 'reveal' })
      const next = gameReducer(state, { type: 'TAP_TILE', col: 3 })
      expect(next).toBe(state)
    })
  })

  describe('NEW_ATTEMPT', () => {
    it('merges freshRows into permanentRows', () => {
      const state = makeStartedState({
        phase: 'failure',
        freshRows: new Set([0, 1]),
        permanentRows: new Set(),
      })
      const next = gameReducer(state, { type: 'NEW_ATTEMPT' })
      expect(next.permanentRows.has(0)).toBe(true)
      expect(next.permanentRows.has(1)).toBe(true)
      expect(next.freshRows.size).toBe(0)
    })

    it('increments attempts and resets for new reveal', () => {
      const state = makeStartedState({
        phase: 'failure',
        attempts: 2,
        currentRow: 3,
        wrongTile: { row: 3, col: 7 },
      })
      const next = gameReducer(state, { type: 'NEW_ATTEMPT' })
      expect(next.attempts).toBe(3)
      expect(next.currentRow).toBe(0)
      expect(next.wrongTile).toBeNull()
      expect(next.phase).toBe('reveal')
    })

    it('preserves existing permanent rows', () => {
      const state = makeStartedState({
        phase: 'failure',
        permanentRows: new Set([0]),
        freshRows: new Set([1, 2]),
      })
      const next = gameReducer(state, { type: 'NEW_ATTEMPT' })
      expect(next.permanentRows.has(0)).toBe(true)
      expect(next.permanentRows.has(1)).toBe(true)
      expect(next.permanentRows.has(2)).toBe(true)
    })
  })
})
