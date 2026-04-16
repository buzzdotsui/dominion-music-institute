import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Instruments', href: '#instruments' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo" onClick={() => handleClick('#hero')}>
          <FaMusic className="navbar__logo-icon" />
          <span className="navbar__logo-text">
            <span className="gradient-text">DMI</span>
          </span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              whileHover={{ color: '#d4a843' }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.a>
        </div>

        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
              style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
