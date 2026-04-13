export function TrustBar() {
  const items = [
    { icon: '\u{1F6AB}', label: 'Zero ads, ever' },
    { icon: '\u{1F512}', label: 'COPPA compliant' },
    { icon: '\u{1F4CA}', label: 'Parent dashboard' },
    { icon: '\u{1F989}', label: 'Guided by Owlbert' },
  ]

  return (
    <div className="py-6 flex flex-wrap justify-center gap-x-10 gap-y-3 border-t border-b border-brand-parchment-dark">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 font-heading font-semibold text-[13px] text-brand-pencil"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
