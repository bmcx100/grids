import Link from 'next/link'
import { Logo } from '@/components/shared/Logo'
import { mockChild } from '@/lib/mockData'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activePath: string
}

const navSections = [
  {
    label: 'Dashboard',
    items: [
      { icon: '\u{1F4CA}', name: 'Overview', path: '/dashboard' },
      { icon: '\u{1F4C8}', name: 'Progress', path: '/dashboard/progress' },
      { icon: '\u{1F4CB}', name: 'History', path: '/dashboard/history' },
    ],
  },
  {
    label: 'Account',
    items: [
      { icon: '\u{2699}\u{FE0F}', name: 'Settings', path: '/dashboard/settings' },
      { icon: '\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}', name: 'Family', path: '/dashboard/family' },
    ],
  },
]

export function Sidebar({ activePath }: SidebarProps) {
  return (
    <aside className="w-[240px] bg-brand-cream border-r border-brand-cream-dark sticky top-0 h-screen flex flex-col py-5">
      <div className="px-5 mb-8">
        <Logo />
      </div>

      <nav>
        {navSections.map((section, sectionIndex) => (
          <div key={section.label}>
            <p
              className={cn(
                'font-mono font-semibold text-[10px] uppercase tracking-[0.1em] text-brand-pencil px-5 mb-2',
                sectionIndex > 0 && 'mt-6'
              )}
            >
              {section.label}
            </p>
            {section.items.map((item) => {
              const isActive = activePath === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'flex items-center gap-2.5 px-5 py-2.5 text-sm font-semibold text-brand-pencil hover:text-brand-ink hover:bg-brand-indigo/5 border-l-[3px] border-transparent transition-colors cursor-pointer',
                    isActive && 'text-brand-indigo bg-brand-indigo/[0.08] border-l-brand-indigo'
                  )}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="mx-4 p-3 bg-brand-parchment-dark rounded-xl flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-brand-indigo text-white font-bold text-sm flex items-center justify-center">
          {mockChild.initial}
        </div>
        <div>
          <div className="font-bold text-sm">{mockChild.name}</div>
          <div className="text-xs text-brand-pencil">
            {mockChild.grade} &middot; Age {mockChild.age}
          </div>
        </div>
      </div>
    </aside>
  )
}
