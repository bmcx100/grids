import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: string
  label: string
  value: string
  sub: string
  valueClassName?: string
}

export default function StatCard({ icon, label, value, sub, valueClassName }: StatCardProps) {
  return (
    <div className="bg-brand-cream rounded-card p-5 border border-brand-cream-dark">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-mono font-semibold text-[11px] uppercase tracking-[0.08em] text-brand-pencil mb-2">
        {label}
      </div>
      <div className={cn('font-mono font-bold text-[32px]', valueClassName)}>
        {value}
      </div>
      <div className="text-[13px] text-brand-pencil mt-1">{sub}</div>
    </div>
  )
}
