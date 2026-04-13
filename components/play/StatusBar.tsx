'use client'

interface StatusBarProps {
  hearts: number
  streak: number
  xp: number
}

export default function StatusBar({ hearts, streak, xp }: StatusBarProps) {
  return (
    <div className="h-14 px-5 flex items-center justify-between">
      <div className="flex items-center gap-1 font-bold text-[13px] text-brand-terracotta">
        ❤️ {hearts}
      </div>
      <div className="flex items-center gap-1 font-bold text-[13px] text-brand-marigold">
        🔥 {streak}
      </div>
      <div className="flex items-center gap-1 font-bold text-[13px] text-brand-indigo">
        ⭐ {xp}
      </div>
    </div>
  )
}
