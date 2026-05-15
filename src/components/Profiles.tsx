import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, BookOpen, Zap } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Profiles = () => {
  const profiles = [

    {
      name: 'GitHub',
      url: 'https://github.com/dubekeshav',
      icon: Github,
      color: 'text-slate-300 hover:text-white hover:bg-slate-700',
      description: 'Open-source contributions & project repositories',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dubekeshav',
      icon: Linkedin,
      color: 'text-blue-400 hover:text-blue-300 hover:bg-blue-950',
      description: 'Professional experience & endorsements',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/dubeykeshav98/',
      icon: Code2,
      color: 'text-orange-400 hover:text-orange-300 hover:bg-orange-950',
      description: '250+ problems solved',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/dubeykeshav98',
      icon: Zap,
      color: 'text-green-400 hover:text-green-300 hover:bg-green-950',
      description: 'Problem-solving skills & certifications',
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/keshav98',
      icon: BookOpen,
      color: 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950',
      description: 'Data science competitions & datasets',
    },
    {
      name: 'Email',
      url: 'mailto:dubeykeshav98@gmail.com',
      icon: Mail,
      color: 'text-red-400 hover:text-red-300 hover:bg-red-950',
      description: 'Get in touch directly',
    },
  ]

  return (
    <section id="profiles" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Find Me Online</h2>
        <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
          Explore my work across different platforms. From competitive programming to open-source contributions and data science projects.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon
            return (
              <motion.a
                key={index}
                variants={cardVariants}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`p-6 rounded-xl glass glass-hover border border-slate-700 transition-all group`}
                title={profile.name}
                data-cursor-hover
              >
                <IconComponent className={`w-8 h-8 mb-3 mx-auto transition-all ${profile.color}`} />
                <p className="font-semibold text-white mb-1 group-hover:text-inherit text-sm">{profile.name}</p>
                <p className="text-xs text-slate-400 group-hover:text-slate-300">{profile.description}</p>
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Profiles
