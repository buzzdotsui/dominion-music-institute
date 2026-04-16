import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAward, FaChurch, FaSchool, FaUsers, FaCertificate, FaCalendarAlt } from 'react-icons/fa'

const credentials = [
  {
    icon: <FaCalendarAlt />,
    title: '6+ Years Experience',
    description: 'Over half a decade of professional music instruction and direction.'
  },
  {
    icon: <FaUsers />,
    title: "The Boys' Brigade Nigeria",
    description: 'Ekiti State Council — Music instruction and band direction.'
  },
  {
    icon: <FaSchool />,
    title: "Christ's School, Ado Ekiti",
    description: 'Former Music Instructor — trained generations of young musicians.'
  },
  {
    icon: <FaChurch />,
    title: "All Saints' Anglican Church",
    description: 'Current Music Instructor — leading worship through instrumental excellence.'
  },
  {
    icon: <FaAward />,
    title: 'Events & Churches',
    description: 'Extensive experience performing and directing at events, churches, and ceremonies across Nigeria.'
  },
  {
    icon: <FaCertificate />,
    title: 'Private Classes',
    description: 'Now offering personalized one-on-one lessons for focused, accelerated learning.'
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Left - Bio */}
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Meet <span className="gradient-text">Dominion Owolabi</span>
            </h2>
            <div className="section-divider" />
            <p className="about__text">
              I am a passionate music instructor and director specializing in woodwind and brass 
              instruments. With over 6 years of hands-on experience, I've dedicated my career to 
              nurturing young talent and helping kids and teens ages 8+ discover the power of music.
            </p>
            <p className="about__text">
              From school bands to church choirs, from private lessons to grand events — I bring 
              energy, discipline, and genuine love for music to every session. My mission is to 
              raise a generation of confident, skilled musicians who can perform on any stage.
            </p>
            <p className="about__text" style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
              "Music is not just what I do — it's who I am. Every student I teach carries a piece 
              of that passion forward."
            </p>
          </motion.div>

          {/* Right - Credentials */}
          <div className="about__credentials">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                className="about__card glass-card"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.15 * i + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="about__card-icon">{cred.icon}</div>
                <div>
                  <h4 className="about__card-title">{cred.title}</h4>
                  <p className="about__card-desc">{cred.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
