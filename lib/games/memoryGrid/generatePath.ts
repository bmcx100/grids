import type { Position } from './types'

/**
 * Return orthogonal neighbors of `pos` within grid bounds.
 */
export function getNeighbors(pos: Position, cols: number, rows: number): Position[] {
  const neighbors: Position[] = []
  if (pos.row > 0) neighbors.push({ row: pos.row - 1, col: pos.col })
  if (pos.row < rows - 1) neighbors.push({ row: pos.row + 1, col: pos.col })
  if (pos.col > 0) neighbors.push({ row: pos.row, col: pos.col - 1 })
  if (pos.col < cols - 1) neighbors.push({ row: pos.row, col: pos.col + 1 })
  return neighbors
}

/**
 * Generate a self-avoiding random walk on a cols×rows grid.
 *
 * Constraints:
 * - Starts on the bottom row (row 0) — exactly one tile there
 * - Ends on the top row (row rows-1) — exactly one tile there
 * - No non-consecutive path tiles are orthogonally adjacent
 * - Path never revisits a tile
 *
 * Uses random walk guided by a linear trajectory from bottom to top,
 * with backtracking when stuck.
 */
export function generatePath(cols: number, rows: number, steps: number): Position[] {
  const topRow = rows - 1

  for (;;) {
    const visited = new Set<string>()
    const path: Position[] = []

    const start: Position = {
      row: 0,
      col: Math.floor(Math.random() * cols),
    }
    path.push(start)
    visited.add(`${start.row},${start.col}`)
    let totalBacktracks = 0

    while (path.length < steps) {
      const current = path[path.length - 1]
      const isLastStep = path.length === steps - 1
      const stepsLeft = steps - path.length

      let candidates = getNeighbors(current, cols, rows).filter((n) => {
        if (visited.has(`${n.row},${n.col}`)) return false
        if (n.row === 0) return false
        if (n.row === topRow && !isLastStep) return false
        if (isLastStep && n.row !== topRow) return false

        // No orthogonal adjacency to non-consecutive path tiles
        for (let i = 0; i < path.length - 1; i++) {
          const p = path[i]
          if (Math.abs(p.row - n.row) + Math.abs(p.col - n.col) === 1) return false
        }

        // Prune: must be able to reach top row in remaining steps
        if (!isLastStep) {
          const rowsNeeded = topRow - n.row
          if (stepsLeft - 1 < rowsNeeded) return false
        }

        return true
      })

      // Linear guidance: keep path near ideal bottom-to-top trajectory
      if (!isLastStep && candidates.length > 1) {
        const idealRow = Math.round((path.length / (steps - 1)) * topRow)
        if (current.row < idealRow - 1) {
          const up = candidates.filter((c) => c.row > current.row)
          if (up.length > 0) candidates = up
        } else if (current.row > idealRow + 1) {
          const down = candidates.filter((c) => c.row < current.row)
          if (down.length > 0) candidates = down
        }
      }

      if (candidates.length === 0) {
        if (totalBacktracks >= 500 || path.length <= 1) break
        totalBacktracks++
        const removed = path.pop()!
        visited.delete(`${removed.row},${removed.col}`)
        continue
      }

      const next = candidates[Math.floor(Math.random() * candidates.length)]
      path.push(next)
      visited.add(`${next.row},${next.col}`)
    }

    if (path.length >= steps) return path
  }
}
