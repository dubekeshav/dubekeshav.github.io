import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        {/* Animated greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            ✨ Welcome to my portfolio
          </motion.span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">
            Data Scientist,
            <br />
            AI Engineer &
            <br />
            Software Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          I transform complex data into actionable insights and build intelligent systems that solve real-world problems. Masters in Data Science | 5+ Years of Experience
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Mail, href: '#', label: 'Email' },
          ].map(({ Icon, href, label }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 rounded-full glass hover:bg-blue-500/20 transition-all"
              title={label}
            >
              <Icon className="w-6 h-6 text-blue-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
