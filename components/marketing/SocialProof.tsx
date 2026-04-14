'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'My son asks to play Joviko. He has no idea he\u2019s doing math homework.',
    name: 'Sarah M.',
    detail: 'parent of a 2nd grader',
  },
  {
    quote:
      'I can finally see what my daughter is actually learning on her tablet.',
    name: 'David K.',
    detail: 'parent of a 1st grader',
  },
  {
    quote:
      'No more ads, no more \u201Ccan I buy this?\u201D \u2014 just learning.',
    name: 'Jessica L.',
    detail: 'parent of a 3rd grader',
  },
]

const stats = [
  { value: '2M+', label: 'questions answered' },
  { value: '4.8\u2605', label: 'parent rating' },
  { value: 'Zero', label: 'ads served' },
]

export function SocialProof() {
  return (
    <section className="bg-brand-ink py-20 lg:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Banner */}
        <motion.p
          className="font-heading font-extrabold text-[28px] lg:text-[36px] text-center text-brand-parchment mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Join{' '}
          <span className="text-brand-terracotta">12,000+</span>{' '}
          families who made the switch.
        </motion.p>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-brand-cream rounded-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <p className="font-body text-sm text-brand-ink leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-heading font-bold text-sm text-brand-ink">
                {t.name}
              </p>
              <p className="font-body text-xs text-brand-pencil">
                {t.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-12 gap-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index < stats.length - 1
                  ? 'border-r border-brand-parchment/20 pr-12'
                  : ''
              }`}
            >
              <p className="font-mono font-bold text-[28px] text-brand-parchment">
                {stat.value}
              </p>
              <p className="font-body text-sm text-brand-parchment/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
