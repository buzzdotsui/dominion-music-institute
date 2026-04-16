import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Parent of Student',
    role: "Christ's School Band Member",
    text: "My son couldn't play a single note before joining Mr. Dominion's class. Now he performs confidently at school and church events. The transformation has been incredible!",
    stars: 5,
  },
  {
    name: 'Church Music Director',
    role: "All Saints' Anglican Church",
    text: "Dominion brings a level of professionalism and passion that elevates every worship service. His ability to teach and direct simultaneously is remarkable.",
    stars: 5,
  },
  {
    name: 'Event Organizer',
    role: 'Ekiti State Events',
    text: "We've hired Dominion for multiple events and he never disappoints. His versatility across instruments and his stage presence make every occasion special.",
    stars: 5,
  },
  {
    name: 'Student, Age 16',
    role: 'Saxophone & Trumpet',
    text: "Learning with Mr. Dominion is fun and challenging at the same time. He makes you want to practice more and get better every day. Best music teacher!",
    stars: 5,
  },
]

const reasons = [
  {
    number: '01',
    title: 'Patient & Teen-Focused',
    desc: 'Specialized in teaching ages 10–18 with age-appropriate methods that keep students engaged.',
  },
  {
    number: '02',
    title: 'Multi-Instrument Expert',
    desc: 'Proficient across all woodwind and brass instruments — offering versatile, comprehensive training.',
  },
  {
    number: '03',
    title: 'Performance-Ready Training',
    desc: 'Students don\'t just learn notes — they learn to perform with confidence on any stage.',
  },
  {
    number: '04',
    title: 'Proven Track Record',
    desc: 'From school bands to church choirs to state-level events — results that speak for themselves.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="section testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Why Choose DMI</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Students & Clients</span>
          </h2>
          <div className="section-divider" style={{ margin: '16px auto 24px' }} />
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="testimonials__carousel"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <button className="testimonials__nav testimonials__nav--prev" onClick={prev} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>

          <div className="testimonials__card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonials__card glass-card"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <FaQuoteLeft className="testimonials__quote-icon" />
                <p className="testimonials__text">{testimonials[current].text}</p>
                <div className="testimonials__stars">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonials__name">{testimonials[current].name}</div>
                    <div className="testimonials__role">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="testimonials__nav testimonials__nav--next" onClick={next} aria-label="Next testimonial">
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Grid */}
        <div className="testimonials__reasons">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              className="testimonials__reason glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i + 0.5, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(212,168,67,0.3)' }}
            >
              <span className="testimonials__reason-num gradient-text">{reason.number}</span>
              <h4 className="testimonials__reason-title">{reason.title}</h4>
              <p className="testimonials__reason-desc">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
