import { describe, it, expect } from 'vitest'
import { getTileState } from './getTileState'
import type { GameState } from './types'

function makeState(overrides?: Partial<GameState>): GameState {
  return {
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

describe('getTileState', () => {
  it('returns "default" for non-path, non-active tiles', () => {
    const state = makeState({ phase: 'walk', currentRow: 0 })
    expect(getTileState(0, 2, state)).toBe('default')
  })

  it('returns "revealed" for path tiles during reveal phase', () => {
    const state = makeState({ phase: 'reveal' })
    expect(getTileState(3, 0, state)).toBe('revealed')
    expect(getTileState(4, 1, state)).toBe('revealed')
  })

  it('returns "default" for non-path tiles during reveal', () => {
    const state = makeState({ phase: 'reveal' })
    expect(getTileState(0, 0, state)).toBe('default')
  })

  it('returns "active" for tiles in the current active row during walk', () => {
    const state = makeState({ phase: 'walk', currentRow: 1 })
    expect(getTileState(0, 1, state)).toBe('active')
    expect(getTileState(7, 1, state)).toBe('active')
  })

  it('returns "correct-fresh" for freshly confirmed path tiles', () => {
    const state = makeState({ freshRows: new Set([0]) })
    expect(getTileState(3, 0, state)).toBe('correct-fresh')
  })

  it('returns "correct-permanent" for permanently revealed path tiles', () => {
    const state = makeState({ permanentRows: new Set([0]) })
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
      permanentRows: new Set([0]),
      freshRows: new Set([0]),
    })
    expect(getTileState(3, 0, state)).toBe('correct-fresh')
  })

  it('permanent path tiles show during reveal (not re-revealed)', () => {
    const state = makeState({
      phase: 'reveal',
      permanentRows: new Set([0]),
    })
    expect(getTileState(3, 0, state)).toBe('correct-permanent')
  })

  it('active row does not override permanent tiles on path', () => {
    const state = makeState({
      phase: 'walk',
      currentRow: 0,
      permanentRows: new Set([0]),
    })
    expect(getTileState(3, 0, state)).toBe('correct-permanent')
  })

  it('active row applies to non-path, non-permanent tiles', () => {
    const state = makeState({
      phase: 'walk',
      currentRow: 0,
      permanentRows: new Set([0]),
    })
    expect(getTileState(0, 0, state)).toBe('active')
  })
})
