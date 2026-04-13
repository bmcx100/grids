import { mockChild } from '@/lib/mockData'

export default function ProfilePage() {
  const achievements = [
    { icon: '\u{1F3C6}', title: 'Completed First Quest', date: 'Today' },
    { icon: '\u2B50', title: 'Perfect Score on Number Patterns', date: 'Yesterday' },
  ]

  return (
    <div className="px-5 pt-8 pb-24 flex flex-col items-center">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-brand-indigo text-white font-bold text-3xl flex items-center justify-center mb-3">
        {mockChild.initial}
      </div>

      {/* Name */}
      <h1 className="font-heading font-extrabold text-xl text-brand-ink">
        {mockChild.name}
      </h1>

      {/* Grade */}
      <p className="text-sm text-brand-pencil font-semibold mt-0.5">
        {mockChild.grade} &middot; Age {mockChild.age}
      </p>

      {/* Stats row */}
      <div className="flex gap-6 mt-6 mb-8">
        <div className="text-center">
          <div className="font-mono font-bold text-lg text-brand-indigo">
            {mockChild.xp} XP
          </div>
          <div className="text-xs text-brand-pencil font-semibold mt-0.5">
            Total XP
          </div>
        </div>
        <div className="text-center">
          <div className="font-mono font-bold text-lg text-brand-marigold">
            {mockChild.streak}
          </div>
          <div className="text-xs text-brand-pencil font-semibold mt-0.5">
            Day Streak
          </div>
        </div>
        <div className="text-center">
          <div className="font-mono font-bold text-lg text-brand-terracotta">
            3
          </div>
          <div className="text-xs text-brand-pencil font-semibold mt-0.5">
            Badges
          </div>
        </div>
      </div>

      {/* Recent achievements */}
      <div className="w-full mt-4">
        <div className="font-mono font-semibold text-[11px] uppercase tracking-[0.1em] text-brand-pencil mb-3">
          RECENT ACHIEVEMENTS
        </div>

        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-brand-cream rounded-chunky p-4 border border-brand-cream-dark flex items-center gap-3"
            >
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <div className="font-bold text-sm text-brand-ink">
                  {achievement.title}
                </div>
                <div className="text-xs text-brand-pencil mt-0.5">
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
