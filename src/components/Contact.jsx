import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', instrument: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Inquiry from ${formData.name} — Dominion Music Institute`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInstrument of Interest: ${formData.instrument}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:owolabidominion7724@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="contact__bg-glow" />
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Ready to Start Your <span className="gradient-text">Musical Journey?</span>
          </h2>
          <div className="section-divider" style={{ margin: '16px auto 24px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you want to enroll in classes or hire me for your event — let's connect!
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-text">
              Reach out directly — I respond within 24 hours. Let's discuss how I can help 
              you or your child become the musician they're meant to be.
            </p>

            <div className="contact__info-items">
              <motion.a
                href="tel:08105318306"
                className="contact__info-item glass-card"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="contact__info-icon" style={{ background: 'rgba(212,168,67,0.15)', color: '#d4a843' }}>
                  <FaPhone />
                </div>
                <div>
                  <span className="contact__info-label">Phone</span>
                  <span className="contact__info-value">0810 531 8306</span>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/2348105318306"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item glass-card"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="contact__info-icon" style={{ background: 'rgba(37,211,102,0.15)', color: '#25d366' }}>
                  <FaWhatsapp />
                </div>
                <div>
                  <span className="contact__info-label">WhatsApp</span>
                  <span className="contact__info-value">Chat on WhatsApp</span>
                </div>
              </motion.a>

              <motion.a
                href="mailto:owolabidominion7724@gmail.com"
                className="contact__info-item glass-card"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="contact__info-icon" style={{ background: 'rgba(74,108,247,0.15)', color: '#4a6cf7' }}>
                  <FaEnvelope />
                </div>
                <div>
                  <span className="contact__info-label">Email</span>
                  <span className="contact__info-value">owolabidominion7724@gmail.com</span>
                </div>
              </motion.a>

              <motion.div
                className="contact__info-item glass-card"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="contact__info-icon" style={{ background: 'rgba(123,94,167,0.15)', color: '#7b5ea7' }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="contact__info-label">Location</span>
                  <span className="contact__info-value">Ado-Ekiti, Ekiti State, Nigeria</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3 className="contact__form-title">Send a Message</h3>
            
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-instrument">Instrument of Interest</label>
                <select
                  id="contact-instrument"
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleChange}
                >
                  <option value="">Select an instrument</option>
                  <option value="Trumpet">Trumpet</option>
                  <option value="Trombone">Trombone</option>
                  <option value="French Horn">French Horn</option>
                  <option value="Tuba">Tuba</option>
                  <option value="Saxophone">Saxophone</option>
                  <option value="Clarinet">Clarinet</option>
                  <option value="Flute">Flute</option>
                  <option value="Oboe">Oboe</option>
                  <option value="Multiple">Multiple Instruments</option>
                  <option value="Hiring">Hiring for Event</option>
                </select>
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell me about your musical goals or event details..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary contact__form-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {sent ? '✓ Opening Email Client...' : <><FaPaperPlane /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
