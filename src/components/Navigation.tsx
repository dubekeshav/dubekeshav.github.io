import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

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
      setScrolled(window.scrollY > 50)
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
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Creative Calligraphic Logo */}
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              data-cursor-hover
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="url(#grad)"
                  strokeWidth="1.5"
                  opacity="0.5"
                  className="group-hover:opacity-100 transition-opacity"
                />
                <path
                  d="M 12 10 L 12 30 M 28 10 L 12 20 L 28 30"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
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

            {/* Desktop Menu with animated active indicator */}
            <div className="hidden md:flex space-x-1 relative">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded text-sm font-medium relative text-slate-400 hover:text-white transition-colors"
                    whileHover={{ y: -1 }}
                    data-cursor-hover
                  >
                    {/* The sliding background pill — layoutId animates between items */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-blue-500/15 rounded"
                        style={{ borderRadius: 6 }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? 'text-blue-400' : ''}`}>
                      {item.name}
                    </span>
                  </motion.a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              data-cursor-hover
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden border-t border-slate-800 pb-4 overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-4 rounded transition-all text-sm ${
                        isActive
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      data-cursor-hover
                    >
                      {item.name}
                    </motion.a>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation
