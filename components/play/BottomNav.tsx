'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type Tab = 'trail' | 'badges' | 'me' | 'settings'

interface BottomNavProps {
  activeTab: string
}

const tabs: { id: Tab; icon: string; label: string; href: string }[] = [
  { id: 'trail', icon: '🗺️', label: 'Trail', href: '/play' },
  { id: 'badges', icon: '🏆', label: 'Badges', href: '/play/badges' },
  { id: 'me', icon: '👤', label: 'Me', href: '/play/profile' },
  { id: 'settings', icon: '⚙️', label: 'Settings', href: '#' },
]

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 max-w-[480px] mx-auto h-16 bg-brand-parchment-warm/95 backdrop-blur-sm border-t border-brand-cream-dark flex items-center justify-around pb-[env(safe-area-inset-bottom,0px)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              'flex flex-col items-center gap-1',
              isActive ? 'text-brand-indigo font-bold' : 'text-brand-pencil'
            )}
          >
            <span className="text-[22px]">{tab.icon}</span>
            <span className={cn('text-[11px] font-semibold', isActive && 'font-bold')}>
              {tab.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
