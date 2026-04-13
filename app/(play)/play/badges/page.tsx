export default function BadgesPage() {
  const earnedBadges = [
    { icon: '\u{1F3C6}', label: 'First Quest' },
    { icon: '\u2B50', label: 'Perfect Score' },
    { icon: '\u{1F525}', label: '7-Day Streak' },
  ]

  const lockedBadges = Array.from({ length: 3 })

  return (
    <div className="px-5 pt-5 pb-24">
      <h1 className="font-heading font-extrabold text-xl text-brand-ink mb-4">
        My Badges
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {earnedBadges.map((badge) => (
          <div
            key={badge.label}
            className="w-full aspect-square rounded-2xl bg-brand-cream border-2 border-brand-cream-dark flex flex-col items-center justify-center gap-2"
          >
            <span className="text-3xl">{badge.icon}</span>
            <span className="font-bold text-xs text-brand-ink">{badge.label}</span>
          </div>
        ))}

        {lockedBadges.map((_, i) => (
          <div
            key={`locked-${i}`}
            className="w-full aspect-square rounded-2xl bg-brand-cream-dark/50 border-2 border-dashed border-brand-cream-dark flex flex-col items-center justify-center gap-2"
          >
            <span className="text-3xl">{'\u{1F512}'}</span>
            <span className="font-bold text-xs text-brand-pencil">???</span>
          </div>
        ))}
      </div>
    </div>
  )
}
