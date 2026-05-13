import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '-10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '-10%', right: '-10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          style={{ top: '50%', right: '10%' }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>
            © 2025 Keshav Dubey. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="mt-2">
            Crafted with <span className="text-red-500">❤️</span> and a passion for innovation
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
