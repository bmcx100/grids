import { describe, it, expect } from 'vitest'
import { getTileState } from './getTileState'
import type { GameState, Position } from './types'

// Path: (0,3) → (0,4) → (1,4) → (1,5)
const testPath: Position[] = [
  { row: 0, col: 3 },
  { row: 0, col: 4 },
  { row: 1, col: 4 },
  { row: 1, col: 5 },
]

function makeState(overrides?: Partial<GameState>): GameState {
  return {
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

describe('getTileState', () => {
  it('returns "default" for non-path, non-adjacent tiles', () => {
    const state = makeState({ phase: 'walk', currentStep: 0 })
    // (6,6) is far from current position (0,3) and not on path
    expect(getTileState(6, 6, state)).toBe('default')
  })

  it('returns "revealed" for path tiles during reveal phase', () => {
    const state = makeState({ phase: 'reveal', freshSteps: new Set() })
    expect(getTileState(3, 0, state)).toBe('revealed')
    expect(getTileState(4, 0, state)).toBe('revealed')
    expect(getTileState(4, 1, state)).toBe('revealed')
  })

  it('returns "default" for non-path tiles during reveal', () => {
    const state = makeState({ phase: 'reveal' })
    expect(getTileState(0, 0, state)).toBe('default')
  })

  it('returns "active" for tiles adjacent to current position during walk', () => {
    // Current position is path[0] = (row:0, col:3)
    const state = makeState({ phase: 'walk', currentStep: 0 })
    // Adjacent: up (1,3), left (0,2), right (0,4)
    // (0,0 is bottom row, no down neighbor)
    expect(getTileState(2, 0, state)).toBe('active') // left
    expect(getTileState(4, 0, state)).toBe('active') // right (also on path but not fresh/permanent)
    expect(getTileState(3, 1, state)).toBe('active') // up
  })

  it('does not mark non-adjacent tiles as active', () => {
    const state = makeState({ phase: 'walk', currentStep: 0 })
    // (0,5) is 2 cols away from current (0,3) — not adjacent
    expect(getTileState(5, 0, state)).toBe('default')
  })

  it('returns "correct-fresh" for freshly confirmed path tiles', () => {
    const state = makeState({ freshSteps: new Set([0]) })
    // path[0] = (row:0, col:3)
    expect(getTileState(3, 0, state)).toBe('correct-fresh')
  })

  it('returns "correct-permanent" for permanently revealed path tiles', () => {
    const state = makeState({ permanentSteps: new Set([0]), freshSteps: new Set() })
    expect(getTileState(3, 0, state)).toBe('correct-permanent')
  })

  it('returns "wrong" for the wrong tile', () => {
    const state = makeState({
      phase: 'failure',
      wrongTile: { row: 1, col: 6 },
    })
    expect(getTileState(6, 1, state)).toBe('wrong')
  })

  it('fresh takes priority over permanent', () => {
    const state = makeState({
      permanentSteps: new Set([0]),
      freshSteps: new Set([0]),
    })
    expect(getTileState(3, 0, state)).toBe('correct-fresh')
  })

  it('permanent path tiles show during reveal (not re-revealed)', () => {
    const state = makeState({
      phase: 'reveal',
      permanentSteps: new Set([0]),
      freshSteps: new Set(),
    })
    expect(getTileState(3, 0, state)).toBe('correct-permanent')
  })

  it('correct-fresh overrides active for path tiles at current step', () => {
    const state = makeState({
      phase: 'walk',
      currentStep: 0,
      freshSteps: new Set([0]),
    })
    // path[0] = (row:0, col:3) is both the current step (would be adjacent to itself) and fresh
    expect(getTileState(3, 0, state)).toBe('correct-fresh')
  })

  it('correct-permanent overrides active for adjacent path tiles', () => {
    const state = makeState({
      phase: 'walk',
      currentStep: 0,
      permanentSteps: new Set([1]),
      freshSteps: new Set([0]),
    })
    // path[1] = (row:0, col:4) is adjacent to current pos (row:0, col:3) AND permanent
    expect(getTileState(4, 0, state)).toBe('correct-permanent')
  })
})
