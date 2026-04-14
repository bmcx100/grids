'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '\u{1F4D0}',
    title: 'By grade level',
    description: 'K through 5th \u2014 content matches what they should know.',
  },
  {
    icon: '\u{1F3EB}',
    title: 'By school curriculum',
    description: "Enter what they're studying \u2014 questions match exactly.",
  },
  {
    icon: '\u{1F3AF}',
    title: 'By learning ability',
    description:
      'Adapts to where they are, not just where they should be.',
  },
]

export function Customization() {
  return (
    <section className="py-20 lg:py-28">
      <motion.h2
        className="font-heading font-extrabold text-[32px] lg:text-[42px] text-center mb-14 text-brand-ink"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Fits their world.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="w-14 h-14 rounded-full bg-brand-indigo flex items-center justify-center text-2xl mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="font-heading font-bold text-base text-brand-ink mb-2">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-brand-pencil leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
