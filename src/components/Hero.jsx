import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaPhone } from 'react-icons/fa'
import Scene3D from './Scene3D'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Now Enrolling — Private Classes Available
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Master the Art of{' '}
          <span className="gradient-text">Brass &amp; Woodwind</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Welcome to <strong>Dominion Music Institute</strong> — where young musicians 
          ages 8+ discover their sound. Led by Dominion Owolabi with 6+ years of 
          professional experience in music instruction and direction.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(212,168,67,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            <FaGraduationCap /> Enroll Now
          </motion.a>
          <motion.a
            href="tel:08105318306"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone /> Hire Me
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number gradient-text">6+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number gradient-text">10+</span>
            <span className="hero__stat-label">Instruments</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number gradient-text">50+</span>
            <span className="hero__stat-label">Students Trained</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
