'use client'

import { motion } from 'framer-motion'
import { mockGames } from '@/lib/mockData'

export function GameShowcase() {
  return (
    <section id="games" className="py-10 lg:py-14">
      <motion.h2
        className="font-heading font-extrabold text-[32px] lg:text-[42px] text-center mb-14 text-brand-ink"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Games they&rsquo;ll actually want to play.
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockGames.map((game, index) => {
          const isLocked = game.locked
          const CardWrapper = isLocked ? 'div' : 'a'
          const cardProps = isLocked
            ? {}
            : { href: game.href }

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <CardWrapper
                {...cardProps}
                className={`block bg-brand-cream rounded-card p-5 border border-brand-cream-dark shadow-card transition-shadow ${
                  isLocked
                    ? 'opacity-50 cursor-default'
                    : 'hover:shadow-elevated'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto ${
                    isLocked
                      ? 'bg-brand-cream-dark'
                      : 'bg-brand-indigo'
                  }`}
                >
                  <span className={isLocked ? 'grayscale' : ''}>
                    {game.icon}
                  </span>
                </div>

                <h3
                  className={`font-heading font-bold text-sm text-center mb-1 ${
                    isLocked ? 'text-brand-pencil' : 'text-brand-ink'
                  }`}
                >
                  {game.name}
                </h3>

                {isLocked ? (
                  <p className="font-mono text-[11px] text-brand-pencil text-center">
                    Coming soon
                  </p>
                ) : (
                  <p className="font-body text-xs text-brand-pencil text-center leading-relaxed">
                    {game.desc}
                  </p>
                )}
              </CardWrapper>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
