import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'Tech Company',
      period: '2023 - Present',
      description:
        'Leading ML initiatives and building scalable data pipelines. Mentoring junior team members.',
      type: 'work',
    },
    {
      title: 'Data Scientist',
      company: 'Innovation Labs',
      period: '2020 - 2023',
      description:
        'Developed predictive models and conducted statistical analysis. Improved model accuracy by 35%.',
      type: 'work',
    },
    {
      title: 'AI Engineer',
      company: 'Tech Startup',
      period: '2019 - 2020',
      description:
        'Built NLP pipelines and implemented deep learning solutions for production systems.',
      type: 'work',
    },
    {
      title: 'Masters in Data Science',
      company: 'Prestigious University',
      period: 'Completed Dec 2025',
      description:
        'Specialized in Machine Learning and Statistical Analysis. GPA: 3.8/4.0',
      type: 'education',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-12" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group"
          >
            <div className="flex gap-6">
              {/* Timeline icon */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full glass mb-4 cursor-pointer"
                >
                  {exp.type === 'work' ? (
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  )}
                </motion.div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-600" />
                )}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex-1 pb-8 cursor-pointer"
              >
                <div className="glass rounded-lg p-6 hover:bg-blue-500/10 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-sm text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-blue-400 font-semibold mb-3">{exp.company}</p>
                  <p className="text-slate-300">{exp.description}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience
