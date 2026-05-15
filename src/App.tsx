import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Subtle animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '-10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '-10%', right: '-10%' }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Skills />
        <Profiles />
        <div id="contact">
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 <span className="gradient-text font-semibold">Keshav Dube</span>. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
