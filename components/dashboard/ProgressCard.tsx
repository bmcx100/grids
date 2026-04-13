interface ProgressCardProps {
  name: string
  icon: string
  pct: number
  learned: number
  remaining: number
}

export default function ProgressCard({ name, icon, pct, learned, remaining }: ProgressCardProps) {
  return (
    <div className="bg-brand-cream rounded-card p-5 border border-brand-cream-dark">
      <div className="flex items-center justify-between">
        <span className="font-bold text-[15px]">
          {icon} {name}
        </span>
        <span className="font-mono font-bold text-sm text-brand-indigo">{pct}%</span>
      </div>

      <div className="h-2 rounded-full bg-brand-parchment-dark mt-3">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-brand-indigo to-brand-indigo-light"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex gap-4 mt-2.5 text-xs text-brand-pencil">
        <span>
          <span className="font-mono font-semibold">{learned}</span> learned
        </span>
        <span>
          <span className="font-mono font-semibold">{remaining}</span> remaining
        </span>
      </div>
    </div>
  )
}
