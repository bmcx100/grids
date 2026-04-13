import { cn } from '@/lib/utils'
import { mockLeitnerBoxes } from '@/lib/mockData'

const levelStyles: Record<number, string> = {
  1: 'bg-brand-terracotta/15 text-brand-terracotta',
  2: 'bg-brand-marigold/15 text-brand-marigold',
  3: 'bg-brand-indigo/15 text-brand-indigo',
  4: 'bg-brand-indigo-light/15 text-brand-indigo-light',
  5: 'bg-brand-success/15 text-brand-success',
}

export default function LeitnerViz() {
  return (
    <div className="bg-brand-cream rounded-card p-6 border border-brand-cream-dark">
      <p className="text-sm text-brand-pencil mb-4">
        Items distributed across review boxes. Items move right as they&apos;re mastered.
      </p>

      <div className="flex gap-2">
        {mockLeitnerBoxes.map((box) => (
          <div
            key={box.level}
            className={cn('flex-1 rounded-xl p-4 text-center', levelStyles[box.level])}
          >
            <div className="font-mono font-bold text-2xl">{box.count}</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.05em] mt-1 opacity-70">
              {box.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
