import { cn } from '@/lib/utils'
import { mockSessions } from '@/lib/mockData'

function scoreBadgeClass(score: number) {
  if (score >= 8) return 'bg-brand-success/15 text-brand-success'
  if (score >= 5) return 'bg-brand-marigold/15 text-brand-marigold'
  return 'bg-brand-terracotta/15 text-brand-terracotta'
}

export default function SessionTable() {
  return (
    <div className="bg-brand-cream rounded-card border border-brand-cream-dark overflow-hidden">
      <table className="w-full" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {['Date', 'Topic', 'Score', 'Duration', 'XP'].map((header) => (
              <th
                key={header}
                className="font-mono font-semibold text-[11px] uppercase tracking-[0.06em] text-brand-pencil text-left p-4 border-b border-brand-cream-dark"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockSessions.map((session) => (
            <tr
              key={session.id}
              className="p-4 text-sm font-semibold border-b border-brand-parchment-dark last:border-b-0 hover:bg-brand-indigo/[0.03]"
            >
              <td className="p-4 font-mono text-[13px] font-medium text-brand-pencil">
                {session.date}
              </td>
              <td className="p-4 text-sm font-semibold">{session.topic}</td>
              <td className="p-4">
                <span
                  className={cn(
                    'inline-block px-2.5 py-0.5 rounded-xl font-mono font-bold text-[13px]',
                    scoreBadgeClass(session.score)
                  )}
                >
                  {session.score}/{session.total}
                </span>
              </td>
              <td className="p-4 font-mono text-[13px] font-medium">
                {session.duration}
              </td>
              <td className="p-4 font-mono font-bold text-[13px] text-brand-indigo">
                +{session.xp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
