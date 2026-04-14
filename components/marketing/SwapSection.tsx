'use client'

import { motion } from 'framer-motion'

export function SwapSection() {
  return (
    <section className="py-20 lg:py-28">
      <motion.h2
        className="font-heading font-extrabold text-[32px] lg:text-[42px] text-center mb-12 text-brand-ink"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Swap ads for answers.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {/* Left: Garish ad mockup */}
        <motion.div
          className="rounded-card overflow-hidden border-2 border-dashed border-red-300 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="p-5 flex flex-col gap-3"
            style={{
              background:
                'linear-gradient(135deg, #ff6b00 0%, #ff00ff 40%, #00ff88 70%, #ffff00 100%)',
            }}
          >
            <div className="bg-white/90 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 italic">
                Your kid&rsquo;s &ldquo;free&rdquo; game
              </p>
            </div>

            {/* Fake flashy banner */}
            <div
              className="rounded-lg p-3 text-center animate-pulse"
              style={{
                background:
                  'linear-gradient(90deg, #ff0000, #ff6600, #ff0000)',
                border: '3px dashed #ffff00',
              }}
            >
              <p
                className="font-bold text-sm"
                style={{
                  color: '#ffff00',
                  textShadow: '2px 2px 0 #000',
                  letterSpacing: '0.1em',
                }}
              >
                YOU WON A FREE iPHONE!!!
              </p>
            </div>

            {/* Fake download button */}
            <div
              className="rounded-lg p-4 text-center"
              style={{
                background:
                  'linear-gradient(180deg, #44ff00 0%, #00cc00 100%)',
                border: '3px solid #006600',
                boxShadow: '0 4px 0 #004400',
              }}
            >
              <p
                className="font-extrabold text-lg"
                style={{
                  color: '#ffffff',
                  textShadow: '2px 2px 0 #006600',
                }}
              >
                DOWNLOAD NOW!!!
              </p>
              <p
                className="text-[10px] mt-1"
                style={{ color: '#ffffffaa' }}
              >
                *Totally not a virus
              </p>
            </div>

            {/* Fake "close" button that's hard to find */}
            <div
              className="rounded-lg p-2 flex items-center justify-between"
              style={{ background: '#333' }}
            >
              <p className="text-[11px] text-gray-400">
                Ad &middot; Closes in 29s
              </p>
              <span
                className="text-[8px] text-gray-600"
                style={{ opacity: 0.3 }}
              >
                x
              </span>
            </div>

            {/* Fake pop-up overlay */}
            <div
              className="rounded-lg p-3 text-center"
              style={{
                background: 'rgba(0,0,0,0.85)',
                border: '2px solid #ff00ff',
              }}
            >
              <p className="text-white text-xs font-bold">
                Watch a 30-second ad to continue playing?
              </p>
              <div className="flex gap-2 justify-center mt-2">
                <span
                  className="px-4 py-1 rounded text-xs font-bold text-white"
                  style={{ background: '#ff00ff' }}
                >
                  Watch Ad
                </span>
                <span
                  className="px-4 py-1 rounded text-xs text-gray-500"
                  style={{ background: '#333' }}
                >
                  Pay $4.99
                </span>
              </div>
            </div>
          </div>
          <p className="text-center text-brand-pencil text-xs py-2 bg-white font-body">
            Their &ldquo;free&rdquo; game, today
          </p>
        </motion.div>

        {/* Right: Clean Joviko question */}
        <motion.div
          className="rounded-card overflow-hidden border border-brand-cream-dark shadow-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-brand-cream p-6 flex flex-col gap-4">
            {/* Header bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-badge bg-brand-indigo flex items-center justify-center text-white text-sm">
                  J
                </span>
                <span className="font-heading font-bold text-sm text-brand-ink">
                  Joviko
                </span>
              </div>
              <span className="font-mono text-xs text-brand-pencil">
                Level 3
              </span>
            </div>

            {/* Question */}
            <div className="bg-white rounded-chunky p-5 border border-brand-cream-dark">
              <p className="font-heading font-bold text-lg text-brand-ink mb-1">
                What is 7 + 5?
              </p>
              <p className="font-body text-xs text-brand-pencil">
                Addition &middot; Grade 1
              </p>
            </div>

            {/* Multiple-choice options */}
            <div className="space-y-2">
              {[
                { label: 'A', value: '10' },
                { label: 'B', value: '12', correct: true },
                { label: 'C', value: '11' },
              ].map((opt) => (
                <div
                  key={opt.label}
                  className={`flex items-center gap-3 rounded-chunky p-3 border transition-colors ${
                    opt.correct
                      ? 'bg-brand-indigo/10 border-brand-indigo'
                      : 'bg-white border-brand-cream-dark'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      opt.correct
                        ? 'bg-brand-indigo text-white'
                        : 'bg-brand-cream text-brand-ink'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className="font-heading font-semibold text-sm text-brand-ink">
                    {opt.value}
                  </span>
                  {opt.correct && (
                    <span className="ml-auto text-brand-success text-sm font-bold">
                      &#10003;
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 rounded-full bg-brand-cream-dark overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand-indigo"
                  style={{ width: '60%' }}
                />
              </div>
              <span className="font-mono text-xs text-brand-pencil">
                6/10
              </span>
            </div>
          </div>
          <p className="text-center text-brand-pencil text-xs py-2 bg-brand-parchment font-body">
            Their game on Joviko
          </p>
        </motion.div>
      </div>
    </section>
  )
}
