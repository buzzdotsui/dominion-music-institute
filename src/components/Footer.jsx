import React from 'react'
import { motion } from 'framer-motion'
import { FaMusic, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Instruments', href: '#instruments' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    'Group Classes',
    'Private Lessons',
    'Event Performance',
    'Music Direction',
    'Band Training',
  ]

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* Wave Decoration */}
      <div className="footer__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,40 1440,50 L1440,100 L0,100 Z"
            fill="rgba(212,168,67,0.05)"
          />
          <path
            d="M0,60 C300,20 600,80 900,40 C1100,10 1300,70 1440,30 L1440,100 L0,100 Z"
            fill="rgba(212,168,67,0.03)"
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <FaMusic className="footer__logo-icon" />
              <span className="gradient-text footer__logo-text">Dominion Music Institute</span>
            </div>
            <p className="footer__brand-desc">
              Nurturing the next generation of brass and woodwind musicians. 
              Professional music instruction for ages 8+ in Ado-Ekiti, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            {quickLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="footer__link"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            {services.map(s => (
              <span key={s} className="footer__link">{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <a href="tel:08105318306" className="footer__contact-item">
              <FaPhone /> 0810 531 8306
            </a>
            <a href="https://wa.me/2348105318306" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="mailto:owolabidominion7724@gmail.com" className="footer__contact-item">
              <FaEnvelope /> Email Us
            </a>
            <span className="footer__contact-item">
              <FaMapMarkerAlt /> Ado-Ekiti, Ekiti State
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>
            © {currentYear} Dominion Music Institute. All rights reserved.
          </p>
          <p className="footer__built-by">
            Built by{' '}
            <a href="https://testimonyowolabi.pages.dev" target="_blank" rel="noopener noreferrer" className="footer__testytech-link">
              TESTYTECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
