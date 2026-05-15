import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { itemVariants, staggerContainer } from '../utils/motionVariants'

const roles = ['Data Scientist', 'AI Engineer', 'Software Developer']
const roleGradients = [
  'linear-gradient(135deg, #3b82f6, #60a5fa)',
  'linear-gradient(135deg, #a855f7, #d946ef)',
  'linear-gradient(135deg, #ec4899, #f43f5e)',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Mouse position — raw values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smoothed with spring for silky parallax
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  // Transform mouse → parallax offsets for orbs (normalized -1..1)
  const orb1X = useTransform(smoothX, [-1, 1], [-25, 25])
  const orb1Y = useTransform(smoothY, [-1, 1], [-15, 15])
  const orb2X = useTransform(smoothX, [-1, 1], [20, -20])
  const orb2Y = useTransform(smoothY, [-1, 1], [10, -10])
  const orb3X = useTransform(smoothX, [-1, 1], [15, -15])
  const orb3Y = useTransform(smoothY, [-1, 1], [-20, 20])

  // 3D tilt on the hero card
  const tiltX = useTransform(smoothY, [-1, 1], [6, -6])
  const tiltY = useTransform(smoothX, [-1, 1], [-6, 6])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Normalize to -1..1
      mouseX.set((e.clientX / innerWidth) * 2 - 1)
      mouseY.set((e.clientY / innerHeight) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-8"
    >
      {/* Parallax orbs overlays - positioned absolutely with fixed positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: orb3X, y: orb3Y }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Hero card with 3D tilt - centered content */}
      <motion.div
        style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
        className="text-center max-w-3xl relative z-20"
      >
        {/* Staggered entrance using variants */}
        <motion.div
          variants={staggerContainer(0.12, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-4 font-mono tracking-widest uppercase text-sm">
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-8xl font-black mb-4 text-white tracking-tight"
          >
            Keshav{' '}
            <span className="gradient-text">Dube</span>
          </motion.h1>

          {/* Role switcher — wrapped in AnimatePresence for exit animations */}
          <motion.div variants={itemVariants} className="h-12 sm:h-16 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl font-light"
                style={{
                  background: roleGradients[currentRole],
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-4 font-light">
            UConn Data Science Graduate
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl mx-auto">
            Building intelligent systems across predictive modeling, recommendation engines, retrieval-augmented generation, and agentic workflows—designed for production-scale data and real-world decision-making.
          </motion.p>

          <motion.p variants={itemVariants} className="text-base text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            5+ years of experience designing and deploying backend systems, LLM-powered applications, and distributed data infrastructure across enterprise and research environments.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 animated-border text-white rounded-lg font-semibold"
              data-cursor-hover
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all"
              data-cursor-hover
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="flex justify-center mt-16"
        >
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
