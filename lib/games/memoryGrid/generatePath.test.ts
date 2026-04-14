import { describe, it, expect } from 'vitest'
import { generatePath, getNeighbors } from './generatePath'

describe('getNeighbors', () => {
  it('returns 4 neighbors for interior position', () => {
    const neighbors = getNeighbors({ row: 3, col: 3 }, 8, 8)
    expect(neighbors).toHaveLength(4)
  })

  it('returns 2 neighbors for corner position', () => {
    const neighbors = getNeighbors({ row: 0, col: 0 }, 8, 8)
    expect(neighbors).toHaveLength(2)
    expect(neighbors).toContainEqual({ row: 1, col: 0 })
    expect(neighbors).toContainEqual({ row: 0, col: 1 })
  })

  it('returns 3 neighbors for edge position', () => {
    const neighbors = getNeighbors({ row: 0, col: 3 }, 8, 8)
    expect(neighbors).toHaveLength(3)
  })
})

describe('generatePath', () => {
  it('returns an array with the requested step count', () => {
    const path = generatePath(8, 12, 20)
    expect(path).toHaveLength(20)
  })

  it('each position is within grid bounds', () => {
    const path = generatePath(8, 12, 20)
    for (const pos of path) {
      expect(pos.row).toBeGreaterThanOrEqual(0)
      expect(pos.row).toBeLessThan(12)
      expect(pos.col).toBeGreaterThanOrEqual(0)
      expect(pos.col).toBeLessThan(8)
    }
  })

  it('each step is orthogonally adjacent to the previous', () => {
    const path = generatePath(8, 12, 20)
    for (let i = 1; i < path.length; i++) {
      const dr = Math.abs(path[i].row - path[i - 1].row)
      const dc = Math.abs(path[i].col - path[i - 1].col)
      expect(dr + dc).toBe(1)
    }
  })

  it('path is self-avoiding (no repeated positions)', () => {
    const path = generatePath(8, 12, 20)
    const keys = path.map((p) => `${p.row},${p.col}`)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it('starts on the bottom row (row 0)', () => {
    for (let i = 0; i < 10; i++) {
      const path = generatePath(8, 12, 20)
      expect(path[0].row).toBe(0)
    }
  })

  it('ends on the top row', () => {
    for (let i = 0; i < 10; i++) {
      const path = generatePath(8, 12, 20)
      expect(path[path.length - 1].row).toBe(11)
    }
  })

  it('has only one tile on the bottom row', () => {
    for (let i = 0; i < 10; i++) {
      const path = generatePath(8, 12, 20)
      const bottomRowTiles = path.filter((p) => p.row === 0)
      expect(bottomRowTiles).toHaveLength(1)
    }
  })

  it('has only one tile on the top row', () => {
    for (let i = 0; i < 10; i++) {
      const path = generatePath(8, 12, 20)
      const topRowTiles = path.filter((p) => p.row === 11)
      expect(topRowTiles).toHaveLength(1)
    }
  })

  it('has unambiguous direction (no non-consecutive tiles are orthogonally adjacent)', () => {
    for (let run = 0; run < 10; run++) {
      const path = generatePath(8, 12, 20)
      for (let i = 0; i < path.length; i++) {
        for (let j = i + 2; j < path.length; j++) {
          const manhattan = Math.abs(path[i].row - path[j].row) + Math.abs(path[i].col - path[j].col)
          expect(manhattan, `steps ${i} and ${j} are orthogonally adjacent but non-consecutive`).toBeGreaterThan(1)
        }
      }
    }
  })

  it('produces different paths on different calls (probabilistic)', () => {
    const paths = Array.from({ length: 20 }, () => generatePath(8, 12, 20))
    const unique = new Set(paths.map((p) => p.map((pos) => `${pos.row},${pos.col}`).join('|')))
    expect(unique.size).toBeGreaterThan(1)
  })

  it('works with small grids', () => {
    const path = generatePath(3, 3, 3)
    expect(path).toHaveLength(3)
    expect(path[0].row).toBe(0)
    expect(path[path.length - 1].row).toBe(2)
  })

  it('handles single-column grid', () => {
    const path = generatePath(1, 5, 5)
    expect(path).toHaveLength(5)
    expect(path[0].row).toBe(0)
    expect(path[path.length - 1].row).toBe(4)
    expect(path.every((p) => p.col === 0)).toBe(true)
  })

  it('works for hard mode (45 steps on 8x23 grid)', () => {
    const path = generatePath(8, 23, 45)
    expect(path).toHaveLength(45)
    expect(path[0].row).toBe(0)
    expect(path[path.length - 1].row).toBe(22)
  })
})
