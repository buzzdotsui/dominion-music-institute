import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categoryColors = {
  Brass: '#d4a843',
  Woodwind: '#4a6cf7',
  Percussion: '#e05a6d',
  Strings: '#25d366',
}

const instruments = [
  { name: 'Trumpet', emoji: '🎺', category: 'Brass', desc: 'The brilliant voice of the brass family. Perfect for beginners.' },
  { name: 'Trombone', emoji: '🎵', category: 'Brass', desc: 'Master the slide for smooth, powerful tones.' },
  { name: 'Saxophone', emoji: '🎷', category: 'Woodwind', desc: 'Versatile and expressive — from jazz to classical.' },
  { name: 'Clarinet', emoji: '🎵', category: 'Woodwind', desc: 'Sweet, clear tones with incredible range and agility.' },
  { name: 'Flute', emoji: '🎶', category: 'Woodwind', desc: 'Elegant and bright — the songbird of woodwinds.' },
  { name: 'Keyboard', emoji: '🎹', category: 'Percussion', desc: 'The foundation of music theory and harmony. Learn keys, chords, and melodies.' },
  { name: 'Drums', emoji: '🥁', category: 'Percussion', desc: 'Drive the rhythm and energy of any band or ensemble.' },
  { name: 'Guitar', emoji: '🎸', category: 'Strings', desc: 'From acoustic strumming to electrifying solos — a timeless instrument.' },
]

export default function Instruments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="instruments" className="section instruments" ref={ref}>
      <div className="container">
        <motion.div
          className="instruments__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What You'll Learn</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Instrument</span>
          </h2>
          <div className="section-divider" style={{ margin: '16px auto 24px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From brass powerhouses to woodwind elegance, percussion grooves to guitar riffs — pick your sound and begin your musical journey.
          </p>
        </motion.div>

        {/* Category Labels */}
        <div className="instruments__categories">
          {Object.entries(categoryColors).map(([cat, color], i) => (
            <motion.div
              key={cat}
              className="instruments__cat-label"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
            >
              <span className="instruments__cat-dot" style={{ background: color }} />
              {cat}
            </motion.div>
          ))}
        </div>

        <div className="instruments__grid">
          {instruments.map((inst, i) => {
            const accentColor = categoryColors[inst.category] || '#d4a843'
            return (
              <motion.div
                key={inst.name}
                className="instruments__card glass-card"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.08 * i + 0.3, duration: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  boxShadow: `0 20px 50px ${accentColor}33`
                }}
              >
                <div className="instruments__card-emoji">{inst.emoji}</div>
                <div className="instruments__card-category" style={{ color: accentColor }}>
                  {inst.category}
                </div>
                <h3 className="instruments__card-name">{inst.name}</h3>
                <p className="instruments__card-desc">{inst.desc}</p>
                <motion.div
                  className="instruments__card-line"
                  style={{
                    background: `linear-gradient(90deg, ${accentColor}, transparent)`
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '40px' } : {}}
                  transition={{ delay: 0.1 * i + 0.5, duration: 0.4 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
