export function TrustBar() {
  const items = [
    { icon: '$', label: 'Free to start' },
    { icon: '✦', label: 'Curriculum aligned' },
    { icon: '⛨', label: 'COPPA compliant' },
    { icon: '✕', label: 'No ads, ever' },
    { icon: '▶', label: 'No app store redirects' },
    { icon: '⊘', label: 'No in-app purchases' },
  ]

  return (
    <div className="py-6 flex flex-wrap justify-center gap-x-10 gap-y-3 bg-brand-ink">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 font-heading font-semibold text-[13px] text-brand-parchment"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
