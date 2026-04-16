import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaUserGraduate, FaMicrophone, FaMusic } from 'react-icons/fa'

const services = [
  {
    icon: <FaUsers />,
    title: 'Group Classes',
    subtitle: 'Ages 8+',
    description: 'Learn in a dynamic group setting with peers your age. Master brass and woodwind fundamentals through ensemble playing, music theory, and performance practice.',
    features: ['Woodwind & Brass Training', 'Music Theory', 'Ensemble Playing', 'Performance Prep'],
    color: '#d4a843',
  },
  {
    icon: <FaUserGraduate />,
    title: 'Private Classes',
    subtitle: 'Now Available!',
    description: 'One-on-one personalized lessons tailored to your pace and goals. Get focused attention, custom curriculum, and accelerated progress.',
    features: ['Personalized Curriculum', 'Flexible Scheduling', 'Accelerated Learning', 'All Skill Levels'],
    color: '#4a6cf7',
    featured: true,
  },
  {
    icon: <FaMicrophone />,
    title: 'Event Performance',
    subtitle: 'Hire for Events',
    description: 'Looking for a professional musician for your event? Dominion is available to perform at weddings, church services, ceremonies, and special occasions.',
    features: ['Weddings & Ceremonies', 'Church Services', 'School Events', 'Corporate Functions'],
    color: '#7b5ea7',
  },
  {
    icon: <FaMusic />,
    title: 'Music Direction',
    subtitle: 'Available for Hire',
    description: 'Need a music director for your band, choir, or ensemble? With years of experience directing music across schools and churches, Dominion delivers excellence.',
    features: ['Band Direction', 'Choir Support', 'Concert Planning', 'Music Arrangement'],
    color: '#e05a6d',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section services" ref={ref}>
      {/* Background decoration */}
      <div className="services__bg-glow" />
      
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">
            Services <span className="gradient-text">& Programs</span>
          </h2>
          <div className="section-divider" style={{ margin: '16px auto 24px' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you're a beginner picking up your first instrument or an experienced player 
            looking to refine your skills — there's a program for you.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`services__card glass-card ${service.featured ? 'services__card--featured' : ''}`}
              initial={{ opacity: 0, y: 50, rotateX: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.15 * i + 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                boxShadow: `0 20px 60px ${service.color}20`,
              }}
              style={{ '--card-accent': service.color }}
            >
              {service.featured && (
                <div className="services__card-badge">Most Popular</div>
              )}
              <div className="services__card-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <span className="services__card-subtitle" style={{ color: service.color }}>
                {service.subtitle}
              </span>
              <p className="services__card-desc">{service.description}</p>
              <ul className="services__card-features">
                {service.features.map(f => (
                  <li key={f}>
                    <span className="services__card-check" style={{ color: service.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className="btn btn-outline services__card-btn"
                style={{ borderColor: service.color, color: service.color }}
                whileHover={{ 
                  backgroundColor: `${service.color}15`,
                  scale: 1.02 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
