import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Creative Calligraphic Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer group"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all"
            >
              {/* Decorative circle background */}
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="url(#grad)"
                strokeWidth="1.5"
                opacity="0.5"
                className="group-hover:opacity-100 transition-opacity"
              />

              {/* Stylized K */}
              <path
                d="M 12 10 L 12 30 M 28 10 L 12 20 L 28 30"
                stroke="url(#grad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Decorative elements */}
              <circle
                cx="10"
                cy="10"
                r="2"
                fill="url(#grad)"
                opacity="0.6"
                className="group-hover:opacity-100 transition-opacity"
              />
              <circle
                cx="30"
                cy="30"
                r="2"
                fill="url(#grad)"
                opacity="0.6"
                className="group-hover:opacity-100 transition-opacity"
              />

              <defs>
                <linearGradient
                  id="grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-800 pb-4"
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded transition-all text-sm ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
