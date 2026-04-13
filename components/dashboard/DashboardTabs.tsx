import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DashboardTabsProps {
  activePath: string
}

const tabs = [
  { icon: '\u{1F4CA}', name: 'Overview', path: '/dashboard' },
  { icon: '\u{1F4C8}', name: 'Progress', path: '/dashboard/progress' },
  { icon: '\u{1F4CB}', name: 'History', path: '/dashboard/history' },
  { icon: '\u{2699}\u{FE0F}', name: 'Settings', path: '/dashboard/settings' },
]

export function DashboardTabs({ activePath }: DashboardTabsProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 h-16 bg-brand-parchment/95 backdrop-blur-sm border-t border-brand-cream-dark flex items-center justify-around md:hidden">
      {tabs.map((tab) => {
        const isActive = activePath === tab.path
        return (
          <Link
            key={tab.path}
            href={tab.path}
            className={cn(
              'flex flex-col items-center gap-1 text-[11px] font-semibold',
              isActive ? 'text-brand-indigo font-bold' : 'text-brand-pencil'
            )}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
