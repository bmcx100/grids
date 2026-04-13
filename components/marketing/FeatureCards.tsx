'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    icon: '\u{1F4D6}',
    iconBg: 'bg-brand-indigo',
    title: 'Story Worlds',
    description:
      'Kids explore narrative adventures where every choice teaches reading, logic, and critical thinking.',
  },
  {
    icon: '\u{1F9E9}',
    iconBg: 'bg-brand-terracotta',
    title: 'Craft Lab',
    description:
      'Hands-on building challenges for math, patterns, and spatial reasoning \u2014 creation over consumption.',
  },
  {
    icon: '\u{1F4CA}',
    iconBg: 'bg-brand-indigo',
    title: 'Parent Dashboard',
    description:
      "See what they're learning, how long they play, and where they're growing \u2014 real data, not vanity metrics.",
  },
]

export function FeatureCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="bg-brand-cream rounded-card p-6 border border-brand-cream-dark shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div
              className={`w-10 h-10 rounded-badge flex items-center justify-center text-white text-lg mb-3 ${card.iconBg}`}
            >
              {card.icon}
            </div>
            <h3 className="font-heading font-bold text-base text-brand-ink mb-1">
              {card.title}
            </h3>
            <p className="font-body text-sm text-brand-pencil leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
